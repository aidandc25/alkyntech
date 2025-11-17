'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function CTASection() {
  return (
    <section id="contact" className="section-padding relative bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <Card
              variant="glass"
              padding="xl"
              className="relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div
                className="absolute inset-0 -z-10 opacity-50"
                style={{
                  background: `
                    linear-gradient(
                      120deg,
                      color-mix(in oklch, var(--primary-500) 35%, transparent),
                      color-mix(in oklch, var(--primary-700) 18%, transparent) 45%,
                      color-mix(in oklch, var(--secondary-500) 20%, transparent) 100%
                    )
                  `,
                }}
              />

              <div className="text-center space-y-8">
                {/* Heading */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                    Ready to <span className="text-gradient">Grow Your Business</span>?
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Book a free 15-minute discovery call. No pressure, no commitment—just a
                    conversation about how I can help.
                  </p>
                </div>

                {/* Contact Options */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="xl"
                    onClick={() => {
                      // TODO: Replace with actual Cal.com integration
                      window.open('https://cal.com', '_blank')
                    }}
                  >
                    📅 Schedule Free Call
                  </Button>
                  <Button
                    size="xl"
                    variant="secondary"
                    onClick={() => {
                      window.location.href = 'mailto:hello@alkyntech.com'
                    }}
                  >
                    ✉️ Send Email
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="pt-6 space-y-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span>📧</span>
                      <a
                        href="mailto:hello@alkyntech.com"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        hello@alkyntech.com
                      </a>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span>Texas, USA</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Usually respond within 24 hours
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="pt-6 border-t border-border/60">
                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                    <span>✓ No Long-Term Contracts</span>
                    <span>•</span>
                    <span>✓ Transparent Pricing</span>
                    <span>•</span>
                    <span>✓ Texas-Based</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
