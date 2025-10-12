import { NextResponse } from "next/server";

interface BMSMessageData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: BMSMessageData = await request.json();
    
    // Format the message text with all customer data
    const messageText = `
New Enquiry:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}
    `.trim();

    // BMS API configuration
    const bmsApiUrl = 'https://zone-b.botmastersender.com/api/v5/?action=send';
    const senderId = '919343841961';
    const authToken = '933-dQFzZnzAY4fnFIgPUUzNRe1BuRBgcJV2rgXzx3JSfe8806bb';
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
      console.error('BMS API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error sending BMS message:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 