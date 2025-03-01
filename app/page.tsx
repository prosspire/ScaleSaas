"use client"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Button } from "@/components/ui/button"
import { FullNavbar } from "@/components/Navbar/Navbar"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function BackgroundBeamsDemo() {
  const headline = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Scale Saas.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased px-4">
      <div className="mt-8 sm:mt-12">
        <FullNavbar/>
      </div>
      
      <div className="max-w-6xl w-full mx-auto">
        <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center text-white relative z-20">
            Scale Saas
          </h1>
          
          <div className="w-full max-w-[40rem] h-10 relative">
            {/* Gradients */}
            <div className="absolute inset-x-[10%] sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[80%] sm:w-3/4 blur-sm" />
            <div className="absolute inset-x-[10%] sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[80%] sm:w-3/4" />
            <div className="absolute inset-x-[30%] sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-[40%] sm:w-1/4 blur-sm" />
            <div className="absolute inset-x-[30%] sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[40%] sm:w-1/4" />
          </div>
        </div>

        <TypewriterEffectSmooth className="justify-center" words={headline} />
        
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-white italic text-center text-ss sm:text-lg  md:text-2xl mt-12 sm:mt-[80px]">
            &quot; We specialize in building intelligent, scalable software solutions that leverage the power of artificial intelligence. From custom AI integrations to full-scale SaaS platforms, our team delivers cutting-edge technology that drives business growth. &quot;
          </p>   
        </div>   

        <div className="flex flex-col sm:flex-row gap-3 mt-6 relative z-10 px-4">
          <input
            type="email"
            placeholder="your-email@company.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-700 px-4 py-2"
          />
          <Button className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 sm:w-auto w-full">
            Request Consultation
          </Button>
        </div>

        <div className="mt-6 text-center text-neutral-500 text-sm relative z-10">
          Trusted by innovative companies to build their AI-powered solutions
        </div>
      </div>
      
      <BackgroundBeams />
    </div>
  )
}
