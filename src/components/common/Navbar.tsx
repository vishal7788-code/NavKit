"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import {
  Github,
  Twitter,
  Navigation,
  Menu,
  X,
  Search,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandSeparator,
} from "@/components/ui/command";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isDark, setIsDark] = useState(false);
  const [openCommand, setOpenCommand] = useState(false);
  const {theme, setTheme} = useTheme()

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark":'light')
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      setOpenCommand((prev) => !prev);
    }
  }, []);
  

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0  left-0 right-0 z-100 mb-10 border-b border-white/20 bg-background/20 backdrop-blur-xl"
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
     
            <motion.div
              className="flex items-center space-x-3"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Navigation className="w-5 h-5 text-black" />
              </div>
              <Link
                href="/"
                className="text-xl font-bold hover:text-primary transition-colors"
              >
                NavKit
              </Link>

              <div className="hidden md:flex items-center m-3 space-x-8">
                {["navbars", "docs"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item}`}
                    className="text-sm font-medium text-foreground transition-colors relative group"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>
            </motion.div>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:block relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600 dark:text-muted-foreground" />
                <Input
                  readOnly
                  onFocus={() => setOpenCommand(true)}
                  onClick={() => setOpenCommand(true)}
                  placeholder="Search Navbars...."
                  className="pl-10 pr-16 cursor-pointer placeholder:text-neutral-600 boder-black dark:border-neutral-400  dark:placeholder:text-neutral-500"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border dark:border-border/40  dark:bg-background px-2 text-neutral-600 py-0.5 text-xs font-medium dark:text-muted-foreground ">
                  Ctrl + K
                </kbd>
              </div>

              {/* Icons + Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-white/80 text-black hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-white/80 text-black hover:text-foreground transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
{/* 
                Theme toggle */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleTheme}
                  className="w-9 h-9 p-0"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </Button>
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden w-9 h-9 p-0"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/20 bg-background/30 rounded-3xl backdrop-blur-xl"
            >
              <div className="px-4 py-6 space-y-4">
                <div className="lg:hidden mb-4 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search components..." className="pl-10" />
                </div>

                {["navbars", "docs"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item}`}
                    className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}

                <div className="flex items-center space-x-3 pt-4 border-t border-white/20">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleTheme}
                    className="w-9 h-9 p-0"
                  >
                    {theme === "dark" ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>

      <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
        <CommandInput placeholder="Search Navbars...." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {/* <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup> */}
          <CommandSeparator />
          {/* <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup> */}
        </CommandList>
      </CommandDialog>
      <div className="h-16 dark:bg-black"></div>
    </>
  );
}
