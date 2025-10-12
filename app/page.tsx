"use client";

import { ArrowRight, Bell, Calendar, CreditCard, DollarSign, LineChart, MessageSquare, Shield, Play, CheckCircle, Sparkles, Check, ArrowDown, Clock, RefreshCcw, Bot, MessageCircle, Code, Database, Webhook, MessageCircleMore, Upload, ListFilter, Lock, Table, ShoppingCart, Store, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { EnquiryForm } from "@/components/enquiry-form";

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const panelUrl = process.env.NEXT_PUBLIC_PANEL_URL || "https://app.busynotify.in";

  // Use React.memo for static components to prevent unnecessary re-renders
  const FeatureCard = React.memo(({ feature, index }: { feature: any, index: number }) => (
    <Card 
      key={index} 
      className={`group backdrop-blur-xl bg-slate-900/50 border-slate-800 text-white p-8 hover:transform hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden ${
        hoveredFeature === index ? 'bg-slate-800/50' : ''
      }`}
      onMouseEnter={() => setHoveredFeature(index)}
      onMouseLeave={() => setHoveredFeature(null)}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-blue-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      <div className="relative z-10">
        <div className="mb-6 transform transition-transform duration-300 group-hover:-translate-y-2">
          <div className="w-14 h-14 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-slate-700">
            {feature.icon}
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
        <p className="text-slate-300 leading-relaxed">{feature.description}</p>
      </div>
    </Card>
  ));

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/20 bg-[size:20px_20px] [mask-image:linear-gradient(0deg,transparent,white,transparent)]" />
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
              <a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors">Features</a>
              <a href="#payment-flow" className="text-slate-300 hover:text-emerald-400 transition-colors">How It Works</a>
              <a href="#pricing" className="text-slate-300 hover:text-emerald-400 transition-colors">Pricing</a>
              <a href="about" className="text-slate-300 hover:text-emerald-400 transition-colors">About</a>
            </div>
            <a href={panelUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50">Sign In</Button>
            </a>
          </div>
        </nav>
        
        <div className="container mx-auto px-4 py-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
            <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-block animate-bounce-slow mb-6">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 backdrop-blur-sm border border-emerald-500/20">
                    <Sparkles className="h-4 w-4 mr-2" /> New: AI-Powered Payment Predictions
                  </span>
                </div>
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Smart Payment Reminders for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Modern Businesses</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Automate your payment collection process and never miss a payment again with BusyNotify&apos;s intelligent reminder system.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50 h-14 px-8 text-lg"
                    onClick={() => {
                      const enquiryForm = document.getElementById('enquiry-form');
                      if (enquiryForm) {
                        enquiryForm.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Enquiry Form <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" className="bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50 h-14 px-8 text-lg">
                    <Play className="mr-2 h-5 w-5" /> Watch Demo
                  </Button>
                  <a href="https://api.busynotify.in/BusyNotify.zip" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50 h-14 px-8 text-lg">
                      <Download className="mr-2 h-5 w-5" /> Download for Windows
                    </Button>
                  </a>
                </div>
                <div className="mt-12 flex items-center justify-center space-x-8">
                  {[
                    "AI-Powered Reminders",
                    "99.9% Collection Rate",
                    "Enterprise Security"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-24" id="features">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Features</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Everything You Need for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Efficient Collection</span>
          </h2>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto">
            Streamline your accounts receivable process with our comprehensive solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-blue-500/10 rounded-3xl filter blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                    <div className="relative p-8">
                      <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 mb-4">
                        {stat.value}
                      </div>
                      <div className="text-white text-lg font-medium">{stat.label}</div>
                      <div className="mt-4 text-sm text-slate-400">{stat.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Payment Flow Section */}
      <section className="relative py-24" id="payment-flow">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Process Overview</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Payment Reminder <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Flow</span>
            </h2>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">
              Discover how our intelligent system manages payment reminders across different intervals to ensure timely notifications and improved cash flow.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
            <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
              {/* Flow Selection */}
              <div className="flex justify-center gap-4 mb-12">
                {flows.map((flow) => (
                  <button
                    key={flow.type}
                    onClick={() => setHoveredFeature(flows.indexOf(flow))}
                    className={`relative group px-6 py-3 rounded-xl transition-all duration-300 ${
                      hoveredFeature === flows.indexOf(flow)
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'hover:bg-slate-800/50 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <flow.icon className="h-5 w-5" />
                      <span className="font-medium">{flow.label}</span>
                    </div>
                    {hoveredFeature === flows.indexOf(flow) && (
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
                        {flows[hoveredFeature || 0]?.title}
                      </h3>
                      <div className="space-y-4">
                        {flows[hoveredFeature || 0]?.features.map((feature, index) => (
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
        </div>
      </section>

      {/* ERP Chatbot Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
            <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="inline-block mb-4">
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <Bot className="h-4 w-4" />
                      <span className="text-sm font-medium">AI-Powered Support</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Busy ERP <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Chatbot</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8">
                    Customer support is now smarter than ever! Our Intelligent ERP Chatbot instantly answers account-related queries from customers.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {chatbotBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-emerald-400" />
                        </div>
                        <p className="text-slate-300">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Chat Demo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl" />
                  <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-6 border border-slate-800">
                    <div className="flex items-center gap-3 border-b border-slate-700 pb-4 mb-4">
                      <Bot className="h-6 w-6 text-emerald-400" />
                      <div>
                        <h4 className="text-white font-medium">BusyBot</h4>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-emerald-400" />
                          <span className="text-sm text-slate-400">Online</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <MessageCircle className="h-6 w-6 text-slate-400" />
                        <div className="bg-slate-800/50 rounded-lg p-3 text-slate-300">
                          What&apos;s my current account balance?
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Bot className="h-6 w-6 text-emerald-400" />
                        <div className="bg-emerald-500/10 rounded-lg p-3 text-slate-300 border border-emerald-500/20">
                          Your current account balance is $5,280.00. Would you like to see your recent transactions?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET API Module Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
            <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* API Demo */}
                <div className="relative order-2 md:order-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl" />
                  <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-6 border border-slate-800 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-4 text-slate-400">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      </div>
                      <span>GET API Request</span>
                    </div>
                    
                    <div className="space-y-2 text-slate-300">
                      <div className="text-emerald-400">GET /api/v1/busy/data</div>
                      <div className="pl-4">Headers {`{`}</div>
                      <div className="pl-8 text-blue-400">"Authorization": "Bearer {`{api_key}`}"</div>
                      <div className="pl-4">{`}`}</div>
                      <div className="pl-4">Response {`{`}</div>
                      <div className="pl-8">"status": "success",</div>
                      <div className="pl-8">"data": {`{`}</div>
                      <div className="pl-12">"balance": 5280.00,</div>
                      <div className="pl-12">"transactions": [...]</div>
                      <div className="pl-8">{`}`}</div>
                      <div className="pl-4">{`}`}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="order-1 md:order-2">
                  <div className="inline-block mb-4">
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <Code className="h-4 w-4" />
                      <span className="text-sm font-medium">Developer API</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Busy GET <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">API Module</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8">
                    Connect your data to external systems seamlessly. With the GET API Module in BusyNotify, you can access your Busy data from anywhere.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {apiBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-emerald-400" />
                        </div>
                        <p className="text-slate-300">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50">
                    View Documentation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payload Module Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
            <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="inline-block mb-4">
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <MessageCircleMore className="h-4 w-4" />
                      <span className="text-sm font-medium">WhatsApp Integration</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Payload <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Module</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8">
                    The perfect solution for WhatsApp integration! The Payload Module in BusyNotify is designed to work seamlessly with CRM, lead management software, or any system that requires real-time WhatsApp messaging.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {payloadBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-emerald-400" />
                        </div>
                        <p className="text-slate-300">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50">
                    Configure Webhook <Webhook className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Webhook Flow Visualization */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl" />
                  <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-6 border border-slate-800">
                    {/* Flow Steps */}
                    <div className="space-y-6">
                      {webhookSteps.map((step, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 flex-shrink-0">
                              <step.icon className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div>
                              <h4 className="text-white font-medium mb-1">{step.title}</h4>
                              <p className="text-sm text-slate-400">{step.description}</p>
                            </div>
                          </div>
                          {index !== webhookSteps.length - 1 && (
                            <div className="absolute left-5 top-10 w-0.5 h-8 bg-gradient-to-b from-emerald-500/50 to-transparent" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Sheet Module Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
            <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="inline-block mb-4">
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <Table className="h-4 w-4" />
                      <span className="text-sm font-medium">Data Sync</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Google Sheet <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Module</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8">
                    Simplify data management with the Google Sheet Module! BusyNotify now lets you sync your Busy data automatically to Google Sheets on a scheduled basis.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {sheetBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-emerald-400" />
                        </div>
                        <p className="text-slate-300">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50">
                    Connect Google Sheet <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Sheet Sync Demo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl" />
                  <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-6 border border-slate-800">
                    {/* Sync Status */}
                    <div className="absolute -top-3 -right-3 bg-emerald-500/10 px-4 py-1 rounded-full border border-emerald-500/20 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-sm text-emerald-400">Auto-Sync Active</span>
                    </div>

                    {/* Sheet Preview */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                        <div className="flex items-center gap-2">
                          <Table className="h-5 w-5 text-emerald-400" />
                          <h4 className="text-white font-medium">Sales Data Sync</h4>
                        </div>
                        <span className="text-sm text-slate-400">Last synced: 5 mins ago</span>
                      </div>

                      {/* Sync Schedule */}
                      <div className="bg-slate-800/50 rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-300">Sync Frequency:</span>
                          <span className="text-emerald-400">Every 15 minutes</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-300">Next Sync:</span>
                          <span className="text-emerald-400">10 minutes</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-slate-300">Data Range:</span>
                          <span className="text-emerald-400">Last 30 days</span>
                        </div>
                      </div>

                      {/* Sheet Structure */}
                      <div className="overflow-hidden rounded-lg border border-slate-700">
                        <div className="bg-slate-800/50 p-3 border-b border-slate-700">
                          <div className="flex items-center gap-2 text-sm text-slate-400">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            Sheet: Sales_Data_2024
                          </div>
                        </div>
                        <div className="p-3 space-y-2">
                          {sheetColumns.map((column, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-3 h-3 rounded-sm border border-slate-600" />
                              <span className="text-slate-300">{column}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Commerce Module Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
            <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="inline-block mb-4">
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <Store className="h-4 w-4" />
                      <span className="text-sm font-medium">Sales Automation</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    E-Commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Module</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8">
                    Take your sales to the next level! Automate your entire sales order process by integrating both POS and Customer Order Management Systems. Orders are automatically converted into Sales Orders in Busy.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {ecommerceBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-emerald-400" />
                        </div>
                        <p className="text-slate-300">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Order Flow Visualization */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl" />
                  <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-6 border border-slate-800">
                    {/* Status Badge */}
                    <div className="absolute -top-3 -right-3 bg-emerald-500/10 px-4 py-1 rounded-full border border-emerald-500/20 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-sm text-emerald-400">Live Orders</span>
                    </div>

                    {/* Order Flow Steps */}
                    <div className="space-y-6">
                      {orderFlowSteps.map((step, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 flex-shrink-0">
                              <step.icon className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-medium mb-1">{step.title}</h4>
                              <p className="text-sm text-slate-400">{step.description}</p>
                              {step.status && (
                                <div className="mt-2 flex items-center gap-2">
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    step.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                                  }`}>
                                    {step.status}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          {index !== orderFlowSteps.length - 1 && (
                            <div className="absolute left-5 top-10 w-0.5 h-8 bg-gradient-to-b from-emerald-500/50 to-transparent" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing List Module Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
            <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="inline-block mb-4">
                    <div className="flex items-center gap-2 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      <ListFilter className="h-4 w-4" />
                      <span className="text-sm font-medium">Smart Pricing</span>
                    </div>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Pricing List <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Module</span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8">
                    Say hello to smarter pricing with the Pricing List Module! Send fully customized product price lists to your customers directly via BusyNotify. Let customers check product pricing, stock availability, and other important details.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    {pricingListBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-emerald-400" />
                        </div>
                        <p className="text-slate-300">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50">
                    Configure Price Lists <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Price List Demo */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-xl" />
                  <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-6 border border-slate-800">
                    {/* Security Badge */}
                    <div className="absolute -top-3 -right-3 bg-emerald-500/10 px-4 py-1 rounded-full border border-emerald-500/20 flex items-center gap-2">
                      <Lock className="h-4 w-4 text-emerald-400" />
                      <span className="text-sm text-emerald-400">OTP Protected</span>
                    </div>

                    {/* Price List Preview */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                        <h4 className="text-white font-medium">Product Price List</h4>
                        <span className="text-sm text-slate-400">Last Updated: Today</span>
                      </div>
                      
                      {/* Sample Price List */}
                      <div className="overflow-hidden rounded-lg border border-slate-700">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-800/50">
                            <tr>
                              <th className="px-4 py-2 text-left text-slate-300">Product</th>
                              <th className="px-4 py-2 text-right text-slate-300">Price</th>
                              <th className="px-4 py-2 text-center text-slate-300">Stock</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-700">
                            {sampleProducts.map((product, index) => (
                              <tr key={index} className="hover:bg-slate-800/30">
                                <td className="px-4 py-2 text-slate-300">{product.name}</td>
                                <td className="px-4 py-2 text-right text-emerald-400">${product.price}</td>
                                <td className="px-4 py-2 text-center">
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    product.stock > 50 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                                  }`}>
                                    {product.stock > 50 ? 'In Stock' : 'Limited'}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-24" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Choose the perfect plan for your business. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="relative group">
              <div className="backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 border border-slate-800">
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
                <Button className="w-full mb-8 bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50">
                  Get Started
                </Button>
                <ul className="space-y-4">
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
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 rounded-3xl filter blur-xl" />
              <div className="relative backdrop-blur-xl bg-slate-800/95 rounded-3xl p-8 border border-slate-700">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                <Button className="w-full mb-8 bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50">
                  Get Started
                </Button>
                <ul className="space-y-4">
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
            <div className="relative group">
              <div className="backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 border border-slate-800">
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
                <Button className="w-full mb-8 bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50">
                  Get Started
                </Button>
                <ul className="space-y-4">
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
      </section>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-12 md:p-20 border border-slate-800 text-center">
            <span className="inline-block text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Get Started Today</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Payment Collection?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Join thousands of businesses that trust BusyNotify for their payment reminder needs. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50 h-14 px-8 text-lg">
                Start Your Free Trial
              </Button>
              <Button size="lg" className="bg-slate-900/50 border border-slate-800 text-slate-300 hover:bg-slate-800/50 h-14 px-8 text-lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Add the EnquiryForm component before the footer */}
      <section id="enquiry-form" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <Bell className="h-8 w-8 text-emerald-400" />,
    title: "Smart Reminders",
    description: "Automated, personalized payment reminders that adapt to customer behavior and payment patterns."
  },
  {
    icon: <Calendar className="h-8 w-8 text-emerald-400" />,
    title: "Flexible Scheduling",
    description: "Set up custom reminder schedules that align with your business workflow and customer preferences."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-emerald-400" />,
    title: "Multi-Channel",
    description: "Reach customers through their preferred channels - email, SMS, or push notifications."
  },
  {
    icon: <LineChart className="h-8 w-8 text-emerald-400" />,
    title: "Advanced Analytics",
    description: "Gain insights into payment trends and optimize your collection strategy with detailed analytics."
  },
  {
    icon: <Shield className="h-8 w-8 text-emerald-400" />,
    title: "Enterprise Security",
    description: "Bank-level encryption and security measures to protect sensitive payment information."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-emerald-400" />,
    title: "Payment Integration",
    description: "Seamless integration with major payment processors and accounting software."
  }
];

const stats = [
  {
    value: "99.9%",
    label: "Collection Rate",
    description: "Average collection success rate for our customers"
  },
  {
    value: "50%",
    label: "Faster Payments",
    description: "Reduction in average payment collection time"
  },
  {
    value: "10,000+",
    label: "Active Users",
    description: "Businesses trust BusyNotify worldwide"
  }
];

const flows = [
  {
    type: 'daily',
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
    type: 'weekly',
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
    type: 'monthly',
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

const chatbotBenefits = [
  "24/7 instant support for customer queries",
  "Faster and easier business operations",
  "Automated account balance checks",
  "Instant transaction history access",
  "Seamless ERP integration"
];

const apiBenefits = [
  "Real-time data access and synchronization",
  "Secure API endpoints with authentication",
  "Comprehensive API documentation",
  "Integration with ERP and CRM systems",
  "Automated data sharing and processing",
  "Custom data mapping capabilities"
];

const payloadBenefits = [
  "Real-time data transfer via WhatsApp",
  "Simplified and faster lead management",
  "Instant webhook notifications",
  "Secure message delivery",
  "Custom payload formatting",
  "Automated message routing"
];

const webhookSteps = [
  {
    icon: MessageSquare,
    title: "Customer Messages",
    description: "Customer sends a message through WhatsApp"
  },
  {
    icon: Bot,
    title: "BusyNotify Processing",
    description: "Message is received and processed by our system"
  },
  {
    icon: Webhook,
    title: "Webhook Delivery",
    description: "Data is instantly delivered to your CRM webhook"
  },
  {
    icon: Database,
    title: "CRM Integration",
    description: "Message is stored and processed in your CRM"
  }
];

const aiChatBenefits = [
  "24/7 responsive communication, even outside office hours",
  "Personalized AI responses based on your training data",
  "Smart handling of weekend and holiday inquiries",
  "Seamless handover to human agents during business hours",
  "Customizable response templates and business rules",
  "Detailed analytics on after-hours engagement"
];

const pricingListBenefits = [
  "Fully customizable price lists—add or hide columns, apply markups or discounts",
  "Share professional-grade price lists tailored to your business needs",
  "Secure access with WhatsApp OTP authentication",
  "Real-time stock availability updates",
  "Custom branding and formatting options",
  "Automated price list distribution"
];

const sampleProducts = [
  { name: "Premium Widget", price: "299.99", stock: 85 },
  { name: "Business Suite", price: "499.99", stock: 42 },
  { name: "Enterprise Pack", price: "999.99", stock: 127 }
];

const sheetBenefits = [
  "Automatic data synchronization between Busy and Google Sheets",
  "Flexible scheduling options - daily, weekly, or real-time updates",
  "Custom data mapping and transformation rules",
  "Secure and reliable data transfer",
  "Version history and audit trails",
  "Automated backup and data recovery"
];

const sheetColumns = [
  "Date",
  "Invoice Number",
  "Customer Name",
  "Product Details",
  "Amount",
  "Payment Status"
];

const ecommerceBenefits = [
  "Full automation of sales orders from both POS and direct customer orders",
  "Streamlined order management system for sales teams and customers",
  "Automatic conversion of orders into Busy Sales Orders",
  "Real-time inventory synchronization",
  "Multi-channel order processing",
  "Comprehensive order tracking and analytics"
];

const orderFlowSteps = [
  {
    icon: Store,
    title: "POS Orders",
    description: "Sales team creates orders through POS system",
    status: "Active"
  },
  {
    icon: ShoppingCart,
    title: "Customer Orders",
    description: "Customers place orders through online platform",
    status: "Active"
  },
  {
    icon: RefreshCcw,
    title: "Order Processing",
    description: "Orders are automatically validated and processed",
    status: "Processing"
  },
  {
    icon: Database,
    title: "Busy Integration",
    description: "Orders are converted to Sales Orders in Busy",
    status: "Active"
  }
];