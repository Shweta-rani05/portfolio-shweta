"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Globe, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Experience() {
  const noodiyosBullets = [
    "Engineered <strong>Appetite Sense AI</strong>, an intelligent contextual recommendation engine using <strong>RAG architecture</strong> and <strong>OpenAI APIs</strong> to deliver real-time personalized menu suggestions.",
    "Developed a type-safe, responsive customer ordering interface using <strong>React.js</strong> and <strong>TypeScript</strong>, crafting modular, reusable UI components that improved load performance.",
    "Designed and integrated scalable <strong>REST APIs</strong> to bridge the AI engine and frontend UI, sustaining zero regression bugs in production.",
    "Optimized layout responsiveness with <strong>Tailwind CSS</strong> to guarantee a seamless shopping experience across mobile, tablet, and desktop viewports."
  ];

  const noodiyosSkills = ["React", "TypeScript", "Tailwind CSS", "OpenAI API", "RAG", "REST APIs"];

  const iiiscBullets = [
    "Implemented the <strong>Fuzzy TOPSIS</strong> multi-criteria decision-making algorithm in <strong>Java</strong> utilizing <strong>OOP</strong> principles, enabling quantitative comparative analysis for engineering decisions.",
    "Optimized matrix arithmetic and bottleneck methods in the algorithm calculations, reducing execution time for multi-criteria models.",
    "Established version control standards with <strong>Git</strong> and authored modular technical documentation that cut team onboarding times."
  ];

  const iiiscSkills = ["Java", "Git", "OOP", "Algorithm Optimization"];

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

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Card 1: Noodiyos Internship (Primary/Highlighted Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="relative p-6 md:p-8 rounded-3xl bg-gradient-to-br from-card to-primary/5 border border-primary/30 shadow-lg shadow-primary/5 transition-all duration-300 group overflow-hidden"
          >
            {/* Spotlight Accent Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-primary/15 transition-colors duration-500" />
            
            <div className="relative flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
              <div>
                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-semibold text-primary mb-3">
                  <Sparkles className="h-3 w-3 animate-pulse" />
                  Primary Experience
                </div>
                <h3 className="text-2xl font-bold text-foreground">Full Stack Developer Intern</h3>
                <div className="text-lg font-medium text-accent mt-1">
                  Noodiyos (AI-Powered Noodles QSR)
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 border border-border/60 px-3 py-1.5 rounded-2xl w-fit">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Jan 2026 – Mar 2026</span>
              </div>
            </div>

            {/* Sub-header detailing project */}
            <h4 className="text-lg font-bold text-foreground/90 mb-3">
              Appetite Sense AI
            </h4>

            {/* Achievement Bullets */}
            <ul className="space-y-2.5 mb-6">
              {noodiyosBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-1 select-none">⚡</span>
                  <span dangerouslySetInnerHTML={{ __html: bullet }} />
                </li>
              ))}
            </ul>

            {/* Trophies & Recognitions */}
            <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400">
                <span>🏆</span>
                <span>Letter of Recommendation</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-400">
                <span>🏆</span>
                <span>Soup of the Month Recognition</span>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
              {noodiyosSkills.map((skill, i) => (
                <Badge key={i} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 border-none text-xs px-2.5 py-1">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/95 text-primary-foreground font-semibold shadow-md shadow-primary/10">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5" />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="rounded-full border-border hover:bg-accent font-semibold">
                <a href="https://github.com/Shweta-rani05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
                  <FaGithub className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Card 2: IIISC Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Software Engineering Trainee</h3>
                  <div className="text-lg font-medium text-accent mt-1">
                    IIISC, Delhi
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 border border-border/60 px-3 py-1.5 rounded-2xl w-fit">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span>Dec 2024 – Feb 2025</span>
                </div>
              </div>

              {/* Sub-header detailing project */}
              <h4 className="text-lg font-bold text-foreground/90 mb-3">
                Fuzzy TOPSIS Algorithm
              </h4>

              {/* Achievement Bullets */}
              <ul className="space-y-2.5 mb-6">
                {iiiscBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent mt-1 select-none">⚡</span>
                    <span dangerouslySetInnerHTML={{ __html: bullet }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
              {iiiscSkills.map((skill, i) => (
                <Badge key={i} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 border-none text-xs px-2.5 py-1">
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
