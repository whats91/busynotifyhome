"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, MessageSquare } from "lucide-react";
import { Nav } from "@/components/nav";
import { BusyApi } from "@/components/api/busy-api";
import { BmsApi } from "@/components/api/bms-api";

export default function ApiDocumentation() {
  const [activeTab, setActiveTab] = useState("busy-api");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0f172a] to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <Nav />

      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-800">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">API Documentation</h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
                Comprehensive documentation for integrating with BusyNotify's API services. Choose between Busy API for accounting data or BMS for WhatsApp messaging.
              </p>
            </div>

            <Tabs defaultValue="busy-api" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 mb-6 sm:mb-8">
                <TabsTrigger value="busy-api" className="flex items-center gap-2 text-xs sm:text-sm">
                  <Server className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Busy API</span>
                </TabsTrigger>
                <TabsTrigger value="bms" className="flex items-center gap-2 text-xs sm:text-sm">
                  <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>BMS (WhatsApp)</span>
                </TabsTrigger>
              </TabsList>

              {/* Busy API Documentation */}
              <TabsContent value="busy-api">
                <BusyApi />
              </TabsContent>

              {/* BMS Documentation */}
              <TabsContent value="bms">
                <BmsApi />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
