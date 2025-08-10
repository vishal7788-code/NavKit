"use client"
import React from "react";
import { motion, Variants } from "framer-motion"; // <-- Use 'framer-motion' for types
import { Code2, Copy, Palette, Smartphone, Star, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

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

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      borderColor: "hover:border-amber-400",
      colorClass: "text-amber-400",
      title: "Zero Setup Time",
      description:
        "Copy, paste, and you're done. No complex installations, no configuration hell. Just instant beautiful navigation.",
    },
    {
      icon: Smartphone,
      borderColor: "hover:border-teal-400",
      colorClass: "text-teal-400",
      title: "Mobile-First Design",
      description:
        "Every component is designed for mobile first, then enhanced for larger screens. Your users will love the experience.",
    },
    {
      icon: Palette,
      borderColor: "hover:border-purple-400",
      colorClass: "text-purple-400",
      title: "Endlessly Customizable",
      description:
        "Built with CSS variables and design tokens. Change colors, spacing, and styling with just a few lines of code.",
    },
    {
      icon: Copy,
      borderColor: "hover:border-pink-400",
      colorClass: "text-pink-400",
      title: "One-Click Copy",
      description:
        "Smart copy functionality includes all dependencies and styles. No hunting for missing pieces or broken imports.",
    },
    {
      icon: Code2,
      borderColor: "hover:border-cyan-400",
      colorClass: "text-cyan-400",
      title: "Modern Technology",
      description:
        "React 18, TypeScript, Tailwind CSS, and Framer Motion. Built with the tools you already know and love.",
    },
    {
      icon: Star,
      borderColor: "hover:border-yellow-400",
      colorClass: "text-yellow-400",
      title: "Enterprise Ready",
      description:
        "Battle-tested components used by thousands of developers. Accessibility compliant and performance optimized.",
    },
  ];

  return (
    <div>
      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto relative z-50 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 text-white "
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Simplify Your Development Workflow
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Everything you need to create stunning navigation experiences. No
            compromises, no corner-cutting. Just beautiful, functional
            components.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map(({ icon: Icon, colorClass, title, description,borderColor }, index) => (
            <motion.div key={index} variants={itemVariants} className="px-7 md:px-2">
              <Card className={`h-full  transition-all duration-500 border ${borderColor} bg-card/50 backdrop-blur-sm group hover:scale-105 hover:bg-card/70`}>
                <CardHeader className="pb-0">
                  <div
                    className={`transition-all duration-300 ${colorClass}`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg ">{title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base leading-relaxed">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default FeatureSection;
