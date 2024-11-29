'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { classes, wavenBuildSuggestions } from '@/lib/data'
import { cn } from '@/lib/utils'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import {
  ChevronDown,
  ChevronUp,
  DollarSign,
  Star,
  Sword,
  Youtube,
} from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'

type Build = {
  name: string
  god: string
  weapon: string
  link: string
  cost: number
  difficulty: number
  tags?: string[]
  favorite?: boolean
  video?: string
}

const renderIcons = (
  value: number,
  max: number,
  ActiveIcon: React.ElementType,
  inactiveClass: string,
  activeColor: string,
) => {
  return Array(max)
    .fill(0)
    .map((_, i) => (
      <ActiveIcon
        key={i}
        className={`inline-block w-4 h-4 ${i < value ? activeColor : inactiveClass}`}
      />
    ))
}

export function WavenBuildsTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [costFilter, setCostFilter] = useState('all')
  const [difficultyFilter, setDifficultyFilter] = useState('all')
  const [godFilter, setGodFilter] = useState('all')
  const [weaponFilter, setWeaponFilter] = useState('all')
  const [favoriteFilter, setFavoriteFilter] = useState<boolean | null>(null)
  const [videoFilter, setVideoFilter] = useState<boolean | null>(null)
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'weapon', desc: false },
  ])

  const uniqueGods = useMemo(
    () => Array.from(new Set(wavenBuildSuggestions.map((build) => build.god))),
    [],
  )
  const uniqueWeapons = useMemo(() => {
    if (godFilter === 'all') {
      return Array.from(
        new Set(wavenBuildSuggestions.map((build) => build.weapon)),
      )
    } else {
      return Array.from(
        new Set(
          wavenBuildSuggestions
            .filter((build) => build.god === godFilter)
            .map((build) => build.weapon),
        ),
      )
    }
  }, [godFilter])

  const filteredBuilds = useMemo(() => {
    return wavenBuildSuggestions.filter((build) => {
      return (
        build.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (costFilter === 'all' || build.cost === parseInt(costFilter)) &&
        (difficultyFilter === 'all' ||
          build.difficulty === parseInt(difficultyFilter)) &&
        (godFilter === 'all' || build.god === godFilter) &&
        (weaponFilter === 'all' || build.weapon === weaponFilter) &&
        (favoriteFilter === null || build.favorite === favoriteFilter) &&
        (videoFilter === null || (build.video ? true : false) === videoFilter)
      )
    })
  }, [
    searchTerm,
    costFilter,
    difficultyFilter,
    godFilter,
    weaponFilter,
    favoriteFilter,
    videoFilter,
  ])

  const columns: ColumnDef<Build>[] = [
    {
      id: 'favorite',
      header: () => <div className="text-center">Favs</div>,
      cell: ({ row }) => (
        <div className="flex justify-center">
          {row.original.favorite && (
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          )}
        </div>
      ),
    },
    {
      accessorKey: 'weapon',
      header: 'Arma',
      cell: ({ row }) => {
        const god = row.original.god as keyof typeof classes
        const weapon = row.original
          .weapon as keyof (typeof classes)[typeof god]['weapons']
        const weaponData = classes[god].weapons[weapon] as {
          logo: string
          name: string
        }

        return (
          <div className="flex items-center gap-2">
            <Image
              src={weaponData.logo}
              alt={weaponData.name}
              width={24}
              height={24}
              className="rounded-sm"
            />
            <span>{weaponData.name}</span>
          </div>
        )
      },
    },
    {
      accessorKey: 'name',
      header: 'Nome da Build',
      cell: ({ row }) => (
        <a
          href={row.original.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-500 hover:text-amber-600 hover:underline"
        >
          {row.original.name}
        </a>
      ),
    },
    {
      accessorKey: 'cost',
      header: 'Custo',
      cell: ({ row }) =>
        renderIcons(
          row.original.cost,
          3,
          DollarSign,
          'text-zinc-700',
          'text-amber-500',
        ),
    },
    {
      accessorKey: 'difficulty',
      header: 'Dificuldade',
      cell: ({ row }) =>
        renderIcons(
          row.original.difficulty,
          3,
          Sword,
          'text-zinc-700',
          'text-amber-500',
        ),
    },
    {
      id: 'video',
      header: () => <div className="text-center">Video</div>,
      cell: ({ row }) => (
        <div className="flex justify-center">
          {row.original.video && (
            <a
              href={row.original.video}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600"
            >
              <Youtube className="w-4 h-4" />
            </a>
          )}
        </div>
      ),
    },
  ]

  const table = useReactTable({
    data: filteredBuilds,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  const handleGodChange = (value: string) => {
    setGodFilter(value)
    setWeaponFilter('all')
  }

  return (
    <Card className="w-full max-w-6xl mx-auto bg-zinc-950 border-zinc-800">
      <CardHeader>
        <CardTitle>Sugestões de Build para Waven</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            placeholder="Buscar builds..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-zinc-900 border-zinc-800"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={godFilter} onValueChange={handleGodChange}>
              <SelectTrigger className="bg-zinc-900 border-zinc-800">
                <SelectValue placeholder="Filtrar por deus" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectItem value="all">Todos os deuses</SelectItem>
                {uniqueGods.map((god) => {
                  const capitalizedGod =
                    god.charAt(0).toUpperCase() + god.slice(1)
                  return (
                    <SelectItem key={god} value={god}>
                      {capitalizedGod}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
            <Select value={weaponFilter} onValueChange={setWeaponFilter}>
              <SelectTrigger className="bg-zinc-900 border-zinc-800">
                <SelectValue placeholder="Filtrar por arma" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectItem value="all">Todas as armas</SelectItem>
                {uniqueWeapons.map((weapon) => {
                  const god =
                    godFilter === 'all'
                      ? (wavenBuildSuggestions.find((b) => b.weapon === weapon)
                          ?.god as keyof typeof classes)
                      : (godFilter as keyof typeof classes)
                  const weaponKey =
                    weapon as keyof (typeof classes)[typeof god]['weapons']
                  const weaponData = classes[god].weapons[weaponKey] as {
                    logo: string
                    name: string
                  }

                  return (
                    <SelectItem key={weapon} value={weapon}>
                      <div className="flex items-center gap-2">
                        <Image
                          src={weaponData.logo}
                          alt={weaponData.name}
                          width={24}
                          height={24}
                          className="rounded-sm"
                        />
                        <span>{weaponData.name}</span>
                      </div>
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
            <Select value={costFilter} onValueChange={setCostFilter}>
              <SelectTrigger className="bg-zinc-900 border-zinc-800">
                <SelectValue placeholder="Filtrar por custo" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectItem value="all">Todos os custos</SelectItem>
                <SelectItem value="1">
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 text-amber-500 mr-1" />
                    <DollarSign className="w-4 h-4 text-zinc-700 mr-1" />
                    <DollarSign className="w-4 h-4 text-zinc-700" />
                  </span>
                </SelectItem>
                <SelectItem value="2">
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 text-amber-500 mr-1" />
                    <DollarSign className="w-4 h-4 text-amber-500 mr-1" />
                    <DollarSign className="w-4 h-4 text-zinc-700" />
                  </span>
                </SelectItem>
                <SelectItem value="3">
                  <span className="flex items-center">
                    <DollarSign className="w-4 h-4 text-amber-500 mr-1" />
                    <DollarSign className="w-4 h-4 text-amber-500 mr-1" />
                    <DollarSign className="w-4 h-4 text-amber-500" />
                  </span>
                </SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={difficultyFilter}
              onValueChange={setDifficultyFilter}
            >
              <SelectTrigger className="bg-zinc-900 border-zinc-800">
                <SelectValue placeholder="Filtrar por dificuldade" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-zinc-800">
                <SelectItem value="all">Todas as dificuldades</SelectItem>
                <SelectItem value="1">
                  <span className="flex items-center">
                    <Sword className="w-4 h-4 text-amber-500 mr-1" />
                    <Sword className="w-4 h-4 text-zinc-700 mr-1" />
                    <Sword className="w-4 h-4 text-zinc-700" />
                  </span>
                  Fácil
                </SelectItem>
                <SelectItem value="2">
                  <span className="flex items-center">
                    <Sword className="w-4 h-4 text-amber-500 mr-1" />
                    <Sword className="w-4 h-4 text-amber-500 mr-1" />
                    <Sword className="w-4 h-4 text-zinc-700" />
                  </span>
                  Médio
                </SelectItem>
                <SelectItem value="3">
                  <span className="flex items-center">
                    <Sword className="w-4 h-4 text-amber-500 mr-1" />
                    <Sword className="w-4 h-4 text-amber-500 mr-1" />
                    <Sword className="w-4 h-4 text-amber-500" />
                  </span>
                  Difícil
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setFavoriteFilter(favoriteFilter === true ? null : true)
                    }
                    className={cn(
                      'bg-zinc-900 border-zinc-800',
                      favoriteFilter === true &&
                        'border-amber-500 text-amber-500',
                    )}
                  >
                    <Star
                      className={cn(
                        'w-4 h-4',
                        favoriteFilter === true && 'fill-current',
                      )}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Filtrar favoritos</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setVideoFilter(videoFilter === true ? null : true)
                    }
                    className={cn(
                      'bg-zinc-900 border-zinc-800',
                      videoFilter === true && 'border-red-500 text-red-500',
                    )}
                  >
                    <Youtube className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Filtrar builds com vídeo</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto mt-4">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="border-zinc-800">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder ? null : (
                          <Button
                            variant="ghost"
                            onClick={() => header.column.toggleSorting()}
                            className="hover:text-amber-500"
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
                    className="border-zinc-800"
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
