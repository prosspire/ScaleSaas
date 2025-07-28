import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "next-themes";



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
      className="dark:bg-neutral-950"
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} // This prevents system theme detection
      forcedTheme="dark"    // This forces dark theme always
      >
        {children}
          <Analytics/>
              <SpeedInsights/>
         <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
