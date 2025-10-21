'use client'

import { useState, useMemo, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ggmTrackerItems, GGMTrackerItem } from '@/lib/ggmTrackerData'
import { TrendingUp, TrendingDown, Wallet, RotateCcw } from 'lucide-react'
import {
  SummaryCard,
  TrackerSection,
  CustomItemForm,
  InfoNote,
} from '@/components/tracker'

export default function GGMTrackerPage() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())
  const [customItems, setCustomItems] = useState<GGMTrackerItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load selections and custom items from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('ggm-tracker-selections')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setSelectedItems(new Set(parsed))
      } catch (error) {
        console.error('Failed to load saved selections:', error)
      }
    }

    const savedCustomItems = localStorage.getItem('ggm-tracker-custom-items')
    if (savedCustomItems) {
      try {
        const parsed = JSON.parse(savedCustomItems)
        setCustomItems(parsed)
      } catch (error) {
        console.error('Failed to load saved custom items:', error)
      }
    }

    setIsLoaded(true)
  }, [])

  // Save selections to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        'ggm-tracker-selections',
        JSON.stringify(Array.from(selectedItems)),
      )
    }
  }, [selectedItems, isLoaded])

  // Save custom items to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        'ggm-tracker-custom-items',
        JSON.stringify(customItems),
      )
    }
  }, [customItems, isLoaded])

  const handleToggleItem = (id: string) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleReset = () => {
    setSelectedItems(new Set())
  }

  const handleAddCustomItem = (
    name: string,
    amount: number,
    frequency: 'daily' | 'weekly' | 'monthly',
    type: 'income' | 'outcome',
  ) => {
    const newItem: GGMTrackerItem = {
      id: `custom-${Date.now()}`,
      name,
      amount,
      frequency,
      type,
      category: 'Custom Items',
    }

    setCustomItems((prev) => [...prev, newItem])
    setSelectedItems((prev) => {
      const newSet = new Set(prev)
      newSet.add(newItem.id)
      return newSet
    })
  }

  const handleRemoveCustomItem = (id: string) => {
    setCustomItems((prev) => prev.filter((item) => item.id !== id))
    setSelectedItems((prev) => {
      const newSet = new Set(prev)
      newSet.delete(id)
      return newSet
    })
  }

  const allItems = useMemo(
    () => [...ggmTrackerItems, ...customItems],
    [customItems],
  )

  const incomeItems = useMemo(
    () => allItems.filter((item) => item.type === 'income'),
    [allItems],
  )

  const outcomeItems = useMemo(
    () => allItems.filter((item) => item.type === 'outcome'),
    [allItems],
  )

  const calculateTotals = (items: GGMTrackerItem[]) => {
    const selected = items.filter((item) => selectedItems.has(item.id))

    const dailyTotal = selected
      .filter((item) => item.frequency === 'daily')
      .reduce((sum, item) => sum + item.amount, 0)

    const weeklyTotal = selected
      .filter((item) => item.frequency === 'weekly')
      .reduce((sum, item) => sum + item.amount, 0)

    const monthlyTotal = selected
      .filter((item) => item.frequency === 'monthly')
      .reduce((sum, item) => sum + item.amount, 0)

    return {
      daily: dailyTotal,
      weekly: weeklyTotal + dailyTotal * 7,
      monthly: monthlyTotal + weeklyTotal * 4 + dailyTotal * 30,
    }
  }

  const incomeTotals = calculateTotals(incomeItems)
  const outcomeTotals = calculateTotals(outcomeItems)

  const netTotals = {
    daily: incomeTotals.daily - outcomeTotals.daily,
    weekly: incomeTotals.weekly - outcomeTotals.weekly,
    monthly: incomeTotals.monthly - outcomeTotals.monthly,
  }

  return (
    <div className="space-y-8">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Stellarite Tracker</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
          Track your Stellarite (cash) income and expenses in Go Go Muffin
        </p>
        <Button onClick={handleReset} variant="outline" className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Reset Selections
        </Button>
      </section>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SummaryCard
          title="Total Income"
          icon={TrendingUp}
          iconColor="text-green-400"
          borderColor="border-green-700"
          bgGradient="bg-gradient-to-br from-green-900/30 to-green-800/20"
          daily={incomeTotals.daily}
          weekly={incomeTotals.weekly}
          monthly={incomeTotals.monthly}
          valueColor="text-green-400"
        />
        <SummaryCard
          title="Total Expenses"
          icon={TrendingDown}
          iconColor="text-red-400"
          borderColor="border-red-700"
          bgGradient="bg-gradient-to-br from-red-900/30 to-red-800/20"
          daily={outcomeTotals.daily}
          weekly={outcomeTotals.weekly}
          monthly={outcomeTotals.monthly}
          valueColor="text-red-400"
        />
        <SummaryCard
          title="Net Balance"
          icon={Wallet}
          iconColor="text-amber-400"
          borderColor="border-amber-700"
          bgGradient="bg-gradient-to-br from-amber-900/30 to-amber-800/20"
          daily={netTotals.daily}
          weekly={netTotals.weekly}
          monthly={netTotals.monthly}
          valueColor="text-amber-400"
          showSign
        />
      </div>

      {/* Income and Outcome Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TrackerSection
          title="Income"
          icon={TrendingUp}
          iconColor="text-green-400"
          borderColor="border-green-900/50"
          items={incomeItems}
          selectedItems={selectedItems}
          onToggleItem={handleToggleItem}
          onRemoveItem={handleRemoveCustomItem}
        />
        <TrackerSection
          title="Expenses"
          icon={TrendingDown}
          iconColor="text-red-400"
          borderColor="border-red-900/50"
          items={outcomeItems}
          selectedItems={selectedItems}
          onToggleItem={handleToggleItem}
          onRemoveItem={handleRemoveCustomItem}
        />
      </div>

      <CustomItemForm onAddItem={handleAddCustomItem} />

      <InfoNote />
    </div>
  )
}
