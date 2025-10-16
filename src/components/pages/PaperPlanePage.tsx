'use client'

import React, { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { paperPlaneData, priorityCycles } from '@/lib/paperPlaneData'

interface PaperPlaneData {
  cycle: number
  type: string
  unlockedContent: string
  notableReward: string
}

const PaperPlanePage = () => {
  // Current cycle and date configuration
  const [currentCycle, setCurrentCycle] = useState(45)
  const [currentDate, setCurrentDate] = useState('2026-10-16')
  const [baseCycleDate, setBaseCycleDate] = useState('2026-10-14') // The start date of current cycle

  // Temporary input values (before applying)
  const [tempCycle, setTempCycle] = useState('45')
  const [tempDate, setTempDate] = useState('2026-10-16')

  const [expandedSections, setExpandedSections] = useState<{
    showBefore: boolean
    showMoreNext: boolean
  }>({
    showBefore: false,
    showMoreNext: false,
  })

  const handleApplySettings = () => {
    const newCycle = parseInt(tempCycle)
    if (isNaN(newCycle) || newCycle < 0 || newCycle > 87) {
      alert('Please enter a valid cycle number between 0 and 87')
      return
    }

    setCurrentCycle(newCycle)
    setCurrentDate(tempDate)

    // Calculate the start date for the new current cycle (assuming cycles start on Tuesdays)
    const selectedDate = new Date(tempDate)
    const dayOfWeek = selectedDate.getDay()
    const daysToTuesday =
      dayOfWeek === 2 ? 0 : dayOfWeek < 2 ? 2 - dayOfWeek : 9 - dayOfWeek
    const cycleStartDate = new Date(selectedDate)
    cycleStartDate.setDate(selectedDate.getDate() - daysToTuesday)

    setBaseCycleDate(cycleStartDate.toISOString().split('T')[0])
  }

  // Calculate dates based on current cycle configuration
  const calculateDate = (cycle: number): string => {
    const baseDate = new Date(baseCycleDate)
    const daysPerCycle = 7 // Weekly cycles

    const daysDifference = (cycle - currentCycle) * daysPerCycle
    const targetDate = new Date(baseDate)
    targetDate.setDate(baseDate.getDate() + daysDifference)

    return targetDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  // Calculate relative time from current date
  const calculateRelativeTime = (cycle: number): string => {
    const baseDate = new Date(baseCycleDate)
    const daysPerCycle = 7

    const daysDifference = (cycle - currentCycle) * daysPerCycle
    const targetDate = new Date(baseDate)
    targetDate.setDate(baseDate.getDate() + daysDifference)

    const today = new Date(currentDate)
    const diffTime = targetDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Tomorrow'
    if (diffDays === -1) return 'Yesterday'

    const absDays = Math.abs(diffDays)
    const weeks = Math.floor(absDays / 7)
    const days = absDays % 7

    // If 4+ weeks, show in months
    if (weeks >= 4) {
      const months = Math.floor(weeks / 4)
      const remainingWeeks = weeks % 4
      const isFuture = diffDays > 0

      if (remainingWeeks === 0 && days === 0) {
        return isFuture
          ? `In ${months} month${months > 1 ? 's' : ''}`
          : `${months} month${months > 1 ? 's' : ''} ago`
      } else if (remainingWeeks === 0) {
        return isFuture
          ? `In ${months} month${months > 1 ? 's' : ''} and ${days} day${days > 1 ? 's' : ''}`
          : `${months} month${months > 1 ? 's' : ''} and ${days} day${days > 1 ? 's' : ''} ago`
      } else if (days === 0) {
        return isFuture
          ? `In ${months} month${months > 1 ? 's' : ''} and ${remainingWeeks} week${remainingWeeks > 1 ? 's' : ''}`
          : `${months} month${months > 1 ? 's' : ''} and ${remainingWeeks} week${remainingWeeks > 1 ? 's' : ''} ago`
      } else {
        return isFuture
          ? `In ${months} month${months > 1 ? 's' : ''}, ${remainingWeeks} week${remainingWeeks > 1 ? 's' : ''} and ${days} day${days > 1 ? 's' : ''}`
          : `${months} month${months > 1 ? 's' : ''}, ${remainingWeeks} week${remainingWeeks > 1 ? 's' : ''} and ${days} day${days > 1 ? 's' : ''} ago`
      }
    }

    if (diffDays > 0) {
      if (weeks > 0 && days === 0) {
        return `In ${weeks} week${weeks > 1 ? 's' : ''}`
      } else if (weeks > 0) {
        return `In ${weeks} week${weeks > 1 ? 's' : ''} and ${days} day${days > 1 ? 's' : ''}`
      }
      return `In ${diffDays} day${diffDays > 1 ? 's' : ''}`
    }

    if (weeks > 0 && days === 0) {
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? 's' : ''} and ${days} day${days > 1 ? 's' : ''} ago`
    }
    return `${absDays} day${absDays > 1 ? 's' : ''} ago`
  }

  const loadMorePrevious = () => {
    setExpandedSections((prev) => ({
      ...prev,
      showBefore: true,
    }))
  }

  const loadMoreNext = () => {
    setExpandedSections((prev) => ({
      ...prev,
      showMoreNext: true,
    }))
  }

  // Calculate visible cycles with fixed structure
  const getVisibleCycles = () => {
    const result: Array<PaperPlaneData | 'load-more-prev' | 'load-more-next'> =
      []

    const startCycle = currentCycle - 1
    const endCycle = currentCycle + 10

    // Add "Prev" button if not expanded and there are cycles before N-1
    if (!expandedSections.showBefore && startCycle > 0) {
      result.push('load-more-prev')
    }

    // Show all previous cycles if expanded
    if (expandedSections.showBefore) {
      for (let i = 0; i < startCycle; i++) {
        const cycleData = paperPlaneData.find((d) => d.cycle === i)
        if (cycleData) result.push(cycleData)
      }
    }

    // Always show cycles from N-1 to N+10
    for (let i = startCycle; i <= endCycle; i++) {
      if (i >= 0 && i <= 87) {
        const cycleData = paperPlaneData.find((d) => d.cycle === i)
        if (cycleData) result.push(cycleData)
      }
    }

    // Add "Next" button if not expanded and there are cycles after N+10
    if (!expandedSections.showMoreNext && endCycle < 87) {
      result.push('load-more-next')
    }

    // Show all remaining cycles if expanded
    if (expandedSections.showMoreNext) {
      for (let i = endCycle + 1; i <= 87; i++) {
        const cycleData = paperPlaneData.find((d) => d.cycle === i)
        if (cycleData) result.push(cycleData)
      }
    }

    return result
  }

  const visibleItems = getVisibleCycles()

  // Helper function to render notable rewards with tooltips
  const renderNotableReward = (reward: string) => {
    const parts = reward.split(' / ')

    return (
      <TooltipProvider>
        {parts.map((part, index) => (
          <span key={index}>
            {part === 'Gold Appraisal Medal' ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-yellow-400 cursor-help underline">
                    {part}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Increase success rate of Cat Combination</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <span>{part}</span>
            )}
            {index < parts.length - 1 && <span> / </span>}
          </span>
        ))}
      </TooltipProvider>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Paper Plane Schedule
          </h1>
        </div>

        {/* References */}
        <div className="mb-6 text-center">
          <p className="text-gray-300">
            <strong className="text-gray-100">References:</strong>{' '}
            <a
              href="https://boarhat.gg/games/go-go-muffin/guide/paper-plane/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              boarhat.gg
            </a>
            {' • '}
            <a
              href="https://discord.gg/gogomuffinofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline transition-colors"
            >
              GoGoMuffin Discord
            </a>
            {' • '}
            <span>Based on CN/KR/TW Servers</span>
          </p>
        </div>

        {/* Cycle Configuration */}
        <div className="mb-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-100 mb-4 text-center">
            Adjust Cycle & Date
          </h3>
          <div className="flex flex-wrap items-end justify-center gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="cycle-input"
                className="text-sm text-gray-300 mb-2"
              >
                Current Cycle (0-87)
              </label>
              <input
                id="cycle-input"
                type="number"
                min="0"
                max="87"
                value={tempCycle}
                onChange={(e) => setTempCycle(e.target.value)}
                className="px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-32"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="date-input"
                className="text-sm text-gray-300 mb-2"
              >
                Current Date
              </label>
              <input
                id="date-input"
                type="date"
                value={tempDate}
                onChange={(e) => setTempDate(e.target.value)}
                className="px-4 py-2 bg-gray-700 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              onClick={handleApplySettings}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Apply
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-3">
            Adjust these values if the current cycle or dates are incorrect. All
            dates in the table will be recalculated.
          </p>
        </div>

        {/* Main Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-700 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-purple-900 to-blue-900">
                <th className="px-2 py-4 text-gray-100 font-bold border-b border-gray-700 whitespace-nowrap w-20">
                  Cycle
                </th>
                <th className="px-4 py-4 text-gray-100 font-bold border-b border-gray-700 whitespace-nowrap">
                  Type
                </th>
                <th className="px-4 py-4 text-gray-100 font-bold border-b border-gray-700 whitespace-nowrap">
                  Start Date
                </th>
                <th className="px-4 py-4 text-gray-100 font-bold border-b border-gray-700">
                  Unlocked Content
                </th>
                <th className="px-4 py-4 text-gray-100 font-bold border-b border-gray-700">
                  Notable Reward
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleItems.map((item, index) => {
                if (item === 'load-more-prev') {
                  return (
                    <tr
                      key="load-more-prev"
                      onClick={loadMorePrevious}
                      className="cursor-pointer hover:bg-gray-700/30 transition-colors"
                    >
                      <td
                        colSpan={5}
                        className="px-4 py-2 text-center border-b border-gray-700 text-gray-400 hover:text-gray-200"
                      >
                        <div className="flex items-center justify-center">
                          <span className="text-2xl">...</span>
                        </div>
                      </td>
                    </tr>
                  )
                }

                if (item === 'load-more-next') {
                  return (
                    <tr
                      key="load-more-next"
                      onClick={loadMoreNext}
                      className="cursor-pointer hover:bg-gray-700/30 transition-colors"
                    >
                      <td
                        colSpan={5}
                        className="px-4 py-2 text-center border-b border-gray-700 text-gray-400 hover:text-gray-200"
                      >
                        <div className="flex items-center justify-center">
                          <span className="text-2xl">...</span>
                        </div>
                      </td>
                    </tr>
                  )
                }

                const row = item as PaperPlaneData
                const isPriority = priorityCycles.includes(row.cycle)
                const isCurrent = row.cycle === currentCycle

                return (
                  <tr
                    key={row.cycle}
                    className={`
                      ${isCurrent ? 'bg-purple-900/40 border-2 border-purple-500' : isPriority ? 'bg-yellow-900/30' : index % 2 === 0 ? 'bg-gray-800/50' : 'bg-gray-900/50'}
                      ${isPriority ? 'border-l-4 border-l-yellow-500 hover:bg-yellow-900/40' : 'hover:bg-gray-700/50'}
                      transition-colors
                    `}
                  >
                    <td className="px-2 py-3 border-b border-gray-700">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-bold ${isCurrent ? 'text-purple-400 text-lg' : 'text-gray-200'}`}
                        >
                          {row.cycle}
                        </span>
                        {isPriority && (
                          <span
                            className="text-yellow-500 text-xl"
                            title="Priority Cycle"
                          >
                            ⭐
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-700 whitespace-nowrap text-gray-300">
                      {row.type}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-700 whitespace-nowrap text-gray-300">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="cursor-help">
                              {calculateDate(row.cycle)}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{calculateRelativeTime(row.cycle)}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    <td className="px-4 py-3 border-b border-gray-700 text-gray-200 whitespace-pre-line">
                      {row.unlockedContent}
                    </td>
                    <td className="px-4 py-3 border-b border-gray-700 text-gray-200">
                      {renderNotableReward(row.notableReward)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Unlocks Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-xl">
          <h2 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
            <span>🔓</span> Content Unlocks Schedule
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-bold text-blue-400 mb-2">
                Class Changes (CC)
              </h3>
              <ul className="text-sm text-gray-200 space-y-1">
                <li>
                  <strong>{calculateDate(1)}</strong> (1): CC1
                </li>
                <li>
                  <strong>{calculateDate(4)}</strong> (4): CC2
                </li>
                <li>
                  <strong>{calculateDate(13)}</strong> (13): CC3
                </li>
                <li>
                  <strong>{calculateDate(22)}</strong> (22): CC4
                </li>
                <li>
                  <strong>{calculateDate(31)}</strong> (31): CC5
                </li>
                <li>
                  <strong>{calculateDate(42)}</strong> (42): CC6
                </li>
                <li>
                  <strong>{calculateDate(53)}</strong> (53): CC7
                </li>
                <li>
                  <strong>{calculateDate(64)}</strong> (64): CC8
                </li>
                <li>
                  <strong>{calculateDate(75)}</strong> (75): CC9
                </li>
                <li>
                  <strong>{calculateDate(86)}</strong> (86): CC10
                </li>
              </ul>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-bold text-blue-400 mb-2">Mounts & Melo</h3>
              <ul className="text-sm text-gray-200 space-y-1">
                <li>
                  <strong>{calculateDate(7)}</strong> (7): Gen 2 Mounts
                </li>
                <li>
                  <strong>{calculateDate(17)}</strong> (17): Gen 3 Mounts
                </li>
                <li>
                  <strong>{calculateDate(24)}</strong> (24): Gen 2 Melo
                </li>
                <li>
                  <strong>{calculateDate(27)}</strong> (27): Gen 4 Mounts
                </li>
                <li>
                  <strong>{calculateDate(38)}</strong> (38): Gen 5 Mounts
                </li>
                <li>
                  <strong>{calculateDate(47)}</strong> (47): Gen 3 Melo
                </li>
                <li>
                  <strong>{calculateDate(50)}</strong> (50): Gen 6 Mounts
                </li>
                <li>
                  <strong>{calculateDate(70)}</strong> (70): Gen 4 Melo
                </li>
                <li>
                  <strong>{calculateDate(72)}</strong> (72): Gen 7 Mounts
                </li>
              </ul>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-bold text-blue-400 mb-2">Cat Buns</h3>
              <ul className="text-sm text-gray-200 space-y-1">
                <li>
                  <strong>{calculateDate(4)}</strong> (4): Cat Bun System
                </li>
                <li>
                  <strong>{calculateDate(20)}</strong> (20): Gen 4 Cat Bun
                </li>
                <li>
                  <strong>{calculateDate(39)}</strong> (39): Gen 5 Cat Bun
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Priority Summary */}
        <div className="mt-8 p-6 bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-xl">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
            <span>⭐</span> High Priority Cycles Summary
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-bold text-yellow-400 mb-2">
                Economic Artifacts
              </h3>
              <ul className="text-sm text-gray-200 space-y-1">
                <li>
                  <strong>Cycle 2:</strong> Wind Catching Bag (Energy)
                </li>
                <li>
                  <strong>Cycle 5:</strong> Ignorant Vision (Runes)
                </li>
                <li>
                  <strong>Cycle 9:</strong> Firefly Path (Cat Bun Wood)
                </li>
                <li>
                  <strong>Cycle 12:</strong> Corrosive Venom (Mount Tickets)
                </li>
                <li>
                  <strong>Cycle 66:</strong> Double Melo EXP (15%)
                </li>
                <li>
                  <strong>Cycle 69:</strong> Double Flour (10%)
                </li>
                <li>
                  <strong>Cycle 73:</strong> Double Mount Tickets (3%)
                </li>
              </ul>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-bold text-yellow-400 mb-2">
                Special Artifacts
              </h3>
              <ul className="text-sm text-gray-200 space-y-1">
                <li>
                  <strong>Cycle 21:</strong> Reduced Recasting Cost
                </li>
                <li>
                  <strong>Cycle 23:</strong> Trials DMG% + Heal%
                </li>
                <li>
                  <strong>Cycle 28:</strong> EOW DMG% + Heal%
                </li>
              </ul>
            </div>
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h3 className="font-bold text-yellow-400 mb-2">Melo Shards</h3>
              <ul className="text-sm text-gray-200 space-y-1">
                <li>
                  <strong>Cycles 24-25:</strong> Gen 2 Shards
                </li>
                <li>
                  <strong>Cycles 33, 37, 41:</strong> Gen 2 Shards
                </li>
                <li>
                  <strong>Cycles 47-70:</strong> Gen 2-4 Shards
                </li>
                <li>
                  <strong>Cycles 74+:</strong> Gen 4 Shards
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="mt-6 p-6 bg-gradient-to-r from-indigo-900/40 to-blue-900/40 border border-indigo-500/30 rounded-xl">
          <h2 className="text-2xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
            <span>📝</span> Important Notes
          </h2>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start gap-3">
              <span className="text-lg mt-0.5">•</span>
              <div>
                Prefer{' '}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-yellow-400 font-semibold cursor-help underline">
                        Economic Artifacts
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-sm">
                      <div className="space-y-1">
                        <p>• Wind Catching Bag - Double Energy Chance</p>
                        <p>• Ignorant Vision - Double Runes Chance</p>
                        <p>• Firefly Path - Double Cat Bun Wood Chance</p>
                        <p>
                          • Corrosive Venom Spear - Double Mount Tickets Chance
                        </p>
                        <p>• Double Melo EXP Artifact - 15% Chance</p>
                        <p>• Double Flour Artifact - 10% Chance</p>
                        <p>• Double Mount Tickets Artifact - 3% Chance</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>{' '}
                over EX Damage Artifacts
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg mt-0.5">•</span>
              <div>EX DMG artifacts become more valuable after CC6</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg mt-0.5">•</span>
              <div>Save resources and plan ahead for high-priority cycles</div>
            </li>
          </ul>
        </div>

        {/* Legend */}
        <div className="mt-6 p-4 bg-gray-800/50 border border-gray-700 rounded-lg">
          <h3 className="font-bold text-gray-200 mb-2">Legend:</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span>High Priority Cycle</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500/30 border-2 border-purple-500 rounded"></div>
              <span>Current Cycle</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-l-4 border-l-yellow-500"></div>
              <span>Priority Cycle Indicator</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaperPlanePage
