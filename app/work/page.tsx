'use client'

import { useState } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import StackedCarousel, { type Project } from '@/components/Work/StackedCarousel'
import ExpandedView from '@/components/Work/ExpandedView'

// Premium placeholder projects
const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'Modern, conversion-optimized e-commerce solution with seamless checkout and inventory management.',
    tags: ['Next.js', 'React', 'Stripe', 'Tailwind'],
    mediaType: 'image',
    gradient: 'bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-orange-500/30',
  },
  {
    id: 'project-2',
    title: 'AI Workflow Automation',
    description: 'Intelligent automation system that reduced manual data entry by 85% and saved 20 hours per week.',
    tags: ['Python', 'OpenAI', 'Automation', 'APIs'],
    mediaType: 'image',
    gradient: 'bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-purple-500/30',
  },
  {
    id: 'project-3',
    title: 'Restaurant Management Suite',
    description: 'Complete restaurant management system with online ordering, table reservations, and kitchen display.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Real-time'],
    mediaType: 'image',
    gradient: 'bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-cyan-500/30',
  },
  {
    id: 'project-4',
    title: 'Real Estate Portal',
    description: 'Beautiful property showcase platform with advanced search, virtual tours, and agent management.',
    tags: ['Next.js', 'Mapbox', 'CMS', 'SEO'],
    mediaType: 'image',
    gradient: 'bg-gradient-to-br from-amber-500/30 via-orange-500/20 to-red-500/30',
  },
  {
    id: 'project-5',
    title: 'SaaS Analytics Dashboard',
    description: 'Data visualization dashboard with real-time metrics, custom reports, and team collaboration.',
    tags: ['React', 'D3.js', 'WebSockets', 'Analytics'],
    mediaType: 'image',
    gradient: 'bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-fuchsia-500/30',
  },
]

export default function WorkPage() {
  const [expandedProject, setExpandedProject] = useState<Project | null>(null)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20 space-y-6">
            <div className="inline-flex">
              <div className="glass-subtle px-4 py-2 rounded-full">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  Portfolio Showcase
                </p>
              </div>
            </div>
            <h1 className="text-fluid-hero font-bold">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-fluid-xl text-muted-foreground max-w-2xl mx-auto">
              Premium projects that drive results and exceed expectations
            </p>
          </div>

          {/* Stacked 3D Carousel */}
          <div className="max-w-7xl mx-auto">
            <StackedCarousel
              projects={projects}
              onProjectClick={(project) => setExpandedProject(project)}
            />
          </div>

          {/* Stats Section */}
          <div className="max-w-5xl mx-auto mt-32">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bento-card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="bento-card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="bento-card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">3 Weeks</div>
                <div className="text-sm text-muted-foreground">Avg. Delivery Time</div>
              </div>
              <div className="bento-card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">5 Years</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-32 text-center">
            <div className="bento-card">
              <h2 className="text-fluid-3xl font-bold mb-4">
                Ready to start your project?
              </h2>
              <p className="text-fluid-base text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's build something amazing together. Get in touch to discuss your vision and see how we can help bring it to life.
              </p>
              <a href="/contact">
                <button className="btn-premium">
                  Start Your Project →
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Ambient Blur Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blur-orb-lg absolute left-0 top-1/4 bg-primary/5" />
          <div className="blur-orb-lg absolute right-0 top-2/3 bg-secondary/5" />
          <div className="blur-orb-md absolute left-1/3 bottom-1/4 bg-accent/5" />
        </div>
      </main>

      {/* Expanded Project View */}
      <ExpandedView
        project={expandedProject}
        onClose={() => setExpandedProject(null)}
      />

      <Footer />
    </>
  )
}
