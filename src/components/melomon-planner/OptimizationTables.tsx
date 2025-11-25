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
import { UpgradeSuggestion } from '@/lib/melomonOptimizer'
import { ArrowUp } from 'lucide-react'

interface OptimizationTablesProps {
  nextLevelPriorities: UpgradeSuggestion[]
}

export const OptimizationTables = ({
  nextLevelPriorities,
}: OptimizationTablesProps) => {
  return (
    <Card className="bg-[#2a2a2a] text-[#e6d7c3] border-blue-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ArrowUp className="h-5 w-5 text-blue-400" />
          Next Level Up Priorities
        </CardTitle>
        <p className="text-sm text-gray-400 mt-2">
          Each skill from the optimal 3-skill combination with their level up
          cost and attack gain.
        </p>
      </CardHeader>
      <CardContent>
        {nextLevelPriorities.length === 0 ? (
          <p className="text-gray-500 text-center py-4">
            No skills in the optimal combination
          </p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="border-gray-700">
                <TableHead className="text-gray-400">Skill</TableHead>
                <TableHead className="text-gray-400">Current Level</TableHead>
                <TableHead className="text-gray-400">Next Level Cost</TableHead>
                <TableHead className="text-gray-400">Attack Gain</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nextLevelPriorities.map((upgrade, idx) => {
                const isMaxLevel = upgrade.currentLevel >= 15
                return (
                  <TableRow
                    key={`${upgrade.skillId}-${upgrade.nextLevel}-${idx}`}
                    className="border-gray-700 hover:bg-gray-800/50"
                  >
                    <TableCell className="font-medium">
                      {upgrade.skillName}
                    </TableCell>
                    <TableCell className="text-gray-300">
                      {isMaxLevel ? (
                        <span className="text-gray-500">Max (L{upgrade.currentLevel})</span>
                      ) : (
                        `L${upgrade.currentLevel} → L${upgrade.nextLevel}`
                      )}
                    </TableCell>
                    <TableCell className="text-amber-400">
                      {isMaxLevel ? (
                        <span className="text-gray-500">—</span>
                      ) : (
                        <>
                          {upgrade.shinyCost} shiny
                          {upgrade.shardCost > 0 && ` + ${upgrade.shardCost} shards`}
                        </>
                      )}
                    </TableCell>
                    <TableCell className="text-green-400 font-semibold">
                      {isMaxLevel ? (
                        <span className="text-gray-500">—</span>
                      ) : (
                        `+${upgrade.attackGain.toFixed(1)}%`
                      )}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}

