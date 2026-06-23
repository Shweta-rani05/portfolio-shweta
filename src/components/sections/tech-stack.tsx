"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TechStack() {
  const technologies = [
    "React", "Next.js", "Node.js", "Express", "MongoDB", "JavaScript", 
    "TypeScript", "Python", "Git", "GitHub", "Tailwind", "Redux", 
    "Vite", "Docker", "FastAPI", "AI"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Tech <span className="text-primary">Stack</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        <div className="relative w-full max-w-5xl mx-auto flex flex-wrap justify-center gap-4 md:gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: idx * 0.05,
              }}
              whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
              className="cursor-grab active:cursor-grabbing px-6 py-3 rounded-full bg-card border border-border shadow-sm text-foreground font-medium flex items-center justify-center hover:border-primary/50 hover:text-primary transition-colors select-none"
            >
              {tech}
            </motion.div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground text-sm mt-8">
          * Drag the badges around!
        </p>
      </div>
    </section>
  );
}
