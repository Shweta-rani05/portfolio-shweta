"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, MapPin, Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/app/actions/send-email";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      
      const response = await sendEmail(formData);
      
      if (response.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          />
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            Currently looking for Software Engineering internships. My inbox is always open for opportunities, collaborations, or just a friendly chat!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="p-8 rounded-3xl bg-card border border-border hover:border-primary/30 shadow-sm transition-all duration-500 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Let&apos;s Connect</h3>
                
                {/* Internship Status Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-semibold text-emerald-400 mt-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Software Engineering Internships
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground/60 font-semibold tracking-wider uppercase">EMAIL</p>
                    <a href="mailto:ranishweta96936@gmail.com" className="text-sm font-semibold transition-colors">
                      ranishweta96936@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground group">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground/60 font-semibold tracking-wider uppercase">LOCATION</p>
                    <p className="text-sm font-semibold text-foreground">India</p>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-6 border-t border-border space-y-3">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">Social Profiles</h4>
                <div className="flex flex-wrap gap-2.5">
                  <a 
                    href="https://github.com/Shweta-rani05" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <FaGithub className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/shweta-rani-11741028a" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-[#0077b5] hover:text-white transition-all duration-300"
                  >
                    <FaLinkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a 
                    href="https://leetcode.com/u/_shweta_05/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-[#ffa116] hover:text-white transition-all duration-300 font-bold flex items-center justify-center text-xs w-10 h-10"
                  >
                    LC
                  </a>
                  <a 
                    href="https://x.com/Shweta__rani" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-sky-500 hover:text-white transition-all duration-300"
                  >
                    <FaTwitter className="h-4 w-4" />
                    <span className="sr-only">X (Twitter)</span>
                  </a>
                </div>
              </div>

              {/* Prominent CTA Buttons */}
              <div className="pt-6 border-t border-border flex flex-col gap-3">
                <Button asChild size="sm" className="w-full rounded-full bg-primary hover:bg-primary/95 text-primary-foreground font-semibold shadow-md shadow-primary/10">
                  <a href="mailto:ranishweta96936@gmail.com" className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button asChild variant="outline" size="sm" className="rounded-full border-border hover:bg-accent font-semibold">
                    <a href="https://github.com/Shweta-rani05" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                      <FaGithub className="h-4 w-4" />
                      View GitHub
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" size="sm" className="rounded-full border-border hover:bg-accent font-semibold">
                    <a href="https://www.linkedin.com/in/shweta-rani-11741028a" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                      <FaLinkedin className="h-4 w-4" />
                      Connect
                    </a>
                  </Button>
                </div>
                
                {/* <Button asChild variant="outline" size="sm" className="w-full rounded-full border-border hover:bg-accent font-semibold">
                  <a href="https://drive.google.com/file/d/1XtB9d-Vo83Xmj79HJsLrZrLtCyk9HSM-/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    📄 View Resume
                  </a>
                </Button> */}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 rounded-3xl bg-card border border-border hover:border-primary/30 shadow-sm transition-all duration-500 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Hello Shweta, I'd like to discuss an opportunity..." 
                  rows={6}
                  {...register("message")}
                  className={`resize-none ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full sm:w-auto rounded-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>

              {submitStatus === "success" && (
                <p className="text-sm text-green-500 font-medium mt-4">
                  Message sent successfully! I will get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-destructive font-medium mt-4">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
