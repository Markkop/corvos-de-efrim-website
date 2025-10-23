import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { motion } from 'framer-motion'
import { Star, Trash2, Minus, Plus, Info } from 'lucide-react'
import Image from 'next/image'
import { GGMTrackerItem } from '@/lib/ggmTrackerData'

interface TrackerItemProps {
  item: GGMTrackerItem
  isSelected: boolean
  isCustom: boolean
  quantity?: number
  onToggle: (id: string) => void
  onQuantityChange?: (id: string, quantity: number) => void
  onRemove?: (id: string) => void
}

export const StellariteTrackerItem = ({
  item,
  isSelected,
  isCustom,
  quantity = 0,
  onToggle,
  onQuantityChange,
  onRemove,
}: TrackerItemProps) => {
  const calculateCost = (qty: number) => {
    if (!item.supportsQuantity || !item.costProgression || qty === 0) {
      return 0
    }

    if (item.progressionType === 'cumulative') {
      // For cumulative, the cost at index qty-1 is the total cost
      return item.costProgression[qty - 1] || 0
    } else {
      // For individual, multiply the base cost by quantity
      return (item.costProgression[0] || item.amount) * qty
    }
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (!item.supportsQuantity || !onQuantityChange) return

    const maxQty = item.maxQuantity || 1
    const minQty = isSelected ? 1 : 0
    const clampedQuantity = Math.max(minQty, Math.min(newQuantity, maxQty))

    // If quantity would go to 0 and item is selected, uncheck it instead
    if (newQuantity < 1 && isSelected) {
      onToggle(item.id)
      onQuantityChange(item.id, 0)
      return
    }

    onQuantityChange(item.id, clampedQuantity)
  }

  const getDefaultQuantity = () => {
    if (!item.supportsQuantity) return 0
    if (item.category === 'Quick Purchase') {
      return Math.min(3, item.maxQuantity || 1)
    }
    if (item.category === 'Guild Watering') {
      return Math.min(1, item.maxQuantity || 1)
    }
    return item.maxQuantity || 1
  }

  const displayAmount = item.supportsQuantity
    ? calculateCost(quantity > 0 ? quantity : getDefaultQuantity())
    : item.amount

  const handleItemClick = () => {
    onToggle(item.id)
    // If checking and item supports quantity, set quantity
    if (!isSelected && item.supportsQuantity && onQuantityChange) {
      onQuantityChange(item.id, getDefaultQuantity())
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={handleItemClick}
      className="flex items-center space-x-3 p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-colors cursor-pointer"
    >
      <Checkbox
        id={item.id}
        checked={isSelected}
        onCheckedChange={handleItemClick}
        onClick={(e) => e.stopPropagation()}
        className="border-amber-600 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
      />
      <div className="flex-1 flex items-center justify-between gap-3">
        <div className="text-sm">
          <div className="flex items-center gap-1.5">
            <span className="text-[#e6d7c3]">{item.name}</span>
            {item.recommended && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div onClick={(e) => e.stopPropagation()}>
                      <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400 cursor-help" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Recommended</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
            {item.infoTooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div onClick={(e) => e.stopPropagation()}>
                      <Info className="h-3.5 w-3.5 text-blue-400 cursor-help" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-xs">{item.infoTooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>

        <div
          className="flex items-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {item.supportsQuantity && isSelected && onQuantityChange && (
            <div className="flex items-center gap-1 bg-[#2a2a2a] rounded px-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  handleQuantityChange(quantity - 1)
                }}
                disabled={quantity <= 1}
                className="h-7 w-7 p-0 hover:bg-amber-900/20 hover:text-amber-400 disabled:opacity-30"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <Input
                type="number"
                min={1}
                max={item.maxQuantity || 1}
                value={quantity}
                onChange={(e) => {
                  e.stopPropagation()
                  const value = parseInt(e.target.value) || 1
                  handleQuantityChange(value)
                }}
                onClick={(e) => e.stopPropagation()}
                className="h-7 w-12 text-center text-xs bg-[#1a1a1a] border-amber-900/30 text-amber-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  handleQuantityChange(quantity + 1)
                }}
                disabled={quantity >= (item.maxQuantity || 1)}
                className="h-7 w-7 p-0 hover:bg-amber-900/20 hover:text-amber-400 disabled:opacity-30"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          )}

          <div className="flex items-center gap-1">
            <span className="text-amber-500 font-bold">
              {displayAmount.toLocaleString()}
            </span>
            <Image
              src="/icons/stellarite.png"
              alt="Stellarite"
              width={14}
              height={14}
              className="inline-block"
            />
          </div>
          {item.frequency === 'daily' ? (
            <span className="text-xs text-gray-400 bg-[#2a2a2a] px-2 py-1 rounded">
              Daily
            </span>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="text-xs text-gray-400 bg-[#2a2a2a] px-2 py-1 rounded cursor-help">
                    {item.frequency === 'weekly' && 'Weekly'}
                    {item.frequency === 'monthly' && 'Monthly'}
                    {item.frequency === '10-day' && '10-day'}
                    {item.frequency === '8-day' && '8-day'}
                    {item.frequency === '14-day' && '14-day'}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">
                    {item.frequency === 'weekly' &&
                      `~${Math.round(displayAmount / 7)} daily`}
                    {item.frequency === 'monthly' &&
                      `~${Math.round(displayAmount / 30)} daily`}
                    {item.frequency === '10-day' &&
                      `~${Math.round(displayAmount / 10)} daily`}
                    {item.frequency === '8-day' &&
                      `~${Math.round(displayAmount / 8)} daily`}
                    {item.frequency === '14-day' &&
                      `~${Math.round(displayAmount / 14)} daily`}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>

      {isCustom && onRemove && (
        <Button
          variant="ghost"
          size="sm"
          onClick={(e) => {
            e.stopPropagation()
            onRemove(item.id)
          }}
          className="h-8 w-8 p-0 hover:bg-red-900/20 hover:text-red-400"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}
    </motion.div>
  )
}
