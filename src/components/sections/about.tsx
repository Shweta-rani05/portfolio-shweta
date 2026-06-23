"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Brain, Coffee, Briefcase } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Computer Science Engineer",
      desc: "Building a strong foundation in Data Structures, Algorithms, DBMS, Operating Systems, and Software Engineering.",
    },
    {
      icon: <Code2 className="h-6 w-6 text-accent" />,
      title: "MERN Stack Developer",
      desc: "Building scalable and responsive web applications using React, Node.js, Express, MongoDB, TypeScript, and Tailwind CSS.",
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-500" />,
      title: "AI & Backend Explorer",
      desc: "Currently learning FastAPI, Docker, System Design, Generative AI, and LLM-powered application development.",
    },
    {
      icon: <Coffee className="h-6 w-6 text-amber-500" />,
      title: "Problem Solver",
      desc: "Consistently solving Data Structures & Algorithms problems to strengthen logical thinking and coding interview skills.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg text-muted-foreground"
          >
            <p>
              I am a driven <strong className="text-foreground">Computer Science Engineering student (B.Tech, 2023-2027)</strong> at the <strong className="text-foreground">Central University of Haryana</strong> (CGPA: 8.2). With a strong foundation in Full-Stack Development, I specialize in crafting scalable web applications that deliver exceptional user experiences.
            </p>
            <p>
              My technical journey is fueled by a <strong className="text-foreground">love for solving complex DSA problems</strong> and a continuous desire to learn. I am deeply interested in scalable system design and the architectural challenges of modern software.
            </p>
            <p>
              As a constant learner, I am currently transitioning into <strong className="text-foreground">AI-powered software engineering</strong>, exploring LLMs, RAG, and intelligent agents. I am actively looking for Software Engineering internships where I can contribute my skills and grow alongside a talented team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all group"
              >
                <div className="mb-4 p-3 rounded-full bg-background inline-block border border-border group-hover:border-primary/50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
