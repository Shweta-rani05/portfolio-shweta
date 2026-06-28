"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Code,
  Wrench,
  GraduationCap,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Redux"],
      span: "md:col-span-2",
      bg: "bg-primary/[0.04]",
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: ["Node.js", "Express", "JWT", "REST APIs"],
      span: "md:col-span-1",
      bg: "",
    },
    {
      title: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["MongoDB", "Mongoose", "SQL"],
      span: "md:col-span-1",
      bg: "",
    },
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["JavaScript", "TypeScript", "Python", "C++"],
      span: "md:col-span-1",
      bg: "bg-primary/[0.04]",
    },
    {
      title: "Dev Tools & DevOps",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Render"],
      span: "md:col-span-2",
      bg: "",
    },
    {
      title: "CS Fundamentals",
      icon: <GraduationCap className="h-5 w-5" />,
      skills: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
      span: "md:col-span-1",
      bg: "bg-primary/[0.04]",
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Skills & Tools
          </motion.h2>
        </div>

        {/* Bento grid with mixed cell sizes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 ${category.span} ${category.bg || "bg-card"}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground border border-border"
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
