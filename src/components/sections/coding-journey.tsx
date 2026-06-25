"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { 
  ExternalLink,
  Check,
  Brain,
  Flame,
  Code2
} from "lucide-react";
import { fetchLeetcodeStats } from "@/app/actions/leetcode";

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  ranking: number;
  submissionCalendar: Record<string, number> | string;
}

export default function CodingJourney() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [leetcodeData, setLeetcodeData] = useState<LeetCodeStats | null>(null);
  const [loadingLeetcode, setLoadingLeetcode] = useState(true);

  const fallbackLeetcode: LeetCodeStats = {
    totalSolved: 112,
    easySolved: 73,
    mediumSolved: 35,
    hardSolved: 4,
    totalEasy: 830,
    totalMedium: 1720,
    totalHard: 750,
    ranking: 184520,
    submissionCalendar: {}
  };

  useEffect(() => {
    setMounted(true);
    fetchLeetcodeStats("_shweta_05")
      .then((res) => {
        if (res.success && res.data) {
          setLeetcodeData(res.data);
        } else {
          console.warn("Failed to fetch LeetCode stats, using fallback:", res.error);
          setLeetcodeData(fallbackLeetcode);
        }
      })
      .catch((err) => {
        console.error("Error calling fetchLeetcodeStats:", err);
        setLeetcodeData(fallbackLeetcode);
      })
      .finally(() => setLoadingLeetcode(false));
  }, []);

  const currentLeetcode = leetcodeData || fallbackLeetcode;
  const totalQuestions = currentLeetcode.totalEasy + currentLeetcode.totalMedium + currentLeetcode.totalHard;

  const learningTopics = [
    "Backend Engineering",
    "System Design",
    "Data Structures & Algorithms",
    "Docker & Redis",
    "Generative AI"
  ];

  return (
    <section id="journey" className="py-16 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Developer <span className="text-primary">Activity</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        {/* 2-Column Grid for Currently Learning and LeetCode Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
          
          {/* Card 1: Currently Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-muted border border-border">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Currently Learning</h3>
              </div>
              
              <ul className="space-y-3.5">
                {learningTopics.map((topic, idx) => (
                  <li key={idx} className="flex items-center gap-3 group">
                    <div className="p-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 2: LeetCode Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-muted border border-border">
                  <Flame className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">LeetCode Stats</h3>
              </div>

              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Left Side: Solved Circle */}
                <div className="col-span-5 flex flex-col items-center justify-center">
                  <div className="relative flex justify-center items-center h-24 w-24">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="38"
                        className="stroke-muted"
                        strokeWidth="6"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="38"
                        className="stroke-primary transition-all duration-1000"
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={2 * Math.PI * 38}
                        strokeDashoffset={2 * Math.PI * 38 * (1 - (currentLeetcode.totalSolved || 0) / (totalQuestions || 1))}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-foreground leading-none">
                        {currentLeetcode.totalSolved}
                      </span>
                      <span className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider font-semibold">
                        Solved
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Category Breakdown */}
                <div className="col-span-7 space-y-2.5">
                  {/* Easy */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-teal-500">Easy</span>
                      <span className="text-muted-foreground">{currentLeetcode.easySolved}/{currentLeetcode.totalEasy}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-teal-500 rounded-full" 
                        style={{ width: `${((currentLeetcode.easySolved || 0) / (currentLeetcode.totalEasy || 1)) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Medium */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-yellow-500">Medium</span>
                      <span className="text-muted-foreground">{currentLeetcode.mediumSolved}/{currentLeetcode.totalMedium}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-500 rounded-full" 
                        style={{ width: `${((currentLeetcode.mediumSolved || 0) / (currentLeetcode.totalMedium || 1)) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Hard */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-red-500">Hard</span>
                      <span className="text-muted-foreground">{currentLeetcode.hardSolved}/{currentLeetcode.totalHard}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-500 rounded-full" 
                        style={{ width: `${((currentLeetcode.hardSolved || 0) / (currentLeetcode.totalHard || 1)) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://leetcode.com/u/_shweta_05/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-1.5 w-full py-2 rounded-full border border-border hover:bg-accent text-xs font-semibold transition-all duration-300 group"
            >
              View LeetCode Profile
              <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

        </div>

        {/* GitHub Calendar Card (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="max-w-5xl mx-auto p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Code2 className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold">GitHub Contributions</h3>
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            A real-time visualization of my daily code updates and developer consistency graph.
          </p>
          <div className="overflow-x-auto pb-2 custom-scrollbar">
            <div className="min-w-[700px] flex justify-center">
              {mounted ? (
                <GitHubCalendar 
                  username="Shweta-rani05" 
                  colorScheme={theme === "dark" ? "dark" : "light"}
                  theme={{
                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                  }}
                  labels={{
                    totalCount: '{{count}} contributions in the last year',
                  }}
                  showWeekdayLabels
                />
              ) : (
                <div className="h-[120px] w-full bg-muted/20 animate-pulse rounded-xl" />
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
