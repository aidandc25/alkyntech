'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
      <main className="relative min-h-screen overflow-hidden">
        {/* Hero Section with Video Background */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24">
          {/* Video Background Layer */}
          <div className="absolute inset-0 z-0">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              style={{ opacity: 0.35 }}
            >
              <source src="/videos/scrolling phone.mp4" type="video/mp4" />
            </video>

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
          <div className="container relative z-10 py-20 px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex"
              >
                <div className="glass-card px-4 py-2 rounded-full border border-primary/20 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                    Projects & Experience
                  </p>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
              >
                <span className="gradient-text">Work</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                Professional experience and personal projects spanning AI, mobile, and web development
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

        {/* Projects Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold mb-4"
              >
                Featured <span className="gradient-text">Projects</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground"
              >
                Building solutions that drive impact and innovation
              </motion.p>
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
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold mb-4"
              >
                Professional <span className="gradient-text">Experience</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 p-8 md:p-12">
                <div className="space-y-6">
                  {/* Header with Icon */}
                  <div className="text-center space-y-4">
                    <div className="relative inline-flex">
                      <div className="absolute inset-0 bg-primary/20 blur-2xl" />
                      <div className="relative text-6xl">💼</div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold">Software Engineer</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                      Building innovative solutions at the intersection of AI, design, and technology with emphasis on seamless user experiences and scalable products.
                    </p>
                  </div>

                  {/* Responsibilities Grid */}
                  <div className="pt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6 text-center">Key Responsibilities</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: '🎨', text: 'Designing and developing UI/UX features delivering seamless experiences across platforms' },
                        { icon: '🤝', text: 'Collaborating directly with clients to translate business requirements into technical solutions' },
                        { icon: '⚡', text: 'Tackling complex technical challenges with emphasis on problem-solving and resource-effective innovation' },
                        { icon: '🚀', text: 'Applying best practices in software engineering, DevOps, and API integration for scalable products' },
                        { icon: '👥', text: 'Contributing to collaborative, efficiency-focused engineering culture through mentorship' },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="group flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                            {item.icon}
                          </div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                            {item.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 justify-center pt-6">
                    {['AI', 'UI/UX', 'DevOps', 'API Integration', 'Full-Stack'].map((tag, index) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-2 rounded-full text-sm font-medium glass-card border border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* LinkedIn CTA */}
                  <div className="text-center pt-8">
                    <motion.a
                      href="https://www.linkedin.com/in/aidan-da-costa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      View Full Experience on LinkedIn
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="max-w-5xl mx-auto mt-32">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: 'Production', label: 'Ready Projects' },
                { value: 'Enterprise', label: 'Experience' },
                { value: 'Full-Stack', label: 'Development' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="glass-card border-2 border-border/50 hover:border-primary/50 transition-all duration-500 text-center p-8 relative overflow-hidden">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative">
                      <div className="text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-32 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
              <div className="relative glass-card border-2 border-primary/20 p-12 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Ready to start your project?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Build something amazing. Get in touch to discuss your vision and bring it to life.
                </p>
                <a href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
                  >
                    Get Started →
                  </motion.button>
                </a>
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

      {/* Expanded Project View */}
      <ExpandedView
        project={expandedProject}
        onClose={() => setExpandedProject(null)}
      />

      <Footer />
    </>
  )
}
