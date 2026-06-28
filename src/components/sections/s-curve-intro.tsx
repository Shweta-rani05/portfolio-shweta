"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Background-only S-curve SVG that fills on scroll.
 * Rendered as an absolutely positioned layer behind hero content.
 * Uses the #hero-scroll-wrapper as the scroll trigger (tall div with sticky hero inside).
 */
export default function SCurveBackground() {
  const fillPathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const fillPath = fillPathRef.current;
    const glowPath = glowPathRef.current;
    if (!fillPath || !glowPath) return;

    // Find the tall scroll wrapper that provides the scroll distance
    const wrapper = document.getElementById("hero-scroll-wrapper");
    if (!wrapper) return;

    const ctx = gsap.context(() => {
      const pathLength = fillPath.getTotalLength();

      gsap.set([fillPath, glowPath], {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // Track the wrapper's scroll progress — no pinning needed.
      // The sticky CSS on the section keeps the hero in view.
      gsap.to([fillPath, glowPath], {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const sPath = [
    "M 1400,-50",
    "C 1350,100 1200,220 950,320",
    "C 700,420 350,460 150,560",
    "C -50,660 -50,760 150,850",
    "C 350,940 750,970 1000,1050",
    "C 1250,1130 1400,1230 1350,1350",
    "C 1300,1470 1050,1540 800,1620",
    "C 550,1700 250,1760 -50,1850",
  ].join(" ");

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1400 1800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Soft glow behind the fill */}
      <path
        ref={glowPathRef}
        d={sPath}
        stroke="var(--s-curve-fill)"
        strokeWidth="48"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.15"
        style={{ filter: "blur(12px)" }}
      />
      {/* Light grey track — always visible */}
      <path
        d={sPath}
        stroke="var(--s-curve-track)"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Primary fill stroke — draws on scroll */}
      <path
        ref={fillPathRef}
        d={sPath}
        stroke="var(--s-curve-fill)"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
