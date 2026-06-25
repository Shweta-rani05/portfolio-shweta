"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain, Coffee } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Computer Science Engineer",
      desc: "Strong foundation in DSA, DBMS, Operating Systems, Computer Networks, and Software Engineering.",
    },
    {
      icon: <Code2 className="h-6 w-6 text-accent" />,
      title: "MERN Stack Developer",
      desc: "Building scalable, responsive web applications using React, Next.js, Node.js, Express, MongoDB, and TypeScript.",
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-500" />,
      title: "AI & Backend Explorer",
      desc: "Building backend systems while exploring Docker, Redis, FastAPI, System Design, and Generative AI.",
    },
    {
      icon: <Coffee className="h-6 w-6 text-amber-500" />,
      title: "Problem Solver",
      desc: "Regularly solving DSA problems to improve logical thinking and software engineering fundamentals.",
    },
  ];

  const pillHighlights = [
    { text: "Computer Science Engineering Student", emoji: "🎓", bg: "bg-primary/10 border-primary/20 text-primary" },
    { text: "Full-Stack Developer", emoji: "💻", bg: "bg-accent/10 border-accent/20 text-accent" },
    { text: "Backend Engineering Enthusiast", emoji: "⚙️", bg: "bg-blue-500/10 border-blue-500/20 text-blue-400" },
    { text: "System Design Learner", emoji: "🌱", bg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" }
  ];

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Introduction Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6 text-base md:text-lg text-muted-foreground"
          >
            <div className="flex flex-wrap gap-2.5 mb-2">
              {pillHighlights.map((pill, i) => (
                <div key={i} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-semibold tracking-wide ${pill.bg}`}>
                  <span>{pill.emoji}</span>
                  <span>{pill.text}</span>
                </div>
              ))}
            </div>

            <p className="leading-relaxed">
              I&apos;m a Computer Science Engineering student passionate about building scalable full-stack applications using MERN, TypeScript, and Next.js.
            </p>
            <p className="leading-relaxed">
              I&apos;m currently building backend systems while exploring System Design, Docker, Redis, FastAPI, and Generative AI, alongside strengthening my DSA skills.
            </p>
            <p className="leading-relaxed font-medium text-foreground/90">
              I&apos;m seeking Software Engineering internship opportunities where I can contribute, learn, and build impactful products.
            </p>
          </motion.div>

          {/* Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="p-5 rounded-3xl bg-card border border-border hover:border-primary/30 shadow-sm transition-all duration-300 flex flex-col h-full group"
              >
                <div className="mb-4 p-2.5 rounded-2xl bg-background inline-block border border-border group-hover:border-primary/40 transition-colors w-fit">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-foreground mb-1.5 leading-snug">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mt-auto">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
