import React from 'react'
import { BentoGrid , BentoGridItem} from './ui/bento-grid'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { HoverEffect } from './ui/card-hover-effect'
import { TextGenerateEffect } from './ui/text-generate-effect'
import { BackgroundGradient } from './ui/background-gradient'
import { SparklesCore } from './ui/sparkles'
import { TypewriterEffect } from './ui/typewriter-effect'
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";


function Body() {
  // Services data
  const services = [
    {
      title: "AI Integration",
      description: "Seamlessly integrate cutting-edge AI solutions into your existing systems to automate processes and enhance decision-making.",
      link: "#AI intergration",
    },
    {
      title: "Custom Software Development",
      description: "Build scalable, high-performance applications tailored to your specific business needs and requirements.",
      link: "Software",
    },
    {
      title: "Cloud Solutions",
      description: "Migrate and optimize your infrastructure with secure, scalable cloud solutions that grow with your business.",
      link: "Devops",
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and machine learning capabilities.",
      link: "Dataanalytics",
    },
    {
      title: "DevOps & Automation",
      description: "Streamline your development pipeline with automated testing, deployment, and monitoring solutions.",
      link: "Automation",
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business processes and technology stack to stay competitive in the digital age.",
      link: "Digitaltransformation",
    },
  ];

  // Products data for Bento Grid
  const products = [
    {
      title: "AI Analytics Dashboard",
      description: "Real-time insights and predictive analytics powered by machine learning algorithms.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"> </div>,
      className: "md:col-span-2",
    },
    {
      title: "Automated Workflow Engine",
      description: "Streamline business processes with intelligent automation and workflow management.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>,
      className: "md:col-span-1",
    },
    {
      title: "Cloud Infrastructure Manager",
      description: "Manage and scale your cloud resources with intelligent monitoring and optimization.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>,
      className: "md:col-span-1",
    },
    {
      title: "Customer Intelligence Platform",
      description: "Deep customer insights and personalization engine for enhanced user experiences.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>,
      className: "md:col-span-2",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Their AI integration transformed our business operations, increasing efficiency by 300% within just 3 months.",
      name: "Sarah Johnson",
      title: "CTO at TechCorp",
    },
    {
      quote: "The custom software solution they built exceeded our expectations and scales perfectly with our growth.",
      name: "Michael Chen",
      title: "CEO at DataFlow Solutions",
    },
    {
      quote: "Outstanding cloud migration service. Zero downtime and significant cost savings achieved.",
      name: "Emily Rodriguez",
      title: "IT Director at GlobalTech",
    },
    {
      quote: "Their data analytics platform gave us insights we never knew we needed. Game-changing results.",
      name: "David Thompson",
      title: "COO at InnovateLab",
    },
    {
      quote: "Professional, innovative, and results-driven. They delivered exactly what we envisioned.",
      name: "Lisa Park",
      title: "Founder at StartupX",
    },
  ];

  // Typewriter words
  const words = [
    {
      text: "Building",
    },
    {
      text: "the",
    },
    {
      text: "future",
    },
    {
      text: "of",
    },
    {
      text: "software",
      className: "text-blue-500 dark:text-blue-400",
    },
    {
      text: "solutions.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section with Container Scroll */}

      {/* Services Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <TextGenerateEffect 
            words="Our comprehensive suite of services designed to accelerate your digital transformation journey."
            className="text-2xl md:text-3xl font-bold text-center"
          />
        </div>
        <HoverEffect items={services} />
      </section>

      {/* Products Section with Bento Grid */}
      <section className="py-20 px-4 max-w-[1700px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
            Innovative Products
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Cutting-edge software products that drive business growth and operational excellence.
          </p>
        </div>
        <BentoGrid className="max-w-7xl mx-auto">
          {products.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Why Choose Us Section with Sparkles */}
      <section className="py-20 px-4 relative">
        <div className="w-full absolute inset-0 h-full">
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
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="text-center mb-16">
            <TypewriterEffect 
              words={words}
              className="text-3xl md:text-5xl font-bold"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <BackgroundGradient className="rounded-[22px] p-8 bg-white dark:bg-zinc-900">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-4">99%</div>
                <h3 className="text-xl text-white font-semibold mb-2">Client Satisfaction</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Our track record speaks for itself with exceptional client satisfaction rates.
                </p>
              </div>
            </BackgroundGradient>
            
            <BackgroundGradient className="rounded-[22px] p-8 bg-white dark:bg-zinc-900">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-4">50+</div>
                <h3 className="text-xl text-white font-semibold mb-2">Projects Delivered</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Successfully delivered projects across various industries and scales.
                </p>
              </div>
            </BackgroundGradient>
            
            <BackgroundGradient className="rounded-[22px] p-8 bg-white dark:bg-zinc-900">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-4">24/7</div>
                <h3 className="text-xl  text-white font-semibold mb-2">Support Available</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Round-the-clock support to ensure your systems run smoothly.
                </p>
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Don &pos;t just take our word for it. Here&pos;s what industry leaders have to say about our work.
            </p>
          </div>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <BackgroundGradient className="rounded-[22px] p-12 bg-white dark:bg-zinc-900">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Let &pos;s discuss how our innovative solutions can drive your business forward. 
            Get in touch with our team of experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
           <HoverBorderGradient
                         containerClassName="rounded-full"
                         typeof="submit"
                         as="button"
                         className="flex justify-center items-center px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-5 whitespace-nowrap"
                       >
                         <span className="text-xs sm:text-sm md:text-base lg:text-lg font-gilroy">
                           Get Consultation
                         </span>
                       </HoverBorderGradient>
          </div>
        </BackgroundGradient>
      </section>
    </div>
  )
}

export default Body