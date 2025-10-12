"use client";

import { ArrowRight, Users, Building2, Trophy, Target, Sparkles, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function About() {
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
          <span className="inline-block text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Our Story</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforming Payment Collection Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Innovation</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Founded in 2023, BusyNotify has been at the forefront of revolutionizing how businesses manage their payment collections through intelligent automation and personalized communication.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 border border-slate-800 text-center transition-transform duration-300 hover:transform hover:scale-105">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-4">
                  {stat.value}
                </div>
                <div className="text-white text-lg font-medium mb-2">{stat.label}</div>
                <div className="text-slate-400">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-12 border border-slate-800">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  At BusyNotify, we're on a mission to eliminate the stress and complexity of payment collection for businesses worldwide. We believe that every business, regardless of size, deserves access to enterprise-grade payment reminder solutions that are both powerful and easy to use.
                </p>
                <div className="space-y-4">
                  {missionPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <point.icon className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span className="text-slate-300">{point.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Our Team</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Innovators</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Our diverse team of experts is passionate about creating solutions that make a difference in how businesses operate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 border border-slate-800 transition-transform duration-300 hover:transform hover:scale-105">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-emerald-400 mb-4">{member.role}</p>
                  <p className="text-slate-300">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative mt-24">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-12 text-center border border-slate-800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Payment Collection?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust BusyNotify for their payment reminder needs.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-500/20">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const stats = [
  {
    value: "10K+",
    label: "Active Users",
    description: "Businesses using our platform daily"
  },
  {
    value: "$500M+",
    label: "Payments Collected",
    description: "Successfully processed through our platform"
  },
  {
    value: "99.9%",
    label: "Success Rate",
    description: "In payment collection improvement"
  }
];

const missionPoints = [
  {
    icon: Target,
    text: "Simplify payment collection for businesses worldwide"
  },
  {
    icon: Users,
    text: "Foster better relationships between businesses and clients"
  },
  {
    icon: Globe2,
    text: "Make enterprise-grade solutions accessible to all"
  }
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    description: "Former fintech executive with 15+ years of experience in payment solutions."
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    description: "Tech innovator with expertise in AI and automation systems."
  },
  {
    name: "Emily Thompson",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    description: "Product strategist focused on creating intuitive user experiences."
  }
];