'use client'

import Link from 'next/link'
import { ImageSlider } from './image-slider'
import { Button } from '@/components/ui/button'

const sliderImages = [
  {
    src: '/images/slider-1.jpg',
    alt: 'Chantier de construction professionnelle pour un projet résidentiel',
  },
  {
    src: '/images/slider-2.jpg',
    alt: 'Rénovation intérieure d’un appartement moderne avec finitions de qualité',
  },
  {
    src: '/images/slider-3.jpg',
    alt: 'Construction d’un bâtiment commercial avec structure acier et béton',
  },
]

export function Hero() {
  return (
    <section id="hero" className="relative w-full">
      <ImageSlider images={sliderImages} autoPlayInterval={5000} />

      {/* Text Overlay - Positioned absolutely over the slider */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10 bg-black/30">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl leading-tight tracking-tight">
            Bâtir l’excellence
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 drop-shadow-lg max-w-3xl mx-auto font-light">
            Un savoir-faire précis et un design innovant pour vos projets résidentiels et commerciaux
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base font-semibold px-8 rounded-sm">
              <Link href="#contact">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white border text-base font-semibold px-8 rounded-sm backdrop-blur">
              <Link href="#services">Nos services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
