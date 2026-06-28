"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { ExternalLink } from "lucide-react";
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
    submissionCalendar: {},
  };

  useEffect(() => {
    setMounted(true);
    fetchLeetcodeStats("_shweta_05")
      .then((res) => {
        if (res.success && res.data) {
          setLeetcodeData(res.data);
        } else {
          setLeetcodeData(fallbackLeetcode);
        }
      })
      .catch(() => {
        setLeetcodeData(fallbackLeetcode);
      })
      .finally(() => setLoadingLeetcode(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentLeetcode = leetcodeData || fallbackLeetcode;

  const learningTopics = [
    "Backend Engineering",
    "System Design",
    "Data Structures & Algorithms",
    "Docker & Redis",
    "Generative AI",
  ];

  const lcDifficulties = [
    {
      label: "Easy",
      solved: currentLeetcode.easySolved,
      total: currentLeetcode.totalEasy,
      color: "text-emerald-500",
    },
    {
      label: "Medium",
      solved: currentLeetcode.mediumSolved,
      total: currentLeetcode.totalMedium,
      color: "text-amber-500",
    },
    {
      label: "Hard",
      solved: currentLeetcode.hardSolved,
      total: currentLeetcode.totalHard,
      color: "text-red-500",
    },
  ];

  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Developer Activity
          </motion.h2>
        </div>

        {/* Full-width data block layout */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Top row: Currently Learning + LeetCode Stats side by side */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Currently Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 p-6 rounded-2xl bg-card border border-border"
            >
              <h3 className="text-base font-bold text-foreground mb-5">
                Currently Learning
              </h3>

              <ul className="space-y-3">
                {learningTopics.map((topic, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* LeetCode Stats - number display instead of progress bars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3 p-6 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-foreground">
                  LeetCode Stats
                </h3>
                <a
                  href="https://leetcode.com/u/_shweta_05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  View Profile
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Total solved - large number display */}
              <div className="mb-6">
                <span className="text-4xl font-bold font-mono text-foreground">
                  {loadingLeetcode ? "..." : currentLeetcode.totalSolved}
                </span>
                <span className="text-sm text-muted-foreground ml-2">
                  problems solved
                </span>
              </div>

              {/* Difficulty breakdown - clean number display */}
              <div className="grid grid-cols-3 gap-4">
                {lcDifficulties.map((d) => (
                  <div key={d.label} className="space-y-1">
                    <p className={`text-xs font-medium ${d.color}`}>
                      {d.label}
                    </p>
                    <p className="text-lg font-bold font-mono text-foreground">
                      {loadingLeetcode ? "..." : d.solved}
                      <span className="text-xs font-normal text-muted-foreground ml-1">
                        / {d.total}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* GitHub Contributions Calendar - full width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-base font-bold text-foreground mb-5">
              GitHub Contributions
            </h3>
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[700px] flex justify-center">
                {mounted ? (
                  <GitHubCalendar
                    username="Shweta-rani05"
                    colorScheme={theme === "dark" ? "dark" : "light"}
                    theme={{
                      light: [
                        "#ebedf0",
                        "#9be9a8",
                        "#40c463",
                        "#30a14e",
                        "#216e39",
                      ],
                      dark: [
                        "#161b22",
                        "#0e4429",
                        "#006d32",
                        "#26a641",
                        "#39d353",
                      ],
                    }}
                    labels={{
                      totalCount: "{{count}} contributions in the last year",
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
      </div>
    </section>
  );
}
