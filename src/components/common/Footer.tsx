import { Github, Navigation, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="border-t border dark:bg-black backdrop-blur-xl ">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Navigation className="w-4 h-4 text-black" />
                </div>
                <span className="text-xl font-bold">NavKit</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                The ultimate collection of navigation components for modern web applications. 
                Built by developer, for developers.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-3 text-muted-foreground">
                <Link href="/navbars" className="block hover:text-foreground transition-colors">Navbars</Link>
                <Link href="#" className="block hover:text-foreground transition-colors">Templates</Link>
                {/* <Link href="#" className="block hover:text-foreground transition-colors">Pricing</Link>
                <Link href="#" className="block hover:text-foreground transition-colors">Changelog</Link> */}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-3 text-muted-foreground">
                <Link href="/docs" className="block hover:text-foreground transition-colors">Documentation</Link>
                <Link href="#" className="block hover:text-foreground transition-colors">GitHub</Link>
                {/* <Link href="#" className="block hover:text-foreground transition-colors">Discord</Link> */}
                <Link href="#" className="block hover:text-foreground transition-colors">Contact</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground">
            <p>&copy; 2025 NavKit. Crafted with ❤️ for the developer community.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
              <Link href="#" className="hover:text-foreground transition-colors">License</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
