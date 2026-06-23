"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialsAndBlogs() {
  const blogs = [
    { title: "Mastering Data Structures for Interviews", category: "DSA", date: "Coming Soon" },
    { title: "Building Scalable Backends with Node.js", category: "Backend", date: "Coming Soon" },
    { title: "React Performance Optimization", category: "React", date: "Coming Soon" },
    { title: "Introduction to LLMs and RAG", category: "AI", date: "Coming Soon" },
  ];

  return (
    <section className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Testimonials */}
          <div>
            <div className="flex flex-col mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4 tracking-tight"
              >
                Testimonials
              </motion.h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-3xl shadow-sm relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10" />
              <p className="text-lg italic text-muted-foreground mb-6 relative z-10">
                "Shweta is a brilliant developer who combines strong problem-solving skills with a keen eye for design. Her work on Appetite Sense AI was outstanding, demonstrating both speed and clarity."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
                  N
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Noodiyos Team</h4>
                  <p className="text-sm text-muted-foreground">Colleagues & Mentors</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Blogs */}
          <div>
            <div className="flex flex-col mb-12">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4 tracking-tight"
              >
                Technical <span className="text-accent">Writing</span>
              </motion.h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
            </div>

            <div className="space-y-4">
              {blogs.map((blog, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-background text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-accent transition-colors">{blog.title}</h4>
                      <p className="text-sm text-muted-foreground">{blog.category}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {blog.date}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="w-full rounded-full group hover-trigger">
                View All Articles
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
