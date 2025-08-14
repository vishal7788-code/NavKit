const minimalNav = `
"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {Inter} from "next/font/google"

const inter = Inter({
variable:"--font-inter",
subsets:["latin"]
})


export function MinimalNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={\`
        "sticky top-0 z-50 backdrop-blur-lg bg-background/60 border rounded-lg supports-[backdrop-filter]:bg-background/60 shadow-md",
      
      \`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold tracking-tight">
            <span className="bg-primary bg-clip-text text-transparent">
              Your Brand Name
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Search micro-interaction */}
            <div className="relative flex items-center">
              {!showSearch && (
                <motion.button
                  key="search-icon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowSearch(true)}
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                >
                  <Search className="w-5 h-5" />
                </motion.button>
              )}

              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    key="search-input"
                    initial={{ width: 50, opacity: 0 }}
                    animate={{ width: 220, opacity: 1 }}
                    exit={{ width: 50, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="rounded-full bg-accent/40"
                  >
                    <div className="relative flex items-center">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onBlur={() => setShowSearch(false)}
                        autoFocus
                        className="pl-10 pr-4 py-2 w-full bg-transparent rounded-full text-sm outline-none focus:shadow-md focus:shadow-primary/20"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              <User className="w-5 h-5" />
            </motion.button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
          <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                >
                  <ShoppingBag className="w-5 h-5" />
                </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)} 
                    className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Search */}
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative mt-3"
              >
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-full bg-accent/40 text-sm outline-none focus:shadow-md focus:shadow-primary/20"
                />
              </motion.div>

              {/* Mobile Actions */}
              <div className="flex items-center space-x-4 pt-3 border-t border-border">
               <ThemeToggle/>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-accent transition-colors"
                >
                  <User className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

  `

  export default minimalNav