'use client'

import { useEffect, useState } from 'react'

export interface CalendarEvent {
  id: string
  title: string
  start: Date
  end: Date
  color?: string
}

const serializeEvents = (events: CalendarEvent[]): string => {
  return JSON.stringify(
    events.map((event) => ({
      ...event,
      start: event.start.toISOString(),
      end: event.end.toISOString(),
    }))
  )
}

const deserializeEvents = (json: string): CalendarEvent[] => {
  try {
    const parsed = JSON.parse(json)
    return parsed.map((event: any) => ({
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    }))
  } catch (error) {
    console.error('Failed to parse events from localStorage:', error)
    return []
  }
}

export const useLocalStorage = (
  key: string,
  initialValue: CalendarEvent[]
): [CalendarEvent[], (value: CalendarEvent[]) => void] => {
  const [storedValue, setStoredValue] = useState<CalendarEvent[]>(initialValue)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const item = window.localStorage.getItem(key)
        if (item) {
          const parsed = deserializeEvents(item)
          setStoredValue(parsed)
        }
      } catch (error) {
        console.error('Error loading from localStorage:', error)
      }
      setIsInitialized(true)
    }
  }, [key])

  // Save to localStorage when value changes
  const setValue = (value: CalendarEvent[]) => {
    try {
      setStoredValue(value)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, serializeEvents(value))
      }
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }

  return [storedValue, setValue]
}

