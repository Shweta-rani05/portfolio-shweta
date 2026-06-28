"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
      title: "SVN Jewellery - Full-Stack E-commerce Platform",
      description:
        "Architected a scalable, type-safe e-commerce platform with centralized TypeScript interfaces across the full stack.",
      features: [
        "Scalable Next.js + Node.js + MongoDB backend with type-safe TypeScript interfaces",
        "Dynamic product variant system supporting real-time size, material, and stock updates",
        "Stripe API for secure payments and Zustand for persistent cart state management",
      ],
      tech: [
        "Next.js",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "Stripe",
        "Cloudinary",
        "Zustand",
      ],
      github: "https://github.com/Shweta-rani05/SVN-Jewellery",
      live: "https://svn-jewellery.vercel.app",
      screenshots: ["/svn-hero.png", "/svn-shop-look.png"],
    },
    {
      title: "Wonderlust - Full-Stack Hotel Booking Platform",
      description:
        "Production-ready hotel booking app with end-to-end booking flows, secure JWT authentication, and advanced search.",
      features: [
        "15+ secure RESTful API endpoints with stateless JWT authentication",
        "Password hashing with bcrypt and comprehensive error-handling middleware",
        "Responsive mobile-first UI with advanced search filters and full CRUD listings",
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "bcrypt",
        "Tailwind CSS",
      ],
      github: "https://github.com/Shweta-rani05/wonderlust-mern",
      live: "https://wonderlust-mern-kj89.onrender.com/",
      screenshots: ["/wonderlust-home.png"],
    },
  ];

  const moreProjects = [
    {
      title: "GitHub Actions CI/CD Demo",
      description:
        "Implementing and testing GitHub Actions workflows with CI/CD automation.",
      tech: ["GitHub Actions", "CI/CD", "JavaScript"],
      github: "https://github.com/Shweta-rani05/githubactionDemo",
    },
    {
      title: "QuickChat App",
      description:
        "Real-time chat application with component-based architecture and responsive design.",
      tech: ["React.js", "Socket.io", "Tailwind CSS"],
      github: "https://github.com/Shweta-rani05/QuickChat",
    },
    {
      title: "Redux Todo App",
      description:
        "Todo app built to understand Redux Toolkit concepts: store, slice, actions, reducers.",
      tech: ["React.js", "Vite", "Redux Toolkit"],
      github: "https://github.com/Shweta-rani05/Redux-todo-list-app",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground max-w-[55ch]"
          >
            Full-stack applications featuring modern architectures, premium
            UI/UX, and real-world functionality.
          </motion.p>
        </div>

        {/* Featured Projects - stacked layout */}
        <div className="space-y-8 max-w-6xl">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl bg-card border border-border hover:border-primary/30 overflow-hidden transition-all duration-300"
            >
              {/* Screenshot */}
              <div className="relative h-64 lg:h-auto w-full bg-muted overflow-hidden group/carousel">
                <Carousel className="w-full h-full" opts={{ loop: true }}>
                  <CarouselContent className="h-full">
                    {project.screenshots.map((screenshot, sIdx) => (
                      <CarouselItem key={sIdx} className="h-full">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full cursor-pointer"
                        >
                          <Image
                            src={screenshot}
                            alt={`${project.title} screenshot`}
                            width={800}
                            height={500}
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
                </Carousel>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-5 border-t border-border flex items-center gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="rounded-full flex-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <FaGithub className="h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full flex-1 group/btn"
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Live Demo
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 tracking-tight"
          >
            More Projects
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
            {moreProjects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col rounded-2xl bg-card border border-border hover:border-primary/30 p-6 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <FaGithub className="h-5 w-5" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h4 className="text-base font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                <p className="text-xs text-muted-foreground mb-5 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* View All */}
        <div className="mt-10">
          <a
            href="https://github.com/Shweta-rani05?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            View all projects on GitHub
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
