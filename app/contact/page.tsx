"use client";

import { Phone, Mail, MapPin, MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/919669823388`, '_blank');
  };

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
            <Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">Home</Link>
            <Link href="/pricing" className="text-slate-300 hover:text-emerald-400 transition-colors">Pricing</Link>
            <Link href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors">About</Link>
            <Link href="/blog" className="text-slate-300 hover:text-emerald-400 transition-colors">Blog</Link>
          </div>
          <Button variant="ghost" className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50">Sign In</Button>
        </div>
      </nav>

      {/* Contact Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Contact Us</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 border border-slate-800 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-slate-700">
                      <info.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                      {info.content.map((item, i) => (
                        <p key={i} className="text-slate-300">{item}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp Button */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 border border-slate-800 transition-all duration-300 hover:transform hover:scale-105">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 flex items-center justify-center gap-2 py-6 text-lg"
                >
                  <MessageSquare className="h-6 w-6" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 border border-slate-800 h-full">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.638037074741!2d75.7885!3d23.1785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEwJzQyLjYiTiA3NcKwNDcnMTguNiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="relative mt-16 max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Business Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessHours.map((day, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-slate-300">{day.day}</span>
                  <span className="text-emerald-400 font-medium">{day.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: ["+91 7000782082", "+91 9669823388"]
  },
  {
    icon: Mail,
    title: "Email",
    content: ["wilfordtechnology@gmail.com"]
  },
  {
    icon: MapPin,
    title: "Address",
    content: ["C21, Mall, Ujjain", "Madhya Pradesh, 456010"]
  }
];

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
  { day: "Holidays", hours: "Closed" }
];