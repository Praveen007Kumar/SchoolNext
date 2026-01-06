'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Calendar, Download, ChevronDown, ChevronUp } from 'lucide-react'
import Card from '@/components/ui/Card'
import { schoolConfig } from '@/lib/config'

const classStructure = [
  { level: 'Pre-Primary', classes: ['Nursery', 'LKG', 'UKG'], age: '3-5 years' },
  { level: 'Primary', classes: ['Class I', 'Class II', 'Class III', 'Class IV', 'Class V'], age: '6-10 years' },
  { level: 'Middle', classes: ['Class VI', 'Class VII', 'Class VIII'], age: '11-13 years' },
  { level: 'Secondary', classes: ['Class IX', 'Class X'], age: '14-15 years' },
  { level: 'Senior Secondary', classes: ['Class XI', 'Class XII'], age: '16-17 years' },
]

const teachingMethods = [
  {
    title: 'Interactive Learning',
    description: 'Engaging students through interactive sessions, discussions, and hands-on activities',
  },
  {
    title: 'Technology Integration',
    description: 'Smart classrooms with digital boards, multimedia content, and online resources',
  },
  {
    title: 'Project-Based Learning',
    description: 'Encouraging critical thinking through real-world projects and problem-solving',
  },
  {
    title: 'Assessment & Evaluation',
    description: 'Continuous assessment with formative and summative evaluations',
  },
]

export default function AcademicsPage() {
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Academics</h1>
            <p className="text-xl text-primary-100">
              {schoolConfig.board} Curriculum - Excellence in Education from {schoolConfig.classes}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Curriculum Overview</h2>
            </div>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our school follows the {schoolConfig.board} curriculum, which is designed to provide
                a balanced and comprehensive education. The curriculum emphasizes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Strong foundation in core subjects (Mathematics, Science, Languages)</li>
                <li>Development of critical thinking and problem-solving skills</li>
                <li>Integration of technology and modern teaching methods</li>
                <li>Focus on holistic development including sports, arts, and life skills</li>
                <li>Preparation for competitive examinations and higher education</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Class Structure */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Class Structure</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive education from {schoolConfig.classes}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {classStructure.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <button
                    onClick={() => setExpandedLevel(expandedLevel === level.level ? null : level.level)}
                    className="w-full flex items-center justify-between"
                  >
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {level.level}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Age: {level.age}</p>
                    </div>
                    {expandedLevel === level.level ? (
                      <ChevronUp className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    )}
                  </button>
                  {expandedLevel === level.level && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex flex-wrap gap-2">
                        {level.classes.map((cls) => (
                          <span
                            key={cls}
                            className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                          >
                            {cls}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
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
              Teaching Methodology
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Innovative approaches to enhance learning outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {teachingMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{method.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Academic Calendar</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Academic Session: {schoolConfig.academicSession}
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Session Begins</span>
                  <span className="text-gray-600 dark:text-gray-400">April 2025</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">First Term Exams</span>
                  <span className="text-gray-600 dark:text-gray-400">September 2025</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="font-medium text-gray-900 dark:text-white">Annual Exams</span>
                  <span className="text-gray-600 dark:text-gray-400">March 2026</span>
                </div>
              </div>
              <button className="mt-6 flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline">
                <Download className="w-5 h-5" />
                Download Full Calendar (PDF)
              </button>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

