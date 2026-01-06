'use client'

import { motion } from 'framer-motion'
import { Bell, Calendar, FileText, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import { formatDate } from '@/lib/utils'

const notices = [
  {
    id: 1,
    title: 'Admissions Open for Academic Session 2025-26',
    date: '2025-01-15',
    category: 'general',
    isNew: true,
    content: 'We are pleased to announce that admissions are now open for the academic session 2025-26. Interested parents can visit the school or fill the online enquiry form.',
  },
  {
    id: 2,
    title: 'Annual Sports Day - 15th March 2025',
    date: '2025-02-01',
    category: 'event',
    isNew: true,
    content: 'The Annual Sports Day will be held on 15th March 2025. All students are encouraged to participate. Parents are cordially invited to witness the event.',
  },
  {
    id: 3,
    title: 'Parent-Teacher Meeting - 20th March 2025',
    date: '2025-02-10',
    category: 'academic',
    isNew: false,
    content: 'Parent-Teacher Meeting scheduled for 20th March 2025 from 9:00 AM to 12:00 PM. Please confirm your attendance.',
  },
  {
    id: 4,
    title: 'Summer Vacation begins from 1st May 2025',
    date: '2025-03-15',
    category: 'general',
    isNew: false,
    content: 'Summer vacation will commence from 1st May 2025. School will reopen on 1st July 2025.',
  },
  {
    id: 5,
    title: 'Science Exhibition - 25th April 2025',
    date: '2025-03-20',
    category: 'event',
    isNew: false,
    content: 'Annual Science Exhibition showcasing innovative projects by students. All are welcome to attend.',
  },
  {
    id: 6,
    title: 'Board Exam Results - Class X & XII',
    date: '2025-04-01',
    category: 'academic',
    isNew: false,
    content: 'Congratulations to all students for excellent performance in board examinations. Results available on CBSE website.',
  },
]

const newsItems = [
  {
    id: 1,
    title: 'School Wins Best CBSE School Award 2024',
    date: '2025-01-10',
    category: 'Achievement',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    excerpt: 'Our school has been recognized as the Best CBSE School in the region for outstanding academic performance and holistic development programs.',
  },
  {
    id: 2,
    title: 'Students Excel in National Science Olympiad',
    date: '2025-01-05',
    category: 'Achievement',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    excerpt: '15 students from our school qualified for the national level, with 3 students winning medals in the competition.',
  },
  {
    id: 3,
    title: 'New Smart Classrooms Inaugurated',
    date: '2024-12-20',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80',
    excerpt: 'State-of-the-art smart classrooms with interactive boards and digital learning tools have been inaugurated to enhance the learning experience.',
  },
]

export default function NewsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Notices</h1>
            <p className="text-xl text-primary-100">
              Stay updated with the latest announcements and school news
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notices Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Latest Notices</h2>
            </div>

            <div className="space-y-4 max-w-4xl">
              {notices.map((notice, index) => (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {notice.isNew && (
                            <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded animate-pulse">
                              NEW
                            </span>
                          )}
                          <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded">
                            {notice.category}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(notice.date)}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                          {notice.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">{notice.content}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">School News</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="overflow-hidden">
                    <div className="relative h-48 mb-4">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded">
                        {news.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(news.date)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {news.excerpt}
                    </p>
                    <button className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium flex items-center gap-1">
                      Read More <ExternalLink className="w-4 h-4" />
                    </button>
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

