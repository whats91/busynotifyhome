"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className={`relative z-10 container mx-auto px-4 py-6 ${isHomePage ? "absolute top-0 left-0 right-0" : ""}`}>
      <div className="backdrop-blur-xl bg-slate-900/50 rounded-2xl px-6 py-3 flex justify-between items-center border border-slate-800">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/mainLogo_light.svg" 
            alt="BusyNotify Logo" 
            width={180} 
            height={36} 
            className="h-8 w-auto" 
            priority
          />
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className={`transition-colors ${isHomePage ? "text-emerald-400" : "text-slate-300 hover:text-emerald-400"}`}
          >
            Home
          </Link>
          <Link href="/pricing" className="text-slate-300 hover:text-emerald-400 transition-colors">Pricing</Link>
          <Link href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors">About</Link>
          <Link href="/blog" className="text-slate-300 hover:text-emerald-400 transition-colors">Blog</Link>
          <Link href="/contact" className="text-slate-300 hover:text-emerald-400 transition-colors">Contact</Link>
          <Link href="/api-documentation" className="text-slate-300 hover:text-emerald-400 transition-colors">API Documentation</Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:block text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50">Sign In</Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
} 