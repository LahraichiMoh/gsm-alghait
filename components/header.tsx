'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navigationItems = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projets', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Processus', href: '#process' },
  // { label: 'Témoignages', href: '#testimonials' },
  // { label: 'Galerie', href: '#gallery' },
  // { label: 'Contact', href: '#contact' },
]

const sectionIds = navigationItems.map((item) => item.href.replace('#', ''))

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  // Subtle shadow lift only — no color switch (header is always consistent navy.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active-section indicator (kept — useful visual anchor for wayfinding
  useEffect(() => {
    if (typeof window === 'undefined') return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.2, 0.5, 0.8, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Body scroll-lock while mobile drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-[box-shadow,backdrop-filter,background-color duration-300 ease-out',
        'bg-primary',
        isScrolled
          ? 'backdrop-blur-xl bg-primary/95 border-b border-white/10 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.6)]'
          : 'border-b border-white/5',
      )}
    >
      {/* Thin gold separator at very top for premium feel */}
      <div
        aria-hidden
        className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-90"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo lockup — logo only (brand text commented out per author's edit) */}
          <Link
            href="#hero"
            className="flex items-center gap-3 scroll-smooth group"
            aria-label="Accueil I.M. Pro"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="relative h-10 md:h-12 w-auto shrink-0">
              <div className="relative h-full w-[5.25rem] md:w-[10rem]">
                <Image
                  src="/improW.png"
                  alt="Logo I.M. Pro"
                  fill
                  className={cn(
                    'object-contain transition-transform duration-300 group-hover:scale-[1.03]',
                  )}
                  priority
                />
              </div>
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              {/* <span className="text-lg font-bold tracking-tight text-white transition-colors duration-300">
                I.M. Pro
              </span> */}
              {/* <span className="text-[11px] font-medium text-white/70 transition-colors duration-300">
                Construction & travaux divers
              </span> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full',
                    'text-white/85 hover:text-white',
                    isActive && 'text-white',
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    aria-hidden
                    className={cn(
                      'pointer-events-none absolute inset-0 rounded-full transition-all duration-300 ease-out',
                      isActive
                        ? 'bg-white/10 scale-100 opacity-100'
                        : 'bg-white/5 scale-95 opacity-0 hover:opacity-100 hover:scale-100',
                    )}
                  />
                  <span
                    aria-hidden
                    className={cn(
                      'pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] rounded-full transition-all duration-300 ease-out bg-accent',
                      isActive ? 'w-6 opacity-100' : 'w-0 opacity-0',
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              size="lg"
              className="group h-11 px-6 rounded-lg font-semibold shadow-lg shadow-accent/20 transition-all duration-300 bg-accent text-foreground hover:bg-accent/90 hover:shadow-accent/40 hover:-translate-y-px"
            >
              <Link href="#contact">
                Demander un devis
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 text-white bg-white/10 hover:bg-white/15 ring-1 ring-white/20"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Ouvrir/fermer le menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-[calc(theme(spacing.20))] md:top-[calc(theme(spacing.24))] bottom-0 z-40 transition-opacity duration-200',
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        aria-hidden={!isMenuOpen}
      >
        <div
          className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={cn(
            'relative mx-4 sm:mx-6 mt-3 rounded-2xl bg-white shadow-2xl shadow-slate-950/20 ring-1 ring-border/60 border border-border/50 overflow-hidden',
            'transition-[transform,opacity] duration-300 ease-out',
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0',
          )}
        >
          <nav className="p-2 flex flex-col">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    'group flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/5 text-primary'
                      : 'text-foreground/85 hover:bg-muted hover:text-primary',
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        'w-1.5 h-1.5 rounded-full transition-all',
                        isActive ? 'bg-accent scale-100' : 'bg-transparent scale-75',
                      )}
                    />
                    {item.label}
                  </span>
                  <span
                    className={cn(
                      'text-xs font-semibold transition-all',
                      isActive
                        ? 'text-accent opacity-100'
                        : 'text-foreground/30 opacity-0 group-hover:opacity-100',
                    )}
                  >
                    →
                  </span>
                </Link>
              )
            })}
          </nav>
          <div className="px-4 pt-2 pb-5 border-t border-border/60 bg-muted/30">
            <Button
              asChild
              className="w-full rounded-xl h-11 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/15"
            >
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
