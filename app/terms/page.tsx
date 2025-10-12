"use client";

import { ArrowLeft, ZoomIn, ZoomOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { useState } from "react";

export default function TermsOfService() {
  const [zoomLevel, setZoomLevel] = useState(100);

  const increaseZoom = () => {
    setZoomLevel(prev => Math.min(prev + 10, 200));
  };

  const decreaseZoom = () => {
    setZoomLevel(prev => Math.max(prev - 10, 80));
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
      <Nav />

      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-10 md:py-16 lg:py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 border border-slate-800">
            <div className="mb-6 sm:mb-8 md:mb-10">
              <Link href="/">
                <Button variant="ghost" className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 mb-4 sm:mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">Terms of Service</h1>
              <p className="text-slate-400 text-sm sm:text-base">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center justify-end mb-4">
              <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg p-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-slate-300 hover:text-emerald-400 hover:bg-slate-700/50"
                  onClick={decreaseZoom}
                  disabled={zoomLevel <= 80}
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="text-slate-300 text-xs sm:text-sm min-w-[3rem] text-center">{zoomLevel}%</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-slate-300 hover:text-emerald-400 hover:bg-slate-700/50"
                  onClick={increaseZoom}
                  disabled={zoomLevel >= 200}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div 
              className="space-y-4 sm:space-y-6 md:space-y-8 text-slate-300 text-xs sm:text-sm md:text-base transition-all duration-300 overflow-x-auto"
              style={{ fontSize: `${zoomLevel}%` }}
            >
              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">1. Introduction</h2>
                <p>
                  Welcome to BusyNotify. By accessing or using our payment reminder and business automation platform, you agree to be bound by these Terms of Service. Please read them carefully.
                </p>
                <p className="mt-2">
                  These terms govern your use of BusyNotify's services, including our website, mobile application, and any other services we provide. By using our services, you agree to these terms.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">2. Definitions</h2>
                <ul className="list-disc list-inside ml-4 space-y-1 sm:space-y-2">
                  <li>
                    <span className="font-medium text-white">"Service"</span> refers to BusyNotify's payment reminder and business automation platform
                  </li>
                  <li>
                    <span className="font-medium text-white">"User"</span> refers to any individual or entity that accesses or uses our Service
                  </li>
                  <li>
                    <span className="font-medium text-white">"Content"</span> refers to all information and materials available through our Service
                  </li>
                  <li>
                    <span className="font-medium text-white">"Account"</span> refers to your registered account with BusyNotify
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">3. Account Registration</h2>
                <p className="mb-3 sm:mb-4">
                  To use our Service, you must register for an account. You agree to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Promptly update your account information</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">4. Service Usage</h2>
                <p className="mb-3 sm:mb-4">
                  When using our Service, you agree to:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Use the Service only for lawful purposes</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect the rights of other users</li>
                  <li>Not interfere with or disrupt the Service</li>
                  <li>Not attempt to gain unauthorized access to any part of the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">5. Payment Terms</h2>
                <p className="mb-3 sm:mb-4">
                  For paid subscriptions:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Fees are billed in advance on a recurring basis</li>
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>Refunds are provided according to our refund policy</li>
                  <li>We reserve the right to modify pricing with notice</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">6. Intellectual Property</h2>
                <p>
                  The Service and its original content, features, and functionality are owned by BusyNotify and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">7. User Content</h2>
                <p className="mb-3 sm:mb-4">
                  You retain ownership of any content you submit to the Service. By submitting content, you grant us a worldwide, non-exclusive license to use, reproduce, modify, and distribute your content.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">8. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">9. Limitation of Liability</h2>
                <p>
                  BusyNotify shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">10. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the Service.
                </p>
              </section>

              <section>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">11. Contact Information</h2>
                <p>
                  For questions about these Terms, please contact us at:
                </p>
                <p className="mt-2 text-emerald-400">legal@busynotify.in</p>
                <p className="mt-2">
                  <strong className="text-white">Postal Address:</strong><br />
                  Wilford Technology<br />
                  131, C21 Mall<br />
                  Ujjain, Madhya Pradesh 456010<br />
                  India
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 