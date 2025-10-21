import { Card, CardContent } from '@/components/ui/card'

export const StellariteTrackerInfoNote = () => {
  return (
    <Card className="bg-amber-900/20 border-amber-700/50">
      <CardContent className="pt-6">
        <p className="text-sm text-amber-200">
          <strong>Note:</strong> The totals are calculated to show your income/expenses per time period:
        </p>
        <ul className="text-sm text-amber-200 mt-2 ml-4 list-disc space-y-1">
          <li><strong>Daily:</strong> Shows your average per day (includes weekly ÷ 7 and monthly ÷ 30)</li>
          <li><strong>Weekly:</strong> Shows your total per week (daily × 7 + weekly + monthly ÷ 4.3)</li>
          <li><strong>Monthly:</strong> Shows your total per month (daily × 30 + weekly × 4.3 + monthly)</li>
        </ul>
        <p className="text-sm text-amber-200 mt-2">
          Only check the items you actually complete/acquire.
        </p>
      </CardContent>
    </Card>
  )
}
