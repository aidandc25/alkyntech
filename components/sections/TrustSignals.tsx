'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const trustSignals = [
  {
    icon: '👨‍💻',
    title: 'Expert Engineering',
    description: 'Professional-grade development with modern best practices and cutting-edge technology.',
  },
  {
    icon: '🌍',
    title: 'Remote-First Engineering',
    description: 'Professional, reliable service from anywhere in the world.',
  },
  {
    icon: '🎯',
    title: 'Fully Managed Service',
    description: 'Sit back and relax. Everything is handled—updates, adjustments, refreshes, and ongoing maintenance.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    description: 'Clear quotes upfront. No hidden fees or surprise charges.',
  },
  {
    icon: '💬',
    title: 'Plain-English Communication',
    description: 'Tech explained in terms that make sense, without the jargon.',
  },
  {
    icon: '⚡',
    title: 'Launch in as Little as a Week',
    description: 'Fast delivery without compromising quality. Get online quickly.',
  },
]

export default function TrustSignals() {
  return (
    <section className="section-padding relative bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
          >
            Why Choose <span className="text-gradient">AlkynTech</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Work with someone who understands small business needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <Card
                variant="glass"
                padding="lg"
                className="h-full hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-3xl">
                    {signal.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">{signal.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
