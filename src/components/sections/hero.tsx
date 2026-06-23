"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const floatingIcons = [
    { icon: "⚛️", top: "10%", left: "10%", delay: 0 },
    { icon: "🚀", top: "20%", right: "15%", delay: 1 },
    { icon: "💻", bottom: "30%", left: "15%", delay: 2 },
    { icon: "🧠", bottom: "20%", right: "10%", delay: 0.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-50 dark:opacity-30"
          style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6 text-center items-center"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tighter">
              Hi, I&apos;m <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Shweta Rani
              </span>
            </motion.h1>
            
            <motion.h3 variants={itemVariants} className="text-xl md:text-2xl font-semibold text-muted-foreground">
              Full-Stack Developer | MERN Stack Developer | TypeScript & Next.js
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-[600px] leading-relaxed">
              Full-Stack MERN Engineer with proven experience delivering production-grade, scalable web applications from end to end. I ship features that matter: type-safe APIs, JWT authentication, Stripe payment flows, and cloud-optimized deployments.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full group hover-trigger">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full hover-trigger">
                <a href="https://drive.google.com/file/d/1XtB9d-Vo83Xmj79HJsLrZrLtCyk9HSM-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full hover-trigger">
                <Link href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
