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
    description: 'Beautiful, high-performance websites built to drive real business results.',
    benefits: [
      'Online payments & secure checkout',
      'Appointment booking with reminders',
      'Contact forms & quote requests',
      'Analytics to track your ROI',
      'Mobile-optimized for any device',
      'SEO to get found on Google',
    ],
    gradient: 'from-purple-500/20 via-pink-500/10 to-orange-500/20',
  },
  {
    id: 'automation',
    icon: '⚡',
    title: 'Automation That Saves You Hours',
    description: 'Intelligent automation to eliminate busywork and scale your operations.',
    benefits: [
      'Email & SMS automation for follow-ups',
      'Smart review management (bad reviews stay private)',
      'Online ordering systems',
      'Automated appointment reminders',
      'CRM & workflow integration',
      'AI chatbot for customer support',
    ],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-purple-500/20',
  },
]

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="section-padding relative bg-background overflow-hidden">
      {/* Ambient blur orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blur-orb-lg absolute left-0 top-1/4 bg-primary/5" />
        <div className="blur-orb-lg absolute right-0 bottom-1/4 bg-secondary/5" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
          >
            Core Services
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

        {/* Asymmetric Bento Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={
                  index === 0
                    ? 'lg:col-span-7' // Featured large card
                    : 'lg:col-span-5' // Smaller card
                }
              >
                <Link href="/services">
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative overflow-hidden rounded-3xl cursor-pointer group h-full"
                  >
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Decorative blur orb that moves on hover */}
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 1,
                        x: hoveredIndex === index ? 50 : 0,
                        y: hoveredIndex === index ? -30 : 0,
                      }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className={`blur-orb-md absolute -top-10 -right-10 bg-gradient-to-br ${service.gradient} opacity-30`}
                    />

                    {/* Card Content */}
                    <Card
                      variant="glass"
                      padding="none"
                      className="relative border-2 border-border/50 group-hover:border-primary/50 transition-all duration-500 h-full backdrop-blur-xl"
                    >
                      <div className={`p-8 lg:p-10 space-y-6 ${index === 0 ? 'lg:space-y-8' : ''}`}>
                        {/* Icon with animation */}
                        <motion.div
                          animate={{
                            scale: hoveredIndex === index ? 1.1 : 1,
                            rotate: hoveredIndex === index ? 5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`${index === 0 ? 'text-7xl' : 'text-6xl'}`}
                        >
                          {service.icon}
                        </motion.div>

                        {/* Title */}
                        <div className="space-y-3">
                          <h3
                            className={`font-bold tracking-tight transition-colors duration-300 ${
                              index === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl lg:text-3xl'
                            } ${hoveredIndex === index ? 'text-primary' : 'text-foreground'}`}
                          >
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        {/* Benefits List */}
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * i, duration: 0.3 }}
                              className="flex items-start gap-3 text-sm lg:text-base"
                            >
                              <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                                ✓
                              </span>
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                {benefit}
                              </span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Learn More Arrow */}
                        <motion.div
                          className="flex items-center gap-2 font-medium text-primary pt-4"
                          animate={{
                            x: hoveredIndex === index ? 10 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <span>Learn More</span>
                          <motion.span
                            animate={{
                              rotate: hoveredIndex === index ? 45 : 0,
                              x: hoveredIndex === index ? 5 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-xl"
                          >
                            →
                          </motion.span>
                        </motion.div>
                      </div>
                    </Card>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
