"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Heart } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getLikes, toggleLike } from "@/app/actions/likes";

export default function Hero() {
  const [likesCount, setLikesCount] = useState(10);
  const [hasLiked, setHasLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const liked = localStorage.getItem("portfolio_liked") === "true";
    setHasLiked(liked);

    async function fetchLikes() {
      try {
        const res = await getLikes();
        if (res.success) {
          setLikesCount(res.count);
        }
      } catch (err) {
        console.error("Failed to fetch likes:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchLikes();
  }, []);

  const handleLikeClick = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const nextLikedState = !hasLiked;
      const res = await toggleLike(hasLiked);
      
      if (res.success) {
        setLikesCount(res.count);
        setHasLiked(nextLikedState);
        localStorage.setItem("portfolio_liked", String(nextLikedState));
      }
    } catch (err) {
      console.error("Failed to toggle like:", err);
    } finally {
      setIsLoading(false);
    }
  };

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
            
            <motion.div variants={itemVariants} className="text-xl md:text-2xl font-semibold text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
              <span>Full-Stack Developer</span>
              <span className="hidden sm:inline text-primary/70 font-normal">|</span>
              <span className="text-base md:text-lg text-muted-foreground/80">MERN • TypeScript • Next.js</span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-[650px] leading-relaxed">
              Computer Science student passionate about building scalable full-stack web applications. Currently exploring Backend Engineering, System Design, Docker, and Generative AI while building real-world projects.
            </motion.p>

            {/* Quick Highlights Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 max-w-2xl mt-4">
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card/40 border border-border/80 text-xs font-semibold text-foreground backdrop-blur-sm shadow-sm transition-colors hover:border-primary/30">
                <span>🚀</span> 5+ Projects Built
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card/40 border border-border/80 text-xs font-semibold text-foreground backdrop-blur-sm shadow-sm transition-colors hover:border-primary/30">
                <span>💻</span> 100+ DSA Problems Solved
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card/40 border border-border/80 text-xs font-semibold text-foreground backdrop-blur-sm shadow-sm transition-colors hover:border-primary/30">
                <span>🌱</span> Learning System Design & GenAI
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-card/40 border border-border/80 text-xs font-semibold text-foreground backdrop-blur-sm shadow-sm transition-colors hover:border-primary/30">
                <span>🔥</span> Open to Software Engineering Internships
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/95 text-primary-foreground group hover-trigger px-6 shadow-md shadow-primary/20">
                <Link href="#projects" className="flex items-center gap-2">
                   View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full hover-trigger px-6 border-border hover:bg-accent">
                <a href="https://github.com/Shweta-rani05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FaGithub className="h-4 w-4" />
                   GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full hover-trigger px-6 border-border hover:bg-accent">
                <Link href="#contact" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                   Contact Me
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className={cn(
                  "rounded-full hover-trigger px-6 border-border hover:bg-accent transition-all duration-300 gap-2 select-none group/like",
                  hasLiked && "border-red-500/30 bg-red-500/10 text-red-500 hover:bg-red-500/20 hover:text-red-600"
                )}
                onClick={handleLikeClick}
                disabled={isLoading}
              >
                <Heart 
                  className={cn(
                    "h-4 w-4 transition-all duration-300", 
                    hasLiked ? "fill-current text-red-500 scale-110" : "scale-100 group-hover/like:scale-110"
                  )} 
                />
                <span>{likesCount}</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
