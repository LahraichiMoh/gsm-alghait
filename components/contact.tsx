'use client'

import { useState } from 'react'
import { Loader2, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const WEB3FORMS_ACCESS_KEY = '1fb06d44-da2b-4ffd-a253-d9bf5db9f430'
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

type FormState = {
  name: string
  email: string
  phone: string
  service: string
  message: string
  botcheck: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  botcheck: '',
}

type StatusKind = 'idle' | 'submitting' | 'success' | 'error'

const serviceLabel: Record<string, string> = {
  'new-construction': 'Construction neuve',
  'renovation': 'Rénovation',
  'electrical': 'Électricité',
  'plumbing': 'Plomberie',
  'carpentry': 'Menuiserie',
  'painting': 'Peinture & finitions',
  'repairs': 'Réparations générales',
  'other': 'Autre',
  '': 'Non renseigné',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const [formData, setFormData] = useState<FormState>(initialState)
  const [status, setStatus] = useState<StatusKind>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const isSubmitting = status === 'submitting'
  const submitSuccess = status === 'success'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status === 'error') setStatus('idle')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Silent honeypot check (also matches official Web3Forms `botcheck` key which is auto-rejected server-side)
    if (formData.botcheck) {
      setStatus('success')
      setFormData(initialState)
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    // Client-side validation
    if (!formData.name.trim()) {
      setStatus('error')
      setErrorMessage('Merci d’indiquer votre nom complet.')
      return
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus('error')
      setErrorMessage('Merci d’indiquer une adresse e-mail valide.')
      return
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus('error')
      setErrorMessage('Merci de décrire votre projet en quelques mots (10 caractères minimum).')
      return
    }

    setStatus('submitting')
    setErrorMessage(null)

    const nameClean = formData.name.trim()
    const emailClean = formData.email.trim()
    const phoneClean = formData.phone.trim()
    const messageClean = formData.message.trim()
    const servicePretty =
      (formData.service && serviceLabel[formData.service]) || serviceLabel['']

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      to: 'contact@impro.ma',

      // French labels shown in the Web3Forms default e-mail (sections: Nom, Email, etc.)
      Nom: nameClean,
      Email: emailClean,
      Téléphone: phoneClean || 'Non renseigné',
      Service: servicePretty,
      'Détails du projet': messageClean,

      // E-mail headers / ergonomics
      subject: `Nouvelle demande de devis · ${nameClean}${formData.service ? ` · ${servicePretty}` : ''}`,
      from_name: 'Site I.M. Pro — Formulaire contact',
      reply_to: emailClean,

      // Server-side bot rejection (kept empty here)
      botcheck: formData.botcheck,
    }

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      const data: { success?: boolean; message?: string } = await res.json().catch(() => ({}))

      if (!res.ok || !data.success) {
        throw new Error(
          data?.message && typeof data.message === 'string'
            ? data.message
            : `Erreur HTTP ${res.status}`,
        )
      }

      setStatus('success')
      setFormData(initialState)
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error
          ? `Une erreur est survenue lors de l’envoi : ${err.message}`
          : 'Une erreur est survenue lors de l’envoi. Merci de réessayer ou de nous appeler directement.',
      )
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+212 662 61 59 02',
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contact@impro.ma',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value:
        'Immeuble 58 App N°03 2ème Etage Av Allal Ben Abdellah Hay EnnahdaIi Temara',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Construisons quelque chose d’exceptionnel
          </h2>
          <p className="text-foreground/65 text-lg font-light max-w-3xl mx-auto">
            Contactez notre équipe pour discuter de vos besoins et obtenir un accompagnement
            personnalisé de la part de nos professionnels.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mt-1">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-background rounded p-10 border border-border/50 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Mohamed Alami"
                    className="bg-muted/50 border-border/50 text-foreground placeholder:text-foreground/40"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alami@gmail.com"
                    className="bg-muted/50 border-border/50 text-foreground placeholder:text-foreground/40"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+212 6XX XX XX XX"
                    className="bg-muted/50 border-border/50 text-foreground placeholder:text-foreground/40"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Type de service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-muted/50 border border-border/50 rounded text-foreground"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="new-construction">Construction neuve</option>
                    <option value="renovation">Rénovation</option>
                    <option value="electrical">Électricité</option>
                    <option value="plumbing">Plomberie</option>
                    <option value="carpentry">Menuiserie</option>
                    <option value="painting">Peinture & finitions</option>
                    <option value="repairs">Réparations générales</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Détails du projet <span className="text-accent">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre projet, vos contraintes et vos attentes…"
                  rows={5}
                  className="bg-muted/50 border-border/50 text-foreground placeholder:text-foreground/40"
                />
              </div>

              {/* Honeypot anti-spam: offscreen text field. Bots fill it blindly.
                  Official Web3Forms `botcheck` key = server-side auto-reject when non-empty. */}
              <input
                type="text"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                value={formData.botcheck}
                onChange={handleChange}
                style={{
                  position: 'absolute',
                  left: '-10000px',
                  top: 'auto',
                  width: '1px',
                  height: '1px',
                  overflow: 'hidden',
                }}
                aria-hidden="true"
              />

              {submitSuccess && (
                <div
                  role="status"
                  className="mb-6 p-4 rounded border bg-green-50 border-green-200 text-green-700 text-sm"
                >
                  <strong className="font-semibold">Merci {formData.name ? '' : '!'} </strong>
                  Votre demande a bien été envoyée. Nous vous recontactons rapidement avec un devis
                  personnalisé.
                </div>
              )}

              {status === 'error' && errorMessage && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded border bg-red-50 border-red-200 text-red-700 text-sm"
                >
                  {errorMessage}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className={cn(
                  'w-full font-semibold h-11 rounded group',
                  'bg-primary hover:bg-primary/90 text-primary-foreground',
                  'disabled:opacity-70 disabled:cursor-not-allowed',
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  'Envoyer la demande'
                )}
              </Button>

              <p className="mt-3 text-[11px] text-foreground/45 text-center">
                En soumettant ce formulaire, vous acceptez d’être recontacté(e) par notre équipe.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
