"use client";

import { Bell, Bot, Apple as Api, Send, CheckSquare, ShoppingBag, FileSpreadsheet, Store, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0f172a] to-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="backdrop-blur-xl bg-slate-900/50 rounded-2xl px-6 py-3 flex justify-between items-center border border-slate-800">
          <div className="text-white font-bold text-2xl flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-emerald-400" />
            BusyNotify
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">Home</a>
            <a href="/pricing" className="text-slate-300 hover:text-emerald-400 transition-colors">Pricing</a>
            <a href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors">About</a>
          </div>
          <Button variant="ghost" className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50">Sign In</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Features</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Modern Businesses</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of tools designed to streamline your business operations and enhance customer engagement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className={`relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 border border-slate-800 h-full transition-all duration-500 ${
                hoveredFeature === index ? 'transform -translate-y-2' : ''
              }`}>
                <div className={`w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-slate-700 mb-6 transition-all duration-500 ${
                  hoveredFeature === index ? 'transform scale-110 rotate-3' : ''
                }`}>
                  <feature.icon className={`h-8 w-8 transition-all duration-500 ${
                    hoveredFeature === index 
                      ? 'text-emerald-400 transform scale-110' 
                      : 'text-slate-300'
                  }`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                <div className={`mt-6 transition-all duration-500 transform ${
                  hoveredFeature === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 p-0">
                    Learn more →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative mt-24">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-12 text-center border border-slate-800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Start using BusyNotify today and transform how you manage your business operations.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-500/20">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Bell,
    title: "Send Payment Reminders",
    description: "Automate payment reminders on a daily, weekly, or monthly basis to ensure timely customer payments and improve cash flow management."
  },
  {
    icon: Bot,
    title: "Busy ERP Chatbot",
    description: "Empower your business with an intelligent Busy ERP chatbot that automatically responds to account-related queries, streamlining customer support."
  },
  {
    icon: Api,
    title: "Busy GET API Module",
    description: "Access your Busy data from anywhere using BusyNotify APIs, providing seamless data integration for enhanced productivity."
  },
  {
    icon: Send,
    title: "Payload Module",
    description: "Effortlessly deliver WhatsApp payloads to webhooks, enabling real-time communication and automation with the Payload Module."
  },
  {
    icon: CheckSquare,
    title: "Send Tasks to Busy Software",
    description: "Streamline workflows by sending tasks directly to Busy Software through the POST API, enhancing task management and operational efficiency."
  },
  {
    icon: ShoppingBag,
    title: "Catalog Module",
    description: "Share detailed product information with your customers at any time using the Catalog Module, keeping them informed and engaged."
  },
  {
    icon: FileSpreadsheet,
    title: "Google Sheet Module",
    description: "Easily export Busy standard report data to Google Sheets for dynamic analysis, collaboration, and decision-making."
  },
  {
    icon: Store,
    title: "E-Commerce Module",
    description: "Create custom apps for your customers with the E-Commerce Module, offering personalized shopping experiences to grow your business."
  },
  {
    icon: Award,
    title: "Loyalty Points Module",
    description: "Simplify customer retention with the Loyalty Points Module, helping you manage and reward customer loyalty effectively."
  }
];