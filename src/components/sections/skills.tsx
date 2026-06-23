"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Layout, Server, Code, Wrench, Sparkles, Code2 } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="h-6 w-6 text-pink-500" />,
      skills: ["JavaScript (ES6+)", "TypeScript", "C++", "Python"],
    },
    {
      title: "Frontend",
      icon: <Layout className="h-6 w-6 text-blue-400" />,
      skills: [
        "React.js",
        "Next.js 14",
        "Tailwind CSS",
        "Redux Toolkit",
        "Zustand",
        "HTML5",
        "CSS3",
        "Responsive/Mobile-First Design"
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6 text-green-500" />,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful API Design",
        "JWT Authentication",
        "bcrypt",
        "Middleware Architecture",
        "MVC Pattern"
      ],
    },
    {
      title: "Database",
      icon: <Layout className="h-6 w-6 text-purple-500" />,
      skills: ["MongoDB", "Mongoose ODM", "Schema Design", "Aggregation Pipelines", "SQL (basic)"],
    },
    {
      title: "Cloud & Payments",
      icon: <Sparkles className="h-6 w-6 text-sky-400" />,
      skills: ["Stripe API", "Cloudinary CDN", "Vercel", "Render", "Docker (basic)"],
    },
    {
      title: "Dev Tools",
      icon: <Wrench className="h-6 w-6 text-orange-500" />,
      skills: ["Git", "GitHub", "Postman", "Vite", "npm", "VS Code"],
    },
    {
      title: "CS Fundamentals",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["DSA (100+ problems — Arrays, Trees, Graphs, DP)", "OOP", "DBMS", "System Design (basic)", "Agile/Scrum"],
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
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

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-3xl bg-card border border-border shadow-sm backdrop-blur-xl hover:shadow-md transition-all ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-2xl bg-background border border-border shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
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
