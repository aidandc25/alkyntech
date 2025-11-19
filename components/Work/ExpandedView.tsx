'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from './StackedCarousel'

type ExpandedViewProps = {
  project: Project | null
  onClose: () => void
}

export default function ExpandedView({ project, onClose }: ExpandedViewProps) {
  // Lock body scroll when expanded
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl"
          onClick={onClose}
        >
          <div
            className="h-full w-full overflow-y-auto overscroll-contain"
            onClick={(e) => e.stopPropagation()}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="fixed top-6 right-6 z-[110] p-4 rounded-full glass-strong hover:bg-white/20 transition-all duration-300 group"
              aria-label="Close project view"
            >
              <svg
                className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Hero Section - Morphs from card */}
            <motion.div
              layoutId={`project-card-${project.id}`}
              className="relative overflow-hidden"
              initial={{ borderRadius: '24px' }}
              animate={{ borderRadius: '0px' }}
              exit={{ borderRadius: '24px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative h-[50vh] min-h-[400px]">
                {/* Media Background */}
                {project.mediaType === 'video' && project.videoSrc ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover video-optimized"
                  >
                    <source src={project.videoSrc} type="video/mp4" />
                  </video>
                ) : project.imageSrc ? (
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className={`absolute inset-0 ${project.gradient || 'bg-gradient-to-br from-primary/20 to-secondary/20'}`} />
                )}

                {/* Overlay with blur mask */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/75" />
                <div
                  className="absolute inset-0 backdrop-blur-[7px] backdrop-saturate-[1.08]"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)',
                    maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)',
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end">
                  <div className="container mx-auto px-6 pb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="max-w-4xl space-y-6"
                    >
                      <h1 className="text-fluid-hero font-bold text-white">
                        {project.title}
                      </h1>
                      <p className="text-fluid-xl text-white/90 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 rounded-full text-sm font-medium glass-strong"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Details Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="container mx-auto px-6 py-20"
            >
              <div className="max-w-4xl mx-auto space-y-16">
                {/* Overview */}
                <section className="space-y-6">
                  <h2 className="text-fluid-3xl font-bold">Project Overview</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bento-card">
                      <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Role</div>
                      <div className="text-fluid-lg font-semibold">Full Stack Development</div>
                    </div>
                    <div className="bento-card">
                      <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Timeline</div>
                      <div className="text-fluid-lg font-semibold">2-3 Weeks</div>
                    </div>
                    <div className="bento-card">
                      <div className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Year</div>
                      <div className="text-fluid-lg font-semibold">2025</div>
                    </div>
                  </div>
                </section>

                {/* Challenge */}
                <section className="space-y-6">
                  <h2 className="text-fluid-3xl font-bold">The Challenge</h2>
                  <div className="bento-card">
                    <p className="text-fluid-base text-muted-foreground leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                  </div>
                </section>

                {/* Solution */}
                <section className="space-y-6">
                  <h2 className="text-fluid-3xl font-bold">The Solution</h2>
                  <div className="bento-card">
                    <p className="text-fluid-base text-muted-foreground leading-relaxed mb-6">
                      A comprehensive solution delivered that exceeded expectations. Key features included:
                    </p>
                    <ul className="space-y-4">
                      {[
                        'Modern, responsive design with premium UI/UX',
                        'Advanced automation workflows for efficiency',
                        'Seamless integration with existing systems',
                        'Optimized for performance and SEO',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-fluid-base text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Results */}
                <section className="space-y-6">
                  <h2 className="text-fluid-3xl font-bold">Results</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bento-card text-center">
                      <div className="text-5xl font-bold gradient-text mb-2">8×</div>
                      <div className="text-sm text-muted-foreground">Faster Performance</div>
                    </div>
                    <div className="bento-card text-center">
                      <div className="text-5xl font-bold gradient-text mb-2">95%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                    <div className="bento-card text-center">
                      <div className="text-5xl font-bold gradient-text mb-2">2.5k+</div>
                      <div className="text-sm text-muted-foreground">Monthly Users</div>
                    </div>
                  </div>
                </section>

                {/* CTA */}
                <section className="text-center pt-12">
                  <div className="bento-card">
                    <h3 className="text-fluid-2xl font-bold mb-4">
                      Ready to start your project?
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                      Let's build something amazing together. Get in touch to discuss your vision.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = '/contact'}
                      className="btn-premium"
                    >
                      Get Started →
                    </motion.button>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
