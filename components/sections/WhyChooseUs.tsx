'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Award, Heart, Globe, Shield } from 'lucide-react'
import Card from '@/components/ui/Card'

const features = [
  {
    icon: BookOpen,
    title: 'CBSE Curriculum',
    description: 'Following the latest CBSE guidelines with innovative teaching methodologies',
  },
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'Consistent top performers in board examinations and competitive exams',
  },
  {
    icon: Users,
    title: 'Experienced Faculty',
    description: 'Qualified and dedicated teachers committed to student success',
  },
  {
    icon: Heart,
    title: 'Holistic Development',
    description: 'Focus on academics, sports, arts, and character building',
  },
  {
    icon: Globe,
    title: 'Modern Infrastructure',
    description: 'Smart classrooms, labs, library, and sports facilities',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'Secure campus with 24/7 security and CCTV surveillance',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We provide a nurturing environment that fosters academic excellence and personal growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

