'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Rénovation de salle de bains avec équipements modernes',
    category: 'Rénovation',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Installation électrique et travaux de câblage',
    category: 'Électricité',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Travaux de toiture et interventions structurelles',
    category: 'Construction',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Rénovation de cuisine avec équipements modernes',
    category: 'Rénovation',
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Réalisations en images
          </h2>
          <p className="text-foreground/65 text-lg font-light max-w-3xl mx-auto">
            Un aperçu de nos chantiers : qualité d’exécution, souci du détail et satisfaction client, sur des projets variés.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded border border-border/50 hover:border-accent/50"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <p className="text-sm font-semibold tracking-wide">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
