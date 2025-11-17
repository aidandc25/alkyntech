import Hero from '@/components/sections/Hero'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        {/* More sections coming... */}
      </main>
      <Footer />
    </>
  )
}
