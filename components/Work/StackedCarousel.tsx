'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// 4-layer stacking configuration (turbo-style)
const STACK_SEQUENCE = [
  { key: 'front', translateY: 0, scale: 1, zIndex: 50, opacity: 1 },
  { key: 'trail-one', translateY: -80, scale: 0.94, zIndex: 40, opacity: 0.9 },
  { key: 'trail-two', translateY: -150, scale: 0.88, zIndex: 30, opacity: 0.7 },
  { key: 'trail-three', translateY: -210, scale: 0.82, zIndex: 20, opacity: 0.5 },
]

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  mediaType: 'image' | 'video'
  imageSrc?: string
  videoSrc?: string
  gradient?: string
  link?: string
  // Detailed project information
  role: string
  timeline: string
  year: string
  challenge: string
  solution: {
    intro: string
    features: string[]
  }
  results: {
    metric1: { value: string; label: string }
    metric2: { value: string; label: string }
    metric3: { value: string; label: string }
  }
}

type StackedCarouselProps = {
  projects: Project[]
  onProjectClick?: (project: Project) => void
}

export default function StackedCarousel({ projects, onProjectClick }: StackedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // Calculate which project goes in which slot
  const getProjectForSlot = (slotIndex: number) => {
    const projectIndex = (activeIndex + slotIndex) % projects.length
    return projects[projectIndex]
  }

  // Navigation functions
  const goToNext = useCallback(() => {
    if (isScrolling) return
    setActiveIndex((prev) => (prev + 1) % projects.length)
    setIsScrolling(true)
    scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 620) // Turbo's cooldown
  }, [isScrolling, projects.length])

  const goToPrevious = useCallback(() => {
    if (isScrolling) return
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsScrolling(true)
    scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 620)
  }, [isScrolling, projects.length])

  // Wheel navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 10) {
        e.preventDefault()
        if (e.deltaY > 0) {
          goToNext()
        } else {
          goToPrevious()
        }
      }
    }

    const container = document.getElementById('stacked-carousel')
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false })
      return () => container.removeEventListener('wheel', handleWheel)
    }
  }, [goToNext, goToPrevious])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrevious])

  // Cleanup timeout
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="relative w-full">
      {/* Stack Container */}
      <div
        id="stacked-carousel"
        className="relative mx-auto max-w-5xl"
        style={{ height: '600px', paddingTop: '210px' }} // Account for stacked cards above
      >
        {STACK_SEQUENCE.map((slot, slotIndex) => {
          const project = getProjectForSlot(slotIndex)
          if (!project) return null

          return (
            <motion.div
              key={`${project.id}-${slotIndex}`}
              animate={{
                y: slot.translateY,
                scale: slot.scale,
                opacity: slot.opacity,
              }}
              transition={{
                type: 'spring',
                stiffness: 240,
                damping: 34,
                mass: 1,
              }}
              style={{ zIndex: slot.zIndex }}
              className="absolute left-0 right-0 gpu-accelerated"
              onClick={() => {
                if (slotIndex === 0 && onProjectClick) {
                  onProjectClick(project)
                }
              }}
            >
              <ProjectCard
                project={project}
                isFront={slotIndex === 0}
                onClick={() => {
                  if (slotIndex === 0 && onProjectClick) {
                    onProjectClick(project)
                  }
                }}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goToPrevious}
          disabled={isScrolling}
          className="p-4 rounded-full glass-card hover:glass-strong transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Previous project"
        >
          <svg className="w-6 h-6 rotate-90 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => {
                if (!isScrolling) {
                  setActiveIndex(index)
                  setIsScrolling(true)
                  scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 620)
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-primary'
                  : 'w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/60'
              }`}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          disabled={isScrolling}
          className="p-4 rounded-full glass-card hover:glass-strong transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
          aria-label="Next project"
        >
          <svg className="w-6 h-6 -rotate-90 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Instructions */}
      <p className="text-center text-sm text-muted-foreground mt-6">
        Use arrow keys, scroll, or click to navigate
      </p>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project, isFront, onClick }: { project: Project; isFront: boolean; onClick: () => void }) {
  return (
    <div
      className={`
        carousel-card
        ${isFront ? 'front cursor-pointer hover:shadow-turbo-xl' : 'cursor-default'}
      `}
      onClick={onClick}
    >
      {/* Media Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20">
        {project.mediaType === 'video' && project.videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={project.videoSrc} type="video/mp4" />
          </video>
        ) : project.imageSrc ? (
          <motion.img
            src={project.imageSrc}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: [0.25, 0.1, 0.25, 1] }}
          />
        ) : (
          <div className={`absolute inset-0 ${project.gradient || 'bg-gradient-to-br from-primary/20 to-secondary/20'}`}>
            <div className="flex items-center justify-center h-full">
              <span className="text-8xl">🚀</span>
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative p-8 space-y-4">
        <h3 className="text-fluid-2xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium glass-subtle"
            >
              {tag}
            </span>
          ))}
        </div>

        {isFront && (
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group">
              View Project
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
