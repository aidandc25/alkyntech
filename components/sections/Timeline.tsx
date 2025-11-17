'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'

const steps = [
  {
    id: 1,
    icon: '📅',
    title: 'Discovery Call',
    duration: '15-30 minutes',
    description: 'We discuss your needs, goals, and challenges in plain English. No pressure, no sales pitch - just a conversation about how I can help your business.',
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
    duration: '1-3 weeks',
    description: 'I build exactly what you need - whether it is a modern website, automation workflow, or both. You will see progress along the way and provide feedback.',
    details: [
      'Clean, modern design that matches your brand',
      'Mobile-responsive and fast',
      'Easy for you to manage',
      'Regular updates during development',
    ],
  },
  {
    id: 3,
    icon: '🚀',
    title: 'Launch & Support',
    duration: 'Ongoing',
    description: 'Your site goes live or automation starts running. I provide training and ongoing support so you feel confident managing everything.',
    details: [
      'Smooth launch with zero downtime',
      'Training on how to use and update',
      'Documentation for reference',
      'Available for questions and updates',
    ],
  },
]

export default function Timeline() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const toggleStep = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId)
  }

  return (
    <section id="process" className="section-padding relative bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
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

        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                variant="elevated"
                padding="none"
                className="overflow-hidden cursor-pointer"
                onClick={() => toggleStep(step.id)}
              >
                {/* Main Content */}
                <div className="p-8 flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                    {step.id}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{step.icon}</span>
                        <h3 className="text-2xl font-semibold">{step.title}</h3>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full whitespace-nowrap">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Expand Indicator */}
                    <div className="mt-4 flex items-center gap-2 text-primary font-medium">
                      <span className="text-sm">
                        {expandedStep === step.id ? 'Show less' : 'Learn more'}
                      </span>
                      <motion.span
                        animate={{
                          rotate: expandedStep === step.id ? 90 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedStep === step.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="border-t border-border bg-muted/30"
                    >
                      <div className="p-8 pl-[5.5rem]">
                        <h4 className="font-semibold mb-4">What to expect:</h4>
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-xs">
                                ✓
                              </span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Connecting Line Decoration (Mobile Hidden) */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[60%] -z-10">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full h-full bg-gradient-to-b from-transparent via-border to-transparent origin-top"
          />
        </div>
      </div>
    </section>
  )
}
