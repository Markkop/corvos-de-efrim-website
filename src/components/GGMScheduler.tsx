'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import moment from 'moment'
import { SetStateAction } from 'react'
import { momentLocalizer, Views } from 'react-big-calendar'
import ShadcnBigCalendar from '@/components/shadcn-big-calendar/shadcn-big-calendar'
import { ggmSchedulerEvents, GGMSchedulerEvent } from '@/lib/ggmSchedulerData'
import { Plus } from 'lucide-react'

const localizer = momentLocalizer(moment)

interface GGMSchedulerProps {
  initialDate?: Date
  daysToShow?: number
}

export const GGMScheduler = ({
  initialDate = new Date('2025-09-27'),
  daysToShow = 90,
}: GGMSchedulerProps) => {
  const [view, setView] = useState(Views.MONTH)
  const [date, setDate] = useState(new Date())
  const [wishlistEvents, setWishlistEvents] = useState<GGMSchedulerEvent[]>([])
  const [isWishlistDialogOpen, setIsWishlistDialogOpen] = useState(false)
  const [wishlistStartDate, setWishlistStartDate] = useState('')
  const [wishlistEndDate, setWishlistEndDate] = useState('')

  const handleNavigate = (newDate: Date) => {
    setDate(newDate)
  }

  const handleViewChange = (newView: SetStateAction<any>) => {
    setView(newView)
  }

  const handleAddWishlist = () => {
    if (!wishlistStartDate || !wishlistEndDate) return

    const newWishlist: GGMSchedulerEvent = {
      id: `wishlist-${Date.now()}`,
      title: 'Wishlist',
      start: new Date(wishlistStartDate),
      end: new Date(wishlistEndDate),
      color: '#9b59b6',
      category: 'wishlist',
    }

    setWishlistEvents([...wishlistEvents, newWishlist])
    setIsWishlistDialogOpen(false)
    setWishlistStartDate('')
    setWishlistEndDate('')
  }

  // Combine regular events with wishlist events
  const allEvents = [...ggmSchedulerEvents, ...wishlistEvents]

  // Custom event style based on color
  const eventStyleGetter = (event: any) => {
    const style: any = {
      backgroundColor: event.color || '#3b82f6',
      borderRadius: '4px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
    }
    return { style }
  }

  return (
    <div className="space-y-4">
      {/* Wishlist Dialog */}
      <Dialog
        open={isWishlistDialogOpen}
        onOpenChange={setIsWishlistDialogOpen}
      >
        <DialogContent className="bg-[#2a2a2a] text-[#e6d7c3] border-[#e6d7c3]/20">
          <DialogHeader>
            <DialogTitle className="text-[#e6d7c3]">
              Add Wishlist Event
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="start-date" className="text-[#e6d7c3]">
                Start Date
              </Label>
              <Input
                id="start-date"
                type="date"
                value={wishlistStartDate}
                onChange={(e) => setWishlistStartDate(e.target.value)}
                className="bg-[#1a1a1a] text-[#e6d7c3] border-[#e6d7c3]/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="end-date" className="text-[#e6d7c3]">
                End Date
              </Label>
              <Input
                id="end-date"
                type="date"
                value={wishlistEndDate}
                onChange={(e) => setWishlistEndDate(e.target.value)}
                className="bg-[#1a1a1a] text-[#e6d7c3] border-[#e6d7c3]/20"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => setIsWishlistDialogOpen(false)}
                className="bg-[#1a1a1a] text-[#e6d7c3] border-[#e6d7c3]/20 hover:bg-[#2a2a2a]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddWishlist}
                className="bg-[#9b59b6] text-white hover:bg-[#8e44ad]"
              >
                Add Wishlist
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Calendar */}
      <Card className="bg-[#2a2a2a] border-[#e6d7c3]/20 overflow-hidden p-4">
        <ShadcnBigCalendar
          localizer={localizer}
          style={{ height: 600, width: '100%' }}
          date={date}
          onNavigate={handleNavigate}
          view={view}
          onView={handleViewChange}
          events={allEvents}
          eventPropGetter={eventStyleGetter}
          popup={false}
          showAllEvents={true}
        />
      </Card>

      {/* Add Wishlist Button */}
      <div className="pt-4 border-t border-[#e6d7c3]/20">
        <Button
          onClick={() => setIsWishlistDialogOpen(true)}
          className="w-full bg-[#9b59b6] text-white hover:bg-[#8e44ad]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Wishlist
        </Button>
        {wishlistEvents.length > 0 && (
          <p className="text-xs text-[#e6d7c3]/60 mt-2 text-center">
            {wishlistEvents.length} wishlist event
            {wishlistEvents.length > 1 ? 's' : ''} added (will reset on page
            refresh)
          </p>
        )}
      </div>
    </div>
  )
}
