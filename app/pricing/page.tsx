"use client";

import { ArrowRight, Check, Sparkles, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-[#0f172a] to-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
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
            <a href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">Home</a>
            <a href="/pricing" className="text-slate-300 hover:text-emerald-400 transition-colors">Pricing</a>
            <a href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors">About</a>
          </div>
          <Button variant="ghost" className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50">Sign In</Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="relative group h-full">
            <div className="backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 border border-slate-800 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-emerald-400">★</div>
                <h3 className="text-2xl font-bold text-white">Starter</h3>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$29</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-slate-300 mb-8">
                Perfect for small businesses just getting started with payment reminders.
              </p>
              <Button className="w-full mb-8 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700">
                Get Started
              </Button>
              <ul className="space-y-4 mt-auto">
                {[
                  "Up to 100 payment reminders/month",
                  "Email notifications",
                  "Basic analytics",
                  "5 team members",
                  "Standard support",
                  "Basic integrations"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Plan - Highlighted */}
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-3xl filter blur-xl" />
            <div className="relative backdrop-blur-xl bg-slate-800/95 rounded-3xl p-8 border border-slate-700 h-full flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-emerald-400">⚡</div>
                <h3 className="text-2xl font-bold text-white">Professional</h3>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$79</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-slate-300 mb-8">
                Perfect for growing businesses with advanced needs.
              </p>
              <Button className="w-full mb-8 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700">
                Get Started
              </Button>
              <ul className="space-y-4 mt-auto">
                {[
                  "Up to 500 payment reminders/month",
                  "Email & SMS notifications",
                  "Advanced analytics",
                  "15 team members",
                  "Priority support",
                  "Advanced integrations"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Plan */}
          <div className="relative group h-full">
            <div className="backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 border border-slate-800 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="text-emerald-400">⚡</div>
                <h3 className="text-2xl font-bold text-white">Business</h3>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$199</span>
                <span className="text-slate-400">/month</span>
              </div>
              <p className="text-slate-300 mb-8">
                For larger organizations requiring powerful features.
              </p>
              <Button className="w-full mb-8 bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700">
                Get Started
              </Button>
              <ul className="space-y-4 mt-auto">
                {[
                  "Unlimited payment reminders",
                  "All notification channels",
                  "Custom analytics",
                  "Unlimited team members",
                  "24/7 priority support",
                  "Custom integrations"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-300">
                    <Check className="h-5 w-5 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const plans = [
  {
    name: "Starter",
    icon: <Star className="h-6 w-6 text-emerald-400" />,
    price: {
      monthly: 29,
      yearly: 23,
    },
    description: "Perfect for small businesses just getting started with payment reminders.",
    features: [
      "Up to 100 payment reminders/month",
      "Email notifications",
      "Basic analytics",
      "5 team members",
      "Standard support",
      "Basic integrations"
    ],
    featured: false
  },
  {
    name: "Professional",
    icon: <Zap className="h-6 w-6 text-emerald-400" />,
    price: {
      monthly: 79,
      yearly: 63,
    },
    description: "Ideal for growing businesses with advanced needs.",
    features: [
      "Up to 1,000 payment reminders/month",
      "Email + SMS notifications",
      "Advanced analytics",
      "15 team members",
      "Priority support",
      "Advanced integrations",
      "Custom branding",
      "API access"
    ],
    featured: true
  },
  {
    name: "Business",
    icon: <Sparkles className="h-6 w-6 text-emerald-400" />,
    price: {
      monthly: 199,
      yearly: 159,
    },
    description: "For larger organizations requiring powerful features.",
    features: [
      "Unlimited payment reminders",
      "All notification channels",
      "Custom analytics",
      "Unlimited team members",
      "24/7 priority support",
      "Custom integrations",
      "White labeling",
      "Dedicated account manager",
      "SLA guarantee"
    ],
    featured: false
  }
];

const enterpriseFeatures = [
  "Custom payment reminder workflows",
  "Dedicated support team",
  "Custom integration development",
  "On-premise deployment options",
  "Advanced security features",
  "Custom SLA agreements"
];