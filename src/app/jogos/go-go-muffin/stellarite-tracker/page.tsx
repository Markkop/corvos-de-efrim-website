'use client'

import { useState, useMemo, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ggmTrackerItems, GGMTrackerItem } from '@/lib/ggmTrackerData'
import { TrendingUp, TrendingDown, Wallet, RotateCcw } from 'lucide-react'
import {
  StellariteTrackerSummaryCard,
  StellariteTrackerSection,
  StellariteTrackerCustomItemForm,
  StellariteTrackerInfoNote,
} from '@/components/stellarite-tracker'

export default function StellariteTrackerPage() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())
  const [customItems, setCustomItems] = useState<GGMTrackerItem[]>([])
  const [itemQuantities, setItemQuantities] = useState<Record<string, number>>(
    {},
  )
  const [isLoaded, setIsLoaded] = useState(false)

  // Load selections, quantities, and custom items from localStorage on mount
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

    const savedQuantities = localStorage.getItem('ggm-tracker-quantities')
    if (savedQuantities) {
      try {
        const parsed = JSON.parse(savedQuantities)
        setItemQuantities(parsed)
      } catch (error) {
        console.error('Failed to load saved quantities:', error)
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

  // Save quantities to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        'ggm-tracker-quantities',
        JSON.stringify(itemQuantities),
      )
    }
  }, [itemQuantities, isLoaded])

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

  const handleQuantityChange = (id: string, quantity: number) => {
    setItemQuantities((prev) => ({
      ...prev,
      [id]: quantity,
    }))
  }

  const handleReset = () => {
    setSelectedItems(new Set())
    setItemQuantities({})
  }

  const handleAddCustomItem = (
    name: string,
    amount: number,
    frequency: 'daily' | 'weekly' | 'monthly' | '10-day' | '8-day',
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

  const calculateItemCost = (item: GGMTrackerItem, quantity: number) => {
    if (!item.supportsQuantity || !item.costProgression || quantity === 0) {
      return item.amount
    }

    if (item.progressionType === 'cumulative') {
      return item.costProgression[quantity - 1] || 0
    } else {
      return (item.costProgression[0] || item.amount) * quantity
    }
  }

  const calculateTotals = (items: GGMTrackerItem[]) => {
    const selected = items.filter((item) => selectedItems.has(item.id))

    const dailyItems = selected
      .filter((item) => item.frequency === 'daily')
      .reduce((sum, item) => {
        const quantity = itemQuantities[item.id] || 0
        const cost =
          item.supportsQuantity && quantity > 0
            ? calculateItemCost(item, quantity)
            : item.amount
        return sum + cost
      }, 0)

    const weeklyItems = selected
      .filter((item) => item.frequency === 'weekly')
      .reduce((sum, item) => {
        const quantity = itemQuantities[item.id] || 0
        const cost =
          item.supportsQuantity && quantity > 0
            ? calculateItemCost(item, quantity)
            : item.amount
        return sum + cost
      }, 0)

    const monthlyItems = selected
      .filter((item) => item.frequency === 'monthly')
      .reduce((sum, item) => {
        const quantity = itemQuantities[item.id] || 0
        const cost =
          item.supportsQuantity && quantity > 0
            ? calculateItemCost(item, quantity)
            : item.amount
        return sum + cost
      }, 0)

    const tenDayItems = selected
      .filter((item) => item.frequency === '10-day')
      .reduce((sum, item) => {
        const quantity = itemQuantities[item.id] || 0
        const cost =
          item.supportsQuantity && quantity > 0
            ? calculateItemCost(item, quantity)
            : item.amount
        return sum + cost
      }, 0)

    const eightDayItems = selected
      .filter((item) => item.frequency === '8-day')
      .reduce((sum, item) => {
        const quantity = itemQuantities[item.id] || 0
        const cost =
          item.supportsQuantity && quantity > 0
            ? calculateItemCost(item, quantity)
            : item.amount
        return sum + cost
      }, 0)

    // Calculate totals for each time period
    // Daily: include daily items + weekly/7 + monthly/30 + 10-day/10 + 8-day/8
    const dailyTotal =
      dailyItems +
      weeklyItems / 7 +
      monthlyItems / 30 +
      tenDayItems / 10 +
      eightDayItems / 8

    // Weekly: daily * 7 + weekly + monthly/~4.3 + 10-day*0.7 + 8-day*0.875
    const weeklyTotal =
      dailyItems * 7 +
      weeklyItems +
      monthlyItems / 4.3 +
      (tenDayItems * 7) / 10 +
      (eightDayItems * 7) / 8

    // Monthly: daily * 30 + weekly * ~4.3 + monthly + 10-day*3 + 8-day*3.75
    const monthlyTotal =
      dailyItems * 30 +
      weeklyItems * 4.3 +
      monthlyItems +
      (tenDayItems * 30) / 10 +
      (eightDayItems * 30) / 8

    return {
      daily: Math.round(dailyTotal),
      weekly: Math.round(weeklyTotal),
      monthly: Math.round(monthlyTotal),
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
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Track your Stellarite (cash) income and expenses in Go Go Muffin
        </p>
      </section>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StellariteTrackerSummaryCard
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
        <StellariteTrackerSummaryCard
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
        <StellariteTrackerSummaryCard
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
        <StellariteTrackerSection
          title="Income"
          icon={TrendingUp}
          iconColor="text-green-400"
          borderColor="border-green-900/50"
          items={incomeItems}
          selectedItems={selectedItems}
          itemQuantities={itemQuantities}
          onToggleItem={handleToggleItem}
          onQuantityChange={handleQuantityChange}
          onRemoveItem={handleRemoveCustomItem}
        />
        <StellariteTrackerSection
          title="Expenses"
          icon={TrendingDown}
          iconColor="text-red-400"
          borderColor="border-red-900/50"
          items={outcomeItems}
          selectedItems={selectedItems}
          itemQuantities={itemQuantities}
          onToggleItem={handleToggleItem}
          onQuantityChange={handleQuantityChange}
          onRemoveItem={handleRemoveCustomItem}
        />
      </div>

      <StellariteTrackerCustomItemForm onAddItem={handleAddCustomItem} />

      <StellariteTrackerInfoNote />

      <div className="flex justify-center">
        <Button
          onClick={handleReset}
          variant="outline"
          className="gap-2 border-red-700 text-red-400 hover:bg-red-900/20 hover:text-red-300"
        >
          <RotateCcw className="h-4 w-4" />
          Reset All Selections
        </Button>
      </div>
    </div>
  )
}
