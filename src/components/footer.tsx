"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-8 bg-background/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand + Social */}
          <div className="flex items-center gap-6 order-2 md:order-none">
            <Link href="/" className="text-sm font-bold">
              Shweta<span className="text-primary">.</span>
            </Link>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Shweta-rani05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaGithub className="h-3.5 w-3.5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shweta-rani-11741028a"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaLinkedin className="h-3.5 w-3.5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://x.com/Shweta__rani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaTwitter className="h-3.5 w-3.5" />
                <span className="sr-only">X</span>
              </a>
            </div>
          </div>

          {/* Center - Copyright */}
          <p className="text-xs text-muted-foreground order-1 md:order-none">
            {currentYear} Shweta Rani. Built with Next.js, TypeScript, and
            Tailwind CSS.
          </p>

          {/* Right - Back to Top */}
          <Button
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium hover:bg-transparent flex items-center gap-1 p-0 h-auto order-3 md:order-none"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
