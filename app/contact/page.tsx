import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      description: "+1 (555) 123-4567",
      action: "Call us",
      href: "tel:+15551234567"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      description: "contact@aiscale.com",
      action: "Email us",
      href: "mailto:contact@aiscale.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Office",
      description: "123 AI Avenue, Tech District, CA 94105",
      action: "Get directions",
      href: "https://maps.google.com"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-violet-50/50 to-white dark:from-slate-900 dark:to-slate-900/50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Ready to transform your business with AI? We're here to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <CardTitle className="text-violet-700 dark:text-violet-300">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-base">
                    {method.description}
                  </CardDescription>
                  <Button variant="outline" asChild>
                    <Link href={method.href}>
                      {method.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="container px-4 mx-auto">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-slate-900 dark:border-slate-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-slate-900 dark:border-slate-700"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-slate-900 dark:border-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-slate-900 dark:border-slate-700"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
                  Send Message
                  <MessageSquare className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
