'use client'

import { useState, useMemo, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MelomonCard } from '@/components/melomon-planner/MelomonCard'
import { CustomSkillForm } from '@/components/melomon-planner/CustomSkillForm'
import { OptimizationTables } from '@/components/melomon-planner/OptimizationTables'
import { LevelUpBreakdown } from '@/components/melomon-planner/LevelUpBreakdown'
import {
  melomonSkills,
  MelomonSkill,
  createCustomSkill,
} from '@/lib/melomonData'
import {
  calculateOptimalDistribution,
  calculateNextLevelPriorities,
} from '@/lib/melomonOptimizer'
import { Sparkles } from 'lucide-react'

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

export default function MelomonPlannerPage() {
  const [orangeShiny, setOrangeShiny] = useState<string>('')
  const [shardCounts, setShardCounts] = useState<Record<string, number>>({})
  const [customSkills, setCustomSkills] = useState<MelomonSkill[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const savedOrangeShiny = localStorage.getItem('melomon-orange-shiny')
    if (savedOrangeShiny) {
      setOrangeShiny(savedOrangeShiny)
    }

    const savedShardCounts = localStorage.getItem('melomon-shard-counts')
    if (savedShardCounts) {
      try {
        setShardCounts(JSON.parse(savedShardCounts))
      } catch (error) {
        console.error('Failed to load shard counts:', error)
      }
    }

    const savedCustomSkills = localStorage.getItem('melomon-custom-skills')
    if (savedCustomSkills) {
      try {
        setCustomSkills(JSON.parse(savedCustomSkills))
      } catch (error) {
        console.error('Failed to load custom skills:', error)
      }
    }

    setIsLoaded(true)
  }, [])

  // Save to localStorage whenever values change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('melomon-orange-shiny', orangeShiny)
      } catch (error) {
        console.error('Failed to save orange shiny to localStorage:', error)
      }
    }
  }, [orangeShiny, isLoaded])

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('melomon-shard-counts', JSON.stringify(shardCounts))
      } catch (error) {
        console.error('Failed to save shard counts to localStorage:', error)
      }
    }
  }, [shardCounts, isLoaded])

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('melomon-custom-skills', JSON.stringify(customSkills))
      } catch (error) {
        console.error('Failed to save custom skills to localStorage:', error)
      }
    }
  }, [customSkills, isLoaded])

  // Save on page unload as a safety measure
  useEffect(() => {
    const handleBeforeUnload = () => {
      try {
        localStorage.setItem('melomon-orange-shiny', orangeShiny)
        localStorage.setItem('melomon-shard-counts', JSON.stringify(shardCounts))
        localStorage.setItem('melomon-custom-skills', JSON.stringify(customSkills))
      } catch (error) {
        console.error('Failed to save on page unload:', error)
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [orangeShiny, shardCounts, customSkills])

  const handleOrangeShinyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || /^\d+$/.test(value)) {
      setOrangeShiny(value)
    }
  }

  const handleOrangeShinyBlur = () => {
    // Ensure value is saved on blur
    try {
      localStorage.setItem('melomon-orange-shiny', orangeShiny)
    } catch (error) {
      console.error('Failed to save orange shiny on blur:', error)
    }
  }

  const handleShardCountChange = (skillId: string, count: number) => {
    setShardCounts((prev) => ({
      ...prev,
      [skillId]: count,
    }))
  }

  const handleAddCustomSkill = (skill: MelomonSkill) => {
    setCustomSkills((prev) => [...prev, skill])
  }

  const handleRemoveCustomSkill = (skillId: string) => {
    setCustomSkills((prev) => prev.filter((skill) => skill.id !== skillId))
    setShardCounts((prev) => {
      const newCounts = { ...prev }
      delete newCounts[skillId]
      return newCounts
    })
  }

  const allSkills = useMemo(
    () => [...melomonSkills, ...customSkills],
    [customSkills],
  )

  const orangeShinyNumber = parseInt(orangeShiny) || 0

  const optimalDistribution = useMemo(
    () =>
      calculateOptimalDistribution(allSkills, orangeShinyNumber, shardCounts),
    [allSkills, orangeShinyNumber, shardCounts],
  )

  const nextLevelPriorities = useMemo(
    () =>
      calculateNextLevelPriorities(
        optimalDistribution,
        allSkills,
        shardCounts,
      ),
    [optimalDistribution, allSkills, shardCounts],
  )

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Melomon Skill Planner</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Plan and optimize your melomon passive skill upgrades. Maximize your
          attack power by efficiently distributing orange shiny crystals and
          shards.
        </p>
      </section>

      {/* Global Resource Input */}
      <Card className="bg-[#2a2a2a] text-[#e6d7c3] border-amber-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-400" />
            Global Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 max-w-md">
            <Label htmlFor="orange-shiny" className="text-lg">
              Orange Shiny Crystals
            </Label>
            <Input
              id="orange-shiny"
              type="text"
              value={orangeShiny}
              onChange={handleOrangeShinyChange}
              onBlur={handleOrangeShinyBlur}
              placeholder="0"
              className="bg-gray-800 border-gray-700 text-[#e6d7c3] text-lg"
            />
            <p className="text-sm text-gray-400">
              Enter the total number of orange shiny crystals you have
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Melomon Cards Grid */}
      <div>
        <h2 className="text-3xl font-bold mb-4">Melomon Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allSkills.map((skill) => {
            const shardCount = shardCounts[skill.id] || 0
            const currentLevel = calculateCurrentLevel(skill, shardCount)
            return (
              <MelomonCard
                key={skill.id}
                skill={skill}
                shardCount={shardCount}
                currentLevel={currentLevel}
                orangeShiny={orangeShinyNumber}
                onShardCountChange={handleShardCountChange}
                onRemove={skill.isCustom ? handleRemoveCustomSkill : undefined}
              />
            )
          })}
        </div>
      </div>

      {/* Optimal Combination and Optimization Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Optimal Combination Display */}
        {optimalDistribution.bestCombo.skills.length > 0 ? (
          <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-blue-400 text-lg">
                Optimal 3-Skill Combination
              </CardTitle>
              <p className="text-xs text-gray-400 mt-1">
                Best combination considering your current resources
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {optimalDistribution.bestCombo.skills.map((skillCombo) => {
                  const skill = allSkills.find((s) => s.id === skillCombo.skillId)
                  const baseValue = skill?.upgradePattern[skillCombo.level - 1]?.value || 0
                  const displayValue =
                    skill?.minMultiplier && skill?.maxMultiplier
                      ? `${(baseValue * skill.minMultiplier).toFixed(1)}% - ${(baseValue * skill.maxMultiplier).toFixed(1)}%`
                      : `${skillCombo.attack.toFixed(1)}%`
                  return (
                    <div
                      key={skillCombo.skillId}
                      className="flex justify-between items-center bg-gray-800/50 rounded-lg p-2"
                    >
                      <div>
                        <span className="font-semibold text-sm">{skillCombo.skillName}</span>
                        <span className="text-gray-400 ml-2 text-xs">L{skillCombo.level}</span>
                      </div>
                      <span className="text-green-400 font-bold text-sm">
                        {displayValue}
                      </span>
                    </div>
                  )
                })}
                <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                  <span className="font-bold text-sm">Total Attack</span>
                  <span className="text-green-400 font-bold text-base">
                    {optimalDistribution.bestCombo.totalAttack.toFixed(1)}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div />
        )}

        {/* Optimization Tables */}
        <OptimizationTables nextLevelPriorities={nextLevelPriorities} />
      </div>

      {/* Level Up Breakdown */}
      <LevelUpBreakdown />

      {/* Custom Skill Form */}
      <CustomSkillForm onAddSkill={handleAddCustomSkill} />
    </div>
  )
}

