"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { GraduationCap, Code2, Brain, Coffee } from "lucide-react";
import Image from "next/image";

/**
 * Portrait card that starts with an avatar illustration.
 * When it reaches 50% of viewport, the card spins 4–5 times on its
 * vertical Y-axis and the avatar is replaced by the real portrait photo.
 */
function PortraitCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotY, setRotY] = useState(0);
  const hasFlippedRef = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleScroll = () => {
      if (hasFlippedRef.current) return;

      const rect = card.getBoundingClientRect();
      const vh = window.innerHeight;

      // Trigger when the card's vertical centre crosses the 50% vh line
      const cardCenter = rect.top + rect.height / 2;
      if (cardCenter < vh * 0.5) {
        hasFlippedRef.current = true;

        // 4.5 full rotations = 1620°.
        // An odd number of half-turns (9 × 180°) means the back face
        // (real photo) ends up visible.
        animate(0, 1620, {
          duration: 2.4,
          ease: [0.12, 0.8, 0.2, 1], // aggressive ease-out: fast spin → very slow landing
          onUpdate: (v) => setRotY(v),
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ perspective: "900px" }}
      className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0"
    >
      <div
        style={{
          transform: `rotateY(${rotY}deg)`,
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {/* ── FRONT: Avatar illustration ── */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            position: "absolute",
            inset: 0,
          }}
          className="rounded-2xl overflow-hidden border border-border bg-muted shadow-lg"
        >
          <Image
            src="/avatar-portrait.png"
            alt="Shweta Rani - avatar"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* ── BACK: Real portrait (pre-rotated 180° so it faces forward after flip) ── */}
        <div
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            position: "absolute",
            inset: 0,
          }}
          className="rounded-2xl overflow-hidden border border-border bg-muted shadow-lg"
        >
          <Image
            src="/portrait-placeholder.jpeg"
            alt="Shweta Rani"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
      title: "CS Engineering",
      desc: "Strong foundation in DSA, DBMS, OS, Networks, and Software Engineering.",
    },
    {
      icon: <Code2 className="h-5 w-5 text-primary" />,
      title: "MERN Stack",
      desc: "React, Next.js, Node.js, Express, MongoDB, and TypeScript.",
    },
    {
      icon: <Brain className="h-5 w-5 text-primary" />,
      title: "AI & Backend",
      desc: "Docker, Redis, FastAPI, System Design, and Generative AI.",
    },
    {
      icon: <Coffee className="h-5 w-5 text-primary" />,
      title: "Problem Solver",
      desc: "100+ DSA problems solved on LeetCode and GFG.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left - Photo + intro */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              About Me
            </h2>

            {/* Scroll-triggered spin-reveal portrait */}
            <PortraitCard />

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                I am a Computer Science Engineering student passionate about
                building scalable full-stack applications using the MERN stack,
                TypeScript, and Next.js.
              </p>
              <p>
                Currently exploring backend systems, System Design, Docker,
                Redis, FastAPI, and Generative AI while strengthening my DSA
                skills through consistent practice.
              </p>
              <p className="font-medium text-foreground">
                Seeking Software Engineering internship opportunities where I
                can contribute, learn, and build impactful products.
              </p>
            </div>
          </motion.div>

          {/* Right - Highlight cards 2x2 grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex flex-col gap-3"
              >
                <div className="p-2 rounded-xl bg-primary/10 w-fit">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
