import type { Metadata } from "next";
import "../global.css";
export const metadata: Metadata = {
  title: "Scale saas ",
  description: "Generated by ashish",
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
        {children}
      </body>
    </html>
  );
}
