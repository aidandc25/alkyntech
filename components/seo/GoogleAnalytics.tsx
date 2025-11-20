'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

interface GoogleAnalyticsProps {
  measurementId: string
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const [consentGiven, setConsentGiven] = useState(false)

  useEffect(() => {
    // Check if user has given consent
    const consent = localStorage.getItem('cookieConsent')
    setConsentGiven(consent === 'accepted')

    // Listen for consent changes
    const handleStorageChange = () => {
      const newConsent = localStorage.getItem('cookieConsent')
      setConsentGiven(newConsent === 'accepted')
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Don't load analytics if consent not given
  if (!consentGiven) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
