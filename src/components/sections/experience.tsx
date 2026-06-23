"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Noodiyos (AI-Powered Noodles QSR)",
      date: "Jan 2026 – Mar 2026",
      project: "Appetite Sense AI",
      points: [
        "Engineered \"Appetite Sense AI,\" a contextual recommendation engine using RAG architecture and OpenAI APIs to deliver personalized, real-time menu suggestions — directly improving customer ordering conversion.",
        "Built a type-safe, responsive frontend in React.js + TypeScript, integrating the AI recommendation pipeline into the live customer ordering flow with zero breaking changes to existing infrastructure."
      ],
      skills: ["React.js", "TypeScript", "OpenAI API", "RAG", "Tailwind CSS", "API Integration"],
    },
    {
      role: "Software Engineering Trainee",
      company: "IIISC, Delhi",
      date: "Dec 2024 – Feb 2025",
      project: "Fuzzy TOPSIS Algorithm",
      points: [
        "Implemented Fuzzy TOPSIS multi-criteria decision algorithm in Java, enabling quantitative comparative analysis for complex engineering decisions; refactored bottlenecks to reduce execution time.",
        "Authored technical documentation for algorithm modules, cutting team onboarding time and establishing long-term codebase maintainability standards."
      ],
      skills: ["Java", "Fuzzy TOPSIS", "Algorithm Optimization", "Technical Documentation"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            My <span className="text-primary">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-16 relative">
          {/* Vertical timeline line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary shadow-lg -translate-x-1/2 flex items-center justify-center z-10">
                  <Briefcase className="h-3 w-3 text-primary" />
                </div>

                {/* Left column / Right column alternation on desktop */}
                <div className={`mb-6 md:mb-0 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  <div className="text-lg font-medium text-accent mt-1">
                    {exp.company}
                  </div>
                  <p className="text-muted-foreground mt-2">{exp.date}</p>
                </div>

                {/* Card detailing experience */}
                <div className={`bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow relative z-10 ${idx % 2 === 0 ? "" : "md:order-1"}`}>
                  <h4 className="text-xl font-semibold mb-4 text-foreground">
                    Project: {exp.project}
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/5 text-primary border-none">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
