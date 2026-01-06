'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Award, Clock } from 'lucide-react'
import Card from '@/components/ui/Card'
import { schoolConfig } from '@/lib/config'

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-primary-100">
              Building futures through excellence in education since {schoolConfig.established}
            </p>
          </motion.div>
        </div>
      </section>

      {/* School History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {schoolConfig.name} was established in {schoolConfig.established} with a vision to
                  provide quality education that combines academic excellence with holistic
                  development. Over the years, we have grown into a premier educational institution
                  recognized for our commitment to nurturing young minds.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Our school follows the {schoolConfig.board} curriculum and offers education from{' '}
                  {schoolConfig.classes}. We believe in creating an environment where students can
                  explore their potential, develop critical thinking skills, and become responsible
                  citizens of tomorrow.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  With state-of-the-art infrastructure, experienced faculty, and a focus on
                  innovation, we continue to set new benchmarks in educational excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Eye className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  To be a leading educational institution that empowers students to achieve academic
                  excellence, develop strong character, and contribute meaningfully to society. We
                  envision a school where every child discovers their unique potential and becomes a
                  lifelong learner.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Target className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  To provide a nurturing and innovative learning environment that fosters academic
                  excellence, critical thinking, creativity, and ethical values. We are committed to
                  developing well-rounded individuals who are prepared to face global challenges
                  with confidence and integrity.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
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
              Leadership Messages
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  CM
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Chairman's Message
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Mr. John Doe</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "Education is the foundation of a progressive society. At {schoolConfig.shortName},
                we are committed to providing world-class education that prepares our students for
                the challenges of tomorrow. Our focus on holistic development ensures that every
                student grows into a confident, capable, and compassionate individual."
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  PM
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Principal's Message
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Mrs. Jane Smith</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "As Principal, I am proud to lead a team of dedicated educators who are passionate
                about student success. We believe in creating a supportive learning environment
                where students are encouraged to explore, question, and innovate. Together, we
                build a community of lifelong learners."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Affiliations */}
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
              Affiliations & Accreditations
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'CBSE Affiliation', desc: 'Affiliated to Central Board of Secondary Education' },
              { title: 'ISO Certified', desc: 'ISO 9001:2015 Certified Institution' },
              { title: 'NAAC Accredited', desc: 'Accredited by National Assessment and Accreditation Council' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="text-center">
                  <Award className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

