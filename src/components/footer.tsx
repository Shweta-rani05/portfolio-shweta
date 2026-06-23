import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-16 bg-background/50 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          
          {/* Logo and Description */}
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-3xl font-bold tracking-tight">
              Shweta<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Building scalable web applications and exploring AI Engineering.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Shweta-rani05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shweta-rani-11741028a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-[#0077b5] hover:text-white transition-all"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/_shweta_05/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-[#ffa116] hover:text-white transition-all font-bold flex items-center justify-center text-xs w-11 h-11"
            >
              LC
            </a>
            <a
              href="mailto:ranishweta96936@gmail.com"
              className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-white transition-all"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          <p>© {currentYear} Shweta Rani. All rights reserved.</p>
          <p>
            Designed & Built by <span className="font-medium text-foreground">Shweta Rani</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
