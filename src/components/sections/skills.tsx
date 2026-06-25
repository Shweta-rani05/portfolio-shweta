"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Layout, Server, Database, Code, Wrench, GraduationCap } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-5 w-5 text-blue-400" />,
      skills: ["React", "Next.js", "Tailwind CSS", "Redux"],
    },
    {
      title: "Backend",
      icon: <Server className="h-5 w-5 text-green-500" />,
      skills: ["Node.js", "Express", "REST APIs", "JWT"],
    },
    {
      title: "Database",
      icon: <Database className="h-5 w-5 text-purple-500" />,
      skills: ["MongoDB", "Mongoose", "SQL Basics"],
    },
    {
      title: "Languages",
      icon: <Code className="h-5 w-5 text-pink-500" />,
      skills: ["JavaScript", "TypeScript", "Python", "C++"],
    },
    {
      title: "Dev Tools",
      icon: <Wrench className="h-5 w-5 text-orange-500" />,
      skills: ["Git", "GitHub", "Docker", "Postman"],
    },
    {
      title: "CS Fundamentals",
      icon: <GraduationCap className="h-5 w-5 text-amber-500" />,
      skills: ["DSA", "OOP", "DBMS", "OS", "Networks"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
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

        {/* Skills Horizontal/Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="p-4 md:p-5 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full w-full"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-xl bg-muted border border-border shadow-inner flex items-center justify-center shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-bold text-foreground leading-tight">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <Badge 
                      key={sIdx} 
                      variant="secondary" 
                      className="px-2 py-0.5 text-[10px] font-semibold bg-primary/5 text-primary border-none hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
