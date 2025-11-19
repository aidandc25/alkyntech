'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card } from '@/components/ui/card'

const services = [
  {
    id: 'websites',
    icon: '💻',
    title: 'Custom Websites That Convert',
    benefits: [
      'Modern, mobile-first design',
      'Easy for you to update',
      'Found on Google (SEO optimized)',
      'Fast loading, always reliable',
    ],
  },
  {
    id: 'automation',
    icon: '⚡',
    title: 'Automation That Saves You Hours',
    benefits: [
      'Connect your tools (forms, email, CRM)',
      'Auto-respond to leads instantly',
      'Sync data between platforms',
      'Eliminate repetitive admin work',
    ],
  },
]

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="section-padding relative bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
          >
            What I Build for You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Two core services designed to grow your business and save you time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link key={service.id} href="/services">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
              >
              {/* Background color inversion */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: hoveredIndex === index ? 1 : 0,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0 bg-base-800 origin-center"
                style={{ borderRadius: '16px' }}
              />

              {/* Card Content */}
              <Card
                variant="default"
                padding="lg"
                className={`relative border-2 transition-all duration-300 ${
                  hoveredIndex === index
                    ? 'border-transparent bg-transparent'
                    : 'border-border bg-card'
                }`}
              >
                <div className="space-y-6 relative z-10">
                  {/* Icon */}
                  <div
                    className={`text-5xl transition-transform duration-300 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                      hoveredIndex === index
                        ? 'text-white'
                        : 'text-foreground'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Benefits List */}
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 transition-colors duration-300 ${
                          hoveredIndex === index
                            ? 'text-base-100'
                            : 'text-muted-foreground'
                        }`}
                      >
                        <span
                          className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs transition-colors duration-300 ${
                            hoveredIndex === index
                              ? 'bg-secondary text-white'
                              : 'bg-primary/10 text-primary'
                          }`}
                        >
                          ✓
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Arrow */}
                  <div
                    className={`flex items-center gap-2 font-medium transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'text-secondary translate-x-2'
                        : 'text-primary translate-x-0'
                    }`}
                  >
                    <span>Learn More</span>
                    <motion.span
                      animate={{
                        rotate: hoveredIndex === index ? 45 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
