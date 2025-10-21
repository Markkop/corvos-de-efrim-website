import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { LucideIcon } from 'lucide-react'

interface SummaryCardProps {
  title: string
  icon: LucideIcon
  iconColor: string
  borderColor: string
  bgGradient: string
  daily: number
  weekly: number
  monthly: number
  valueColor: string
  showSign?: boolean
}

export const StellariteTrackerSummaryCard = ({
  title,
  icon: Icon,
  iconColor,
  borderColor,
  bgGradient,
  daily,
  weekly,
  monthly,
  valueColor,
  showSign = false,
}: SummaryCardProps) => {
  const formatValue = (value: number) => {
    if (showSign) {
      return `${value >= 0 ? '+' : ''}${value.toLocaleString()}`
    }
    return value.toLocaleString()
  }

  const getColorClass = (value: number) => {
    if (!showSign) return valueColor
    return value >= 0 ? 'text-green-400' : 'text-red-400'
  }

  return (
    <Card className={`${bgGradient} ${borderColor}`}>
      <CardHeader className="pb-3">
        <CardTitle className={`flex items-center gap-2 ${iconColor}`}>
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Daily:</span>
          <div className="flex items-center gap-1">
            <span className={`font-bold ${getColorClass(daily)}`}>
              {formatValue(daily)}
            </span>
            <Image
              src="/icons/stellarite.png"
              alt="Stellarite"
              width={16}
              height={16}
              className="inline-block"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Weekly:</span>
          <div className="flex items-center gap-1">
            <span className={`font-bold ${getColorClass(weekly)}`}>
              {formatValue(weekly)}
            </span>
            <Image
              src="/icons/stellarite.png"
              alt="Stellarite"
              width={16}
              height={16}
              className="inline-block"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-400">Monthly:</span>
          <div className="flex items-center gap-1">
            <span className={`font-bold ${getColorClass(monthly)}`}>
              {formatValue(monthly)}
            </span>
            <Image
              src="/icons/stellarite.png"
              alt="Stellarite"
              width={16}
              height={16}
              className="inline-block"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
