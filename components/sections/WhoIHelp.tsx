'use client'

import { motion } from 'framer-motion'
import { Tag } from '@/components/ui/tag'

const targetAudiences = [
  {
    icon: '🔨',
    label: 'Contractors & Home Services',
  },
  {
    icon: '⚖️',
    label: 'Professional Services',
  },
  {
    icon: '🏪',
    label: 'Local Retail & Shops',
  },
  {
    icon: '📋',
    label: 'Drowning in Admin Work',
  },
]

export default function WhoIHelp() {
  return (
    <section className="section-padding relative bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Heading */}
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
            >
              Built for <span className="text-gradient">Service Businesses</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              If you're spending more time on your website or admin tasks than running your
              business, I can help.
            </motion.p>
          </div>

          {/* Tag Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            {targetAudiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex justify-center"
              >
                <Tag
                  variant="glass"
                  size="lg"
                  className="text-base font-medium px-6 py-3 w-full justify-center"
                >
                  <span className="text-2xl">{audience.icon}</span>
                  <span>{audience.label}</span>
                </Tag>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-muted-foreground"
          >
            I work with businesses that need a better online presence or want to automate
            time-consuming workflows—without the tech jargon.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
