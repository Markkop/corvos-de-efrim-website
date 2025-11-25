import { MelomonSkill, MelomonUpgrade } from './melomonData'

export interface UpgradeSuggestion {
  skillId: string
  skillName: string
  currentLevel: number
  nextLevel: number
  shinyCost: number
  shardCost: number
  attackGain: number
  totalAttack: number
}

export interface OptimizationResult {
  bestCombo: {
    skills: Array<{ skillId: string; skillName: string; level: number; attack: number }>
    totalAttack: number
  }
  suggestions: UpgradeSuggestion[]
}

// Get effective attack value for a skill at a given level
// Uses minMultiplier for optimization calculations (conservative estimate)
const getEffectiveAttackValue = (
  skill: MelomonSkill,
  level: number,
): number => {
  const baseValue = skill.upgradePattern[level - 1]?.value || 0
  if (skill.minMultiplier) {
    return baseValue * skill.minMultiplier
  }
  return baseValue
}

// Calculate current level based on shard count
// Always starts at level 1 if no shards are available
const calculateCurrentLevel = (
  skill: MelomonSkill,
  shardCount: number,
): number => {
  // Always start at level 1 if no shards
  if (shardCount === 0) {
    return 1
  }

  let level = 1
  let totalShardsUsed = 0

  // Start from level 2 (index 1) and check each upgrade
  for (let i = 1; i < skill.upgradePattern.length; i++) {
    const upgrade = skill.upgradePattern[i]
    if (totalShardsUsed + upgrade.shardCost <= shardCount) {
      totalShardsUsed += upgrade.shardCost
      level = upgrade.level
    } else {
      break
    }
  }

  return level
}

// Calculate cumulative costs to reach a specific level
const calculateCostsToLevel = (
  skill: MelomonSkill,
  targetLevel: number,
): { totalShiny: number; totalShards: number } => {
  let totalShiny = 0
  let totalShards = 0

  for (let i = 1; i < targetLevel && i < skill.upgradePattern.length; i++) {
    const upgrade = skill.upgradePattern[i]
    totalShiny += upgrade.shinyCost
    totalShards += upgrade.shardCost
  }

  return { totalShiny, totalShards }
}

// Get all possible 3-skill combinations
const getSkillCombinations = (skills: MelomonSkill[]): MelomonSkill[][] => {
  const combinations: MelomonSkill[][] = []

  for (let i = 0; i < skills.length; i++) {
    for (let j = i + 1; j < skills.length; j++) {
      for (let k = j + 1; k < skills.length; k++) {
        combinations.push([skills[i], skills[j], skills[k]])
      }
    }
  }

  return combinations
}

// Calculate optimal distribution for a combination of 3 skills
// Optimally distributes shared orange shiny crystals across the 3 skills
// while respecting shard constraints for each skill
const calculateComboOptimalDistribution = (
  combo: MelomonSkill[],
  orangeShiny: number,
  shardCounts: Record<string, number>,
  maxLevel: number = 15,
): {
  levels: number[]
  totalAttack: number
  totalShinyUsed: number
  totalShardsUsed: number
} => {
  // Start from level 1 for all skills (we'll optimize shiny distribution)
  // But respect shard constraints - can't go above level achievable with available shards
  const maxLevelsByShards = combo.map((skill) =>
    calculateCurrentLevel(skill, shardCounts[skill.id] || 0),
  )

  // Start optimizing from level 1, but cap by shard constraints
  const levels = combo.map(() => 1)
  const shardsUsedPerSkill = combo.map(() => 0) // Track shards used per skill
  let totalAttack = combo.reduce(
    (sum, skill, idx) => sum + getEffectiveAttackValue(skill, levels[idx]),
    0,
  )
  let totalShinyUsed = 0

  // Helper to check if we can upgrade a skill to a new level
  const canUpgrade = (skillIdx: number, newLevel: number): boolean => {
    if (newLevel > maxLevel) return false
    if (newLevel > maxLevelsByShards[skillIdx]) return false // Can't exceed shard constraint

    const skill = combo[skillIdx]
    const currentLevel = levels[skillIdx]

    if (currentLevel >= newLevel) return false

    // Calculate costs to go from currentLevel to newLevel
    let additionalShiny = 0
    let additionalShards = 0

    for (let l = currentLevel; l < newLevel; l++) {
      // upgradePattern[l] contains cost to go from level l+1 to level l+2
      const up = skill.upgradePattern[l]
      if (!up) break
      additionalShiny += up.shinyCost
      additionalShards += up.shardCost
    }

    const availableShards = shardCounts[skill.id] || 0
    const currentlyUsedShards = shardsUsedPerSkill[skillIdx]

    // Check if we have enough shared shiny crystals and enough shards for this skill
    return (
      totalShinyUsed + additionalShiny <= orangeShiny &&
      currentlyUsedShards + additionalShards <= availableShards
    )
  }

  // Greedy optimization: always upgrade the skill that gives best attack gain per shiny cost
  let improved = true
  while (improved) {
    improved = false
    let bestEfficiency = -1
    let bestSkillIdx = -1
    let bestNewLevel = -1

    for (let i = 0; i < combo.length; i++) {
      const newLevel = levels[i] + 1
      if (!canUpgrade(i, newLevel)) continue

      const skill = combo[i]
      const currentAttack = getEffectiveAttackValue(skill, levels[i])
      const newAttack = getEffectiveAttackValue(skill, newLevel)
      const attackGain = newAttack - currentAttack

      // Calculate the shiny cost for this upgrade
      const upgrade = skill.upgradePattern[levels[i]]
      if (!upgrade) continue
      const shinyCost = upgrade.shinyCost

      // Efficiency = attack gain per shiny crystal
      const efficiency = attackGain / shinyCost

      if (efficiency > bestEfficiency) {
        bestEfficiency = efficiency
        bestSkillIdx = i
        bestNewLevel = newLevel
      }
    }

    if (bestSkillIdx >= 0) {
      const skill = combo[bestSkillIdx]
      const currentLevel = levels[bestSkillIdx]
      const upgrade = skill.upgradePattern[currentLevel]

      if (!upgrade) {
        break
      }

      // Apply the upgrade
      totalShinyUsed += upgrade.shinyCost
      shardsUsedPerSkill[bestSkillIdx] += upgrade.shardCost
      levels[bestSkillIdx] = bestNewLevel
      totalAttack +=
        getEffectiveAttackValue(skill, bestNewLevel) -
        getEffectiveAttackValue(skill, currentLevel)
      improved = true
    }
  }

  const totalShardsUsed = shardsUsedPerSkill.reduce((sum, val) => sum + val, 0)
  return { levels, totalAttack, totalShinyUsed, totalShardsUsed }
}

// Calculate optimal distribution considering max 3 active skills
export const calculateOptimalDistribution = (
  skills: MelomonSkill[],
  orangeShiny: number,
  shardCounts: Record<string, number>,
): OptimizationResult => {
  if (skills.length < 3) {
    // If less than 3 skills, just optimize what we have
    const combo = skills.slice()
    while (combo.length < 3) {
      combo.push(skills[0] || skills[skills.length - 1])
    }
    const result = calculateComboOptimalDistribution(combo, orangeShiny, shardCounts)
    return {
      bestCombo: {
        skills: combo.map((skill, idx) => ({
          skillId: skill.id,
          skillName: skill.name,
          level: result.levels[idx],
          attack: getEffectiveAttackValue(skill, result.levels[idx]),
        })),
        totalAttack: result.totalAttack,
      },
      suggestions: [],
    }
  }

  const combinations = getSkillCombinations(skills)
  let bestCombo: MelomonSkill[] | null = null
  let bestResult: ReturnType<typeof calculateOptimalDistribution> | null = null
  let bestTotalAttack = -1

  for (const combo of combinations) {
    const result = calculateComboOptimalDistribution(combo, orangeShiny, shardCounts)
    if (result.totalAttack > bestTotalAttack) {
      bestTotalAttack = result.totalAttack
      bestCombo = combo
      bestResult = result
    }
  }

  if (!bestCombo || !bestResult) {
    return {
      bestCombo: { skills: [], totalAttack: 0 },
      suggestions: [],
    }
  }

  return {
    bestCombo: {
      skills: bestCombo.map((skill, idx) => ({
        skillId: skill.id,
        skillName: skill.name,
        level: bestResult!.levels[idx],
        attack: getEffectiveAttackValue(skill, bestResult!.levels[idx]),
      })),
      totalAttack: bestResult.totalAttack,
    },
    suggestions: [],
  }
}

// Calculate ideal upgrades assuming unlimited resources
export const calculateIdealUpgrades = (
  skills: MelomonSkill[],
): UpgradeSuggestion[] => {
  const suggestions: UpgradeSuggestion[] = []

  for (const skill of skills) {
    // For ideal scenario, suggest upgrading to max level
    const currentLevel = 1 // Start from level 1 for ideal
    const targetLevel = 15

    for (let level = currentLevel + 1; level <= targetLevel; level++) {
      const upgrade = skill.upgradePattern[level - 1]
      const prevUpgrade = skill.upgradePattern[level - 2]

      const currentAttack = getEffectiveAttackValue(skill, level - 1)
      const newAttack = getEffectiveAttackValue(skill, level)
      suggestions.push({
        skillId: skill.id,
        skillName: skill.name,
        currentLevel: level - 1,
        nextLevel: level,
        shinyCost: upgrade.shinyCost,
        shardCost: upgrade.shardCost,
        attackGain: newAttack - currentAttack,
        totalAttack: newAttack,
      })
    }
  }

  // Sort by total attack gain (highest first) for ideal scenario
  return suggestions.sort((a, b) => b.attackGain - a.attackGain)
}

// Calculate efficient upgrades prioritizing lowest orange shiny cost
export const calculateEfficientUpgrades = (
  skills: MelomonSkill[],
  orangeShiny: number,
  shardCounts: Record<string, number>,
): UpgradeSuggestion[] => {
  const suggestions: UpgradeSuggestion[] = []

  for (const skill of skills) {
    const currentLevel = calculateCurrentLevel(skill, shardCounts[skill.id] || 0)

    if (currentLevel >= 15) continue

    const nextLevel = currentLevel + 1
    const upgrade = skill.upgradePattern[nextLevel - 1]

    // Check if we have resources
    const availableShards = shardCounts[skill.id] || 0
    const usedShards = calculateCostsToLevel(skill, currentLevel).totalShards

    if (
      upgrade.shinyCost <= orangeShiny &&
      usedShards + upgrade.shardCost <= availableShards
    ) {
      const currentAttack = getEffectiveAttackValue(skill, currentLevel)
      const newAttack = getEffectiveAttackValue(skill, nextLevel)
      const attackGain = newAttack - currentAttack
      const totalAttack = newAttack

      suggestions.push({
        skillId: skill.id,
        skillName: skill.name,
        currentLevel,
        nextLevel,
        shinyCost: upgrade.shinyCost,
        shardCost: upgrade.shardCost,
        attackGain,
        totalAttack,
      })
    }
  }

  // Sort by shiny cost (lowest first), then by attack gain (highest first)
  return suggestions.sort((a, b) => {
    if (a.shinyCost !== b.shinyCost) {
      return a.shinyCost - b.shinyCost
    }
    return b.attackGain - a.attackGain
  })
}

// Calculate next level priorities based on optimal 3-skill combination
// Returns upgrade suggestions for all skills in the optimal combo, showing their next level cost and attack gain
export const calculateNextLevelPriorities = (
  optimalResult: OptimizationResult,
  allSkills: MelomonSkill[],
  shardCounts: Record<string, number>,
): UpgradeSuggestion[] => {
  const suggestions: UpgradeSuggestion[] = []

  // Show all skills from the optimal 3-skill combination
  for (const skillCombo of optimalResult.bestCombo.skills) {
    const skill = allSkills.find((s) => s.id === skillCombo.skillId)
    if (!skill) continue

    const currentLevel = skillCombo.level

    // If already at max level, still show it but mark as maxed
    if (currentLevel >= 15) {
      const currentAttack = getEffectiveAttackValue(skill, currentLevel)
      suggestions.push({
        skillId: skill.id,
        skillName: skill.name,
        currentLevel,
        nextLevel: 15,
        shinyCost: 0,
        shardCost: 0,
        attackGain: 0,
        totalAttack: currentAttack,
      })
      continue
    }

    const nextLevel = currentLevel + 1
    const upgrade = skill.upgradePattern[nextLevel - 1]
    if (!upgrade) continue

    const currentAttack = getEffectiveAttackValue(skill, currentLevel)
    const newAttack = getEffectiveAttackValue(skill, nextLevel)
    const attackGain = newAttack - currentAttack

    suggestions.push({
      skillId: skill.id,
      skillName: skill.name,
      currentLevel,
      nextLevel,
      shinyCost: upgrade.shinyCost,
      shardCost: upgrade.shardCost,
      attackGain,
      totalAttack: newAttack,
    })
  }

  // Return in the order they appear in the optimal combination (no sorting)
  return suggestions
}

