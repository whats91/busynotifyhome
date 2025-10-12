"use client";

import { useState } from 'react';
import { Sparkles, Briefcase, Send, Building2, Users, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function Careers() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    city: '',
    state: '',
    country: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const messageText = `New Career Application:
Full Name: ${formData.fullName}
Email: ${formData.email}
WhatsApp: ${formData.whatsappNumber}
City: ${formData.city}
State: ${formData.state}
Country: ${formData.country}`;

      const response = await fetch('https://zone-b.botmastersender.com/api/v5/debug.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          senderId: "917000782082",
          authToken: "703-eEfhNBzb9lmkV2sajiREAArV3h801Bu5an1t3pAY8ab5dd5f",
          messageText: messageText,
          receiverId: "919425008429"
        })
      });

      if (response.ok) {
        toast({
          title: "Application Submitted!",
          description: "We'll review your application and get back to you soon.",
          duration: 5000,
        });
        setFormData({
          fullName: '',
          email: '',
          whatsappNumber: '',
          city: '',
          state: '',
          country: ''
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="text-white font-bold text-2xl flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-emerald-400" />
            BusyNotify
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">Home</a>
            <a href="/features" className="text-slate-300 hover:text-emerald-400 transition-colors">Features</a>
            <a href="/pricing" className="text-slate-300 hover:text-emerald-400 transition-colors">Pricing</a>
          </div>
          <Button variant="ghost" className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50">Sign In</Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Join Our Team</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Payment Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join our innovative team and help transform how businesses manage their payment collections.
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 border border-slate-800 h-full transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-slate-700 mb-6">
                  <benefit.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-slate-300">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="whatsappNumber" className="text-slate-300">WhatsApp Number</Label>
                  <Input
                    id="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                    placeholder="+1234567890"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-slate-300">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                    placeholder="New York"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-slate-300">State</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                    placeholder="New York"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-slate-300">Country</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    required
                    className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                    placeholder="United States"
                  />
                </div>
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white py-6 text-lg"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Application <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const benefits = [
  {
    icon: Building2,
    title: "Growth Opportunities",
    description: "Develop your skills and advance your career with our comprehensive training and mentorship programs."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented individuals in a supportive environment that encourages innovation and creativity."
  },
  {
    icon: Trophy,
    title: "Competitive Benefits",
    description: "Enjoy competitive compensation, health benefits, and flexible work arrangements."
  }
];