import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Building2,
  Hammer,
  Zap,
  Droplets,
  Wrench,
  PaintBucket,
  Home,
  HardHat,
} from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Construction neuve',
    description: 'Construction clé en main pour projets résidentiels et commerciaux, selon les standards actuels.',
  },
  {
    icon: Home,
    title: 'Rénovation',
    description: 'Transformation de vos espaces avec une rénovation complète, adaptée à vos besoins.',
  },
  {
    icon: Zap,
    title: 'Électricité',
    description: 'Installation et dépannage électriques professionnels pour des systèmes sûrs et fiables.',
  },
  {
    icon: Droplets,
    title: 'Plomberie',
    description: 'Solutions de plomberie de l’installation à la maintenance, avec interventions d’urgence.',
  },
  {
    icon: Hammer,
    title: 'Menuiserie',
    description: 'Menuiserie de qualité : ossature, finitions et réalisations sur mesure.',
  },
  {
    icon: PaintBucket,
    title: 'Peinture & finitions',
    description: 'Peinture et finitions professionnelles pour valoriser durablement vos espaces.',
  },
  {
    icon: Wrench,
    title: 'Réparations générales',
    description: 'Maintenance et réparations tous corps d’état pour vos besoins du quotidien.',
  },
  {
    icon: HardHat,
    title: 'Gestion de projet',
    description: 'Pilotage complet : coordination, suivi d’avancement, qualité, délais et budget.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Services de construction complets
          </h2>
          <p className="text-foreground/65 text-lg font-light max-w-3xl mx-auto">
            Des solutions de bout en bout, portées par une expertise solide et un engagement constant pour l’excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-background border-border/50 hover:border-accent hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-accent/10 rounded flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-lg text-foreground font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/65 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
