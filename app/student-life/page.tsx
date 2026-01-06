'use client'

import { motion } from 'framer-motion'
import { Music, Palette, Trophy, Users, Calendar, Camera } from 'lucide-react'
import Card from '@/components/ui/Card'

const activities = [
  {
    icon: Music,
    title: 'Music & Dance',
    description: 'Western and Indian classical music, dance forms including Bharatanatyam, Kathak, and contemporary dance.',
  },
  {
    icon: Palette,
    title: 'Arts & Crafts',
    description: 'Painting, sketching, pottery, and various craft activities to nurture creativity.',
  },
  {
    icon: Trophy,
    title: 'Sports',
    description: 'Cricket, football, basketball, athletics, and indoor games for physical fitness.',
  },
  {
    icon: Users,
    title: 'Clubs & Societies',
    description: 'Science club, literary club, debate society, environmental club, and more.',
  },
  {
    icon: Calendar,
    title: 'Events & Celebrations',
    description: 'Annual day, sports day, cultural festivals, and various celebrations throughout the year.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Photography club for students interested in capturing moments and storytelling.',
  },
]

const houses = [
  { name: 'Aryabhatta House', color: 'bg-blue-500', description: 'Named after the great mathematician' },
  { name: 'Tagore House', color: 'bg-green-500', description: 'Named after the Nobel laureate poet' },
  { name: 'Raman House', color: 'bg-yellow-500', description: 'Named after the Nobel Prize physicist' },
  { name: 'Kalam House', color: 'bg-red-500', description: 'Named after the Missile Man of India' },
]

export default function StudentLifePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Life</h1>
            <p className="text-xl text-primary-100">
              Beyond academics - A vibrant and enriching school experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Co-curricular Activities
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Opportunities for holistic development and exploration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {activities.map((activity, index) => {
              const Icon = activity.icon
              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {activity.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{activity.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* House System */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">House System</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Fostering healthy competition and team spirit
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {houses.map((house, index) => (
              <motion.div
                key={house.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="text-center">
                  <div className={`w-16 h-16 ${house.color} rounded-full mx-auto mb-4`} />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {house.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{house.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Celebrations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Annual Events
            </h2>
            <div className="space-y-4">
              {[
                { event: 'Annual Day', month: 'December', desc: 'Grand celebration of achievements and talents' },
                { event: 'Sports Day', month: 'March', desc: 'Inter-house sports competitions and athletic events' },
                { event: 'Science Exhibition', month: 'October', desc: 'Showcasing innovative projects and experiments' },
                { event: 'Cultural Fest', month: 'November', desc: 'Music, dance, and drama performances' },
              ].map((item, index) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {item.event}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-primary-600 dark:text-primary-400 font-semibold">
                          {item.month}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

