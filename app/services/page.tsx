'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    tagline: 'Premium websites that convert',
    description: 'Custom websites built with modern technologies. Fast, beautiful, and conversion-optimized for your business growth.',
    features: [
      'Online Payments & Secure Checkout Integration',
      'Appointment Booking Systems with Calendar Sync',
      'Contact Forms & Quote Request Systems',
      'Mobile-First Responsive Design',
      'SEO Optimization to Get Found on Google',
      'Analytics Dashboard to Track Performance',
    ],
    gradient: 'from-purple-500/20 via-pink-500/10 to-orange-500/20',
    stats: { label: 'Launch Ready', value: '1 Week' },
    videoPlaceholder: '/videos/web-development.mp4',
  },
  {
    icon: '⚡',
    title: 'Automation',
    tagline: 'Work smarter, not harder',
    description: 'Intelligent workflow automation that saves time, reduces errors, and eliminates repetitive tasks from your daily operations.',
    features: [
      'Email & SMS Automation for Follow-ups',
      'Smart Review Management (Protect Your Reputation)',
      'Online Ordering Systems',
      'Automated Appointment Reminders',
      'AI Chatbot for 24/7 Customer Support',
      'CRM & Workflow Integration',
    ],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-purple-500/20',
    stats: { label: 'Efficiency Gain', value: '10× Speed' },
    videoPlaceholder: '/videos/automation.mp4',
  },
]

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most projects are delivered as quick as a week, depending on complexity and scope. Speed prioritized without compromising quality.',
  },
  {
    q: 'Are long-term contracts required?',
    a: 'No! Projects are handled on a per-project basis with no long-term commitments. Pay only for what you need, when you need it.',
  },
  {
    q: 'What technologies are used?',
    a: 'Modern, proven technologies like React, Next.js, Node.js, and various AI/automation tools to build fast, scalable solutions.',
  },
  {
    q: 'Is ongoing support provided?',
    a: 'Yes! Maintenance and support packages are available to keep your website running smoothly and up-to-date after launch.',
  },
]

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [hasVideo, setHasVideo] = useState(true) // Video enabled!

  // VIDEO PATH - Particles video added!
  const heroVideoPath = '/videos/services-hero.mp4'

  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden">
        {/* Hero Banner with Video Background */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Video Background Layer */}
          <div className="absolute inset-0 z-0">
            {hasVideo ? (
              /* REPLACE THIS WITH VIDEO ONCE YOU ADD IT */
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                style={{ opacity: 0.35 }}
              >
                <source src={heroVideoPath} type="video/mp4" />
              </video>
            ) : (
              /* PLACEHOLDER - Shows until you add video */
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 glass-card max-w-md">
                    <div className="text-4xl mb-4">🎬</div>
                    <p className="text-sm text-muted-foreground">
                      Add particles video to:<br/>
                      <span className="font-mono text-xs">{heroVideoPath}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Then set hasVideo = true (line 68)
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Gradient overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
          </div>

          {/* Animated blur orbs */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="blur-orb-lg absolute left-1/4 top-1/4 bg-primary/10 animate-float" />
            <div className="blur-orb-lg absolute right-1/4 bottom-1/4 bg-secondary/10"
              style={{ animationDelay: '2s', animationDuration: '8s' }}
            />
          </div>

          {/* Content */}
          <div className="container relative z-10 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex"
              >
                <div className="glass-card px-4 py-2 rounded-full border border-primary/20 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                    Premium Solutions
                  </p>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
              >
                <span className="gradient-text">Services</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                Premium development solutions tailored to your business needs
              </motion.p>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pt-8"
              >
                <div className="inline-flex flex-col items-center gap-2 text-muted-foreground">
                  <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Showcase - Enhanced */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-7xl mx-auto space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div
                    className={`
                      grid md:grid-cols-2 gap-12 items-center
                      ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}
                    `}
                  >
                    {/* Content Side */}
                    <div className={`space-y-8 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                      {/* Icon with glow */}
                      <div className="relative inline-flex">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl" />
                        <motion.div
                          animate={{
                            scale: hoveredService === index ? 1.1 : 1,
                            rotate: hoveredService === index ? 5 : 0,
                          }}
                          className="relative text-7xl"
                        >
                          {service.icon}
                        </motion.div>
                      </div>

                      <div className="space-y-4">
                        <h2 className="text-4xl lg:text-5xl font-bold">{service.title}</h2>
                        <p className="text-xl text-primary font-semibold">{service.tagline}</p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Stats Badge */}
                      <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/20">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-semibold text-primary">{service.stats.label}:</span>
                        <span className="text-sm font-bold text-foreground">{service.stats.value}</span>
                      </div>

                      {/* Features */}
                      <div className="space-y-4">
                        {service.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 group"
                          >
                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="pt-4">
                        <Link href="/contact">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                          >
                            Get Started →
                          </motion.button>
                        </Link>
                      </div>
                    </div>

                    {/* Visual Side - Enhanced */}
                    <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                      <motion.div
                        animate={{
                          y: hoveredService === index ? -10 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="relative group"
                      >
                        {/* Glass card with video */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-border/50 group-hover:border-primary/50 transition-all duration-500">
                          {/* Gradient background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />

                          {/* VIDEO - Now playing! */}
                          {true ? (
                            /* Videos enabled! */
                            <video
                              className="absolute inset-0 w-full h-full object-cover"
                              autoPlay
                              loop
                              muted
                              playsInline
                              style={{ opacity: 0.6 }}
                            >
                              <source src={service.videoPlaceholder} type="video/mp4" />
                            </video>
                          ) : (
                            /* Placeholder until you add videos */
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                              <div className="text-8xl opacity-30 mb-4">{service.icon}</div>
                              <div className="glass-card px-6 py-3 rounded-full border border-border/50">
                                <p className="text-sm text-muted-foreground">
                                  Add video: <span className="font-mono text-xs">{service.videoPlaceholder}</span>
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Decorative blur orbs */}
                          <motion.div
                            animate={{
                              scale: hoveredService === index ? 1.2 : 1,
                              x: hoveredService === index ? 30 : 0,
                            }}
                            transition={{ duration: 0.6 }}
                            className="blur-orb-md absolute top-1/4 left-1/4 bg-primary/20"
                          />
                          <motion.div
                            animate={{
                              scale: hoveredService === index ? 1.2 : 1,
                              x: hoveredService === index ? -30 : 0,
                            }}
                            transition={{ duration: 0.6 }}
                            className="blur-orb-sm absolute bottom-1/3 right-1/3 bg-accent/20"
                          />

                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                        </div>

                        {/* Floating stat card */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                          className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl border border-border/50 shadow-xl"
                        >
                          <div className="text-3xl font-bold gradient-text">{service.stats.value}</div>
                          <div className="text-sm text-muted-foreground">{service.stats.label}</div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Enhanced with Connected Lines */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl lg:text-5xl font-bold mb-4"
                >
                  The <span className="gradient-text">Process</span>
                </motion.h2>
                <p className="text-lg text-muted-foreground">
                  Simple, transparent, and efficient from start to finish
                </p>
              </div>

              {/* Connected process cards */}
              <div className="relative">
                {/* Connection line */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 -translate-y-1/2" />

                <div className="grid md:grid-cols-4 gap-8 relative z-10">
                  {[
                    { step: '01', title: 'Discovery', desc: 'Learn about your goals and requirements', icon: '🔍' },
                    { step: '02', title: 'Design', desc: 'Create mockups and get your feedback', icon: '🎨' },
                    { step: '03', title: 'Develop', desc: 'Build your solution with modern tech', icon: '⚙️' },
                    { step: '04', title: 'Deploy', desc: 'Launch and provide ongoing support', icon: '🚀' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="relative"
                    >
                      {/* Connector dot */}
                      <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-20" />

                      <div className="glass-card p-8 text-center group hover:scale-105 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 h-full border-2 border-border/50 hover:border-primary/50">
                        {/* Icon with glow */}
                        <div className="relative inline-flex mb-4">
                          <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:blur-2xl transition-all" />
                          <div className="relative text-5xl">{item.icon}</div>
                        </div>

                        {/* Step number */}
                        <div className="text-4xl font-bold gradient-text mb-3">{item.step}</div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Expandable Accordions */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl lg:text-5xl font-bold mb-4"
                >
                  Frequently Asked <span className="gradient-text">Questions</span>
                </motion.h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full text-left glass-card border-2 border-border/50 hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="p-6 flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {faq.q}
                          </h3>

                          <AnimatePresence>
                            {expandedFaq === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="text-muted-foreground leading-relaxed pt-2">
                                  {faq.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <motion.div
                          animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                <div className="relative glass-card border-2 border-primary/20 p-12 text-center">
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                    Ready to get started?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Discuss your project and see how AlkynTech can help bring your vision to life with premium development and automation.
                  </p>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                    >
                      Start Your Project →
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ambient Blur Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="blur-orb-lg absolute left-0 top-1/4 bg-primary/5" />
          <div className="blur-orb-lg absolute right-0 top-2/3 bg-secondary/5" />
          <div className="blur-orb-md absolute left-1/2 bottom-1/4 bg-accent/5" />
        </div>
      </main>
      <Footer />
    </>
  )
}
