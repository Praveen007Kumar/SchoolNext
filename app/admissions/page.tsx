'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, FileText, DollarSign, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { schoolConfig } from '@/lib/config'

const admissionSteps = [
  {
    step: 1,
    title: 'Enquiry & Registration',
    description: 'Visit the school or fill the online enquiry form. Submit required documents.',
  },
  {
    step: 2,
    title: 'Entrance Test',
    description: 'Appear for the entrance examination (for classes I onwards).',
  },
  {
    step: 3,
    title: 'Interaction',
    description: 'Student and parent interaction with the admission committee.',
  },
  {
    step: 4,
    title: 'Document Verification',
    description: 'Submit and verify all required documents.',
  },
  {
    step: 5,
    title: 'Fee Payment',
    description: 'Complete the admission process by paying the fees.',
  },
]

const eligibilityCriteria = [
  { class: 'Nursery', age: '3+ years as on 31st March', documents: 'Birth Certificate' },
  { class: 'LKG', age: '4+ years as on 31st March', documents: 'Birth Certificate, Previous School TC' },
  { class: 'UKG', age: '5+ years as on 31st March', documents: 'Birth Certificate, Previous School TC' },
  { class: 'Class I - XII', age: 'As per CBSE norms', documents: 'Birth Certificate, Previous School TC, Mark Sheets' },
]

const feeStructure = [
  { item: 'Admission Fee (One-time)', amount: '₹25,000' },
  { item: 'Annual Charges', amount: '₹15,000' },
  { item: 'Tuition Fee (Monthly)', amount: '₹8,000' },
  { item: 'Transport Fee (Monthly)', amount: '₹2,500 (Optional)' },
  { item: 'Library Fee (Annual)', amount: '₹2,000' },
  { item: 'Lab Fee (Annual)', amount: '₹3,000' },
  { item: 'Sports Fee (Annual)', amount: '₹2,500' },
]

export default function AdmissionsPage() {
  const [expandedFee, setExpandedFee] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your enquiry! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', class: '', message: '' })
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-xl text-primary-100">
              Admissions Open for Academic Session {schoolConfig.academicSession}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
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
              Admission Process
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Simple steps to join our school community
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />

              <div className="space-y-8">
                {admissionSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="relative flex items-start gap-6"
                  >
                    {/* Step Number */}
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full items-center justify-center text-white font-bold text-xl z-10">
                      {step.step}
                    </div>
                    <div className="md:hidden flex flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>

                    {/* Content */}
                    <Card className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Eligibility Criteria
              </h2>
            </div>

            <Card>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                        Class
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                        Age Requirement
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900 dark:text-white">
                        Required Documents
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {eligibilityCriteria.map((criteria, index) => (
                      <tr
                        key={criteria.class}
                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                          {criteria.class}
                        </td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                          {criteria.age}
                        </td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                          {criteria.documents}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <button
                onClick={() => setExpandedFee(!expandedFee)}
                className="w-full flex items-center justify-between mb-4"
              >
                <div className="flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Fee Structure</h2>
                </div>
                {expandedFee ? (
                  <ChevronUp className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                )}
              </button>

              {expandedFee && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3"
                >
                  {feeStructure.map((fee) => (
                    <div
                      key={fee.item}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <span className="text-gray-700 dark:text-gray-300">{fee.item}</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {fee.amount}
                      </span>
                    </div>
                  ))}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                    * Fees are subject to revision. Please contact the school office for the latest
                    fee structure.
                  </p>
                </motion.div>
              )}
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Online Enquiry Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Class Seeking Admission *
                  </label>
                  <select
                    required
                    value={formData.class}
                    onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select Class</option>
                    <option value="Nursery">Nursery</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="Class I">Class I</option>
                    <option value="Class II">Class II</option>
                    <option value="Class III">Class III</option>
                    <option value="Class IV">Class IV</option>
                    <option value="Class V">Class V</option>
                    <option value="Class VI">Class VI</option>
                    <option value="Class VII">Class VII</option>
                    <option value="Class VIII">Class VIII</option>
                    <option value="Class IX">Class IX</option>
                    <option value="Class X">Class X</option>
                    <option value="Class XI">Class XI</option>
                    <option value="Class XII">Class XII</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Enquiry
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

