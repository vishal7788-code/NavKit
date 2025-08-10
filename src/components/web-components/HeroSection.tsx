"use client";
import React from "react";

import { motion, Variants } from "motion/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

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
  return (
    <div>
      <div>
        <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center mb-20 md:mt-0 my-7">
          {/* Gradient Background */}
          <div
            className="fixed inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
            }}
          />

          <section className="w-full max-w-7xl mx-auto px-4 pt-32 text-center z-50 absolute">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-8">
                <Badge
                  variant="secondary"
                  className="mb-6 px-6 py-3 rounded-3xl text-sm font-medium bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/20"
                >
                  ⚡ Premium Navigation Components
                </Badge>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              >
                Navigation That{" "}
                <span className="bg-[#20c1da] bg-clip-text text-transparent">
                  Just Works
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Stop wrestling with navigation bars. Get production-ready,
                beautifully designed components that your users will love. Copy,
                paste, ship. It&apos;s that simple.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="
      text-lg px-10 py-6 
      bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700
      shadow-md
      transition-transform duration-300 ease-out
 
      hover:shadow-cyan-500/50
      active:scale-95
    
      rounded-xl
      flex items-center gap-2
    "
                >
                  <Link
                    href="/components"
                    className="group flex items-center text-white"
                  >
                    Explore Components
                    <ArrowRight className="ml-2 w-5 h-5 text-white transition-transform group-hover:translate-x-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="
      text-lg px-10 py-5 
      border-2 border-cyan-500/70
      rounded-xl
      transition-all duration-300 ease-out
      hover:bg-cyan-600/20
      hover:border-cyan-400
      hover:shadow-[0_0_10px_rgb(79,219,230)]
      flex items-center gap-2
    "
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center"
                  >
                    <Github className="mr-2 w-7 h-7 text-green-400 transition-transform group-hover:rotate-12" />
                    Star on GitHub
                  </a>
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-12 text-sm text-muted-foreground flex items-center justify-center space-x-3"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free & Open Source</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>TypeScript Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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
