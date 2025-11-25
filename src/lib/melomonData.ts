export interface MelomonUpgrade {
  level: number
  shinyCost: number
  shardCost: number
  value: number
}

export interface MelomonSkill {
  id: string
  name: string
  description: string
  baseValue: number
  upgradePattern: MelomonUpgrade[]
  isCustom?: boolean
  minMultiplier?: number // Minimum multiplier (e.g., 3 for Invisible Friend)
  maxMultiplier?: number // Maximum multiplier (e.g., 5 for Invisible Friend)
}

// Pattern detection: Shiny costs for each upgrade (from level N to level N+1)
// Level 1→2: 10, Level 2→3: 20, Level 3→4: 20, Level 4→5: 30, Level 5→6: 30, Level 6→7: 30,
// Level 7→8: 40, Level 8→9: 40, Level 9→10: 50, Level 10→11: ?, Level 11→12: 100
const generateShinyCosts = (): number[] => {
  // Costs to upgrade FROM level N TO level N+1
  // Index 0 = level 1 (base, no cost), Index 1 = cost to go 1→2, Index 2 = cost to go 2→3, etc.
  const costs = [
    0, // Level 1 (base)
    10, // 1→2
    20, // 2→3
    20, // 3→4
    30, // 4→5
    30, // 5→6
    30, // 6→7
    40, // 7→8
    40, // 8→9
    50, // 9→10
    70, // 10→11 (extrapolated, between 50 and 100)
    100, // 11→12 (confirmed)
    100, // 12→13 (extrapolated, same as 11→12)
    120, // 13→14 (extrapolated, increasing)
    150, // 14→15 (extrapolated, increasing)
  ]
  return costs
}

// Pattern detection: Shard costs for each upgrade (from level N to level N+1)
// Level 1→2: 0, Level 2→3: 0, Level 3→4: 5, Level 4→5: 5, Level 5→6: 10, Level 6→7: 10,
// Level 7→8: 10, Level 8→9: 10, Level 9→10: 20, Level 10→11: ?, Level 11→12: 40
const generateShardCosts = (): number[] => {
  // Costs to upgrade FROM level N TO level N+1
  // Index 0 = level 1 (base, no cost), Index 1 = cost to go 1→2, Index 2 = cost to go 2→3, etc.
  const costs = [
    0, // Level 1 (base)
    0, // 1→2
    0, // 2→3
    5, // 3→4
    5, // 4→5
    10, // 5→6
    10, // 6→7
    10, // 7→8
    10, // 8→9
    20, // 9→10
    30, // 10→11 (extrapolated, between 20 and 40)
    40, // 11→12 (confirmed)
    50, // 12→13 (extrapolated, increasing)
    60, // 13→14 (extrapolated, increasing)
    70, // 14→15 (extrapolated, increasing)
  ]
  return costs
}

const shinyCosts = generateShinyCosts()
const shardCosts = generateShardCosts()

// Generate upgrade pattern for a skill with linear value increase
const generateLinearUpgradePattern = (
  baseValue: number,
  increasePerLevel: number,
): MelomonUpgrade[] => {
  return Array.from({ length: 15 }, (_, i) => ({
    level: i + 1,
    shinyCost: shinyCosts[i],
    shardCost: shardCosts[i],
    value: baseValue + increasePerLevel * i,
  }))
}

// Generate upgrade pattern for a skill with custom value progression
const generateCustomUpgradePattern = (
  baseValue: number,
  valueProgression: number[],
): MelomonUpgrade[] => {
  return Array.from({ length: 15 }, (_, i) => ({
    level: i + 1,
    shinyCost: shinyCosts[i],
    shardCost: shardCosts[i],
    value: valueProgression[i] || baseValue,
  }))
}

export const melomonSkills: MelomonSkill[] = [
  {
    id: 'mysterious-remedy',
    name: 'Mysterious Remedy',
    description:
      'Every 15s, gain 25-30 hormone stacks. Each stack increases ATK by the skill value for 15s',
    baseValue: 1.2,
    upgradePattern: generateLinearUpgradePattern(1.2, 0.4),
    minMultiplier: 25, // Minimum: 25 stacks
    maxMultiplier: 30, // Maximum: 30 stacks
  },
  {
    id: 'trick',
    name: 'Trick',
    description:
      'In battle, increases ATK by 77%. For each enemy on the field, additionally increase ATK by 2%. (consider 1 enemy)',
    baseValue: 77,
    upgradePattern: generateCustomUpgradePattern(77, [
      77, 88, 99, 110, 121, 132, 143, 154, 165, 176, 187, 198, 209, 220, 231,
    ]),
  },
  {
    id: 'therapeutic-inspiration',
    name: 'Therapeutic Inspiration',
    description:
      'Gains 4 stacks of encouragement when entering combat, then gains an extra stack every 10 seconds. Each stack increases ATK by the skill value. Additional stacks cannot exceed the party size (4-6 people).',
    baseValue: 2.2,
    upgradePattern: generateLinearUpgradePattern(2.2, 0.7),
    minMultiplier: 8, // Minimum: 4 initial + 4 additional = 8 stacks (party of 4)
    maxMultiplier: 10, // Maximum: 4 initial + 6 additional = 10 stacks (party of 6)
  },
  {
    id: 'face-shift',
    name: 'Face Shift',
    description: 'Increases all DMG by 37.5%',
    baseValue: 37.5,
    upgradePattern: generateLinearUpgradePattern(37.5, 7.5),
  },
  {
    id: 'invisible-friend',
    name: 'Invisible Friend',
    description:
      'Increases ATK based on number of alive friends (3-5 friends). Each friend increases ATK by the skill value.',
    baseValue: 2.3,
    upgradePattern: generateLinearUpgradePattern(2.3, 1.4),
    minMultiplier: 3,
    maxMultiplier: 5,
  },
]

// Helper function to create custom skill
export const createCustomSkill = (
  name: string,
  description: string,
  baseValue: number,
  increasePerLevel: number,
): MelomonSkill => {
  return {
    id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    name,
    description,
    baseValue,
    upgradePattern: generateLinearUpgradePattern(baseValue, increasePerLevel),
    isCustom: true,
  }
}

