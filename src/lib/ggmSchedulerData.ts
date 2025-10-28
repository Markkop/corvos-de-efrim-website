import { paperPlaneData } from './paperPlaneData'

export interface GGMSchedulerEvent {
  id: string
  title: string
  start: Date
  end: Date
  color?: string
  category?: string
}

// Paper Plane category colors
const paperPlaneColors: Record<string, string> = {
  Melomon: '#ff6b9d',
  Skill: '#4CAF50',
  Artifact: '#FFB74D',
  Mount: '#64B5F6',
  CatBun: '#BA68C8',
  Stellar: '#FFD54F',
}

// Calculate Paper Plane events based on cycles
// Cycle 46 (Stellar) ends Oct 28, 2025 at 02:40 (server time)
// Each cycle is 7 days, displayed as full day blocks
const generatePaperPlaneEvents = (): GGMSchedulerEvent[] => {
  const cycle46EndDay = new Date('2025-10-28T00:00:00') // Start of the day cycle 46 ends
  const cycleDuration = 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds

  return paperPlaneData.map((plane) => {
    // Calculate days offset from cycle 46
    const cycleOffset = plane.cycle - 46
    const cycleEndDay = new Date(
      cycle46EndDay.getTime() + cycleOffset * cycleDuration,
    )

    // Each cycle starts at midnight and ends at 23:59:59 of the last day
    const startTime = new Date(cycleEndDay.getTime() - cycleDuration)
    const endTime = new Date(cycleEndDay.getTime() - 1) // 1ms before next cycle starts

    return {
      id: `paper-plane-${plane.cycle}`,
      title: `PP${plane.cycle}: ${plane.type}${plane.unlockedContent !== '-' ? ` - ${plane.unlockedContent}` : ''}`,
      start: startTime,
      end: endTime,
      color: plane.type === 'Melomon' ? '#C28813' : '#808080',
      category: 'paper-plane',
    }
  })
}

// Main events (non-paper plane)
const mainEvents: GGMSchedulerEvent[] = [
  {
    id: 'tasha-crystal-nest-cliff',
    title: "Tasha's Commission: Crystal Nest Cliff",
    color: '#00d4ff',
    start: new Date('2025-10-22T05:00:00'),
    end: new Date('2025-10-28T04:00:00'),
    category: 'event',
  },
  {
    id: 'lycagon-echoes-battlefield',
    title: 'Echoes of Battlefield: Lycagon the Nightslayer',
    color: '#8b0000',
    start: new Date('2025-10-29T05:00:00'),
    end: new Date('2025-11-12T04:00:00'),
    category: 'event',
  },
  {
    id: 'wishlist-melomon-wishlist',
    title: 'Melomon Wishlist',
    color: '#9b59b6',
    start: new Date('2025-10-22T05:00:00'),
    end: new Date('2025-10-28T05:00:00'),
    category: 'wishlist',
  },
]

// Combine all events
export const ggmSchedulerEvents: GGMSchedulerEvent[] = [
  ...mainEvents,
  ...generatePaperPlaneEvents(),
]
