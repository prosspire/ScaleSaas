"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MessageCircle, // WhatsApp
  Copy
} from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function ThankYouPage() {
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="relative w-full min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      
      <BackgroundBeamsWithCollision className="flex-col justify-center min-h-screen">
        
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          
          {/* --- MAIN SUCCESS CARD --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            {/* Success Icon */}
            <div className="relative inline-flex items-center justify-center mb-8">
               <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
               <div className="relative w-24 h-24 bg-neutral-900 border border-emerald-500/30 rounded-full flex items-center justify-center shadow-2xl">
                  <CheckCircle className="w-10 h-10 text-emerald-400" />
               </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Message <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Received.</span>
            </h1>
            
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              Thanks for reaching out to <strong>Scale Saas</strong>. We've started reviewing your inquiry and will get back to you within 24 hours.
            </p>
          </motion.div>


          {/* --- DIRECT CONTACT GRID --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
             
             {/* 1. WhatsApp Card */}
             <a 
               href="https://wa.me/919588368052" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative p-6 bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-neutral-800/50 hover:border-emerald-500/30 transition-all duration-300 text-center"
             >
                <div className="w-12 h-12 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-bold mb-1">WhatsApp Us</h3>
                <p className="text-neutral-500 text-sm mb-4">Fastest response time</p>
                <span className="text-emerald-400 text-sm font-semibold flex items-center justify-center gap-1">
                   Chat Now &rarr;
                </span>
             </a>

             {/* 2. Phone Card */}
             <div className="group relative p-6 bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-neutral-800/50 hover:border-blue-500/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-bold mb-1">Call Directly</h3>
                <p className="text-neutral-500 text-sm mb-4">Mon-sun, 9am - 6pm</p>
                <button 
                  onClick={() => copyToClipboard("+91 95883 68052")}
                  className="text-neutral-300 hover:text-white text-sm font-mono bg-white/5 py-1 px-3 rounded-lg flex items-center justify-center gap-2 mx-auto hover:bg-white/10 transition-colors"
                >
                   +91 95883 68052 <Copy className="w-3 h-3" />
                </button>
             </div>

             {/* 3. Email Card */}
             <div className="group relative p-6 bg-neutral-900/50 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-neutral-800/50 hover:border-purple-500/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-bold mb-1">Email Us</h3>
                <p className="text-neutral-500 text-sm mb-4">For detailed queries</p>
                <button 
                  onClick={() => copyToClipboard("Scalesaas@gmail.com")}
                  className="text-neutral-300 hover:text-white text-sm font-mono bg-white/5 py-1 px-3 rounded-lg flex items-center justify-center gap-2 mx-auto hover:bg-white/10 transition-colors"
                >
                   Scalesaas@gmail.com <Copy className="w-3 h-3" />
                </button>
             </div>

          </motion.div>


          {/* --- BACK BUTTON --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
             <Link href="/">
                <button className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
                   <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                   </div>
                   <span className="text-sm font-medium">Back to Home</span>
                </button>
             </Link>
          </motion.div>

        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}