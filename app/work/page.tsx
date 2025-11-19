'use client'

import { useState } from 'react'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import StackedCarousel, { type Project } from '@/components/Work/StackedCarousel'
import ExpandedView from '@/components/Work/ExpandedView'

// Personal projects
const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Learn & Quiz Tool',
    description: 'AI-powered learning platform that transforms study materials into interactive modules with quizzes, analytics, and Canvas LMS integration.',
    tags: ['React', 'TypeScript', 'Supabase', 'AI'],
    mediaType: 'image',
    gradient: 'bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-cyan-500/30',
    role: 'Full-Stack Developer',
    timeline: 'Ongoing',
    year: '2024',
    challenge: 'Students struggle to efficiently study large amounts of material and often lack access to high-quality practice problems with detailed explanations. Traditional study methods are time-consuming and don\'t provide immediate feedback or personalized analytics to identify weak areas.',
    solution: {
      intro: 'Comprehensive learning platform using AI to automatically generate interactive study modules from uploaded materials. The system creates structured content with worked examples, practice quizzes, and detailed analytics.',
      features: [
        'AI-powered module generation transforming PDFs and documents into structured learning content',
        'Interactive quiz system with step-by-step explanations and immediate feedback',
        'Analytics dashboard showing performance by topic and identifying weak areas',
        'Canvas LMS integration for automatic course import and material synchronization',
        'Dark mode with accessible UI built using React Aria components',
        'KaTeX math rendering and custom SVG visualizations for complex concepts',
      ],
    },
    results: {
      metric1: { value: 'React 19', label: 'Modern Stack' },
      metric2: { value: 'AI-Powered', label: 'Auto Generation' },
      metric3: { value: 'Full-Stack', label: 'End-to-End' },
    },
  },
  {
    id: 'project-2',
    title: 'IRL Connector',
    description: 'Privacy-focused social mobile app designed to facilitate real-world meetups through proximity-based discovery and friend coordination.',
    tags: ['Flutter', 'Symfony', 'MySQL', 'Real-time'],
    mediaType: 'image',
    gradient: 'bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-cyan-500/30',
    role: 'Full-Stack Developer',
    timeline: 'Ongoing',
    year: '2024',
    challenge: 'Social media platforms keep people isolated behind screens rather than facilitating genuine real-world connections. Privacy concerns make users hesitant to share location data, and existing apps don\'t prioritize actual in-person meetups over digital interactions.',
    solution: {
      intro: 'Privacy-first mobile application bridging online and offline social interaction. Users maintain complete control over visibility with toggle functionality, while proximity detection operates without revealing exact locations.',
      features: [
        'Privacy-controlled proximity discovery notifying users of nearby people without exposing exact locations',
        'Mutual consent system requiring approval from both parties for profile sharing',
        'Real-time location sharing for friends with full user control and transparency',
        'In-app messaging for coordinating meetups after connections are established',
        'Social feed for documenting in-person hangouts with photos and memories',
        'Flutter mobile app with Symfony backend, MySQL database, and Mercure for real-time updates',
      ],
    },
    results: {
      metric1: { value: 'Privacy', label: 'First Design' },
      metric2: { value: 'Real-time', label: 'Updates' },
      metric3: { value: 'Cross-Platform', label: 'iOS & Android' },
    },
  },
  {
    id: 'project-3',
    title: 'Melodies for Humanity',
    description: 'Non-profit organization website connecting high school musicians with seniors and patients, featuring 7 active chapters across the U.S.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Non-profit'],
    mediaType: 'image',
    gradient: 'bg-gradient-to-br from-rose-500/30 via-pink-500/20 to-purple-500/30',
    link: 'https://melodiesforhumanity.org',
    role: 'Web Developer',
    timeline: '2-3 Weeks',
    year: '2024',
    challenge: 'Non-profit organization required online presence to showcase mission of bringing music to seniors and hospital patients, recruit new high school chapters, and connect with potential partners. Site needed to be accessible, inspiring, and easy to navigate for diverse audiences.',
    solution: {
      intro: 'Clean, accessible website effectively communicating the organization\'s mission and impact. Site features clear CTAs for starting new chapters and includes comprehensive information about the program.',
      features: [
        'Responsive design working seamlessly across all devices',
        'Dark/light theme toggle with system preference detection',
        'Interactive navigation with mobile menu for enhanced mobile experience',
        'Dedicated pages for founders, chapters, partners, and contact information',
        'Clean visual hierarchy highlighting organization\'s nationwide impact',
        'Deployed on custom domain with fast load times and SEO optimization',
      ],
    },
    results: {
      metric1: { value: '7', label: 'Active Chapters' },
      metric2: { value: 'Live', label: 'Deployed Site' },
      metric3: { value: 'Nationwide', label: 'U.S. Presence' },
    },
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
                  Projects & Experience
                </p>
              </div>
            </div>
            <h1 className="text-fluid-hero font-bold">
              <span className="gradient-text">Work</span>
            </h1>
            <p className="text-fluid-xl text-muted-foreground max-w-2xl mx-auto">
              Professional experience and personal projects spanning AI, mobile, and web development
            </p>
          </div>

          {/* Stacked 3D Carousel */}
          <div className="max-w-7xl mx-auto" style={{ marginBottom: '600px' }}>
            <StackedCarousel
              projects={projects}
              onProjectClick={(project) => setExpandedProject(project)}
            />
          </div>

          {/* Professional Experience Section */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-fluid-3xl font-bold mb-3">Professional Experience</h2>
            </div>

            <div className="bento-card">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-fluid-2xl font-bold mb-4">Software Engineer</h3>
                  <p className="text-fluid-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Building innovative solutions at the intersection of AI, design, and technology with emphasis on seamless user experiences and scalable products.
                  </p>
                </div>

                <div className="pt-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {[
                      'Designing and developing UI/UX features delivering seamless experiences across platforms',
                      'Collaborating directly with clients to translate business requirements into technical solutions',
                      'Tackling complex technical challenges with emphasis on problem-solving and resource-effective innovation',
                      'Applying best practices in software engineering, DevOps, and API integration for scalable products',
                      'Contributing to collaborative, efficiency-focused engineering culture through mentorship',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-fluid-base text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {['AI', 'UI/UX', 'DevOps', 'API Integration', 'Full-Stack'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium glass-subtle"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-center pt-6">
                  <a
                    href="https://www.linkedin.com/in/aidan-da-costa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn-premium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    View Full Experience on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="max-w-5xl mx-auto mt-32">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bento-card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">3</div>
                <div className="text-sm text-muted-foreground">Featured Projects</div>
              </div>
              <div className="bento-card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">Enterprise</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
              <div className="bento-card text-center">
                <div className="text-4xl font-bold gradient-text mb-2">Full-Stack</div>
                <div className="text-sm text-muted-foreground">Development</div>
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
                Build something amazing. Get in touch to discuss your vision and bring it to life.
              </p>
              <a href="/contact">
                <button className="btn-premium">
                  Get Started →
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
