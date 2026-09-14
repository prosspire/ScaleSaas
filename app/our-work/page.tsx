"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2, ArrowRight } from "lucide-react";
import { Titan_One, Nunito } from 'next/font/google';

import { FullNavbar } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import ShowcaseSection from "../../components/ui/Websites/recenwork";
import WorkShowcaseWithImages from "../../components/websitework";
import { SparklesCore } from "../../components/ui/sparkles";

// Form imports
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import { EmailFormschemaType } from "../../lib/schema";
import { createEmail } from "../../lib/actions/blog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

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

const OurWorkPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<EmailFormschemaType>({
    mode: "all",
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    if (form.getValues().email) {
      form.setValue("created_at", new Date().toISOString().slice(0, 16));
    }
  }, [form.watch("email")]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = async (data: EmailFormschemaType) => {
    setIsLoading(true);

    if (!emailRegex.test(data.email)) {
      toast("Email verification failed", {
        description: "Please enter a valid email address.",
        action: {
          label: "Try Again",
          onClick: () => {
            // Keep on page
          },
        },
      });
      setIsLoading(false);
      return;
    }

    try {
      const result = await createEmail(data);
      if (!result) {
        throw new Error("No response received from server.");
      }

      const parsedResult = result as PostgrestSingleResponse<null>;
      const { error } = parsedResult;

      if (error?.message) {
        toast("Error submitting email", {
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{error.message}</code>
            </pre>
          ),
        });
        setIsLoading(false);
      } else {
        toast("Successfully added the email 🎉", {
          description: data.email,
        });
        router.push("/thankyou");
      }
    } catch (error) {
      console.error("Error occurred while handling submit:", error);
      toast("Error submitting email", {
        description: "An error occurred while submitting your email. Please try again.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div>
      <FullNavbar />
      <div className={`w-full md:mt-6 min-h-screen bg-neutral-950 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:32px_32px] ${bodyFont.className}`}>

        {/* =========================================
            HEADER SECTION (BESTED UI)
        ========================================= */}
        <section className="relative pt-40 pb-24 px-6 overflow-hidden flex flex-col items-center justify-center">
          {/* Sparkles Background */}
          <div className="absolute inset-0 w-full h-full">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>

          <div className="container mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Our Portfolio</span>
              </div>

              <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-tight ${titleFont.className}`}>
                We Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 relative inline-block">
                  The Future
                  {/* Underline Glow */}
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur-sm opacity-70"></div>
                </span>
              </h1>

              <p className="text-neutral-400 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
                From high-conversion preschool websites to enterprise-grade SaaS platforms. Explore the digital products we've meticulously crafted to help businesses scale and succeed.
              </p>
            </motion.div>
          </div>
          
          {/* Fading bottom edge to blend into the next section */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none"></div>
        </section>

        {/* =========================================
            RECENT WORK COMPONENTS
        ========================================= */}
        <ShowcaseSection />
        <WorkShowcaseWithImages />

        {/* =========================================
            CTA SECTION WITH FORM
        ========================================= */}
        <section className="relative w-full py-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight ${titleFont.className}`}>
                Ready to Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
                  Your Project?
                </span>
              </h2>

              <p className="text-xl text-neutral-400 font-medium mb-12 max-w-2xl mx-auto">
                Leave your email and our team will get back to you within 24 hours to discuss how we can help you scale.
              </p>

              <div className="flex justify-center items-center px-4 mb-8">
                <div className="w-full max-w-2xl relative z-10">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                      <div className="w-full p-1.5 border border-white/10 bg-neutral-900/80 backdrop-blur-md rounded-full flex items-center gap-2 shadow-2xl">

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem className="flex-1 mb-0">
                              <FormControl>
                                <Input
                                  disabled={isLoading}
                                  placeholder="Enter your email address"
                                  {...field}
                                  className="flex-1 min-w-0 bg-transparent border-none text-white placeholder-neutral-500 px-6 py-4 text-base md:text-lg focus-visible:ring-0 focus-visible:ring-offset-0 font-medium"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        <div className="flex-shrink-0">
                          <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            {...({ disabled: isLoading } as any)}
                            className={`flex justify-center items-center px-8 py-3 bg-neutral-950 text-white transition-opacity ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                          >
                            <span className={`text-sm md:text-base font-bold ${bodyFont.className} flex items-center gap-2`}>
                              {isLoading ? (
                                <>
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                  <span>Sending...</span>
                                </>
                              ) : (
                                <>
                                  Get Started
                                  <ArrowRight className="w-4 h-4" />
                                </>
                              )}
                            </span>
                          </HoverBorderGradient>
                        </div>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default OurWorkPage;
