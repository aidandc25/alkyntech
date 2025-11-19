import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhoIHelp from '@/components/sections/WhoIHelp'
import Timeline from '@/components/sections/Timeline'
import TrustSignals from '@/components/sections/TrustSignals'
import CTASection from '@/components/sections/CTASection'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <ServicesGrid />
        <WhoIHelp />
        <Timeline />
        <TrustSignals />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
