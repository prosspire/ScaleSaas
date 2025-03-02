"use client"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FloatingReviewCards } from "@/components/reviews/review";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";


export default function Hero() {
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

      <div className="fixed right-0 top-1/4 -translate-y-1/2 z-30">
        <FloatingReviewCards className="scale-[0.8]" />
      </div>
      
      <div className="max-w-6xl md:pt-[200px] w-full mx-auto">
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

        <div className="flex flex-col   mt-[100px] justify-center sm:flex-row gap-3  relative z-10 px-4">
          <input
            type="email"
            placeholder="your-email@company.com"
            className="rounded-lg border md:w-[700px] w-[300px] border-neutral-800 focus:ring-2 focus:ring-teal-500  bg-neutral-950 placeholder:text-neutral-700 px-4 py-2"
          />
             <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
<span>Scale Saas</span>


      </HoverBorderGradient>
     
        </div>

        <div className="mt-6 text-center text-neutral-500 text-sm relative z-10">
          Trusted by innovative companies to build their AI-powered solutions
        </div>
      </div>
      
      <BackgroundBeams />
    </div>
  )
}
