"use client";

import { useState } from 'react';
import { Sparkles, Bell, Calendar, Clock, ArrowRight, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentFlow() {
  const [activeFlow, setActiveFlow] = useState<'daily' | 'weekly' | 'monthly'>('daily');

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
          <span className="inline-block text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Process Overview</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Payment Reminder <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Flow</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Discover how our intelligent system manages payment reminders across different intervals to ensure timely notifications and improved cash flow.
          </p>
        </div>

        {/* Interactive Flow Diagram */}
        <div className="relative max-w-5xl mx-auto mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
            {/* Flow Selection */}
            <div className="flex justify-center gap-4 mb-12">
              {flows.map((flow) => (
                <button
                  key={flow.type}
                  onClick={() => setActiveFlow(flow.type)}
                  className={`relative group px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeFlow === flow.type
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'hover:bg-slate-800/50 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <flow.icon className="h-5 w-5" />
                    <span className="font-medium">{flow.label}</span>
                  </div>
                  {activeFlow === flow.type && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400" />
                  )}
                </button>
              ))}
            </div>

            {/* Flow Content */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-blue-600/5 rounded-2xl" />
              <div className="relative p-8 rounded-2xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Flow Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {flows.find(f => f.type === activeFlow)?.title}
                    </h3>
                    <div className="space-y-4">
                      {flows.find(f => f.type === activeFlow)?.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                            <ArrowRight className="h-3 w-3 text-emerald-400" />
                          </div>
                          <p className="text-slate-300">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Animated Flow Visualization */}
                  <div className="relative aspect-square">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-64 h-64">
                        <div className="absolute inset-0 rounded-full border-2 border-slate-700 animate-spin-slow" />
                        <div className="absolute inset-4 rounded-full border-2 border-emerald-500/30 animate-spin-reverse" />
                        <div className="absolute inset-8 rounded-full border-2 border-blue-500/30 animate-spin" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <RefreshCcw className="h-12 w-12 text-emerald-400 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-12 text-center border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Streamline Your Payment Collections?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using BusyNotify to automate their payment reminders and improve cash flow.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-500/20">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const flows = [
  {
    type: 'daily' as const,
    label: 'Daily',
    icon: Clock,
    title: 'Daily Reminder Flow',
    features: [
      'Monitors payment schedules every 24 hours',
      'Sends notifications for due payments or upcoming dues within the next day',
      'Real-time tracking of payment status updates',
      'Automated follow-ups for overdue payments',
      'Instant notification delivery across multiple channels'
    ]
  },
  {
    type: 'weekly' as const,
    label: 'Weekly',
    icon: Calendar,
    title: 'Weekly Reminder Flow',
    features: [
      'Consolidates payment activities into a weekly summary',
      'Sends reminders for payments due within the week',
      'Weekly performance analytics and reporting',
      'Batch processing of multiple payment reminders',
      'Customizable delivery schedule for optimal timing'
    ]
  },
  {
    type: 'monthly' as const,
    label: 'Monthly',
    icon: Bell,
    title: 'Monthly Reminder Flow',
    features: [
      'Tracks all payment schedules on a monthly basis',
      'Sends reminders for all due payments or upcoming dues for the month',
      'Monthly trend analysis and insights',
      'Comprehensive monthly collection reports',
      'Long-term payment pattern monitoring'
    ]
  }
];