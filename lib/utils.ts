import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BMSMessageData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendBMSMessage(data: BMSMessageData) {
  try {
    // Format the message text with all customer data
    const messageText = `
New Enquiry:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}
    `.trim();

    // BMS API configuration
    const bmsApiUrl = 'https://zone-b.botmastersender.com/api/v5/?action=background';
    const senderId = '917000782082';
    const authToken = '703-eEfhNBzb9lmkV2sajiREAArV3h801Bu5an1t3pAY8ab5dd5f';
    const receiverId = '919425008429'; // Admin phone number to receive notifications

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
      throw new Error(`BMS API error: ${JSON.stringify(errorData)}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending BMS message:', error);
    throw error;
  }
}

// New function specifically for sending OTPs to customer phone numbers
export async function sendOTP(phone: string, otp: string) {
  try {
    // Format the OTP message
    const messageText = `Your verification code is: ${otp}. Valid for 5 minutes.`;

    // BMS API configuration
    const bmsApiUrl = 'https://zone-b.botmastersender.com/api/v5/?action=send';
    const senderId = '919343841961';
    const authToken = '933-dQFzZnzAY4fnFIgPUUzNRe1BuRBgcJV2rgXzx3JSfe8806bb';
    const receiverId = phone;

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
      throw new Error(`Failed to send OTP: ${JSON.stringify(errorData)}`);
    }

    // Log the OTP for debugging (remove in production)
    console.log(`OTP for ${phone}: ${otp}`);

    return await response.json();
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
}
