'use client'

import { motion } from 'framer-motion'
import { Bell, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const notices = [
  { id: 1, title: 'Admissions Open for Academic Session 2025-26', isNew: true },
  { id: 2, title: 'Annual Sports Day - 15th March 2025', isNew: true },
  { id: 3, title: 'Parent-Teacher Meeting - 20th March 2025', isNew: false },
  { id: 4, title: 'Summer Vacation begins from 1st May 2025', isNew: false },
]

export default function NoticesTicker() {
  return (
    <section className="bg-primary-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 overflow-hidden">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Bell className="w-5 h-5" />
            <span className="font-semibold">Latest Notices:</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
              className="flex gap-8"
            >
              {[...notices, ...notices].map((notice, index) => (
                <div key={`${notice.id}-${index}`} className="flex items-center gap-2 flex-shrink-0">
                  {notice.isNew && (
                    <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded">
                      NEW
                    </span>
                  )}
                  <span className="whitespace-nowrap">{notice.title}</span>
                </div>
              ))}
            </motion.div>
          </div>
          <Link
            href="/news"
            className="flex items-center gap-1 hover:underline flex-shrink-0 text-sm font-medium"
          >
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

