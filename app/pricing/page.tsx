import React from 'react'
import { FullNavbar } from '@/components/Navbar/Navbar'
import { BackgroundBeams } from "@/components/ui/background-beams"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import Footer from "@/components/Footer"

function page() {
  const features = [
    "5-6 Modern Pages",
    "Custom UI/UX Design", 
    "2 Design Revisions",
    "Mobile Responsive",
    "Basic SEO Setup",
  ]

  const CheckIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
          fill="currentColor"
          strokeWidth="0"
        />
      </svg>
    );
  };

  return (
    <div className='dark:bg-neutral-950 min-h-screen'>
      <FullNavbar/>
      
      <main className="max-w-7xl md:pt-[160px] pt-[60px] mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Get your modern landing page built with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
       <div>
       <HoverBorderGradient containerClassName='rounded-none' className="p-8 ">
            <div className=" w-full relative z-20">
              <h3 className="text-2xl font-bold text-white">Landing Page Package</h3>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-white">₹9999</span>
                <span className="text-gray-400 ml-2">one-time</span>
              </div>
              
              <ul className="space-y-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex gap-2 items-start text-gray-300">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <HoverBorderGradient
            
                containerClassName="w-full rounded-full"
                className="w-full py-3"
              >
                <span className="text-lg">Get Started</span>
              </HoverBorderGradient>
            </div>
          </HoverBorderGradient>
       </div>

          <HoverBorderGradient containerClassName='rounded-none' className="p-8">
            <div className="space-y-6 relative z-20">
              <h3 className="text-2xl font-bold text-white">Custom Software Solutions</h3>
              <p className="text-gray-300">
                Need a custom software solution? We offer tailored development services for:
              </p>
              <ul className="space-y-4">
                {[
                  "Enterprise Applications",
                  "AI/ML Integration", 
                  "Custom CRM Systems",
                  "E-commerce Platforms",
                  "Mobile Applications"
                ].map((item, index) => (
                  <li key={index} className="flex gap-2 items-start text-gray-300">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              
              <HoverBorderGradient
                as="button"
                containerClassName="w-full rounded-full"
                className="w-full py-3"
              >
                <span className="text-lg">Request Quote</span>
              </HoverBorderGradient>
            </div>
          </HoverBorderGradient>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 mb-8">
            Have questions? Need a custom quote?
          </p>
          <a href="/contact">
            <HoverBorderGradient
              containerClassName="inline-flex rounded-full"
              className="px-8 py-3"
            >
              <span className="text-lg">Contact Us</span>
            </HoverBorderGradient>
          </a>
        </div>
      </main>

      <BackgroundBeams />
      <Footer />
    </div>
  )
}

export default page