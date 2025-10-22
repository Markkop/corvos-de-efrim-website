import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Plus } from 'lucide-react'

interface CustomItemFormProps {
  onAddItem: (
    name: string,
    amount: number,
    frequency: 'daily' | 'weekly' | 'monthly' | '10-day' | '8-day' | '14-day',
    type: 'income' | 'outcome',
  ) => void
}

export const StellariteTrackerCustomItemForm = ({
  onAddItem,
}: CustomItemFormProps) => {
  const [itemName, setItemName] = useState('')
  const [itemAmount, setItemAmount] = useState('')
  const [itemFrequency, setItemFrequency] = useState<
    'daily' | 'weekly' | 'monthly' | '10-day' | '8-day' | '14-day'
  >('daily')
  const [itemType, setItemType] = useState<'income' | 'outcome'>('income')

  const handleAddItem = () => {
    if (!itemName.trim() || !itemAmount) return

    const amount = parseFloat(itemAmount)
    if (isNaN(amount) || amount <= 0) return

    onAddItem(itemName.trim(), amount, itemFrequency, itemType)

    // Reset form
    setItemName('')
    setItemAmount('')
  }

  return (
    <Card className="bg-[#2a2a2a] border-purple-900/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-purple-400">
          <Plus className="h-5 w-5" />
          Add Custom Item
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2">
            <Label
              htmlFor="item-name"
              className="text-sm text-gray-400 mb-2 block"
            >
              Item Name
            </Label>
            <Input
              id="item-name"
              placeholder="e.g. Special Event"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="bg-[#1a1a1a] border-gray-700"
            />
          </div>
          <div>
            <Label
              htmlFor="item-amount"
              className="text-sm text-gray-400 mb-2 block"
            >
              Amount
            </Label>
            <Input
              id="item-amount"
              type="number"
              placeholder="100"
              value={itemAmount}
              onChange={(e) => setItemAmount(e.target.value)}
              className="bg-[#1a1a1a] border-gray-700"
            />
          </div>
          <div>
            <Label
              htmlFor="item-frequency"
              className="text-sm text-gray-400 mb-2 block"
            >
              Frequency
            </Label>
            <Select
              value={itemFrequency}
              onValueChange={(value) =>
                setItemFrequency(
                  value as
                    | 'daily'
                    | 'weekly'
                    | 'monthly'
                    | '10-day'
                    | '8-day'
                    | '14-day',
                )
              }
            >
              <SelectTrigger
                id="item-frequency"
                className="bg-[#1a1a1a] border-gray-700"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="10-day">10-day</SelectItem>
                <SelectItem value="8-day">8-day</SelectItem>
                <SelectItem value="14-day">14-day</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="item-type"
              className="text-sm text-gray-400 mb-2 block"
            >
              Type
            </Label>
            <Select
              value={itemType}
              onValueChange={(value) =>
                setItemType(value as 'income' | 'outcome')
              }
            >
              <SelectTrigger
                id="item-type"
                className="bg-[#1a1a1a] border-gray-700"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="outcome">Expense</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button
          onClick={handleAddItem}
          className="mt-4 bg-purple-600 hover:bg-purple-700 w-full md:w-auto"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </CardContent>
    </Card>
  )
}
