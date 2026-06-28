"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Noodiyos (AI-Powered Noodles QSR)",
      period: "Jan 2026 - Mar 2026",
      project: "Appetite Sense AI",
      bullets: [
        <>
          Engineered <b>Appetite Sense AI</b>, a contextual recommendation
          engine using <b>RAG architecture</b> and <b>OpenAI APIs</b> to deliver
          personalized menu suggestions.
        </>,
        <>
          Developed a type-safe, responsive customer ordering interface using{" "}
          <b>React</b> and <b>TypeScript</b>, crafting modular, reusable UI
          components.
        </>,
        <>
          Designed and integrated scalable <b>REST APIs</b> to bridge the AI
          engine and frontend UI.
        </>,
      ],
      skills: ["React", "TypeScript", "OpenAI API", "RAG"],
      highlights: [
        "Received Letter of Recommendation",
        "Soup of the Month Recognition",
      ],
    },
    {
      role: "Software Engineering Trainee",
      company: "IIISC, Delhi",
      period: "Dec 2024 - Feb 2025",
      project: "Fuzzy TOPSIS Algorithm",
      bullets: [
        <>
          Implemented the <b>Fuzzy TOPSIS</b> multi-criteria decision-making
          algorithm in <b>Java</b> utilizing <b>OOP</b> principles.
        </>,
        <>
          Optimized bottleneck matrix calculations, reducing computation
          execution times.
        </>,
        <>
          Managed code versioning with <b>Git</b> and authored modular technical
          documentation.
        </>,
      ],
      skills: ["Java", "Git", "OOP"],
      highlights: [],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Work Experience
          </motion.h2>
        </div>

        {/* Vertical timeline */}
        <div className="max-w-3xl space-y-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0 border-l border-border"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

              {/* Date */}
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                <Calendar className="h-3.5 w-3.5" />
                <span className="font-medium">{exp.period}</span>
              </div>

              {/* Role */}
              <h3 className="text-lg font-bold text-foreground mb-1">
                {exp.role}
              </h3>
              <p className="text-sm font-medium text-primary mb-1">
                {exp.company}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Project: {exp.project}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-5">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/40"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Highlights */}
              {exp.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {exp.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-muted text-muted-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
