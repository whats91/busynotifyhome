"use client";

import { Sparkles, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <div className="relative z-10 border-t border-slate-800">
      <div className="min-h-[400px] bg-gradient-to-br from-gray-900 via-[#0f172a] to-black">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
            {/* Company Info */}
            <div className="relative group md:col-span-2 lg:col-span-4">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-6 border border-slate-800 h-full transition-all duration-300 group-hover:translate-y-[-8px] group-hover:shadow-lg group-hover:shadow-emerald-500/10">
                <div className="flex items-center gap-2 mb-6">
                  <Image 
                    src="/mainLogo_light.svg" 
                    alt="BusyNotify Logo" 
                    width={180} 
                    height={36} 
                    className="h-8 w-auto" 
                  />
                </div>
                <p className="text-slate-300 mb-8 text-sm leading-relaxed">
                  Transforming payment collection through intelligent automation and personalized communication.
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:border-emerald-500/50"
                    >
                      <social.icon className="h-4 w-4 text-slate-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            {footerLinks.map((section) => (
              <div key={section.title} className="relative group lg:col-span-2">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-6 border border-slate-800 h-full transition-all duration-300 group-hover:translate-y-[-8px] group-hover:shadow-lg group-hover:shadow-emerald-500/10">
                  <h3 className="text-white font-semibold mb-6 text-lg">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-slate-300 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2 group"
                        >
                          <span className="h-1 w-1 rounded-full bg-emerald-500/50 group-hover:w-2 transition-all duration-300"></span>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Newsletter */}
            <div className="relative group lg:col-span-4">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-6 border border-slate-800 h-full transition-all duration-300 group-hover:translate-y-[-8px] group-hover:shadow-lg group-hover:shadow-emerald-500/10">
                <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
                <p className="text-slate-300 mb-6 text-sm">
                  Subscribe to our newsletter for the latest updates and insights.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-lg bg-slate-800/50 border border-slate-700 px-4 py-2 text-sm text-slate-300 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all duration-300"
                  />
                  <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white transition-all duration-300 hover:scale-105 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Mail className="h-4 w-4 relative z-10 group-hover:animate-pulse" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl px-6 py-4 border border-slate-800 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-lg group-hover:shadow-emerald-500/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-400 text-xs">
                  © {new Date().getFullYear()} BusyNotify. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center md:justify-end gap-6">
                  {legalLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-xs text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
];

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Integrations', href: '#' },
      { label: 'Updates', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '#' },
];