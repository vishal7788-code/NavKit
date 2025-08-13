"use client";
import React, { useState, useEffect } from "react";
import { motion, Variants } from "motion/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { useTheme } from "next-themes";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSection = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get the effective theme (resolvedTheme handles 'system' preference)
  const currentTheme = mounted ? resolvedTheme : 'dark';
  
  // Define theme-specific backgrounds
  const getBackgroundStyle = () => {
    if (currentTheme === 'light') {
      return {
        background: "#ffffff",
        backgroundImage: `radial-gradient(circle at top center, rgba(56, 193, 182, 0.5), transparent 70%)`,
        filter: "blur(80px)",
        backgroundRepeat: "no-repeat",
      };
    } else {
      return {
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
      };
    }
  };
  

  return (
    <div className="w-full">
      <div className="relative">
        {/* Full viewport container with proper aspect ratio */}
        <div className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden ${
          currentTheme === 'light' ? 'bg-white' : ''
        }`}>
          {/* Dynamic Gradient Background */}
          <div
            className="fixed inset-0 z-0 transition-all duration-500"
            style={getBackgroundStyle()}
          />
          {/* Content Section */}
          <section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center space-y-8 sm:space-y-10 md:space-y-12"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <Badge
                  variant="secondary"
                  className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium 
                           backdrop-blur-sm border transition-all duration-300 ${
                             currentTheme === 'light'
                               ? 'bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border-blue-300/30 text-blue-700'
                               : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/30 text-blue-200'
                           }`}
                >
                  ⚡ Premium Navigation Components
                </Badge>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                         font-bold leading-tight tracking-tight transition-colors duration-300 ${
                           currentTheme === 'light' ? 'text-slate-900' : 'text-white'
                         }`}
              >
                Navigation That{" "}
                <span className={`bg-clip-text text-transparent transition-all duration-300 ${
                  currentTheme === 'light'
                    ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700'
                    : 'bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500'
                }`}>
                  Just Works
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4 transition-colors duration-300 ${
                  currentTheme === 'light' ? 'text-slate-600' : 'text-gray-300'
                }`}
              >
                Stop wrestling with navigation bars. Get production-ready,
                beautifully designed components that your users will love. Copy,
                paste, ship. It&apos;s that simple.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              >
                <Button
                  asChild
                  size="lg"
                  className={`w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 md:py-5
                           shadow-lg hover:shadow-xl
                           transition-all duration-300 ease-out
                           active:scale-95 rounded-xl border-0 ${
                             currentTheme === 'light'
                               ? 'bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 hover:from-cyan-700 hover:via-cyan-800 hover:to-cyan-900 hover:shadow-cyan-600/25'
                               : 'bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:from-cyan-600 hover:via-cyan-700 hover:to-cyan-800 hover:shadow-cyan-500/25'
                           }`}
                >
                  <Link
                    href="/components"
                    className="group flex items-center justify-center text-white"
                  >
                    Explore Components
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={`w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 md:py-5
                           border-2 backdrop-blur-sm rounded-xl
                           transition-all duration-300 ease-out ${
                             currentTheme === 'light'
                               ? 'border-cyan-600/60 hover:border-cyan-700/80 bg-white/60 hover:bg-cyan-50/60 hover:shadow-lg hover:shadow-cyan-600/20 text-slate-700'
                               : 'border-cyan-400/60 hover:border-cyan-300/80 bg-black/30 hover:bg-cyan-900/20 hover:shadow-lg hover:shadow-cyan-400/20 text-gray-200'
                           }`}
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center"
                  >
                    <Github className={`mr-2 w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:rotate-6 ${
                      currentTheme === 'light' ? 'text-emerald-600' : 'text-emerald-400'
                    }`} />
                    Star on GitHub
                  </a>
                </Button>
              </motion.div>

              {/* Feature Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center 
                         space-y-3 sm:space-y-0 sm:space-x-6 md:space-x-8
                         text-xs sm:text-sm"
              >
                <div className={`flex items-center space-x-2 transition-colors duration-300 ${
                  currentTheme === 'light' ? 'text-slate-600' : 'text-gray-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                    currentTheme === 'light' ? 'bg-emerald-600' : 'bg-emerald-400'
                  }`}></div>
                  <span>Free & Open Source</span>
                </div>
                <div className={`flex items-center space-x-2 transition-colors duration-300 ${
                  currentTheme === 'light' ? 'text-slate-600' : 'text-gray-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                    currentTheme === 'light' ? 'bg-blue-600' : 'bg-blue-400'
                  }`}></div>
                  <span>TypeScript Ready</span>
                </div>
                <div className={`flex items-center space-x-2 transition-colors duration-300 ${
                  currentTheme === 'light' ? 'text-slate-600' : 'text-gray-400'
                }`}>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                    currentTheme === 'light' ? 'bg-purple-600' : 'bg-purple-400'
                  }`}></div>
                  <span>Framework Agnostic</span>
                </div>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;