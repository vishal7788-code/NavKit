"use client"
import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { MinimalNav } from "@/app/Navbars/Minimal-nav";
import { Badge } from "../ui/badge";
import { motion, scale, Variant } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PreviewSection = () => {
  return (
    <div>
      <section className="w-full max-w-7xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Experience It in Motion
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
          Every component is crafted with precision and care. Responsive layouts, smooth animations, and flawless visuals come standard.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          animate="animate"
          className="max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden border-0 shadow-2xl bg-card/50 backdrop-blur-lg hover:shadow-3xl transition-all duration-500">
            <MinimalNav />
            <CardContent className="p-8 bg-gradient-to-r from-muted/20 rounded-lg to-muted/40">
              <CardTitle className="mb-3 text-2xl text-center">
                Minimal Navigation Bar
              </CardTitle>
           
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default PreviewSection;
