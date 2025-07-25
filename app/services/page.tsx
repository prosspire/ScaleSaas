import { FullNavbar } from "@/components/Navbar/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "AI-Powered SaaS Solutions",
      description: "Custom SaaS platforms integrated with advanced AI capabilities to streamline your business operations.",
      icon: "💻"
    },
    {
      title: "Custom Chatbot Development", 
      description: "Intelligent chatbots trained on your company's specific data for enhanced customer support.",
      icon: "🤖"
    },
    {
      title: "AI Lead Generation",
      description: "Smart lead generation systems using AI to identify and engage potential customers.",
      icon: "🎯"
    },
    {
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies.",
      icon: "🌐"
    },
    {
      title: "Startup Product Development",
      description: "End-to-end development of innovative startup ideas into market-ready products.",
      icon: "🚀"
    },
    {
      title: "SEO Optimization",
      description: "Data-driven SEO strategies to improve your online visibility and rankings.",
      icon: "📈"
    },
    {
      title: "UI/UX Design",
      description: "Professional Figma designs focusing on user experience and interface aesthetics.",
      icon: "🎨"
    },
    {
      title: "Business Branding",
      description: "Comprehensive branding solutions including graphics and visual identity.",
      icon: "✨"
    },
    {
      title: "Business marketing",
      description: "Comprehensive marketing solutions including graphics and visual identity.",
      icon: "📈"
    }
  ];

  return (
    <div>
      <main className="dark:bg-neutral-950 min-h-screen relative justify-center items-center md:pt-[80px] pt-[30px]">
        <FullNavbar/>
        
        <div className="md:mx-[130px] mx-[15px] px-4 py-20">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
              Our Services
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Empowering businesses with cutting-edge technology solutions and AI-driven innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="relative group ">


             
                <HoverBorderGradient containerClassName="rounded-lg" className="  rounded-lg">
                
                  <div className="space-y-8 spa   py-8  rounded-lg">
                    <span className="text-4xl relative z-20">{service.icon}</span>
                    <h3 className="text-xl font-semibold text-white relative z-20">
                      {service.title}
                    </h3>
                    <p className="text-neutral-200 relative z-20">
                      {service.description}
                    </p>
                  </div>
           
                </HoverBorderGradient>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center flex justify-center items-center">
            <HoverBorderGradient
              containerClassName="flex rounded-full"
              className="px-8 py-3"
            >
              <span className="flex text-lg">Get Started</span>
            </HoverBorderGradient>
          </div>
        </div>

        <BackgroundBeams />
      </main>
      <Footer/>
    </div>
  );
}