"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Redux"],
      bg: "hover:border-primary/30",
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-accent" />,
      skills: ["Node.js", "Express", "JWT", "REST APIs"],
      bg: "hover:border-accent/30",
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-blue-500" />,
      skills: ["MongoDB", "SQL"],
      bg: "hover:border-blue-500/30",
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="h-6 w-6 text-amber-500" />,
      skills: ["Git", "Docker", "Postman", "Vercel", "Render"],
      bg: "hover:border-amber-500/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 relative overflow-hidden">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full ${cat.bg}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-muted border border-border">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {cat.skills.map((skill, sIdx) => (
                  <Badge key={sIdx} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 border-none text-xs px-2.5 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
