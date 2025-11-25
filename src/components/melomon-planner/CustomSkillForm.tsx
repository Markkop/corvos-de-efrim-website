'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Plus } from 'lucide-react'
import { createCustomSkill } from '@/lib/melomonData'
import { MelomonSkill } from '@/lib/melomonData'

interface CustomSkillFormProps {
  onAddSkill: (skill: MelomonSkill) => void
}

export const CustomSkillForm = ({ onAddSkill }: CustomSkillFormProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [baseValue, setBaseValue] = useState('')
  const [increasePerLevel, setIncreasePerLevel] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const baseValueNum = parseFloat(baseValue)
    const increasePerLevelNum = parseFloat(increasePerLevel)

    if (
      !name.trim() ||
      !description.trim() ||
      isNaN(baseValueNum) ||
      isNaN(increasePerLevelNum) ||
      baseValueNum < 0 ||
      increasePerLevelNum < 0
    ) {
      return
    }

    const skill = createCustomSkill(
      name.trim(),
      description.trim(),
      baseValueNum,
      increasePerLevelNum,
    )

    onAddSkill(skill)

    // Reset form
    setName('')
    setDescription('')
    setBaseValue('')
    setIncreasePerLevel('')
    setIsOpen(false)
  }

  const handleCancel = () => {
    setName('')
    setDescription('')
    setBaseValue('')
    setIncreasePerLevel('')
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <div className="flex justify-center">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Custom Skill
        </Button>
      </div>
    )
  }

  return (
    <Card className="bg-[#2a2a2a] text-[#e6d7c3] border-amber-700">
      <CardHeader>
        <CardTitle>Create Custom Skill</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="custom-name">Skill Name</Label>
            <Input
              id="custom-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter skill name"
              className="bg-gray-800 border-gray-700 text-[#e6d7c3]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="custom-description">Description</Label>
            <Textarea
              id="custom-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter skill description"
              className="bg-gray-800 border-gray-700 text-[#e6d7c3]"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="custom-base-value">Base Value (%)</Label>
              <Input
                id="custom-base-value"
                type="number"
                step="0.1"
                value={baseValue}
                onChange={(e) => setBaseValue(e.target.value)}
                placeholder="0.0"
                className="bg-gray-800 border-gray-700 text-[#e6d7c3]"
                required
                min="0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom-increase">Increase per Level (%)</Label>
              <Input
                id="custom-increase"
                type="number"
                step="0.1"
                value={increasePerLevel}
                onChange={(e) => setIncreasePerLevel(e.target.value)}
                placeholder="0.0"
                className="bg-gray-800 border-gray-700 text-[#e6d7c3]"
                required
                min="0"
              />
            </div>
          </div>

          <div className="flex gap-2 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="border-gray-700 text-gray-400 hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Skill
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

