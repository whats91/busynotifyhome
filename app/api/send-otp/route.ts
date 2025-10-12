// This file is no longer needed for OTP verification
// You can safely delete this file if you want to completely remove OTP functionality

import { NextResponse } from "next/server";

// Store OTPs temporarily (in production, use a proper database)
const otpStore = new Map<string, { otp: string; timestamp: number }>();

// Generate a random 6-digit OTP
function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Clean up expired OTPs (older than 5 minutes)
function cleanupExpiredOTPs() {
  const now = Date.now();
  // Fix the iteration issue by using Array.from
  Array.from(otpStore.entries()).forEach(([phone, data]) => {
    if (now - data.timestamp > 5 * 60 * 1000) {
      otpStore.delete(phone);
    }
  });
}

export async function POST(request: Request) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    // Clean up expired OTPs
    cleanupExpiredOTPs();

    // Generate new OTP
    const otp = generateOTP();
    otpStore.set(phone, { otp, timestamp: Date.now() });

    // BMS API configuration
    const bmsApiUrl = 'https://zone-b.botmastersender.com/api/v5/?action=send';
    const senderId = '919343841961';
    const authToken = '933-dQFzZnzAY4fnFIgPUUzNRe1BuRBgcJV2rgXzx3JSfe8806bb';
    const receiverId = phone;

    // Format the OTP message
    const messageText = `Your verification code is: ${otp}. Valid for 5 minutes.`;

    // Send OTP via BMS API
    const response = await fetch(bmsApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        senderId,
        authToken,
        messageText,
        receiverId,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('BMS API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send OTP' },
        { status: 500 }
      );
    }

    // Log the OTP for debugging (remove in production)
    console.log(`OTP for ${phone}: ${otp}`);

    return NextResponse.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { error: "Failed to send OTP" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { phone, otp } = await request.json();

    if (!phone || !otp) {
      return NextResponse.json(
        { error: "Phone number and OTP are required" },
        { status: 400 }
      );
    }

    // Clean up expired OTPs
    cleanupExpiredOTPs();

    // Verify OTP
    const storedData = otpStore.get(phone);
    if (!storedData) {
      return NextResponse.json(
        { error: "OTP expired or not found" },
        { status: 400 }
      );
    }

    if (storedData.otp !== otp) {
      return NextResponse.json(
        { error: "Invalid OTP" },
        { status: 400 }
      );
    }

    // Clear the OTP after successful verification
    otpStore.delete(phone);

    return NextResponse.json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { error: "Failed to verify OTP" },
      { status: 500 }
    );
  }
} 