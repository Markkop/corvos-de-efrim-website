import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GGMTrackerItem } from '@/lib/ggmTrackerData'
import { StellariteTrackerItem } from './StellariteTrackerItem'
import { LucideIcon } from 'lucide-react'

interface TrackerSectionProps {
  title: string
  icon: LucideIcon
  iconColor: string
  borderColor: string
  items: GGMTrackerItem[]
  selectedItems: Set<string>
  itemQuantities: Record<string, number>
  onToggleItem: (id: string) => void
  onQuantityChange: (id: string, quantity: number) => void
  onRemoveItem?: (id: string) => void
}

export const StellariteTrackerSection = ({
  title,
  icon: Icon,
  iconColor,
  borderColor,
  items,
  selectedItems,
  itemQuantities,
  onToggleItem,
  onQuantityChange,
  onRemoveItem,
}: TrackerSectionProps) => {
  const renderItemsByCategory = () => {
    const grouped = items.reduce(
      (acc, item) => {
        const category = item.category || 'Other'
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(item)
        return acc
      },
      {} as Record<string, GGMTrackerItem[]>,
    )

    return Object.entries(grouped).map(([category, categoryItems]) => (
      <div key={category} className="mb-6">
        <h3 className="text-sm font-semibold text-amber-400 mb-3 uppercase tracking-wide">
          {category}
        </h3>
        <div className="space-y-2">
          {categoryItems.map((item) => {
            const isCustomItem = item.id.startsWith('custom-')

            return (
              <StellariteTrackerItem
                key={item.id}
                item={item}
                isSelected={selectedItems.has(item.id)}
                isCustom={isCustomItem}
                quantity={itemQuantities[item.id] || 0}
                onToggle={onToggleItem}
                onQuantityChange={onQuantityChange}
                onRemove={onRemoveItem}
              />
            )
          })}
        </div>
      </div>
    ))
  }

  return (
    <Card className={`bg-[#2a2a2a] ${borderColor}`}>
      <CardHeader>
        <CardTitle className={`flex items-center gap-2 text-2xl ${iconColor}`}>
          <Icon className="h-6 w-6" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{renderItemsByCategory()}</CardContent>
    </Card>
  )
}
