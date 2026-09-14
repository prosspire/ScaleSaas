"use client";

import React from "react";
import { motion } from "framer-motion";
import {
   ArrowUpRight,
   Layers,
} from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import Link from "next/link";
import Image from "next/image";

// --- FONTS ---
const titleFont = Titan_One({
   weight: '400',
   subsets: ['latin'],
   display: 'swap',
});

const bodyFont = Nunito({
   subsets: ['latin'],
   weight: ['400', '600', '700', '800'],
   display: 'swap',
});

// --- PROJECTS DATA ---
// REPLACE THESE imageSrc URLs with your actual project screenshots.
const projects = [
   {
      title: "Preschool website",
      category: "Education Platform",
      description: "A Preschool website built for our client",
      tags: ["Next.js", "Python", "Tremor"],
      link: "https://www.bestpreschoolanddaycare.com/",
      // Placeholder image representing a dashboard
      imageSrc: "https://miajmerfkgayimdhfnpy.supabase.co/storage/v1/object/public/images/uploads/rNnLkCPa11kYFp66LXLaE_preschool.png",
      alt: "SaaS Dashboard Screenshot",
      gradient: "from-rose-500 to-orange-500",
      colSpan: "md:col-span-2", // Wide Featured Card
   },
   {
      title: "Preparely",
      category: "Education and Learning",
      description: "Learning and news portal for students",
      tags: ["Next js ", "supabase"],
      link: "https://sarkariresultindia.vercel.app/",
      imageSrc: "https://miajmerfkgayimdhfnpy.supabase.co/storage/v1/object/public/images/uploads/preparely.png",
      alt: "Neon Commerce Storefront",
      gradient: "from-blue-500 to-cyan-500",
      colSpan: "md:col-span-1",
   },
   {
      title: "Little dreamers at Cambridge",
      category: "Mobile PWA",
      description: "A School website for a client with a new ui design style",
      tags: ["PWA", "Supabase"],
      link: "https://www.littledreamersatcambridge.com/",
      // Placeholder mobile app image
      imageSrc: "https://miajmerfkgayimdhfnpy.supabase.co/storage/v1/object/public/images/uploads/dreamers.png",
      alt: "Little dreamers at cambridge",
      gradient: "from-emerald-500 to-teal-500",
      colSpan: "md:col-span-1",
   },
   {
      title: "DevFlow Systems",
      category: "Developer Tool",
      description: "Automated CI/CD pipeline visualizer for large scale teams and multiple developer tools.",
      tags: ["DevOps", "Go", "React"],
      link: "https://scalesaas.ashishrohilla.co.in/tooling",
      // Placeholder tech/code image
      imageSrc: "https://miajmerfkgayimdhfnpy.supabase.co/storage/v1/object/public/images/uploads/tools.png",
      alt: "DevFlow Codebase",
      gradient: "from-purple-500 to-indigo-500",
      colSpan: "md:col-span-2", // Wide Featured Card
   },
   {
      title: "Mega diagnostic",
      category: "Education Platform",
      description: "A Health care platform build for a hospital to interact with clients and book appintments",
      tags: ["Next.js", "Python", "Tremor"],
      link: "https://www.megadiagnosticsandinterventions.com/",
      // Placeholder image representing a dashboard
      imageSrc: "https://miajmerfkgayimdhfnpy.supabase.co/storage/v1/object/public/images/uploads/mega.png",
      alt: "Mega diagnostic center",
      gradient: "from-rose-500 to-orange-500",
      colSpan: "md:col-span-2", // Wide Featured Card
   },
   {
      title: "Devops Learning platform",
      category: "Education and Learning",
      description: "Devops learning platform for devops engineers",
      tags: ["Next js ", "supabase"],
      link: "https://www.ashishrohilla.co.in/courses",
      // Placeholder image representing e-commerce/fashion
      imageSrc: "https://miajmerfkgayimdhfnpy.supabase.co/storage/v1/object/public/images/uploads/courses.png",
      alt: "devosp learning",
      gradient: "from-blue-500 to-cyan-500",
      colSpan: "md:col-span-1",
   },
];

const WorkShowcaseWithImages = () => {
   return (
      <section className={`relative w-full bg-neutral-950 py-32 overflow-hidden ${bodyFont.className}`}>

         {/* Background Grid Pattern */}
         <div className="absolute inset-0 bg-neutral-950 opacity-20 pointer-events-none"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

         <div className="container mx-auto px-6 relative z-10">

            {/* --- HEADER --- */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8 border-b border-white/10 pb-12">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="max-w-3xl"
               >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                     <Layers className="w-4 h-4 animate-pulse" />
                     <span>Featured Deliveries</span>
                  </div>

                  <h2 className={`text-5xl md:text-7xl font-black text-white mb-6 leading-tight ${titleFont.className}`}>
                     Recent <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 relative inline-block">
                        Success Stories
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-sm opacity-50"></div>
                     </span>
                  </h2>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="mb-8 md:mb-0"
               >
                  <p className="text-neutral-400 text-lg md:text-xl font-medium max-w-sm text-right md:text-left leading-relaxed">
                     We transform complex ideas into high-performance digital products that drive real, measurable business growth.
                  </p>
               </motion.div>
            </div>

            {/* --- PROJECTS GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-auto">
               {projects.map((project, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.1 }}
                     viewport={{ once: true }}
                     // Added 'group' here specifically for hover states
                     className={`${project.colSpan} group relative min-h-[500px] cursor-pointer`}
                  >
                     <Link href={project.link} target="_blank" className="block h-full w-full">
                     <div className="h-full w-full flex flex-col relative overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_40px_rgba(99,102,241,0.2)] hover:-translate-y-2 group bg-neutral-900/40 backdrop-blur-sm">
                        
                        {/* Inner glowing ring on hover */}
                        <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 group-hover:ring-white/20 transition-all z-20 pointer-events-none"></div>

                        {/* --- IMAGE CONTAINER --- */}
                        <div className="relative h-72 w-full p-6 flex items-center justify-center border-b border-white/5 overflow-hidden">
                           {/* Background Gradient for the image container */}
                           <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                           
                           {/* The actual image, constrained to fit perfectly without cropping */}
                           <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/20 transition-colors bg-neutral-950/80">
                              <Image
                                 src={project.imageSrc}
                                 alt={project.alt}
                                 fill
                                 className="object-contain transition-transform duration-700 will-change-transform group-hover:scale-105 p-2"
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                           </div>
                        </div>

                        {/* --- CONTENT --- */}
                        <div className="flex flex-col flex-1 p-8 relative z-10">
                           
                           {/* Hover Action Button */}
                           <div className="absolute top-8 right-8 w-12 h-12 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:bg-white group-hover:text-black text-white">
                              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                           </div>

                           {/* Tags */}
                           <div className="flex flex-wrap gap-2 mb-6">
                              {project.tags.map((tag, i) => (
                                 <span key={i} className="px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-neutral-300 uppercase tracking-widest group-hover:bg-indigo-500/20 group-hover:border-indigo-400/50 group-hover:text-white transition-all duration-300">
                                    {tag}
                                 </span>
                              ))}
                           </div>

                           <h3 className={`text-2xl md:text-3xl font-bold text-white mb-3 transition-transform duration-300 group-hover:-translate-y-1 ${titleFont.className}`}>
                              {project.title}
                           </h3>
                           
                           <p className="text-neutral-400 font-medium line-clamp-2 mb-8 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-neutral-300">
                              {project.description}
                           </p>

                           {/* Category Footer */}
                           <div className="mt-auto flex items-center text-xs font-bold text-emerald-400/70 group-hover:text-emerald-400 transition-colors">
                              <span className="uppercase tracking-widest">{project.category}</span>
                              <div className="h-px flex-1 bg-white/10 ml-4 group-hover:bg-white/30 transition-colors"></div>
                           </div>
                        </div>
                     </div>
                     </Link>
                  </motion.div>
               ))}
            </div>

         </div>
      </section>
   );
};

export default WorkShowcaseWithImages;