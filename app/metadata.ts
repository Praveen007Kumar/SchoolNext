import { Metadata } from 'next'
import { schoolConfig } from '@/lib/config'

export const defaultMetadata: Metadata = {
  title: {
    default: `${schoolConfig.name} - Excellence in Education`,
    template: `%s | ${schoolConfig.name}`,
  },
  description: `${schoolConfig.name} offers quality ${schoolConfig.board} education from ${schoolConfig.classes}. Join us for academic excellence, character building, and holistic development.`,
  keywords: [
    'CBSE school',
    'ICSE school',
    'International school',
    'Education',
    'Nursery to XII',
    'India',
    schoolConfig.name,
    schoolConfig.board,
  ],
  authors: [{ name: schoolConfig.name }],
  creator: schoolConfig.name,
  publisher: schoolConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://abcinternational.edu.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://abcinternational.edu.in',
    siteName: schoolConfig.name,
    title: `${schoolConfig.name} - Excellence in Education`,
    description: `${schoolConfig.name} offers quality ${schoolConfig.board} education from ${schoolConfig.classes}.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${schoolConfig.name} - Excellence in Education`,
    description: `${schoolConfig.name} offers quality ${schoolConfig.board} education.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

