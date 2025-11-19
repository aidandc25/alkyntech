'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Card } from '@/components/ui/card'

const steps = [
  {
    id: 1,
    icon: '📅',
    title: 'Discovery Call',
    duration: '15-30 minutes',
    description: 'Discussion of your needs, goals, and challenges in plain English. No pressure, no sales pitch - just a conversation about how AlkynTech can help your business.',
    details: [
      'Understand your current situation',
      'Identify pain points and opportunities',
      'Discuss timeline and budget',
      'Answer all your questions',
    ],
  },
  {
    id: 2,
    icon: '🛠️',
    title: 'Custom Build',
    duration: 'As quick as a week',
    description: 'Build exactly what you need - whether it is a modern website, automation workflow, or both. See progress along the way and provide feedback.',
    details: [
      'Clean, modern design that matches your brand',
      'Mobile-responsive and fast',
      'Easy to manage',
      'Regular updates during development',
    ],
  },
  {
    id: 3,
    icon: '🚀',
    title: 'Launch & Support',
    duration: 'Ongoing',
    description: 'Your site goes live or automation starts running. Training and ongoing support provided so you feel confident with everything.',
    details: [
      'Smooth launch with zero downtime',
      'Training on how to use and update',
      'Documentation for reference',
      'Available for questions and updates',
    ],
  },
]

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll progress for the connecting line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className="section-padding relative bg-background overflow-hidden" ref={containerRef}>
      {/* Background blur orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blur-orb-lg absolute right-1/4 top-1/4 bg-accent/5" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
          >
            How It <span className="text-gradient">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            A simple, transparent process from start to finish.
          </motion.p>
        </div>

        {/* Horizontal Timeline */}
        <div className="max-w-7xl mx-auto">
          {/* Progress Line */}
          <div className="relative mb-12 hidden md:block">
            <div className="h-1 w-full bg-border/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
                style={{ width: lineWidth }}
              />
            </div>

            {/* Step indicators on the line */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.2, type: 'spring' }}
                  className="w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-xs font-bold text-white"
                >
                  {step.id}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card
                  variant="glass"
                  padding="none"
                  className="h-full border-2 border-border/50 hover:border-primary/50 transition-all duration-500 group"
                >
                  <div className="p-6 lg:p-8 space-y-4">
                    {/* Icon with gradient background */}
                    <div className="relative inline-flex">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative text-6xl"
                      >
                        {step.icon}
                      </motion.div>
                    </div>

                    {/* Step number badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      <span>Step {step.id}</span>
                      <span className="text-xs opacity-70">• {step.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs font-semibold text-primary mb-3">What to expect:</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start gap-2 text-xs text-muted-foreground"
                          >
                            <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">
                              ✓
                            </span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Hover arrow indicator */}
                    <motion.div
                      className="flex items-center gap-2 text-primary font-medium text-sm pt-2"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1, x: 5 }}
                    >
                      <span>Next step</span>
                      <span className="text-lg">→</span>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile connecting line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        </div>
      </div>
    </section>
  )
}
