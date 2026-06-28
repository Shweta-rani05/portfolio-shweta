"use client";

import React, { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SCurveBackground from "@/components/sections/s-curve-intro";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Proximity-based magnification: letters near cursor scale up smoothly
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const letters = letterRefs.current;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    for (const el of letters) {
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.sqrt((mouseX - cx) ** 2 + (mouseY - cy) ** 2);

      // Smooth falloff: radius = 120px, max scale = 1.3×
      const radius = 120;
      const maxScale = 1.3;
      const t = Math.max(0, 1 - dist / radius);
      const scale = 1 + (maxScale - 1) * t * t; // quadratic ease for smoothness

      el.style.transform = `scale(${scale})`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    for (const el of letterRefs.current) {
      if (el) el.style.transform = "scale(1)";
    }
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    // Tall wrapper provides scroll distance for the S-curve fill.
    // The section inside is sticky, so the hero stays in view while scrolling.
    <div className="relative" style={{ height: "250vh" }} id="hero-scroll-wrapper">
      <section className="sticky top-0 min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
        {/* S-curve background layer */}
        <SCurveBackground />
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              className="flex flex-col items-center text-center gap-6"
            >
              {/* Headline with area-based magnification */}
              <motion.h1
                variants={itemVariants}
                ref={headlineRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-normal leading-none"
              >
                {"Shweta Rani".split("").map((char, i) =>
                  char === " " ? (
                    <span key={i} className="inline-block w-[0.3em]" />
                  ) : (
                    <span
                      key={i}
                      ref={(el) => { letterRefs.current[i] = el; }}
                      className="inline-block"
                      style={{
                        transformOrigin: "center bottom",
                        transition: "transform 0.2s ease-out",
                        willChange: "transform",
                      }}
                    >
                      {char}
                    </span>
                  )
                )}
              </motion.h1>

              {/* Role */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl font-medium text-muted-foreground flex items-center justify-center gap-4 flex-wrap"
              >
                <span>Full Stack Developer</span>
                <span className="text-primary/40">|</span>
                <span>GenAI</span>
                <span className="text-primary/40">|</span>
                <span>System Design</span>
              </motion.p>

              {/* Subtext */}
              <motion.p
                variants={itemVariants}
                className="text-base text-muted-foreground max-w-[50ch] leading-relaxed"
              >
                Building scalable web applications with React, Next.js, and
                Node.js. Exploring backend engineering, system design, and
                generative AI.
              </motion.p>

              {/* 2 CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 pt-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 group shadow-md shadow-primary/20"
                >
                  <Link href="#projects" className="flex items-center gap-2">
                    View Projects
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <a
                    href="https://github.com/Shweta-rani05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaGithub className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

