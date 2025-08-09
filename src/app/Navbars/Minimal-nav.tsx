"use client";

import { useState } from "react";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle"; // using your existing toggle

interface MinimalNavProps {
  className?: string;
}

export function MinimalNav({ className }: MinimalNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 backdrop-blur-lg bg-background/60 border rounded-lg supports-[backdrop-filter]:bg-background/60 shadow-md",
        className
      )}
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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-5">
            <button className="p-2 rounded-full hover:bg-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-accent transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-accent transition-colors">
              <User className="w-5 h-5" />
            </button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slideDown py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-3 border-t border-border">
                <button className="p-2 rounded-full hover:bg-accent transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full hover:bg-accent transition-colors">
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
