import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Services bento cards coming... */}
            <div className="bento-card">
              <span className="text-5xl mb-6 block">🌐</span>
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-muted-foreground mb-6">
                Custom websites built with modern technologies. Fast, beautiful, and conversion-optimized.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> Modern React/Next.js</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> Mobile-First Design</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> SEO Optimized</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> Lightning Fast</li>
              </ul>
            </div>

            <div className="bento-card">
              <span className="text-5xl mb-6 block">⚡</span>
              <h3 className="text-2xl font-semibold mb-4">Automation</h3>
              <p className="text-muted-foreground mb-6">
                Intelligent workflow automation to save time and eliminate repetitive tasks.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> Process Automation</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> API Integrations</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> Data Workflows</li>
                <li className="flex items-center gap-2"><span className="text-accent">✓</span> Custom Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
