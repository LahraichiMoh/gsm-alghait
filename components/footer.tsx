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
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
              <h3 className="text-lg font-bold">GSM Al Ghait</h3>
            </div>
            <p className="opacity-85 text-sm leading-relaxed font-light">
              Excellence en construction et travaux divers. Votre vision, notre expertise, pour des ouvrages durables.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#hero" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-light">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#about" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-light">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#services" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-light">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-light">
                  Projets
                </Link>
              </li>
              {/* <li>
                <Link href="#testimonials" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-light">
                  Témoignages
                </Link>
              </li> */}
              <li>
                <Link href="#certifications" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-light">
                  Certifications
                </Link>
              </li>
              {/* <li>
                <Link href="#process" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-light">
                  Processus
                </Link>
              </li> */}
              {/* <li>
                <Link href="#gallery" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-light">
                  Galerie
                </Link>
              </li> */}
              <li>
                <Link href="#contact" className="opacity-80 hover:opacity-100 transition-opacity text-sm font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="opacity-80 hover:opacity-100 transition-opacity text-sm">
                Construction neuve
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity text-sm">
                Rénovation
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity text-sm">
                Électricité
              </li>
              <li className="opacity-80 hover:opacity-100 transition-opacity text-sm">
                Plomberie
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">(555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">contact@gsmalghait.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm opacity-90">123 Construction Ave, Build City, BC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm opacity-80">
              © {currentYear} GSM Al Ghait. Tous droits réservés.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <button
                type="button"
                onClick={() => setOpenKey('privacy')}
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Politique de confidentialité
              </button>
              <button
                type="button"
                onClick={() => setOpenKey('terms')}
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
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
