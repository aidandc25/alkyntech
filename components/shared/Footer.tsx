import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-card/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Alkyn<span className="gradient-text">Tech</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium web development and automation for businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Work</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web Development</li>
              <li>Workflow Automation</li>
              <li>Custom Solutions</li>
              <li>Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@alkyntech.com</li>
              <li>Remote-First</li>
              <li className="pt-2 text-xs flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Available for Projects
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AlkynTech LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>No Long-Term Contracts</span>
            <span>•</span>
            <span>1-3 Week Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
