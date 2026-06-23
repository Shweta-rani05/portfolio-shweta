"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { 
  Milestone, 
  Terminal, 
  BookOpen, 
  Layers, 
  Sparkles, 
  Target
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

  const journeySteps = [
    {
      icon: <Terminal className="h-5 w-5" />,
      title: "Solving DSA Daily",
      desc: "Consistent practice on LeetCode to master algorithms and data structures.",
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Backend Revision",
      desc: "Deepening knowledge of Node.js, Express, and database management.",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Learning System Design",
      desc: "Understanding how to build scalable and highly available distributed systems.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Building AI Projects",
      desc: "Integrating LLMs and exploring intelligent agent workflows.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Preparing for Internships",
      desc: "Actively seeking Software Engineering roles at top-tier companies.",
    },
  ];

  // LeetCode totals
  const totalQuestions = currentLeetcode.totalEasy + currentLeetcode.totalMedium + currentLeetcode.totalHard;

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Coding <span className="text-primary">Journey</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        {/* Top Section: Timeline & Consistency Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {journeySteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GitHub Consistency Calendar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow w-full overflow-hidden"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Milestone className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold">Consistency Graph</h3>
            </div>
            <p className="text-muted-foreground mb-8">
              A visual representation of my daily coding habits and contributions.
            </p>
            <div className="overflow-x-auto pb-4 custom-scrollbar">
              <div className="min-w-[700px]">
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
              </div>
            </div>
          </motion.div>
        </div>

        {/* LeetCode Solved Stats Section */}
        <div className="mt-20 border-t border-border/60 pt-16">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
              LeetCode <span className="text-primary">Stats</span>
            </h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Real-time problem-solving progress fetched dynamically from LeetCode.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-4xl mx-auto w-full">
            {/* Left Column: Radial Circle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 bg-card border border-border p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center text-center"
            >
              <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-6">Overall Progress</span>
              
              <div className="relative flex justify-center items-center h-40 w-40">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    className="stroke-muted"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    className="stroke-primary transition-all duration-1000"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 60}
                    strokeDashoffset={2 * Math.PI * 60 * (1 - (currentLeetcode.totalSolved || 0) / (totalQuestions || 1))}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-foreground leading-none">
                    {currentLeetcode.totalSolved}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    / {totalQuestions} Solved
                  </span>
                </div>
              </div>

              {currentLeetcode.ranking > 0 && (
                <div className="mt-6 text-sm text-muted-foreground">
                  Ranking: <strong className="text-foreground">#{currentLeetcode.ranking.toLocaleString()}</strong>
                </div>
              )}
            </motion.div>

            {/* Right Column: Category Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 bg-card border border-border p-6 md:p-8 rounded-3xl flex flex-col justify-center space-y-6"
            >
              <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">Category Breakdown</span>

              {/* Easy Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-teal-500">Easy</span>
                  <span className="text-muted-foreground font-medium">
                    {currentLeetcode.easySolved} <span className="text-xs text-muted-foreground/60">/ {currentLeetcode.totalEasy}</span>
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-teal-500 rounded-full transition-all duration-1000" 
                    style={{ width: `${((currentLeetcode.easySolved || 0) / (currentLeetcode.totalEasy || 1)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Medium Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-yellow-500">Medium</span>
                  <span className="text-muted-foreground font-medium">
                    {currentLeetcode.mediumSolved} <span className="text-xs text-muted-foreground/60">/ {currentLeetcode.totalMedium}</span>
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-500 rounded-full transition-all duration-1000" 
                    style={{ width: `${((currentLeetcode.mediumSolved || 0) / (currentLeetcode.totalMedium || 1)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Hard Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-red-500">Hard</span>
                  <span className="text-muted-foreground font-medium">
                    {currentLeetcode.hardSolved} <span className="text-xs text-muted-foreground/60">/ {currentLeetcode.totalHard}</span>
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-500 rounded-full transition-all duration-1000" 
                    style={{ width: `${((currentLeetcode.hardSolved || 0) / (currentLeetcode.totalHard || 1)) * 100}%` }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
