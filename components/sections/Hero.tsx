'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

type HeroSlide = {
  id: string
  title: React.ReactNode
  description: React.ReactNode
  ctaLabel: string
  ctaHref: string
  background: 'gradient' | 'video'
  gradientClass?: string
  videoPlaceholder?: boolean
  videoSrc?: string
  duration?: number
}

const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    title: (
      <>
        Websites That <span className="gradient-text">Captivate</span>
      </>
    ),
    description: 'Premium web development and intelligent automation for businesses that demand excellence.',
    ctaLabel: 'Start Your Project',
    ctaHref: '/contact',
    background: 'video',
    videoPlaceholder: false,
    videoSrc: '/videos/hero-websites.mp4',
    gradientClass: 'bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20',
    duration: 4000, // 4 seconds for first slide on initial load
  },
  {
    id: 'slide-2',
    title: (
      <>
        <span className="gradient-text">AI-Powered</span> Automation
      </>
    ),
    description: 'Streamline your workflows with intelligent automation that saves time and eliminates repetitive tasks.',
    ctaLabel: 'Learn More',
    ctaHref: '/services',
    background: 'video',
    videoPlaceholder: false,
    videoSrc: '/videos/hero-automation.mp4',
    gradientClass: 'bg-gradient-to-br from-secondary/20 via-accent/10 to-primary/20',
    duration: 6000, // 6 seconds
  },
  {
    id: 'slide-3',
    title: (
      <>
        Built for <span className="gradient-text">Growing Businesses</span>
      </>
    ),
    description: 'Fast, beautiful, conversion-optimized websites that showcase your business at its best.',
    ctaLabel: 'View Portfolio',
    ctaHref: '/work',
    background: 'video',
    videoPlaceholder: false,
    videoSrc: '/videos/hero-analytics.mp4',
    gradientClass: 'bg-gradient-to-br from-accent/20 via-primary/10 to-secondary/20',
    duration: 6000, // 6 seconds
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const currentSlide = heroSlides[activeSlide]
  const heroRef = useRef<HTMLDivElement>(null)

  // Auto-advance slides with custom durations per slide
  useEffect(() => {
    const duration = currentSlide.duration || 12000 // Default to 12 seconds if not specified
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, duration)

    return () => clearTimeout(timer)
  }, [activeSlide, currentSlide.duration])

  // Parallax scroll effect (Turbo-style)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={heroRef} className="relative overflow-hidden pt-24">
      {/* Hero container with turbo-style proportions */}
      <div className="relative h-[36vw] min-h-[420px] max-h-[540px]">
        {/* Background Layer - Video or Gradient */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {currentSlide.background === 'video' && !currentSlide.videoPlaceholder && currentSlide.videoSrc ? (
              <>
                {/* Turbo-style Video Background with Parallax */}
                <motion.div
                  style={{ y: videoY }}
                  className="absolute inset-0 w-full h-full"
                >
                  <video
                    key={currentSlide.videoSrc}
                    className="absolute inset-0 block h-full w-full object-cover video-optimized"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ opacity: 0.4 }}
                  >
                    <source src={currentSlide.videoSrc} type="video/mp4" />
                  </video>
                </motion.div>
              </>
            ) : currentSlide.background === 'video' && currentSlide.videoPlaceholder ? (
              <>
                {/* Video Placeholder - Gradient fallback */}
                <div className={`absolute inset-0 ${currentSlide.gradientClass}`} />
              </>
            ) : (
              <div className={`absolute inset-0 ${currentSlide.gradientClass}`} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Overlay Layer - Turbo-style dark gradient for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />

        {/* Blur Mask Layer - Turbo-style gradient mask */}
        <div
          className="pointer-events-none absolute inset-0 backdrop-blur-[10px] backdrop-saturate-[1.05]"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 22%, rgba(0,0,0,0) 78%)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 22%, rgba(0,0,0,0) 78%)',
          }}
        />

        {/* Slide Dots Navigation */}
        <div className="absolute top-6 left-6 z-30 flex gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? 'w-8 bg-white'
                  : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end">
          <div className="container mx-auto px-6 pb-12 md:pb-16 lg:pb-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex">
                  <div className="glass-subtle px-4 py-2 rounded-full">
                    <p className="text-xs uppercase tracking-wider font-medium text-foreground">
                      ✨ Premium Development Studio
                    </p>
                  </div>
                </div>

                {/* Title - Fluid Typography */}
                <h1 className="text-fluid-hero font-bold leading-tight text-foreground">
                  {currentSlide.title}
                </h1>

                {/* Description */}
                <p className="text-fluid-lg text-muted-foreground max-w-2xl leading-relaxed">
                  {currentSlide.description}
                </p>

                {/* CTA */}
                <div className="pt-4">
                  <Link href={currentSlide.ctaHref}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-semibold shadow-turbo-md hover:shadow-turbo-lg transition-all duration-300"
                    >
                      {currentSlide.ctaLabel}
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Ambient Blur Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blur-orb-md absolute left-1/4 top-1/4 bg-primary/10" />
          <div className="blur-orb-lg absolute right-1/4 bottom-1/4 bg-secondary/10" />
          <div className="blur-orb-sm absolute right-1/3 top-1/3 bg-accent/10" />
        </div>
      </div>

      {/* Trust Indicators Below Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-30 -mt-8"
      >
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-6 shadow-turbo-lg">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Available for Projects</span>
              </div>
              <div className="hidden md:block">•</div>
              <div>Fully Managed</div>
              <div className="hidden md:block">•</div>
              <div>Fast Delivery</div>
              <div className="hidden md:block">•</div>
              <div>Remote-First</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
