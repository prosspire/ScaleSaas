import type { Metadata } from "next";
import { Toaster } from "../components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"; // 1. Import the Script component

import "../global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://scalesaas.com"),
  title: "Scale Saas | Premium Web & Software Development Agency",
  description: "Scale Saas is a top-tier software and website development agency specializing in custom SaaS solutions, AI integration, and high-performance digital products.",
  keywords: [
    "website development agency", "software development agency", "custom software development",
    "web design company", "SaaS development services", "enterprise software solutions",
    "custom web applications", "startup MVP development", "full stack development",
    "frontend web development", "backend software engineering", "Next.js development company",
    "React development agency", "Node.js developers", "TypeScript software agency",
    "Python development services", "cloud application development", "mobile app development",
    "PWA development", "progressive web apps", "B2B software development",
    "UI/UX design agency", "user interface design services", "user experience design",
    "Figma web design", "responsive website design", "ecommerce website development",
    "Shopify development", "custom dashboards", "admin panel development",
    "API development and integration", "software architecture", "database design",
    "PostgreSQL development", "Supabase development", "Tailwind CSS design",
    "modern web development", "high performance websites", "SEO optimized websites",
    "AI software development", "AI integration services", "custom AI chatbots",
    "business process automation", "workflow automation agency", "N8N automation",
    "Zapier integration", "tech consultancy", "software consulting services",
    "code audit and review", "software maintenance", "website redesign services",
    "hire software developers", "dedicated development team", "offshore web developers",
    "top rated web agency", "agile software development", "digital transformation",
    "cloud migration services", "AWS development", "Vercel hosting setup",
    "web performance optimization", "fast loading websites", "Core Web Vitals optimization",
    "landing page design", "conversion rate optimization", "CRO agency",
    "portfolio website design", "corporate website development", "healthcare software development",
    "edtech software solutions", "fintech app development", "real estate website design",
    "custom CRM development", "ERP software development", "software prototyping",
    "wireframing services", "React Native development", "iOS app development",
    "Android app development", "cross-platform app development", "web app developers",
    "innovative software solutions", "scalable architecture", "secure web development",
    "cybersecurity in software", "data engineering", "machine learning integration",
    "LLM application development", "OpenAI integration", "Claude AI integration",
    "DevOps services", "CI/CD pipeline setup", "startup tech partner",
    "technical co-founder services", "white label web development", "B2C web applications",
    "lead generation websites", "interactive web design", "framer motion animations",
    "affordable web development", "premium software agency", "Scale Saas", "website agency"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 2. Add the Google Tag scripts here */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17858715668"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17858715668');
          `}
        </Script>
      </head>
      <body className="bg-neutral-950">
        {children}
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}