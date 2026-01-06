'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Filter } from 'lucide-react'
import Image from 'next/image'

const galleryCategories = ['All', 'Events', 'Sports', 'Academics', 'Cultural', 'Infrastructure']

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', category: 'Academics', event: 'Classroom Learning' },
  { id: 2, src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80', category: 'Academics', event: 'Science Lab' },
  { id: 3, src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80', category: 'Sports', event: 'Sports Day' },
  { id: 4, src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80', category: 'Events', event: 'Annual Day' },
  { id: 5, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', category: 'Cultural', event: 'Cultural Fest' },
  { id: 6, src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80', category: 'Infrastructure', event: 'Library' },
  { id: 7, src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80', category: 'Infrastructure', event: 'Transport' },
  { id: 8, src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', category: 'Academics', event: 'Smart Classroom' },
  { id: 9, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80', category: 'Sports', event: 'Basketball' },
  { id: 10, src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80', category: 'Cultural', event: 'Dance Performance' },
  { id: 11, src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80', category: 'Academics', event: 'Chemistry Lab' },
  { id: 12, src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80', category: 'Sports', event: 'Athletics' },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-primary-100">
              Capturing moments of excellence, celebration, and learning
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-48 md:h-64 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(img.src)}
              >
                <Image
                  src={img.src}
                  alt={img.event}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold">{img.event}</p>
                    <p className="text-sm text-gray-200">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
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

