import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cloud, Rocket, Sparkles, Bot, Database, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Integration",
      description: "Leverage the power of artificial intelligence in your business",
      icon: <Brain className="w-12 h-12 text-primary" />,
      features: [
        "Custom AI model development",
        "AI-powered automation",
        "Natural Language Processing",
        "Computer Vision Solutions",
      ],
    },
    {
      title: "SaaS Development",
      description: "End-to-end SaaS product development and scaling solutions",
      icon: <Cloud className="w-12 h-12 text-primary" />,
      features: [
        "Full-stack SaaS development",
        "Cloud architecture",
        "API development",
        "Subscription management",
      ],
    },
    {
      title: "Startup Solutions",
      description: "Technical expertise for startups from MVP to scale",
      icon: <Rocket className="w-12 h-12 text-primary" />,
      features: [
        "MVP development",
        "Technical co-founding",
        "Startup consulting",
        "Scale-up support",
      ],
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions for enterprise needs",
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      features: [
        "Enterprise applications",
        "Legacy system modernization",
        "Integration solutions",
        "Custom workflows",
      ],
    },
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software solutions to help your business innovate and scale
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/50 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our services
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
} 