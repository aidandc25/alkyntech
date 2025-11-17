'use client'

import { motion } from 'framer-motion'
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
      'Modern React/Next.js Development',
      'Mobile-First Responsive Design',
      'SEO Optimization & Performance',
      'E-commerce & Payment Integration',
      'CMS Integration & Management',
      'Analytics & Tracking Setup',
    ],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: '⚡',
    title: 'Automation',
    tagline: 'Work smarter, not harder',
    description: 'Intelligent workflow automation that saves time, reduces errors, and eliminates repetitive tasks from your daily operations.',
    features: [
      'Custom Workflow Automation',
      'API Integrations & Connections',
      'Data Processing Pipelines',
      'AI-Powered Task Automation',
      'Email & Notification Systems',
      'Report Generation & Analytics',
    ],
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex"
            >
              <div className="glass-subtle px-4 py-2 rounded-full">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  What We Do Best
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-fluid-hero font-bold"
            >
              Our <span className="gradient-text">Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-fluid-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Premium development solutions tailored to your business needs
            </motion.p>
          </div>

          {/* Services Showcase - Asymmetric Layout */}
          <div className="max-w-7xl mx-auto space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className={`
                    grid md:grid-cols-2 gap-8 items-center
                    ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}
                  `}
                >
                  {/* Content Side */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="space-y-4">
                      <div className="text-6xl">{service.icon}</div>
                      <h2 className="text-fluid-3xl font-bold">{service.title}</h2>
                      <p className="text-fluid-lg text-primary font-semibold">{service.tagline}</p>
                      <p className="text-fluid-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link href="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="btn-premium"
                        >
                          Get Started →
                        </motion.button>
                      </Link>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                    <div className="bento-card aspect-[4/3] overflow-hidden">
                      <div className={`h-full bg-gradient-to-br ${service.gradient} flex items-center justify-center relative`}>
                        <div className="text-9xl opacity-50">{service.icon}</div>

                        {/* Decorative Elements */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        <div className="blur-orb-md absolute top-1/4 left-1/4 bg-primary/10" />
                        <div className="blur-orb-sm absolute bottom-1/3 right-1/3 bg-accent/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <div className="max-w-5xl mx-auto mt-32">
            <div className="text-center mb-16">
              <h2 className="text-fluid-3xl font-bold mb-4">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-fluid-base text-muted-foreground">
                Simple, transparent, and efficient from start to finish
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'We learn about your goals and requirements' },
                { step: '02', title: 'Design', desc: 'Create mockups and get your feedback' },
                { step: '03', title: 'Develop', desc: 'Build your solution with modern tech' },
                { step: '04', title: 'Deploy', desc: 'Launch and provide ongoing support' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bento-card text-center group hover:scale-105"
                >
                  <div className="text-5xl font-bold gradient-text mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-32">
            <div className="text-center mb-16">
              <h2 className="text-fluid-3xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How long does a typical project take?',
                  a: 'Most projects are delivered within 1-3 weeks, depending on complexity and scope. We prioritize speed without compromising quality.',
                },
                {
                  q: 'Do you require long-term contracts?',
                  a: 'No! We work on a project basis with no long-term commitments. You only pay for what you need, when you need it.',
                },
                {
                  q: 'What technologies do you use?',
                  a: 'We use modern, proven technologies like React, Next.js, Node.js, and various AI/automation tools to build fast, scalable solutions.',
                },
                {
                  q: 'Do you provide ongoing support?',
                  a: 'Yes! We offer maintenance and support packages to keep your website running smoothly and up-to-date after launch.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bento-card"
                >
                  <h3 className="text-fluid-lg font-semibold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bento-card"
            >
              <h2 className="text-fluid-3xl font-bold mb-4">
                Ready to get started?
              </h2>
              <p className="text-fluid-base text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help bring your vision to life with premium development and automation.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium"
                >
                  Start Your Project →
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

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
