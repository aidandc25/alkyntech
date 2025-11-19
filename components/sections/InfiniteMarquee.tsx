'use client'

import { motion } from 'framer-motion'

const industries = [
  { icon: '🔨', label: 'Contractors' },
  { icon: '🍔', label: 'Restaurants' },
  { icon: '⚖️', label: 'Legal Services' },
  { icon: '🏪', label: 'Retail' },
  { icon: '🚚', label: 'Food Trucks' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '💼', label: 'Consulting' },
  { icon: '🎨', label: 'Creative Studios' },
  { icon: '🏋️', label: 'Fitness' },
  { icon: '🏠', label: 'Real Estate' },
  { icon: '💇', label: 'Salons & Spas' },
  { icon: '🔧', label: 'Home Services' },
]

// Duplicate for seamless loop
const duplicatedIndustries = [...industries, ...industries]

export default function InfiniteMarquee() {
  return (
    <section className="relative py-16 bg-muted/30 overflow-hidden">
      {/* Gradient fade on edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

      <div className="mb-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-wider text-muted-foreground font-medium"
        >
          Trusted by businesses in
        </motion.p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -50 * industries.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {duplicatedIndustries.map((industry, index) => (
            <div
              key={`${industry.label}-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-full glass-card border border-border/50"
            >
              <span className="text-3xl">{industry.icon}</span>
              <span className="text-base font-medium text-foreground whitespace-nowrap">
                {industry.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
