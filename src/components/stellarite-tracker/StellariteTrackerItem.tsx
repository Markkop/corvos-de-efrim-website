import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { motion } from 'framer-motion'
import { Star, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { GGMTrackerItem } from '@/lib/ggmTrackerData'

interface TrackerItemProps {
  item: GGMTrackerItem
  isSelected: boolean
  isCustom: boolean
  onToggle: (id: string) => void
  onRemove?: (id: string) => void
}

export const StellariteTrackerItem = ({
  item,
  isSelected,
  isCustom,
  onToggle,
  onRemove,
}: TrackerItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center space-x-3 p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] transition-colors"
    >
      <Checkbox
        id={item.id}
        checked={isSelected}
        onCheckedChange={() => onToggle(item.id)}
        className="border-amber-600 data-[state=checked]:bg-amber-600 data-[state=checked]:border-amber-600"
      />
      <label htmlFor={item.id} className="flex-1 cursor-pointer text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <span className="text-[#e6d7c3]">{item.name}</span>
            {item.recommended && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400 cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Recommended</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-amber-500 font-bold">
                {item.amount.toLocaleString()}
              </span>
              <Image
                src="/icons/stellarite.png"
                alt="Stellarite"
                width={14}
                height={14}
                className="inline-block"
              />
            </div>
            <span className="text-xs text-gray-400 bg-[#2a2a2a] px-2 py-1 rounded">
              {item.frequency === 'daily' && 'Daily'}
              {item.frequency === 'weekly' && 'Weekly'}
              {item.frequency === 'monthly' && 'Monthly'}
            </span>
          </div>
        </div>
      </label>
      {isCustom && onRemove && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(item.id)}
          className="h-8 w-8 p-0 hover:bg-red-900/20 hover:text-red-400"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}
    </motion.div>
  )
}
