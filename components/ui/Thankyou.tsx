"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  Mail, 
  Phone, 
  MessageCircle, 
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Clock,
  Calendar,
  ShieldCheck,
  Globe
} from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';
import { FullNavbar } from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { toast } from "sonner";

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

// Live Portfolio Projects
const featuredWork = [
  {
    name: "Acquirely",
    domain: "acquirely.in",
    url: "https://acquirely.in/",
    tag: "Growth Engine",
    description: "High-converting B2B client acquisition and funnel platform.",
    accent: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "Little Dreamers at Cambridge",
    domain: "littledreamersatcambridge.com",
    url: "https://www.littledreamersatcambridge.com/",
    tag: "Education PWA",
    description: "Interactive school web portal with modern mobile-first UI.",
    accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    name: "Dhwani Cambridge",
    domain: "dhwanicambridge.com",
    url: "https://www.dhwanicambridge.com/",
    tag: "Web Platform",
    description: "High-speed institutional web portal with dynamic admissions.",
    accent: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    name: "Motherhood Preschool & Daycare",
    domain: "motherhoodpreschoolanddaycare.com",
    url: "https://motherhoodpreschoolanddaycare.com/",
    tag: "Preschool Portal",
    description: "Engaging early learning portal with instant inquiry pipelines.",
    accent: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  },
  {
    name: "Preschool Admin Cloud",
    domain: "admin.bestpreschoolanddaycare.com",
    url: "https://admin.bestpreschoolanddaycare.com/",
    tag: "Custom SaaS / CRM",
    description: "Enterprise management cloud with student tracking & analytics.",
    accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

export default function ThankYouPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    toast.success(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className={`relative w-full min-h-screen bg-neutral-950 text-white flex flex-col ${bodyFont.className} overflow-hidden`}>
      
      {/* Navbar */}
      <FullNavbar />

      <main className="relative flex-1 w-full max-w-6xl mx-auto px-4 pt-28 sm:pt-36 pb-20 z-20">
        
        {/* --- MAIN HERO SUCCESS CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Pulsing Success Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Consultation Request Confirmed</span>
          </div>

          {/* Animated Success Icon */}
          <div className="flex justify-center mb-6">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              className="relative"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-emerald-600/30 via-emerald-500/20 to-blue-600/20 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_50px_-10px_rgba(16,185,129,0.35)]">
                <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-emerald-400" />
              </div>
            </motion.div>
          </div>

          <h1 className={`text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 ${titleFont.className}`}>
            You&apos;re All <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">Set!</span>
          </h1>
          
          <p className="text-neutral-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
            Thank you for reaching out to <strong className="text-white font-semibold">Scale SaaS</strong>. We have received your project details and our team is already preparing a tailored strategy roadmap for you.
          </p>

          <p className="text-neutral-500 text-sm mt-3">
            Expected response time: <span className="text-emerald-400 font-semibold">Within 24 hours</span> &bull; Check your email for confirmation details.
          </p>
        </motion.div>

        {/* --- WHAT HAPPENS NEXT TIMELINE --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Roadmap</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">What Happens Next?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="relative bg-neutral-900/60 border border-neutral-800 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:border-neutral-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-neutral-700">01</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Requirement Analysis</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Our solutions architect evaluates your technical needs, current stack, and optimal feature architecture.
              </p>
              <div className="mt-4 pt-4 border-t border-neutral-800/80 text-xs text-blue-400 font-semibold">
                Within 2&ndash;4 Hours
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-neutral-900/60 border border-neutral-800 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:border-neutral-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-neutral-700">02</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Technical Consultation</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We hop on a 30-minute discovery call via Google Meet / Zoom to align on timelines, UX vision, and KPIs.
              </p>
              <div className="mt-4 pt-4 border-t border-neutral-800/80 text-xs text-indigo-400 font-semibold">
                Within 24 Hours
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative bg-neutral-900/60 border border-neutral-800 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:border-neutral-700">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-neutral-700">03</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Proposal & Sprint Kickoff</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                You receive a transparent project roadmap, milestones, and deliverable schedule ready for immediate development.
              </p>
              <div className="mt-4 pt-4 border-t border-neutral-800/80 text-xs text-emerald-400 font-semibold">
                Ready to Build
              </div>
            </div>

          </div>
        </motion.div>

        {/* --- FAST TRACK / DIRECT CONTACT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Need Immediate Assistance?</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">Fast-Track Your Project</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. WhatsApp */}
            <a 
              href="https://wa.me/919588368052?text=Hi%20Scale%20SaaS%20team,%20I%20just%20submitted%20a%20project%20inquiry."
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">WhatsApp Direct</h3>
                <p className="text-neutral-400 text-sm mb-4">Fastest response directly with a solutions lead.</p>
              </div>
              <span className="inline-flex items-center justify-center gap-2 bg-emerald-500/10 group-hover:bg-emerald-500/20 text-emerald-400 font-bold px-4 py-2.5 rounded-xl text-sm border border-emerald-500/20 transition-colors">
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            {/* 2. Direct Call */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl border border-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Direct Call</h3>
                <p className="text-neutral-400 text-sm mb-4">Speak directly with our technical team (Mon-Sat).</p>
              </div>
              <div className="flex gap-2">
                <a 
                  href="tel:+919588368052" 
                  className="flex-1 text-center bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 font-bold py-2.5 px-4 rounded-xl text-sm border border-blue-500/20 transition-colors"
                >
                  Call Now
                </a>
                <button 
                  onClick={() => copyToClipboard("+91 95883 68052", "Phone number")}
                  className="px-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-xl transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedField === "Phone number" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* 3. Direct Email */}
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl border border-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Direct Email</h3>
                <p className="text-neutral-400 text-sm mb-4">Send architecture specs or pitch decks directly.</p>
              </div>
              <div className="flex gap-2">
                <a 
                  href="mailto:ashishrohilla510@gmail.com" 
                  className="flex-1 text-center bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 font-bold py-2.5 px-4 rounded-xl text-sm border border-purple-500/20 transition-colors"
                >
                  Email Team
                </a>
                <button 
                  onClick={() => copyToClipboard("ashishrohilla510@gmail.com", "Email address")}
                  className="px-3 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-xl transition-colors"
                  title="Copy Email Address"
                >
                  {copiedField === "Email address" ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* --- LIVE WORK SHOWCASE --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Portfolio</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">Explore Our Live Client Work</h2>
            </div>
            <Link 
              href="/our-work" 
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>View Full Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredWork.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800 hover:border-neutral-700 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${project.accent}`}>
                      {project.tag}
                    </span>
                    <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors mb-1.5">
                    {project.name}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="text-[11px] text-neutral-500 font-mono flex items-center gap-1.5 pt-3 border-t border-neutral-800/80">
                  <Globe className="w-3 h-3 text-neutral-600" />
                  <span>{project.domain}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* --- BOTTOM ACTION BAR --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <Link href="/our-work" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]">
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          
          <Link href="/" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 font-bold rounded-full transition-all">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </Link>
        </motion.div>

      </main>

      {/* Background Ambience */}
      <BackgroundBeams />

      {/* Footer */}
      <Footer />
    </div>
  );
}