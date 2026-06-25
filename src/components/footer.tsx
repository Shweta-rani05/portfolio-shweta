"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-8 bg-background/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          {/* 1. Copyright (Left) */}
          <p className="order-1 md:order-none">© {currentYear} Shweta Rani. All rights reserved.</p>

          {/* 2. Built credits (Center) */}
          <p className="flex items-center gap-1 order-2 md:order-none">
            Built with ❤️ using <span className="text-foreground font-medium">Next.js, TypeScript & Tailwind CSS</span>
          </p>

          {/* 3. Back to Top (Right/Last) */}
          <Button 
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
            className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium hover:bg-transparent flex items-center gap-1 p-0 h-auto animate-none order-3 md:order-none"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
