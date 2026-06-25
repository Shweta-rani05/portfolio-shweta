"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Layout, Server, Database, Code, Wrench, Sparkles, Check } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-6 w-6 text-blue-400" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "HTML5", "CSS3"],
      isCurrent: false,
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-green-500" />,
      skills: ["Node.js", "Express", "REST APIs", "JWT", "bcrypt", "MVC Architecture"],
      isCurrent: false,
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-purple-500" />,
      skills: ["MongoDB", "Mongoose", "Aggregation", "Schema Design", "SQL Basics"],
      isCurrent: false,
    },
    {
      title: "Languages",
      icon: <Code className="h-6 w-6 text-pink-500" />,
      skills: ["JavaScript", "TypeScript", "Python", "C++"],
      isCurrent: false,
    },
    {
      title: "Dev Tools",
      icon: <Wrench className="h-6 w-6 text-orange-500" />,
      skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "Vercel", "Render"],
      isCurrent: false,
    },
    {
      title: "Currently Learning",
      icon: <Sparkles className="h-6 w-6 text-amber-500 animate-pulse" />,
      skills: ["System Design", "Redis", "Docker", "CI/CD", "FastAPI", "Generative AI"],
      isCurrent: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-16 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            My <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-3xl bg-card border hover:shadow-md transition-all duration-300 flex flex-col h-full ${
                category.isCurrent 
                  ? "border-accent/40 bg-gradient-to-br from-card to-accent/5" 
                  : "border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-center space-x-3.5 mb-6">
                <div className="p-2.5 rounded-2xl bg-muted border border-border shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>

              {category.isCurrent ? (
                /* "Currently Learning" List Item Format */
                <ul className="space-y-2.5 mt-auto">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 group">
                      <div className="p-0.5 rounded bg-accent/10 border border-accent/20 text-accent">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                /* Standard Tech Stack Badges Grid */
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, sIdx) => (
                    <Badge 
                      key={sIdx} 
                      variant="secondary" 
                      className="px-2.5 py-1 text-xs font-semibold bg-primary/5 text-primary border-none hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
