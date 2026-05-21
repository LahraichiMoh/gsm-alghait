'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { CheckCircle2, ExternalLink, MapPin, X } from 'lucide-react'
import { useMemo, useState } from 'react'

interface Project {
  id: number
  name: string
  category: string
  address: string
  summary: string
  scope: string[]
  results: string[]
  image: string
  metrics: Array<{ label: string; value: string }>
  highlights: string[]
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Complexe résidentiel haut de gamme',
    category: 'Résidentiel',
    address: 'Quartier du Centre',
    summary:
      'Construction complète d’un ensemble de 12 logements, avec architecture moderne, finitions premium et approche durable.',
    scope: [
      'Fondations & structure',
      'Réseaux électricité & plomberie',
      'CVC (chauffage/ventilation/climatisation)',
      'Finitions intérieures',
      'Aménagements extérieurs',
    ],
    results: [
      'Livraison avec 15% d’avance sur le planning',
      'Aucun incident sécurité',
      'Taux d’occupation à 100% en 2 mois',
      'Objectif LEED Or atteint',
    ],
    image: '/images/slider-1.jpg',
    metrics: [
      { label: 'Durée', value: '18 mois' },
      { label: 'Budget', value: '2,4 M$' },
      { label: 'Lots', value: '12 logements' },
      { label: 'Certification', value: 'LEED Or' },
    ],
    highlights: ['Livraison anticipée', 'Éco-responsable', 'Qualité premium'],
  },
  {
    id: 2,
    name: 'Rénovation de bureaux',
    category: 'Commercial',
    address: 'Parc d’affaires',
    summary:
      'Rénovation majeure de 4 650 m² de bureaux : modifications structurelles, aménagement moderne et infrastructure technique.',
    scope: [
      'Modifications structurelles',
      'Aménagement open-space',
      'Salles de réunion',
      'Câblage réseau & data',
      'Systèmes de bâtiment intelligent',
      'Éclairage haute efficacité',
    ],
    results: [
      'Surface utile augmentée de 20%',
      'Consommation énergétique réduite de 35%',
      'Satisfaction utilisateur : 9,8/10',
      'Projet livré dans le budget',
    ],
    image: '/images/slider-2.jpg',
    metrics: [
      { label: 'Durée', value: '8 mois' },
      { label: 'Budget', value: '1,8 M$' },
      { label: 'Surface', value: '4 650 m²' },
      { label: 'Énergie', value: '-35%' },
    ],
    highlights: ['Bâtiment intelligent', 'Efficacité énergétique', 'Design contemporain'],
  },
  {
    id: 3,
    name: 'Rénovation de maison',
    category: 'Rénovation',
    address: 'Zone résidentielle',
    summary:
      'Rénovation intérieure et extérieure : cuisine, salles d’eau, améliorations structurelles et optimisation énergétique.',
    scope: [
      'Rénovation de cuisine',
      'Rénovation de salle de bains',
      'Remplacement des revêtements de sol',
      'Réparation de toiture',
      'Peinture extérieure',
      'Création de terrasse',
    ],
    results: [
      'Valorisation immobilière : +40%',
      'Équipements modernes et économes',
      'Réalisation dans le budget',
      'Gestion des déchets optimisée',
    ],
    image: '/images/slider-3.jpg',
    metrics: [
      { label: 'Durée', value: '5 mois' },
      { label: 'Budget', value: '450 k$' },
      { label: 'Performance', value: 'Systèmes modernisés' },
      { label: 'Impact', value: 'Déchets optimisés' },
    ],
    highlights: ['Valorisation', 'Systèmes modernes', 'Finitions de qualité'],
  },
  {
    id: 4,
    name: 'Modernisation de site industriel',
    category: 'Industriel',
    address: 'Zone de production',
    summary:
      'Extension et modernisation d’un site de production : nouvelles lignes, sécurité renforcée et mise à niveau des infrastructures.',
    scope: [
      'Extension structurelle',
      'Installation d’équipements lourds',
      'Mise à niveau des systèmes de sécurité',
      'Implantation de lignes de production',
      'Mise à niveau électrique (triphasé)',
      'Systèmes de gestion des déchets',
    ],
    results: [
      'Capacité de production : +60%',
      'Note sécurité portée à A+',
      'Arrêts de production minimisés',
      'ROI atteint en 18 mois',
    ],
    image: '/images/gallery-1.jpg',
    metrics: [
      { label: 'Durée', value: '12 mois' },
      { label: 'Budget', value: '3,2 M$' },
      { label: 'Capacité', value: '+60%' },
      { label: 'ROI', value: '18 mois' },
    ],
    highlights: ['Croissance de capacité', 'Sécurité d’abord', 'ROI élevé'],
  },
]

export function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedProjectId) ?? null,
    [selectedProjectId]
  )

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Projets réalisés
          </h2>
          <p className="text-foreground/65 text-lg font-light max-w-3xl mx-auto">
            Découvrez une sélection de réalisations qui illustrent notre expertise, notre exigence de qualité et notre capacité à livrer des résultats mesurables.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProjectId(project.id)}
              className="group text-left rounded border border-border/50 bg-background hover:border-accent/60 hover:shadow-lg transition-all overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground tracking-tight truncate">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                      <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="truncate">{project.address}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-foreground/70 flex-shrink-0 mt-1" />
                </div>

                <p className="text-sm text-foreground/70 font-light leading-relaxed max-h-[4.5rem] overflow-hidden">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.highlights.slice(0, 3).map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="bg-muted text-foreground">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog
        open={selectedProjectId !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProjectId(null)
        }}
      >
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-3xl p-0 overflow-hidden"
        >
          {selectedProject && (
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 relative min-h-64">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    {selectedProject.category}
                  </Badge>
                </div>
              </div>

              <div className="md:col-span-3 p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <DialogHeader className="text-left">
                    <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                      {selectedProject.name}
                    </DialogTitle>
                    <DialogDescription className="text-foreground/70">
                      {selectedProject.address}
                    </DialogDescription>
                  </DialogHeader>

                  <button
                    type="button"
                    onClick={() => setSelectedProjectId(null)}
                    className="rounded p-2 text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5" />
                    <span className="sr-only">Fermer</span>
                  </button>
                </div>

                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm tracking-wide">
                      Description
                    </h4>
                    <p className="mt-2 text-sm text-foreground/70 font-light leading-relaxed">
                      {selectedProject.summary}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground text-sm tracking-wide">
                        Périmètre
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {selectedProject.scope.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                            <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground text-sm tracking-wide">
                        Résultats clés
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {selectedProject.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-sm text-foreground/70">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground text-sm tracking-wide">
                      Indicateurs
                    </h4>
                    <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {selectedProject.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded border border-border/50 bg-muted/30 p-3"
                        >
                          <p className="text-xs text-foreground/60">{m.label}</p>
                          <p className="text-sm font-semibold text-foreground mt-1">{m.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="bg-muted text-foreground">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
