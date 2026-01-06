'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, Medal, Star } from 'lucide-react'
import Card from '@/components/ui/Card'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { stats } from '@/lib/config'

const achievements = [
  {
    icon: Trophy,
    title: 'Board Exam Excellence',
    description: '95% students scored above 80% in Class X and XII board examinations',
    year: '2024',
    category: 'academic',
  },
  {
    icon: Award,
    title: 'National Science Olympiad',
    description: '15 students qualified for the national level, 3 won medals',
    year: '2024',
    category: 'academic',
  },
  {
    icon: Medal,
    title: 'State Sports Championship',
    description: 'Won 5 gold, 3 silver, and 2 bronze medals in inter-school competitions',
    year: '2024',
    category: 'sports',
  },
  {
    icon: Star,
    title: 'Best School Award',
    description: 'Recognized as Best CBSE School in the region by Education Times',
    year: '2023',
    category: 'other',
  },
  {
    icon: Trophy,
    title: 'Debate Competition',
    description: 'Won first place in state-level inter-school debate competition',
    year: '2024',
    category: 'cultural',
  },
  {
    icon: Award,
    title: 'Mathematics Olympiad',
    description: '8 students qualified for regional level, 2 for national level',
    year: '2024',
    category: 'academic',
  },
]

export default function AchievementsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h1>
            <p className="text-xl text-primary-100">
              Celebrating excellence in academics, sports, and beyond
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Track Record
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { label: 'Awards Won', value: stats.awards },
              { label: 'Years of Excellence', value: stats.years },
              { label: 'Students', value: stats.students },
              { label: 'Teachers', value: stats.teachers },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="text-center">
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    <AnimatedCounter value={stat.value} suffix="+" />
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements List */}
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
              Recent Achievements
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Highlights of our students' and school's accomplishments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded">
                            {achievement.category}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {achievement.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

