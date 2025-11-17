import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium projects that drive results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Portfolio items coming... */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bento-card group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Project Name {i}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Description of the project and technologies used.
                </p>
                <div className="flex gap-2">
                  <span className="text-xs px-3 py-1 rounded-full glass">React</span>
                  <span className="text-xs px-3 py-1 rounded-full glass">Next.js</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
