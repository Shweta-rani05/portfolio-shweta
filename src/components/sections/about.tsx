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
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinRotationY, setSpinRotationY] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasFlippedRef = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const card = cardRef.current;
    if (!card) return () => window.removeEventListener("resize", checkMobile);

    const handleScroll = () => {
      if (hasFlippedRef.current) return;

      const rect = card.getBoundingClientRect();
      const vh = window.innerHeight;

      // Trigger when the card's vertical centre crosses the 50% vh line
      const cardCenter = rect.top + rect.height / 2;
      if (cardCenter < vh * 0.5) {
        hasFlippedRef.current = true;
        setIsFlipped(true);

        animate(0, 1440, {
          duration: 2.4,
          ease: [0.12, 0.8, 0.2, 1], // aggressive ease-out: fast spin → very slow landing
          onUpdate: (v) => setSpinRotationY(v),
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check on mount

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Normalize to -5 to 5 degrees
    const tiltX = -(y / (rect.height / 2)) * 5;
    const tiltY = (x / (rect.width / 2)) * 5;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleFlip = () => {
    hasFlippedRef.current = true;
    setIsFlipped(prev => !prev);
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    hasFlippedRef.current = true;
    setIsSpinning(true);
    setSpinRotationY(prev => prev + 720);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      hasFlippedRef.current = true;
      handleFlip();
    }
  };

  const baseRotationY = isFlipped ? 180 : 0;
  const targetRotationY = baseRotationY + spinRotationY + (isHovered ? tilt.y : 0);
  const targetRotationX = isHovered ? tilt.x : 0;

  return (
    <div
      ref={cardRef}
      style={{ perspective: "900px" }}
      className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 focus-visible:outline-none"
    >
      {/* Floating Wrapper */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="w-full h-full"
      >
        {/* Tilt, Scale, and Flip Card */}
        <motion.div
          role="button"
          tabIndex={0}
          aria-label="Interactive profile card. Click to reveal profile photo."
          onClick={handleFlip}
          onDoubleClick={handleDoubleClick}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onKeyDown={handleKeyDown}
          suppressHydrationWarning={true}
          className="w-full h-full cursor-pointer relative rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          style={{
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
          }}
          animate={{
            rotateY: targetRotationY,
            rotateX: targetRotationX,
            scale: isHovered ? 1.03 : 1.0,
            boxShadow: isHovered
              ? isSpinning
                ? "0 0 35px 8px rgba(16, 185, 129, 0.5)"
                : "0 0 25px 4px rgba(16, 185, 129, 0.25)"
              : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
          }}
          transition={
            isSpinning
              ? {
                  rotateY: { duration: 1.2, ease: "easeInOut" },
                  default: { type: "spring", stiffness: 260, damping: 25 },
                }
              : {
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                  mass: 0.8,
                }
          }
          onAnimationComplete={() => {
            if (isSpinning) {
              setIsSpinning(false);
            }
          }}
        >
          {/* FRONT: Avatar */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              position: "absolute",
              inset: 0,
              transform: "rotateY(0deg)",
            }}
            className="rounded-2xl overflow-hidden border border-border bg-muted"
          >
            {/* Rotating gradient border wrapper */}
            <div className="absolute inset-0 p-[1.5px] rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-teal-400 to-emerald-500"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  rotate: isHovered ? [0, 360] : 0,
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  rotate: { repeat: Infinity, duration: 4, ease: "linear" },
                }}
              />
              <div className="absolute inset-[1.5px] rounded-[14px] overflow-hidden bg-muted">
                <Image
                  src="/avatar-shweta-new.jpeg"
                  alt="Shweta Rani - avatar"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* BACK: Real portrait */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              inset: 0,
            }}
            className="rounded-2xl overflow-hidden border border-border bg-muted"
          >
            {/* Rotating gradient border wrapper */}
            <div className="absolute inset-0 p-[1.5px] rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-teal-400 to-emerald-500"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  rotate: isHovered ? [0, 360] : 0,
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  rotate: { repeat: Infinity, duration: 4, ease: "linear" },
                }}
              />
              <div className="absolute inset-[1.5px] rounded-[14px] overflow-hidden bg-muted">
                <Image
                  src="/portrait-shweta-new.jpeg"
                  alt="Shweta Rani"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
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
