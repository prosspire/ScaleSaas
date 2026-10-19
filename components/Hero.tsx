"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Titan_One, Nunito } from 'next/font/google';
import { EmailFormschemaType } from "@/lib/schema";
import { IEmaildetail } from "@/lib/types";
import { Loader2, User, Mail, Phone, Briefcase, ChevronDown, ArrowRight } from "lucide-react"; 

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

export default function Hero({
  onHandleSubmit,
  defaultEmail,
  isLoading, // 1. Accept the isLoading prop here
}: {
  defaultEmail?: IEmaildetail;
  onHandleSubmit: (data: EmailFormschemaType) => void;
  isLoading: boolean; // 2. Define the type
}) {
  
  const form = useForm<EmailFormschemaType>({
    mode: "onTouched",
    defaultValues: {
      name: defaultEmail?.name || "",
      email: defaultEmail?.email || "",
      phone: defaultEmail?.phone || "",
      service: defaultEmail?.service || "",
      created_at: defaultEmail?.created_at || "",
    },
  });

  const onSubmit = (data: EmailFormschemaType) => {
    onHandleSubmit({
      ...data,
      created_at: data.created_at || new Date().toISOString().slice(0, 16),
    });
  };

  const headline = [
    { text: "Build", className: "text-white" },
    { text: "awesome", className: "text-white" },
    { text: "apps", className: "text-white" },
    { text: "with", className: "text-white" },
    { 
      text: "Scale Saas.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className={`min-h-screen w-full relative flex flex-col items-center justify-center antialiased px-4 bg-neutral-950 overflow-hidden ${bodyFont.className}`}>
      
      <div className="max-w-6xl w-full mx-auto relative z-20 pt-20">
        
        {/* --- MAIN TITLE --- */}
        <div className="w-full flex flex-col items-center justify-center rounded-md">
          <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center text-white relative z-20 ${titleFont.className}`}>
            Scale Saas
          </h1>
          
          <div className="w-full max-w-[40rem] h-10 relative mt-4">
            {/* Gradients */}
            <div className="absolute inset-x-[10%] sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[80%] sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-[10%] sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[80%] sm:w-3/4" />
            <div className="absolute inset-x-[30%] sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-[40%] sm:w-1/4 blur-sm" />
            <div className="absolute inset-x-[30%] sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[40%] sm:w-1/4" />
          </div>
        </div>

        {/* --- TYPEWRITER --- */}
        <TypewriterEffectSmooth className="justify-center mt-4" words={headline} />
        
        {/* --- DESCRIPTION WITH HIGHLIGHTS --- */}
        <div className="max-w-4xl mx-auto px-4 mt-8">
          <h2 className="text-neutral-300 text-center text-lg md:text-2xl leading-loose font-medium">
            &quot; We specialize in building intelligent,{" "}
            
            <PointerHighlight
              rectangleClassName="bg-indigo-600 border-indigo-500"
              pointerClassName="text-white h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative px-2 z-10 font-bold text-white">scalable software</span>
            </PointerHighlight>
            
            {" "}solutions that leverage the power of artificial intelligence. From custom AI integrations to full-scale SaaS platforms, our team delivers cutting-edge technology that drives{" "}
            
            <PointerHighlight
              rectangleClassName="bg-emerald-600 border-emerald-500"
              pointerClassName="text-white h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative px-2 z-10 font-bold text-white">business growth</span>
            </PointerHighlight>
            . &quot;
          </h2>
        </div>

        {/* --- FORM SECTION --- */}
        <div className="flex flex-col justify-center items-center px-4 mt-12 mb-20">
          <div className="w-full max-w-2xl relative z-10">
            <h3 className="text-neutral-300 text-center text-lg md:text-xl font-medium mb-8">
              Connect with our team for consultation and project requirements
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" suppressHydrationWarning>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                          Full Name <span className="text-blue-500">*</span>
                        </FormLabel>
                        <div className="relative flex items-center">
                          <User className="absolute left-3.5 w-4 h-4 text-neutral-500 pointer-events-none z-10" />
                          <FormControl>
                            <Input
                              disabled={isLoading}
                              placeholder="John Doe"
                              suppressHydrationWarning
                              {...field}
                              className="h-11 pl-10 bg-neutral-900/80 border-neutral-800 text-white placeholder:text-neutral-500 rounded-xl focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 text-sm transition-all"
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                          Email Address <span className="text-blue-500">*</span>
                        </FormLabel>
                        <div className="relative flex items-center">
                          <Mail className="absolute left-3.5 w-4 h-4 text-neutral-500 pointer-events-none z-10" />
                          <FormControl>
                            <Input
                              type="email"
                              disabled={isLoading}
                              placeholder="john@example.com"
                              suppressHydrationWarning
                              {...field}
                              className="h-11 pl-10 bg-neutral-900/80 border-neutral-800 text-white placeholder:text-neutral-500 rounded-xl focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 text-sm transition-all"
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Phone No */}
                  <FormField
                    control={form.control}
                    name="phone"
                    rules={{ required: "Phone number is required" }}
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                          Phone Number <span className="text-blue-500">*</span>
                        </FormLabel>
                        <div className="relative flex items-center">
                          <Phone className="absolute left-3.5 w-4 h-4 text-neutral-500 pointer-events-none z-10" />
                          <FormControl>
                            <Input
                              type="tel"
                              disabled={isLoading}
                              placeholder="+1 (555) 000-0000"
                              suppressHydrationWarning
                              {...field}
                              className="h-11 pl-10 bg-neutral-900/80 border-neutral-800 text-white placeholder:text-neutral-500 rounded-xl focus-visible:border-blue-500 focus-visible:ring-1 focus-visible:ring-blue-500 text-sm transition-all"
                            />
                          </FormControl>
                        </div>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                  {/* Service Dropdown */}
                  <FormField
                    control={form.control}
                    name="service"
                    rules={{ required: "Please select a service" }}
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                          Service <span className="text-blue-500">*</span>
                        </FormLabel>
                        <div className="relative flex items-center">
                          <Briefcase className="absolute left-3.5 w-4 h-4 text-neutral-500 pointer-events-none z-10" />
                          <FormControl>
                            <select
                              disabled={isLoading}
                              {...field}
                              value={field.value || ""}
                              suppressHydrationWarning
                              className="w-full h-11 pl-10 pr-10 bg-neutral-900/80 border border-neutral-800 rounded-xl text-white text-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                              <option value="" disabled className="bg-neutral-900 text-neutral-500">
                                Select a service...
                              </option>
                              <option value="Digital Marketing" className="bg-neutral-900 text-white">
                                Digital Marketing
                              </option>
                              <option value="Website Development" className="bg-neutral-900 text-white">
                                Website Development
                              </option>
                              <option value="SaaS Solution" className="bg-neutral-900 text-white">
                                SaaS Solution
                              </option>
                              <option value="Custom" className="bg-neutral-900 text-white">
                                Custom
                              </option>
                            </select>
                          </FormControl>
                          <ChevronDown className="absolute right-3.5 w-4 h-4 text-neutral-400 pointer-events-none" />
                        </div>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />

                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-center">
                  <HoverBorderGradient
                    containerClassName="w-full sm:w-auto rounded-full"
                    as="button"
                    {...({ disabled: isLoading, type: "submit" } as any)}
                    className={`w-full sm:w-auto flex justify-center items-center px-8 py-3 bg-neutral-950 text-white transition-opacity ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-neutral-900"}`}
                  >
                    <span className={`text-sm md:text-base font-bold ${bodyFont.className} flex items-center justify-center gap-2`}>
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Get Consultation</span>
                          <ArrowRight className="w-4 h-4 text-blue-400" />
                        </>
                      )}
                    </span>
                  </HoverBorderGradient>
                </div>
              </form>
            </Form>
          </div>
        </div>

        <div className="text-center text-neutral-500 text-sm font-semibold tracking-wide uppercase relative z-10">
          Trusted by innovative companies to build their AI-powered solutions
        </div>

      </div>
      
      <BackgroundBeams />
    </div>
  );
}