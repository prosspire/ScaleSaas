"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function FullNavbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-4 sm:top-6 md:top-8 lg:top-10 inset-x-0 w-[95%] sm:w-[90%] md:w-[85%] lg:max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
      <MenuItem setActive={setActive}  active={active} item="Home">
        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm">
            <HoveredLink href="/services">Web Development</HoveredLink>
            <HoveredLink href="/services">Interface Design</HoveredLink>
            <HoveredLink href="/services">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/services">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-xs sm:text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-2 sm:p-3 md:p-4">
            <ProductItem
              title="Home finder"
              href="https://www.homefinderr.com/"
              src="https://owerrlaobwdowecvbfgk.supabase.co/storage/v1/object/public/images/uploads/IaOacO7OnWfhAAzfhv5Wn_singlelandingpage.png"
              description="Home finder is a web application that helps you find the perfect home in Goa"
            />
            <ProductItem
              title="ashish rohilla"
              href="https://www.ashishrohilla.in/"
              src="https://owerrlaobwdowecvbfgk.supabase.co/storage/v1/object/public/images/uploads/9vbq5zmRVjTPSd3O6dCDh_ashishrohilla.in.png"
              description="A single page for learning devops and System design. Free courses and resources for system design."
            />
            <ProductItem
              title="kaksha"
              href="https://my-kaksha-by-ashish.vercel.app/"
              src="https://owerrlaobwdowecvbfgk.supabase.co/storage/v1/object/public/images/uploads/Cdc4denhsK3no3t-CcCYI_kaksha.png"
              description="Place to sell and monetize your skills and knowledge. Create your own courses and earn money."
            />
            <ProductItem
              title="peeky pages"
              href="https://peakyypages.vercel.app/"
              src="https://owerrlaobwdowecvbfgk.supabase.co/storage/v1/object/public/images/uploads/mYUzzlGtE7CaF9WqJPzi4_3dwebsite.png"
              description="A collection of 3D websites and landing pages. Get inspired by the best 3D websites."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 text-xs sm:text-sm">
            <HoveredLink href="/pricing">Hobby</HoveredLink>
            <HoveredLink href="/pricing">Individual</HoveredLink>
            <HoveredLink href="/pricing">Team</HoveredLink>
            <HoveredLink href="/pricing">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
