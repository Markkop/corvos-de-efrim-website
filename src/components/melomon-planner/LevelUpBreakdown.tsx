'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Calculator } from 'lucide-react'

interface LevelUpCost {
  fromLevel: number
  toLevel: number
  shinyCost: number
  shardCost: number
}

// Generate costs matching melomonData.ts patterns
const generateShinyCosts = (): number[] => {
  return [
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
    70, // 10→11
    100, // 11→12
    100, // 12→13
    120, // 13→14
    150, // 14→15
  ]
}

const generateShardCosts = (): number[] => {
  return [
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
    30, // 10→11
    40, // 11→12
    50, // 12→13
    60, // 13→14
    70, // 14→15
  ]
}

// Generate costs for each level transition
const generateLevelUpBreakdown = (): LevelUpCost[] => {
  const shinyCosts = generateShinyCosts()
  const shardCosts = generateShardCosts()

  const breakdown: LevelUpCost[] = []

  // Calculate costs for each level transition
  for (let i = 1; i < 15; i++) {
    breakdown.push({
      fromLevel: i,
      toLevel: i + 1,
      shinyCost: shinyCosts[i],
      shardCost: shardCosts[i],
    })
  }

  return breakdown
}

export const LevelUpBreakdown = () => {
  const breakdown = generateLevelUpBreakdown()

  return (
    <div className="flex justify-center">
      <Card className="bg-[#2a2a2a] text-[#e6d7c3] border-purple-700 w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-purple-400" />
            Level Up Breakdown
          </CardTitle>
          <p className="text-sm text-gray-400 mt-2">
            Upgrade costs for each level transition.
          </p>
        </CardHeader>
        <CardContent>
          <div className="max-h-[500px] overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="text-gray-400">Level</TableHead>
                  <TableHead className="text-gray-400">Shiny Crystals</TableHead>
                  <TableHead className="text-gray-400">Shards</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {breakdown.map((cost) => (
                  <TableRow
                    key={`${cost.fromLevel}-${cost.toLevel}`}
                    className="border-gray-700 hover:bg-gray-800/50"
                  >
                    <TableCell className="font-medium">
                      {cost.fromLevel} → {cost.toLevel}
                    </TableCell>
                    <TableCell className="text-amber-400">
                      {cost.shinyCost.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-blue-400">
                      {cost.shardCost.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

