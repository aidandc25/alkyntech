'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Turbo-style scroll logic: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {
        // Only trigger hide/show after scrolling past 100px
        if (currentScrollY < lastScrollY) {
          // Scrolling up
          setIsVisible(true)
        } else if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false)
        }
      } else {
        // Always show when near top
        setIsVisible(true)
      }

      setScrollY(currentScrollY)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      {/* Floating Glass Navigation */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-6 py-4">
          <div
            className={`
              rounded-full backdrop-blur-xl shadow-turbo-md
              border transition-all duration-300
              ${
                scrollY > 20
                  ? 'bg-white/90 dark:bg-background/75 border-black/10 dark:border-white/20'
                  : 'bg-white/70 dark:bg-background/50 border-black/5 dark:border-white/10'
              }
            `}
          >
            <div className="flex items-center justify-between h-16 px-6">
              {/* Logo */}
              <Link href="/" className="relative z-50">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-xl font-bold"
                >
                  Alkyn<span className="gradient-text">Tech</span>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-2">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`
                        px-5 py-2 rounded-full font-medium text-sm
                        transition-all duration-300
                        ${
                          pathname === item.href
                            ? 'glass-strong text-foreground'
                            : 'hover:glass-subtle text-muted-foreground hover:text-foreground'
                        }
                      `}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
              </nav>

              {/* Right Side - Theme Toggle & CTA */}
              <div className="hidden md:flex items-center gap-3">
                {/* Theme Toggle */}
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2.5 rounded-full glass-subtle hover:glass-strong transition-all duration-300"
                    aria-label="Toggle theme"
                  >
                    {theme === 'dark' ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                  </button>
                )}

                {/* CTA Button */}
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-full glass-subtle hover:glass-strong transition-all"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 flex flex-col justify-between">
                  <span
                    className={`h-0.5 w-full bg-foreground transition-all ${
                      mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-foreground transition-all ${
                      mobileMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`h-0.5 w-full bg-foreground transition-all ${
                      mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col pt-24 px-6">
              <nav className="space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.href} onClick={() => setMobileMenuOpen(false)}>
                      <div
                        className={`
                          px-6 py-4 rounded-2xl font-medium text-lg
                          transition-all duration-300
                          ${
                            pathname === item.href
                              ? 'glass-strong text-foreground'
                              : 'glass-subtle text-muted-foreground hover:text-foreground'
                          }
                        `}
                      >
                        {item.name}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Theme Toggle & CTA */}
              <div className="mt-auto pb-8 space-y-4">
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="w-full px-6 py-4 rounded-2xl glass-subtle hover:glass-strong transition-all text-left flex items-center gap-3"
                  >
                    {theme === 'dark' ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        <span>Dark Mode</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span>Light Mode</span>
                      </>
                    )}
                  </button>
                )}

                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full btn-premium">
                    Get Started →
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
