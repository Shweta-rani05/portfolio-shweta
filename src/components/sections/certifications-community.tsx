"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Award, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function CertificationsAndCommunity() {
  const cards = [
    {
      title: "Letter of Recommendation",
      subtitle: "Noodiyos Software Internship",
      description: "Received for outstanding contributions, code quality, and proactive problem-solving during my Full Stack internship.",
      icon: <FileText className="h-6 w-6 text-primary" />,
      link: "https://drive.google.com/file/d/1XtB9d-Vo83Xmj79HJsLrZrLtCyk9HSM-/view?usp=sharing",
      linkText: "View Letter",
      borderHover: "hover:border-primary/30",
    },
    {
      title: "React Experience Certificate",
      subtitle: "Skyscanner Virtual Experience",
      description: "Completed the virtual experience program covering advanced React patterns, component design, and unit testing.",
      icon: <Award className="h-6 w-6 text-accent" />,
      link: "https://www.theforage.com/simulations/skyscanner/front-end-software-engineering-axqg",
      linkText: "View Certificate",
      borderHover: "hover:border-accent/30",
    },
    {
      title: "GitHub Portfolio",
      subtitle: "Open Source & Projects",
      description: "Explore my source code, repositories, commits, and open-source contributions to web applications.",
      icon: <FaGithub className="h-6 w-6 text-blue-500" />,
      link: "https://github.com/Shweta-rani05",
      linkText: "Explore GitHub",
      borderHover: "hover:border-blue-500/30",
    },
    {
      title: "LinkedIn Profile",
      subtitle: "Professional Networking",
      description: "Connect with me for professional updates, internship opportunities, and collaborative full-stack projects.",
      icon: <FaLinkedin className="h-6 w-6 text-[#0077b5]" />,
      link: "https://www.linkedin.com/in/shweta-rani-11741028a",
      linkText: "Connect on LinkedIn",
      borderHover: "hover:border-[#0077b5]/30",
    },
    {
      title: "Backend Concept Revision Series",
      subtitle: "Educational X/Twitter Series",
      description: "Sharing bite-sized Backend Engineering concepts, System Design, and REST API best practices with the developer community.",
      icon: <FaTwitter className="h-6 w-6 text-sky-500" />,
      link: "https://x.com/",
      linkText: "Read Threads",
      borderHover: "hover:border-sky-500/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 relative bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Certifications & <span className="text-primary">Community</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full ${card.borderHover}`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-muted border border-border">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground leading-tight">{card.title}</h3>
                    <p className="text-xs text-muted-foreground">{card.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>

              <div className="pt-6 mt-auto">
                <Button asChild variant="outline" size="sm" className="w-full rounded-full border-border hover:bg-accent group">
                  <a href={card.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 font-semibold text-xs">
                    {card.linkText}
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
