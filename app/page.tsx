import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Award, CheckCircle2, ClipboardList, HardHat, Search, ShieldCheck, Star, Users } from 'lucide-react'

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Propriétaire',
    project: 'Rénovation complète',
    quote:
      'Équipe très professionnelle, planning respecté et finitions impeccables. La communication a été claire du début à la fin.',
  },
  {
    name: 'Karim El Amrani',
    role: 'Gérant',
    project: 'Aménagement de bureaux',
    quote:
      'Livraison dans les délais, chantier propre et solutions techniques pertinentes. Nos équipes ont pu reprendre l’activité sans interruption.',
  },
  {
    name: 'Claire Dubois',
    role: 'Syndic',
    project: 'Travaux de façade',
    quote:
      'Un suivi rigoureux, une qualité constante et une excellente coordination des corps de métiers. Résultat conforme à nos attentes.',
  },
]

const certifications = [
  { label: 'ISO 9001', description: 'Management de la qualité' },
  { label: 'ISO 14001', description: 'Management environnemental' },
  { label: 'HSE', description: 'Hygiène, Sécurité, Environnement' },
  { label: 'LEED', description: 'Construction durable' },
]

const processSteps = [
  {
    title: 'Diagnostic & besoins',
    description: 'Visite sur site, analyse des contraintes, définition des objectifs et du périmètre.',
    icon: Search,
  },
  {
    title: 'Devis & planification',
    description: 'Chiffrage détaillé, planning, sélection des matériaux et validation des lots.',
    icon: ClipboardList,
  },
  {
    title: 'Préparation du chantier',
    description: 'Sécurisation, approvisionnement, coordination des équipes et mise en place logistique.',
    icon: HardHat,
  },
  {
    title: 'Exécution',
    description: 'Réalisation des travaux, suivi quotidien, points d’avancement et maîtrise des risques.',
    icon: Users,
  },
  {
    title: 'Contrôle qualité',
    description: 'Vérifications, tests, levée de réserves et conformité aux normes en vigueur.',
    icon: ShieldCheck,
  },
  {
    title: 'Livraison',
    description: 'Réception, documentation technique, garanties et accompagnement après chantier.',
    icon: CheckCircle2,
  },
]

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      {/* <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Témoignages de clients
            </h2>
            <p className="text-foreground/65 text-lg font-light max-w-3xl mx-auto">
              Des retours concrets sur notre exigence de qualité, notre sens du détail et notre capacité à livrer dans les délais.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-background border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-foreground">{t.name}</CardTitle>
                  <CardDescription className="text-foreground/65">
                    {t.role} · {t.project}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 leading-relaxed font-light">
                    “{t.quote}”
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <section id="certifications" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Certifications & équipe
            </h2>
            <p className="text-foreground/65 text-lg font-light max-w-3xl mx-auto">
              Une organisation structurée, des compétences certifiées et une culture sécurité au cœur de chaque projet.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-muted/20 border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Référentiels & certifications
                </CardTitle>
                <CardDescription className="text-foreground/65">
                  Standards de qualité, environnement et sécurité pour des chantiers maîtrisés.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {certifications.map((c) => (
                    <Badge key={c.label} variant="secondary" className="bg-background text-foreground border border-border/50">
                      {c.label}
                    </Badge>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {certifications.map((c) => (
                    <div key={c.label} className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{c.label}</p>
                        <p className="text-sm text-foreground/70 font-light">{c.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/20 border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Équipe & expertise
                </CardTitle>
                <CardDescription className="text-foreground/65">
                  Chefs de projet, conducteurs de travaux et artisans spécialisés, coordonnés pour livrer sans compromis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-background rounded border border-border/50">
                    <p className="text-3xl font-bold text-foreground tracking-tight">10+</p>
                    <p className="text-sm text-foreground/70 font-light">Ans d’expérience terrain</p>
                  </div>
                  <div className="p-5 bg-background rounded border border-border/50">
                    <p className="text-3xl font-bold text-foreground tracking-tight">500+</p>
                    <p className="text-sm text-foreground/70 font-light">Projets livrés</p>
                  </div>
                  <div className="p-5 bg-background rounded border border-border/50">
                    <p className="text-3xl font-bold text-foreground tracking-tight">98%</p>
                    <p className="text-sm text-foreground/70 font-light">Satisfaction client</p>
                  </div>
                  <div className="p-5 bg-background rounded border border-border/50">
                    <p className="text-3xl font-bold text-foreground tracking-tight">0</p>
                    <p className="text-sm text-foreground/70 font-light">Tolérance sur la sécurité</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Processus de construction
            </h2>
            <p className="text-foreground/65 text-lg font-light max-w-3xl mx-auto">
              Une méthode en six étapes pour sécuriser la qualité, le délai et le budget, du premier échange à la livraison.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <Card key={step.title} className="bg-background border-border/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-sm font-semibold text-foreground/70">
                        Étape {idx + 1}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-foreground">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
