"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Projects() {
  const projects = [
    {
      title: "SVN Jewellery – Full-Stack E-commerce Platform",
      description: "Architected a scalable, type-safe e-commerce platform applying centralized TypeScript interfaces across the full stack to eliminate runtime type errors.",
      features: [
        "Architected scalable Next.js + Node.js + MongoDB backend with type-safe TypeScript interfaces.",
        "Built dynamic product variant system supporting real-time size, material, and stock updates.",
        "Integrated Stripe API for secure payments and Zustand state management for persistent carts."
      ],
      tech: ["Next.js", "Node.js", "MongoDB", "TypeScript", "Stripe API", "Cloudinary", "Zustand"],
      github: "https://github.com/Shweta-rani05/SVN-Jewellery",
      live: "https://svn-jewellery.vercel.app",
      screenshots: [
        "/svn-hero.png",
        "/svn-shop-look.png",
      ],
    },
    {
      title: "Wonderlust – Full-Stack Hotel Booking Platform",
      description: "Built a production-ready hotel booking application featuring end-to-end booking flows, secure user authentication, and advanced search functionality.",
      features: [
        "Designed and deployed 15+ secure RESTful API endpoints with stateless JWT authentication.",
        "Implemented password hashing using bcrypt alongside full error-handling middleware.",
        "Developed responsive mobile-first UI with advanced search filters and full CRUD listings."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt", "Tailwind CSS"],
      github: "https://github.com/Shweta-rani05/wonderlust-mern",
      live: "https://wonderlust-mern-kj89.onrender.com/",
      screenshots: [
        "/wonderlust-home.png",
      ],
    },
  ];

  const moreProjects = [
    {
      title: "GitHub Actions CI/CD Demo",
      description: "Repository used for implementing and testing GitHub Actions workflows with CI/CD automation.",
      tech: ["GitHub Actions", "CI/CD", "JavaScript", "Automation"],
      github: "https://github.com/Shweta-rani05/githubactionDemo",
    },
    {
      title: "QuickChat App",
      description: "A React-based chat application demonstrating modern frontend development practices, component-based architecture, and responsive design.",
      tech: ["React.js", "Socket.io", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/Shweta-rani05/QuickChat",
    },
    {
      title: "Redux Todo App",
      description: "A React + Vite Redux Todo List App built to understand Redux Toolkit concepts like store, slice, actions, and reducers.",
      tech: ["React.js", "Vite", "Redux Toolkit", "JavaScript"],
      github: "https://github.com/Shweta-rani05/Redux-todo-list-app",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent full-stack applications, featuring modern architectures, 
            premium UI/UX design, and AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-3xl bg-card border border-border hover:border-primary/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Screenshots Carousel */}
              <div className="relative h-64 w-full bg-muted overflow-hidden group/carousel">
                <Carousel className="w-full h-full" opts={{ loop: true }}>
                  <CarouselContent className="h-full">
                    {project.screenshots.map((screenshot, sIdx) => (
                      <CarouselItem key={sIdx} className="h-full">
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                          <img 
                            src={screenshot}
                            alt={`${project.title} screenshot ${sIdx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                          />
                        </a>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {project.screenshots.length > 1 && (
                    <div className="opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                      <div className="absolute left-2 top-1/2 -translate-y-1/2">
                        <CarouselPrevious className="relative h-8 w-8 bg-background/80 backdrop-blur-sm border-none hover:bg-background/90" />
                      </div>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <CarouselNext className="relative h-8 w-8 bg-background/80 backdrop-blur-sm border-none hover:bg-background/90" />
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Carousel Indicator Dots */}
                  {project.screenshots.length > 1 && (
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 pointer-events-none">
                      {project.screenshots.map((_, dotIdx) => (
                        <div key={dotIdx} className="h-1.5 w-1.5 rounded-full bg-white/50" />
                      ))}
                    </div>
                  )}
                </Carousel>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary">
                    {project.title}
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features Bullet Points */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold mb-3 text-foreground uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6 mt-auto">
                  <h4 className="text-xs font-semibold mb-3 text-foreground uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs px-2.5 py-0.5">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex items-center justify-between gap-4">
                  <Button asChild variant="outline" className="flex-1 rounded-full hover-trigger">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild className="flex-1 rounded-full group hover-trigger">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Section */}
        <div className="mt-24 flex flex-col items-center justify-center text-center mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-4 tracking-tight"
          >
            More <span className="text-primary">Projects</span>
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {moreProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-2xl bg-card border border-border hover:border-primary/30 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <FaGithub className="h-6 w-6" />
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {project.title}
                </a>
              </h4>
              
              <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t, i) => (
                  <Badge key={i} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 border-none text-[11px] px-2 py-0.5">
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 flex justify-center">
          <Button asChild variant="ghost" className="group text-muted-foreground hover:text-primary transition-all duration-300 text-sm font-semibold hover:bg-transparent">
            <a href="https://github.com/Shweta-rani05?tab=repositories" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
              View All Projects on GitHub
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
