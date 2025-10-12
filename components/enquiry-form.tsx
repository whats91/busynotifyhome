"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageSquare, Send, Check, AlertCircle, ChevronDown } from "lucide-react";
import { toast } from "sonner";

// Common country codes with their flags
const countryCodes = [
  { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
  { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
  { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
  { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
  { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
  { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
];

export function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [otp, setOtp] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const handleSendOtp = async () => {
    if (!formData.phone) {
      toast.error("Please enter your phone number");
      return;
    }

    // Basic phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSendingOtp(true);
    try {
      // Combine country code with phone number
      const fullPhoneNumber = `${selectedCountryCode.code}${formData.phone}`;
      
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: fullPhoneNumber }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send OTP");
      }

      toast.success("OTP sent successfully! Please check your phone.");
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error(error instanceof Error ? error.message : "Failed to send OTP");
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }

    // Basic OTP validation
    const otpRegex = /^[0-9]{6}$/;
    if (!otpRegex.test(otp)) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setIsVerifyingOtp(true);
    try {
      // Combine country code with phone number
      const fullPhoneNumber = `${selectedCountryCode.code}${formData.phone}`;
      
      const response = await fetch("/api/send-otp", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: fullPhoneNumber, otp }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to verify OTP");
      }

      setIsPhoneVerified(true);
      toast.success("Phone number verified successfully!");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error(error instanceof Error ? error.message : "Failed to verify OTP");
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPhoneVerified) {
      toast.error("Please verify your phone number first");
      return;
    }

    setLoading(true);
    try {
      // Combine country code with phone number for the final submission
      const fullPhoneNumber = `${selectedCountryCode.code}${formData.phone}`;
      const submissionData = {
        ...formData,
        phone: fullPhoneNumber,
      };
      
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setOtp("");
      setIsPhoneVerified(false);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleCountryDropdown = () => {
    setIsCountryDropdownOpen(!isCountryDropdownOpen);
  };

  const selectCountryCode = (country: typeof countryCodes[0]) => {
    setSelectedCountryCode(country);
    setIsCountryDropdownOpen(false);
  };

  return (
    <Card className="bg-slate-900/60 border border-slate-800 shadow-2xl backdrop-blur-xl">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold text-white">
          <MessageSquare className="h-5 w-5 text-emerald-400" aria-hidden="true" />
          Send us a Message
        </CardTitle>
        <CardDescription className="text-sm text-slate-400">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-slate-200">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              autoComplete="name"
              className="bg-slate-900/50 border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-slate-200">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              autoComplete="email"
              className="bg-slate-900/50 border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-slate-200">Phone Number</Label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative sm:w-auto">
                <Button
                  type="button"
                  onClick={toggleCountryDropdown}
                  variant="outline"
                  className="flex items-center gap-1 min-w-[110px] rounded-md border border-slate-800 bg-slate-900/50 px-3 py-2 text-slate-100 transition hover:border-emerald-400 hover:bg-slate-900/70 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-0"
                  disabled={isPhoneVerified}
                >
                  <span className="text-lg">{selectedCountryCode.flag}</span>
                  <span className="font-semibold tracking-wide text-slate-100">{selectedCountryCode.code}</span>
                  <ChevronDown className="ml-1 h-4 w-4 text-slate-400" />
                </Button>
                {isCountryDropdownOpen && !isPhoneVerified && (
                  <div className="absolute top-12 left-0 z-20 w-64 max-h-60 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950/90 shadow-2xl backdrop-blur-lg">
                    {countryCodes.map((country) => (
                      <button
                        key={country.code}
                        type="button"
                        className="flex w-full items-center gap-3 border-b border-slate-800/70 px-4 py-2.5 text-left text-sm text-slate-100 transition-colors last:border-b-0 hover:bg-slate-800/60 focus-visible:bg-slate-800/60 focus-visible:outline-none"
                        onClick={() => selectCountryCode(country)}
                      >
                        <span className="text-xl">{country.flag}</span>
                        <span className="font-semibold">{country.code}</span>
                        <span className="ml-auto text-xs text-slate-400">{country.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
                autoComplete="tel"
                className="bg-slate-900/50 border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-0"
                disabled={isPhoneVerified}
              />
              {!isPhoneVerified ? (
                <Button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={isSendingOtp || !formData.phone}
                  className="whitespace-nowrap bg-slate-900/80 border border-slate-700 text-slate-100 hover:bg-slate-800 hover:text-white transition focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-0 disabled:bg-slate-900/40 disabled:text-slate-500 disabled:border-slate-800/60 disabled:cursor-not-allowed"
                >
                  {isSendingOtp ? "Sending..." : "Send OTP"}
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={() => {
                    setIsPhoneVerified(false);
                    setOtp("");
                  }}
                  variant="outline"
                  className="whitespace-nowrap border border-slate-700 text-slate-300 hover:bg-slate-900/60 hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-0"
                >
                  Change
                </Button>
              )}
            </div>
          </div>

          {!isPhoneVerified && formData.phone && (
            <div className="space-y-2">
              <Label htmlFor="otp" className="text-sm font-medium text-slate-200">OTP</Label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  className="bg-slate-900/50 border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-0"
                />
                <Button
                  type="button"
                  onClick={handleVerifyOtp}
                  disabled={isVerifyingOtp || !otp || otp.length !== 6}
                  className="whitespace-nowrap bg-slate-900/80 border border-slate-700 text-slate-100 hover:bg-slate-800 hover:text-white transition focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-0 disabled:bg-slate-900/40 disabled:text-slate-500 disabled:border-slate-800/60 disabled:cursor-not-allowed"
                >
                  {isVerifyingOtp ? "Verifying..." : "Verify OTP"}
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-slate-200">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
              autoComplete="off"
              className="min-h-[120px] bg-slate-900/50 border-slate-800 text-slate-100 placeholder:text-slate-500 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-0"
            />
          </div>

          <Button
            type="submit"
            disabled={loading || !isPhoneVerified}
            className="w-full bg-slate-900/80 border border-slate-700 text-slate-100 hover:bg-slate-800 hover:text-white transition focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-0 disabled:bg-slate-900/40 disabled:text-slate-500 disabled:border-slate-800/60 disabled:cursor-not-allowed"
            title="Send your message"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                Sending...
              </span>
            ) : success ? (
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4" aria-hidden="true" />
                Message Sent
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
} 
