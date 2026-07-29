import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export function About() {
  const features = [
    'Agréé & assuré',
    'Équipe experte',
    'Matériaux de qualité',
    'Délais respectés',
    'Tarifs compétitifs',
    'Satisfaction client',
  ]

  const stats = [
    { value: '500+', label: 'Projets livrés' },
    { value: '10+', label: 'Ans d’expérience' },
    { value: '98%', label: 'Satisfaction client' },
    { value: 'A+', label: 'Culture sécurité' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6">
            <Badge variant="secondary" className="bg-muted text-foreground">
              À propos
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 tracking-tight">
              Une excellence éprouvée dans le bâtiment
            </h2>
            <p className="text-lg text-foreground/70 mb-5 leading-relaxed font-light">
              Avec plus de 10 ans d’expérience, nous avons bâti une réputation solide en livrant des résultats remarquables sur des projets résidentiels, commerciaux et techniques. Notre exigence de qualité et notre attention portée à la satisfaction client font de nous un partenaire de confiance.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed font-light">
              Notre équipe conjugue expertise technique, solutions innovantes et sens du détail pour transformer votre vision en réalité. Chaque chantier bénéficie du même niveau de professionnalisme, quelle que soit sa taille ou sa complexité.
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-semibold tracking-wide text-foreground">
                Nos engagements
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="bg-muted text-foreground inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded overflow-hidden border border-border/50 bg-muted/30 shadow-sm h-[420px]">
              <Image
                src="https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg"
                alt="Équipe de construction sur chantier, contrôle qualité en cours"
                fill
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute left-5 right-5 bottom-5 rounded bg-white/10 backdrop-blur border border-white/15 p-4">
                <p className="text-white font-semibold tracking-tight">
                  Qualité, sécurité et transparence à chaque étape
                </p>
                <p className="text-white/85 text-sm mt-1 font-light">
                  Un suivi rigoureux, des équipes qualifiées et des livraisons maîtrisées.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded border border-border/50 bg-background p-5 shadow-sm"
                >
                  <p className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm text-foreground/70 font-light mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
