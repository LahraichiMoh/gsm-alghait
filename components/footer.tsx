'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [openKey, setOpenKey] = useState<'privacy' | 'terms' | null>(null)

  const modal = useMemo(() => {
    if (openKey === 'privacy') {
      return {
        title: 'Politique de confidentialité',
        description:
          'Résumé informatif. Ce site ne collecte pas volontairement de données sensibles et n’utilise pas de cookies publicitaires.',
        sections: [
          {
            title: 'Données collectées',
            items: [
              'Données que vous fournissez via le formulaire : nom, e-mail, téléphone, type de service et message.',
              'Données techniques minimales nécessaires au fonctionnement du site (journalisation standard côté hébergeur).',
            ],
          },
          {
            title: 'Utilisation',
            items: [
              'Répondre à votre demande et vous recontacter.',
              'Améliorer la qualité du service et la gestion des demandes.',
            ],
          },
          {
            title: 'Conservation & partage',
            items: [
              'Conservation limitée au temps nécessaire au traitement de votre demande.',
              'Aucun partage à des tiers à des fins commerciales.',
            ],
          },
          {
            title: 'Vos droits',
            items: [
              'Vous pouvez demander l’accès, la rectification ou la suppression de vos données en nous contactant.',
            ],
          },
        ],
      }
    }

    if (openKey === 'terms') {
      return {
        title: 'Conditions d’utilisation',
        description:
          'En utilisant ce site, vous acceptez les conditions ci-dessous. Le contenu est fourni à titre informatif.',
        sections: [
          {
            title: 'Utilisation du site',
            items: [
              'Ne pas tenter d’altérer, de surcharger ou d’accéder de manière non autorisée au site.',
              'Utiliser le formulaire de contact de manière responsable et exacte.',
            ],
          },
          {
            title: 'Contenu & propriété',
            items: [
              'Les textes, visuels et éléments graphiques sont protégés et ne peuvent être réutilisés sans autorisation.',
            ],
          },
          {
            title: 'Responsabilité',
            items: [
              'Les informations peuvent évoluer. Malgré notre soin, des erreurs peuvent subsister.',
              'Aucune responsabilité ne saurait être engagée pour des dommages indirects liés à l’utilisation du site.',
            ],
          },
          {
            title: 'Contact',
            items: [
              'Pour toute question, contactez-nous via la section “Contact”.',
            ],
          },
        ],
      }
    }

    return null
  }, [openKey])

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white/10 border border-white/15 flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-sm" />
              </div>
              <div>
                <p className="text-lg font-bold leading-none">GSM Al Ghait</p>
                <p className="text-sm text-primary-foreground/80 font-light mt-1">
                  Construction & travaux divers
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed font-light text-primary-foreground/85 max-w-md">
              Excellence en construction et travaux divers. Votre vision, notre expertise, pour des ouvrages durables.
            </p>

            <div className="mt-7 flex flex-col gap-3 text-sm">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <a
                href="mailto:contact@gsmalghait.com"
                className="inline-flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@gsmalghait.com
              </a>
              <div className="inline-flex items-start gap-2 text-primary-foreground/85">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Construction Ave, Build City, BC</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-10 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-primary-foreground">
                Navigation
              </h4>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="#hero"
                    className="text-sm font-light text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-sm font-light text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-sm font-light text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-sm font-light text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Projets
                  </Link>
                </li>
                <li>
                  <Link
                    href="#certifications"
                    className="text-sm font-light text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-sm font-light text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold tracking-wide text-primary-foreground">
                Services
              </h4>
              <ul className="mt-4 space-y-3">
                <li className="text-sm font-light text-primary-foreground/80">
                  Construction neuve
                </li>
                <li className="text-sm font-light text-primary-foreground/80">
                  Rénovation
                </li>
                <li className="text-sm font-light text-primary-foreground/80">
                  Électricité
                </li>
                <li className="text-sm font-light text-primary-foreground/80">
                  Plomberie
                </li>
                <li className="text-sm font-light text-primary-foreground/80">
                  Menuiserie & finitions
                </li>
                <li className="text-sm font-light text-primary-foreground/80">
                  Réparations générales
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-primary-foreground/75">
              © {currentYear} GSM Al Ghait. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="button"
                onClick={() => setOpenKey('privacy')}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
              >
                Politique de confidentialité
              </button>
              <button
                type="button"
                onClick={() => setOpenKey('terms')}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/40 focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
              >
                Conditions d’utilisation
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={openKey !== null}
        onOpenChange={(open) => {
          if (!open) setOpenKey(null)
        }}
      >
        <DialogContent showCloseButton={false} className="sm:max-w-2xl">
          <div className="flex items-start justify-between gap-4">
            <DialogHeader className="text-left">
              <DialogTitle className="text-foreground">{modal?.title}</DialogTitle>
              <DialogDescription className="text-foreground/70">
                {modal?.description}
              </DialogDescription>
            </DialogHeader>

            <Button
              type="button"
              variant="ghost"
              className="shrink-0"
              onClick={() => setOpenKey(null)}
            >
              Fermer
            </Button>
          </div>

          <div className="mt-4 space-y-5">
            {modal?.sections.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold tracking-wide text-foreground">
                  {section.title}
                </h4>
                <ul className="mt-2 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/70 font-light leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  )
}
