'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Mail } from 'lucide-react'
import Card from '@/components/ui/Card'
import Image from 'next/image'

const teachers = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    subject: 'Mathematics',
    qualification: 'Ph.D. in Mathematics, M.Sc., B.Ed.',
    experience: '15 years',
    bio: 'Specialized in Algebra and Calculus. Passionate about making mathematics fun and accessible.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    id: 2,
    name: 'Mr. Rajesh Kumar',
    subject: 'Physics',
    qualification: 'M.Sc. Physics, B.Ed.',
    experience: '12 years',
    bio: 'Expert in experimental physics with a focus on practical learning and innovation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 3,
    name: 'Mrs. Anjali Patel',
    subject: 'Chemistry',
    qualification: 'M.Sc. Chemistry, B.Ed.',
    experience: '10 years',
    bio: 'Dedicated to fostering scientific curiosity and critical thinking in students.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    id: 4,
    name: 'Dr. Amit Verma',
    subject: 'Biology',
    qualification: 'Ph.D. in Botany, M.Sc., B.Ed.',
    experience: '14 years',
    bio: 'Research-oriented educator with expertise in plant sciences and biotechnology.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    id: 5,
    name: 'Ms. Sneha Reddy',
    subject: 'English',
    qualification: 'M.A. English Literature, B.Ed.',
    experience: '8 years',
    bio: 'Passionate about literature and language, inspiring students to express themselves effectively.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
  },
  {
    id: 6,
    name: 'Mr. Vikram Singh',
    subject: 'Computer Science',
    qualification: 'M.Tech. Computer Science, B.Ed.',
    experience: '11 years',
    bio: 'Tech enthusiast teaching programming, AI, and modern computing concepts.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
]

export default function FacultyPage() {
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Faculty & Staff</h1>
            <p className="text-xl text-primary-100">
              Meet our dedicated team of educators committed to student success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our faculty members are highly qualified, experienced, and passionate about teaching.
              They bring a wealth of knowledge and innovative teaching methods to create an engaging
              learning environment for our students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teacher Cards */}
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
              Our Teachers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onHoverStart={() => setSelectedTeacher(teacher.id)}
                onHoverEnd={() => setSelectedTeacher(null)}
              >
                <Card className="text-center overflow-hidden">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                    {teacher.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {teacher.subject}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>{teacher.qualification}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{teacher.experience} Experience</span>
                    </div>
                  </div>
                  {selectedTeacher === teacher.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-400">{teacher.bio}</p>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

