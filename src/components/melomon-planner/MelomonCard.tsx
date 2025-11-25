'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MelomonSkill } from '@/lib/melomonData'
import { Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MelomonCardProps {
  skill: MelomonSkill
  shardCount: number
  currentLevel: number
  orangeShiny: number
  onShardCountChange: (skillId: string, count: number) => void
  onRemove?: (skillId: string) => void
}

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
    const shardsNeededForThisLevel = upgrade.shardCost
    if (totalShardsUsed + shardsNeededForThisLevel <= shardCount) {
      totalShardsUsed += shardsNeededForThisLevel
      level = upgrade.level
    } else {
      break
    }
  }

  return level
}

// Calculate total shards consumed to reach a specific level
const calculateShardsConsumed = (
  skill: MelomonSkill,
  level: number,
): number => {
  let totalShards = 0
  for (let i = 1; i < level && i < skill.upgradePattern.length; i++) {
    totalShards += skill.upgradePattern[i].shardCost
  }
  return totalShards
}

// Calculate total shiny consumed to reach a specific level
const calculateShinyConsumed = (
  skill: MelomonSkill,
  level: number,
): number => {
  let totalShiny = 0
  for (let i = 1; i < level && i < skill.upgradePattern.length; i++) {
    totalShiny += skill.upgradePattern[i].shinyCost
  }
  return totalShiny
}

export const MelomonCard = ({
  skill,
  shardCount,
  currentLevel,
  orangeShiny,
  onShardCountChange,
  onRemove,
}: MelomonCardProps) => {
  const handleShardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || /^\d+$/.test(value)) {
      const count = value === '' ? 0 : parseInt(value, 10)
      onShardCountChange(skill.id, count)
    }
  }

  const maxLevel = 15
  const levelProgress = (currentLevel / maxLevel) * 100
  const shardsConsumed = calculateShardsConsumed(skill, currentLevel)
  const shinyConsumed = calculateShinyConsumed(skill, currentLevel)

  return (
    <Card className="bg-[#2a2a2a] text-[#e6d7c3]">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg mb-1">{skill.name}</CardTitle>
            {skill.isCustom && (
              <span className="text-xs text-amber-500 mb-1 inline-block">
                Custom Skill
              </span>
            )}
          </div>
          {onRemove && skill.isCustom && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemove(skill.id)}
              className="text-red-400 hover:text-red-300 hover:bg-red-900/20 h-6 w-6 p-0"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          )}
        </div>
        <p className="text-xs text-gray-400 mt-1">{skill.description}</p>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        {/* Level Progress */}
        <div className="space-y-1">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-400">Max Level Achievable</span>
            <span className="font-semibold text-amber-400">
              {currentLevel} / {maxLevel}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1.5">
            <div
              className="bg-amber-500 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${levelProgress}%` }}
            />
          </div>
        </div>

        {/* Attack Value Display */}
        <div className="bg-gray-800/50 rounded-lg p-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">Attack</span>
            <span className="text-base font-bold text-green-400">
              {skill.minMultiplier && skill.maxMultiplier
                ? `${(skill.upgradePattern[currentLevel - 1]?.value * skill.minMultiplier).toFixed(1)}% - ${(skill.upgradePattern[currentLevel - 1]?.value * skill.maxMultiplier).toFixed(1)}%`
                : `${skill.upgradePattern[currentLevel - 1]?.value.toFixed(1)}%`}
            </span>
          </div>
          {currentLevel < maxLevel && (
            <div className="flex justify-between items-center mt-0.5 text-[10px] text-gray-500">
              <span>Next:</span>
              <span>
                {skill.minMultiplier && skill.maxMultiplier
                  ? `${(skill.upgradePattern[currentLevel]?.value * skill.minMultiplier).toFixed(1)}% - ${(skill.upgradePattern[currentLevel]?.value * skill.maxMultiplier).toFixed(1)}%`
                  : `${skill.upgradePattern[currentLevel]?.value.toFixed(1)}%`}
              </span>
            </div>
          )}
        </div>

        {/* Expected Costs and Resources */}
        <div className="space-y-2">
          {/* Expected Costs (Read-only) */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-800/50 rounded-lg p-2">
              <div className="text-[10px] text-gray-500 mb-0.5">
                Expected Shards
              </div>
              <div className="text-xs font-semibold text-amber-400">
                {shardsConsumed}
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-2">
              <div className="text-[10px] text-gray-500 mb-0.5">
                Expected Shiny
              </div>
              <div className="text-xs font-semibold text-amber-400">
                {shinyConsumed}
              </div>
            </div>
          </div>

          {/* Resources Inputs */}
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor={`shards-${skill.id}`} className="text-xs">
                Shards Owned
              </Label>
              <Input
                id={`shards-${skill.id}`}
                type="text"
                value={shardCount === 0 ? '' : shardCount.toString()}
                onChange={handleShardInputChange}
                placeholder="0"
                className="bg-gray-800 border-gray-700 text-[#e6d7c3] h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor={`shiny-${skill.id}`} className="text-xs">
                Shiny Crystals
              </Label>
              <Input
                id={`shiny-${skill.id}`}
                type="text"
                value={orangeShiny === 0 ? '' : orangeShiny.toString()}
                readOnly
                placeholder="0"
                className="bg-gray-800/50 border-gray-700 text-[#e6d7c3] h-8 text-sm cursor-not-allowed opacity-70"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

