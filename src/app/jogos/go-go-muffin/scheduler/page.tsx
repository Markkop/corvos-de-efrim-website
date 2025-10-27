'use client'

import { GGMScheduler } from '@/components/GGMScheduler'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Calendar, Info } from 'lucide-react'

export default function GGMSchedulerPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <GGMScheduler initialDate={new Date('2025-10-01')} daysToShow={120} />
      </motion.div>
    </div>
  )
}
