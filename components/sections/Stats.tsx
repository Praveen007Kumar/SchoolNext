'use client'

import { motion } from 'framer-motion'
import { Users, GraduationCap, Award, Calendar } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { stats } from '@/lib/config'

const statItems = [
  { icon: Users, label: 'Students', value: stats.students },
  { icon: GraduationCap, label: 'Teachers', value: stats.teachers },
  { icon: Calendar, label: 'Years of Excellence', value: stats.years },
  { icon: Award, label: 'Awards', value: stats.awards },
]

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements in Numbers</h2>
          <p className="text-primary-100 text-lg">Building excellence, one milestone at a time</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {statItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/10 rounded-full">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={item.value} suffix="+" />
                </div>
                <div className="text-primary-100 text-sm md:text-base">{item.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

