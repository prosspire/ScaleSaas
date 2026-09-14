import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | Scale Saas",
  description: "Explore our portfolio of high-performance websites, custom software, and digital products. We specialize in building everything from preschool websites to enterprise SaaS platforms.",
  keywords: [
    "preschool website design", "preschool web development", "daycare website builder",
    "school website development", "education platform development", "kindergarten website design",
    "childcare software solutions", "education website agency", "learning management systems",
    "LMS development", "our work", "web development portfolio", "software development case studies",
    "custom software portfolio", "SaaS portfolio", "tech agency work", "recent projects",
    "best preschool websites", "top education websites", "school portal development",
    "preschool marketing", "school admissions software", "interactive school website",
    "custom edtech development", "Scale Saas portfolio", "premium website examples"
  ]
};

export default function OurWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
