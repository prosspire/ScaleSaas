import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      title: "AI Analytics Suite",
      description: "Advanced analytics platform powered by artificial intelligence",
      image: "/analytics-preview.jpg",
      features: [
        "Real-time data analysis",
        "Predictive analytics",
        "Custom dashboards",
        "Automated reporting",
        "Integration with major platforms",
      ],
      link: "/products/ai-analytics",
    },
    {
      title: "ScaleBot",
      description: "Intelligent automation platform for business processes",
      image: "/bot-preview.jpg",
      features: [
        "Process automation",
        "AI-powered workflows",
        "Natural language processing",
        "Custom integrations",
        "Analytics dashboard",
      ],
      link: "/products/scalebot",
    },
    {
      title: "Scale CRM",
      description: "AI-enhanced customer relationship management",
      image: "/crm-preview.jpg",
      features: [
        "Customer insights",
        "Predictive lead scoring",
        "Automated engagement",
        "Sales analytics",
        "Integration ecosystem",
      ],
      link: "/products/scale-crm",
    },
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative SaaS solutions powered by artificial intelligence to help your business grow
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-16">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-8">
                  <CardTitle className="text-2xl mb-4">{product.title}</CardTitle>
                  <CardDescription className="text-lg mb-6">
                    {product.description}
                  </CardDescription>
                  <div className="space-y-2 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="default" size="lg" asChild>
                    <Link href={product.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/50 p-12 rounded-lg mt-20">
          <h2 className="text-3xl font-bold mb-4">Find the Right Solution</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Not sure which product is right for you? Let's discuss your needs
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Schedule a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
} 