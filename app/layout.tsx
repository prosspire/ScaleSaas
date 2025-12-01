import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { FullNavbar } from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer";



import "../global.css";
export const metadata: Metadata = {
  title: "Scale saas ",
  description: "Made by Scale saas teamS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="bg-neutral-950"
      >
        <FullNavbar/>
        {children}
          <Analytics/>
              <SpeedInsights/>
         <Footer/>
         <Toaster />
      </body>
    </html>
  );
}
