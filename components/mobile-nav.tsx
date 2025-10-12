"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 backdrop-blur-xl bg-slate-900/50 rounded-2xl border border-slate-800">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/api-documentation"
              className="text-slate-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              API Documentation
            </Link>
            <Button variant="ghost" className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 