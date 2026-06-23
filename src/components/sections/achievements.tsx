"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, ThumbsUp, Code, Laptop, Flame } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      title: "Skyscanner FE Experience (Forage)",
      value: "React App Dev",
      icon: <Laptop className="h-8 w-8 text-primary" />,
      color: "from-primary/20 to-transparent",
    },
    {
      title: "Smart India Hackathon",
      value: "SIH Participant",
      icon: <Trophy className="h-8 w-8 text-amber-500" />,
      color: "from-amber-500/20 to-transparent",
    },
    {
      title: "100+ DSA Solved Problems",
      value: "Arrays, Trees, Graphs, DP",
      icon: <Flame className="h-8 w-8 text-orange-500" />,
      color: "from-orange-500/20 to-transparent",
    },
    {
      title: "GitHub Iterative Ownership",
      value: "Consistent Commits",
      icon: <Code className="h-8 w-8 text-blue-500" />,
      color: "from-blue-500/20 to-transparent",
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <section className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            My <span className="text-accent">Achievements</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${item.color} opacity-50 pointer-events-none`} />
              <div className="mb-4 z-10 p-4 bg-background rounded-full border border-border group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 z-10">{item.value}</h3>
              <p className="text-sm text-muted-foreground z-10">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
