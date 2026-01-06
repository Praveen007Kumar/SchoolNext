export interface Notice {
  id: string
  title: string
  date: string
  category: 'general' | 'academic' | 'sports' | 'event'
  isNew?: boolean
  link?: string
}

export interface Teacher {
  id: string
  name: string
  subject: string
  qualification: string
  experience: string
  image?: string
  bio?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  year: string
  category: 'academic' | 'sports' | 'cultural' | 'other'
  image?: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
  event?: string
}

export interface NewsItem {
  id: string
  title: string
  content: string
  date: string
  image?: string
  category: string
}

