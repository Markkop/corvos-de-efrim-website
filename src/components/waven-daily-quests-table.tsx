'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useMemo, useState } from 'react'

type DailyQuest = {
  name: string
  goal: string
  levels: number[]
  type: string
  icon: React.ReactNode
}

const TYPE_NAMES = {
  vampire: 'Vampyro',
  whisperer: 'Sussurador',
  pig: 'Suinocivo',
  taur: 'Tauro',
  tofu: 'Tofu',
  gobbal: 'Gobbal',
  sheep: 'Ovelha',
  bwork: 'Bwork',
  help: 'Ajuda',
  crackler: 'Crackler',
} as const

export function WavenDailyQuestsTable({
  dailyQuests,
  getDailyChallengeIcon,
}: {
  dailyQuests: Array<{
    name: string
    goal: string
    levels: number[]
    type: string
  }>
  getDailyChallengeIcon: (type: string) => React.ReactNode
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sorting, setSorting] = useState<SortingState>([])

  const filteredQuests = useMemo(() => {
    return dailyQuests
      .filter((quest) => {
        const searchString = searchTerm.toLowerCase()
        return (
          quest.name.toLowerCase().includes(searchString) ||
          quest.goal.toLowerCase().includes(searchString)
        )
      })
      .map((quest) => ({
        ...quest,
        icon: getDailyChallengeIcon(quest.type),
        highestLevel: Math.max(...quest.levels),
      }))
  }, [searchTerm, dailyQuests, getDailyChallengeIcon])

  const columns: ColumnDef<DailyQuest & { highestLevel: number }>[] = [
    {
      id: 'type',
      header: 'Tipo',
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          {row.original.icon}
          <span className="capitalize">
            {TYPE_NAMES[row.original.type as keyof typeof TYPE_NAMES]}
          </span>
        </div>
      ),
    },
    {
      accessorKey: 'name',
      header: 'Desafio',
    },
    {
      accessorKey: 'goal',
      header: 'Objetivo',
    },
    {
      accessorKey: 'highestLevel',
      header: 'Níveis',
      cell: ({ row }) => (
        <div className="flex flex-wrap gap-2">
          {row.original.levels.map((level) => (
            <span
              key={level}
              className="inline-flex items-center justify-center bg-amber-950/50 text-amber-500 px-2.5 py-0.5 rounded-md text-sm font-medium"
            >
              {level}
            </span>
          ))}
        </div>
      ),
    },
  ]

  const table = useReactTable({
    data: filteredQuests,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <Card className="w-full bg-[#2a2a2a] text-[#e6d7c3]">
      <CardHeader>
        <CardTitle>Desafios Diários</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            placeholder="Buscar desafios..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#1a1a1a] border-gray-700"
          />
        </div>
        <div className="overflow-x-auto mt-4">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="border-gray-700">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder ? null : (
                          <Button
                            variant="ghost"
                            onClick={() => header.column.toggleSorting()}
                            className={cn(
                              'hover:text-amber-500',
                              header.column.getIsSorted() && 'text-amber-500',
                            )}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                            {header.column.getIsSorted() && (
                              <span className="ml-2">
                                {header.column.getIsSorted() === 'desc' ? (
                                  <ChevronDown className="h-4 w-4" />
                                ) : (
                                  <ChevronUp className="h-4 w-4" />
                                )}
                              </span>
                            )}
                          </Button>
                        )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className="border-gray-700"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
