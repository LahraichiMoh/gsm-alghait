'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setTimeout(() => setSubmitSuccess(false), 3000)
    } finally {
      setIsSubmitting(false)
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
      value: 'Immeuble 58 App N°03 2ème Etage Av Allal Ben Abdellah Hay EnnahdaIi Temara',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Construisons quelque chose d’exceptionnel
          </h2>
          <p className="text-foreground/65 text-lg font-light max-w-3xl mx-auto">
            Contactez notre équipe pour discuter de vos besoins et obtenir un accompagnement personnalisé de la part de nos professionnels.
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
                    <h3 className="font-semibold text-foreground text-sm tracking-wide">{item.title}</h3>
                    <p className="text-foreground/70 text-sm mt-1">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-background rounded p-10 border border-border/50 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet <span className="text-accent">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jean@exemple.com"
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
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
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

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
                  Merci ! Nous vous recontactons rapidement avec un devis personnalisé.
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11 rounded"
              >
                {isSubmitting ? 'Envoi…' : 'Demander un devis'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
