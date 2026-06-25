"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const noodiyosBullets = [
    "Engineered <strong>Appetite Sense AI</strong>, a contextual recommendation engine using <strong>RAG architecture</strong> and <strong>OpenAI APIs</strong> to deliver personalized menu suggestions.",
    "Developed a type-safe, responsive customer ordering interface using <strong>React</strong> and <strong>TypeScript</strong>, crafting modular, reusable UI components.",
    "Designed and integrated scalable <strong>REST APIs</strong> to bridge the AI engine and frontend UI."
  ];

  const noodiyosSkills = ["React", "TypeScript", "OpenAI API", "RAG"];

  const iiiscBullets = [
    "Implemented the <strong>Fuzzy TOPSIS</strong> multi-criteria decision-making algorithm in <strong>Java</strong> utilizing <strong>OOP</strong> principles.",
    "Optimized bottleneck matrix calculations, reducing computation execution times.",
    "Managed code versioning with <strong>Git</strong> and authored modular technical documentation."
  ];

  const iiiscSkills = ["Java", "Git", "OOP"];

  return (
    <section id="experience" className="py-16 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Work <span className="text-primary">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        {/* Experience Grid Layout (2-columns on desktop/tablets, stacked on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Noodiyos Internship (Primary/Highlighted Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-card to-primary/5 border border-primary/30 shadow-lg shadow-primary/5 transition-all duration-300 group overflow-hidden flex flex-col justify-between h-full w-full"
          >
            {/* Spotlight Accent Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-primary/15 transition-colors duration-500" />
            
            <div className="relative">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                <div>
                  {/* Highlight Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-semibold text-primary mb-2.5">
                    <Sparkles className="h-3 w-3 animate-pulse" />
                    Primary Experience
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Full Stack Developer Intern</h3>
                  <div className="text-base font-semibold text-accent mt-0.5">
                    Noodiyos (AI-Powered Noodles QSR)
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 border border-border/60 px-2.5 py-1 rounded-xl w-fit h-fit shrink-0">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  <span>Jan 2026 – Mar 2026</span>
                </div>
              </div>

              {/* Sub-header detailing project */}
              <h4 className="text-base font-bold text-foreground/90 mb-3">
                Appetite Sense AI
              </h4>

              {/* Achievement Bullets */}
              <ul className="space-y-2.5 mb-6">
                {noodiyosBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1 select-none">⚡</span>
                    <span dangerouslySetInnerHTML={{ __html: bullet }} />
                  </li>
                ))}
              </ul>

              {/* Trophies & Recognitions */}
              <div className="flex flex-col sm:flex-row gap-2 mb-6">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] font-semibold text-amber-400 w-fit">
                  <span>🏆</span>
                  <span>Letter of Recommendation</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] font-semibold text-amber-400 w-fit">
                  <span>🏆</span>
                  <span>Soup of the Month Recognition</span>
                </div>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60 mt-auto">
              {noodiyosSkills.map((skill, i) => (
                <Badge key={i} variant="secondary" className="bg-primary/5 text-primary border-none text-[10px] px-2 py-0.5 font-semibold">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Card 2: IIISC Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-300 flex flex-col justify-between h-full w-full"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Software Engineering Trainee</h3>
                  <div className="text-base font-semibold text-accent mt-0.5">
                    IIISC, Delhi
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 border border-border/60 px-2.5 py-1 rounded-xl w-fit h-fit shrink-0">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  <span>Dec 2024 – Feb 2025</span>
                </div>
              </div>

              {/* Sub-header detailing project */}
              <h4 className="text-base font-bold text-foreground/90 mb-3">
                Fuzzy TOPSIS Algorithm
              </h4>

              {/* Achievement Bullets */}
              <ul className="space-y-2.5 mb-6">
                {iiiscBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent mt-1 select-none">⚡</span>
                    <span dangerouslySetInnerHTML={{ __html: bullet }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/60 mt-auto">
              {iiiscSkills.map((skill, i) => (
                <Badge key={i} variant="secondary" className="bg-primary/5 text-primary border-none text-[10px] px-2 py-0.5 font-semibold">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
