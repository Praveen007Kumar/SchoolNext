'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, FlaskConical, BookOpen, Dumbbell, Bus, Image as ImageIcon, X } from 'lucide-react'
import Card from '@/components/ui/Card'
import Image from 'next/image'

const facilities = [
  {
    icon: Monitor,
    title: 'Smart Classrooms',
    description: 'Digitally equipped classrooms with interactive whiteboards, projectors, and multimedia systems for enhanced learning experiences.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
  },
  {
    icon: FlaskConical,
    title: 'Science Labs',
    description: 'Well-equipped Physics, Chemistry, and Biology laboratories with modern equipment and safety measures.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
  },
  {
    icon: BookOpen,
    title: 'Library',
    description: 'Extensive collection of books, journals, and digital resources with a quiet reading space for students.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
  },
  {
    icon: Dumbbell,
    title: 'Sports Facilities',
    description: 'Large playground, basketball court, badminton court, table tennis, and indoor sports facilities.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80',
  },
  {
    icon: Bus,
    title: 'Transport',
    description: 'Safe and reliable school bus service covering all major routes with GPS tracking and trained drivers.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
  },
]

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', alt: 'Classroom' },
  { id: 2, src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80', alt: 'Lab' },
  { id: 3, src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80', alt: 'Library' },
  { id: 4, src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80', alt: 'Sports' },
  { id: 5, src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80', alt: 'Transport' },
  { id: 6, src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80', alt: 'Campus' },
]

export default function InfrastructurePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Infrastructure</h1>
            <p className="text-xl text-primary-100">
              State-of-the-art facilities for enhanced learning and development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
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
              Our Facilities
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Modern infrastructure designed for excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {facilities.map((facility, index) => {
              const Icon = facility.icon
              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="overflow-hidden">
                    <div className="relative h-48 mb-4">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {facility.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{facility.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <ImageIcon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Infrastructure Gallery</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Take a virtual tour of our campus</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-48 md:h-64 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Gallery"
              width={1200}
              height={800}
              className="object-contain rounded-lg"
            />
          </div>
        </motion.div>
      )}
    </div>
  )
}

