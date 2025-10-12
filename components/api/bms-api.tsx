"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Copy, FileText, MessageSquare, Server, Terminal, Code, Check, ExternalLink } from "lucide-react";

export function BmsApi() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-8">
      <Card className="bg-slate-900/50 border-slate-800">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl text-white">Bot Master Sender (BMS)</CardTitle>
          <CardDescription className="text-sm sm:text-base text-slate-400">
            Ultimate WhatsApp API Solution for seamless messaging
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
          <p className="text-sm sm:text-base text-slate-300 mb-4">
            BMS provides powerful tools for integrating WhatsApp messaging into your applications with features like quick send, campaign builder, scheduled messages, and more.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <Button variant="outline" className="bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/50 text-xs sm:text-sm">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Documentation
            </Button>
            <Button variant="outline" className="bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/50 text-xs sm:text-sm">
              <ExternalLink className="mr-2 h-4 w-4" />
              Code Samples
            </Button>
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="bms-intro" className="border-slate-800">
          <AccordionTrigger className="text-white hover:text-emerald-400 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
              <span>BMS Introduction</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-slate-300 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                Bot Master Sender (BMS) is your ultimate solution for integrating WhatsApp messaging into your applications with power, flexibility, and ease.
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-white mt-4">Key Features:</h3>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li><strong>Quick Send</strong>: Instantly send WhatsApp messages for immediate notifications and alerts.</li>
                <li><strong>Campaign Builder</strong>: Design targeted WhatsApp campaigns with message queuing and contact management.</li>
                <li><strong>Scheduled Messages</strong>: Plan your WhatsApp communications with advanced scheduling options.</li>
                <li><strong>Recurring Messages</strong>: Automate recurring WhatsApp messages for regular communication needs.</li>
                <li><strong>Custom Templates</strong>: Save and reuse secure templates for consistent messaging.</li>
                <li><strong>Comprehensive Reports</strong>: Access detailed WhatsApp history reports for analysis and insights.</li>
                <li><strong>API Access</strong>: Integrate with your systems via powerful APIs for sending messages, managing contacts, retrieving reports, and more.</li>
              </ul>
              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-semibold text-white">BusyNotify Addon for BMS</h3>
                <p className="mt-2 text-sm sm:text-base">
                  The BusyNotify Addon is fully integrated with BMS, enhancing your workflow by seamlessly connecting your Busy Accounting Software with the BMS platform.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="payload" className="border-slate-800">
          <AccordionTrigger className="text-white hover:text-emerald-400 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
              <span>Receiving Payload from BMS</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-slate-300 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                To receive data from Bot Master Sender (BMS), you need to set up a webhook endpoint. This endpoint acts as a listener for incoming payloads sent by BMS using the BusyNotify API.
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-white mt-4">How It Works:</h3>
              <ol className="list-decimal pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li><strong>Webhook Setup</strong>: A webhook is a URL where BMS sends data automatically whenever an event occurs.</li>
                <li><strong>Data Transfer</strong>: BMS sends the payload to the specified webhook endpoint in real-time.</li>
                <li><strong>Endpoint Creation</strong>: Users must create a webhook endpoint in their server or application to capture and process the incoming data.</li>
                <li><strong>Event Subscription</strong>: Configure BMS to send specific event data to your webhook.</li>
                <li><strong>Payload Handling</strong>: The webhook processes the payload and performs necessary actions.</li>
              </ol>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg mt-4">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">User Action Required:</h3>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Create a webhook endpoint on your server or application.</li>
                  <li>Ensure the endpoint URL is accessible over the internet.</li>
                  <li>Configure your webhook in the BMS dashboard by providing the endpoint URL and selecting the events you want to subscribe to.</li>
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="code-samples" className="border-slate-800">
          <AccordionTrigger className="text-white hover:text-emerald-400 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
              <span>Code Samples</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-slate-300 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                Here are some code samples for integrating with BMS using different programming languages.
              </p>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-slate-400">PHP Example</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 sm:h-8 px-2 text-slate-400 hover:text-emerald-400"
                    onClick={() => copyToClipboard(`<?php
// Webhook endpoint to receive data from BMS
$payload = file_get_contents('php://input');
$data = json_decode($payload, true);

// Verify webhook signature if configured
$signature = $_SERVER['HTTP_X_BMS_SIGNATURE'] ?? '';
if (!verifyWebhookSignature($signature, $payload)) {
    http_response_code(401);
    exit('Invalid signature');
}

// Process the webhook data
switch ($data['event']) {
    case 'message_status':
        handleMessageStatus($data['data']);
        break;
    case 'campaign_update':
        handleCampaignUpdate($data['data']);
        break;
}

// Send response
http_response_code(200);
echo json_encode(['status' => 'success']);`, "php-webhook")}
                  >
                    {copied === "php-webhook" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                    )}
                  </Button>
                </div>
                <pre className="text-xs sm:text-sm text-emerald-400 overflow-x-auto">
                  {`<?php
// Webhook endpoint to receive data from BMS
$payload = file_get_contents('php://input');
$data = json_decode($payload, true);

// Verify webhook signature if configured
$signature = $_SERVER['HTTP_X_BMS_SIGNATURE'] ?? '';
if (!verifyWebhookSignature($signature, $payload)) {
    http_response_code(401);
    exit('Invalid signature');
}

// Process the webhook data
switch ($data['event']) {
    case 'message_status':
        handleMessageStatus($data['data']);
        break;
    case 'campaign_update':
        handleCampaignUpdate($data['data']);
        break;
}

// Send response
http_response_code(200);
echo json_encode(['status' => 'success']);`}
                </pre>
              </div>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-slate-400">Node.js Example</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 sm:h-8 px-2 text-slate-400 hover:text-emerald-400"
                    onClick={() => copyToClipboard(`const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-bms-signature'];
  const payload = JSON.stringify(req.body);
  
  // Verify webhook signature if configured
  if (!verifyWebhookSignature(signature, payload)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  // Process the webhook data
  const { event, data } = req.body;
  
  switch (event) {
    case 'message_status':
      handleMessageStatus(data);
      break;
    case 'campaign_update':
      handleCampaignUpdate(data);
      break;
  }

  res.json({ status: 'success' });
});

// Start server
app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});`, "node-webhook")}
                  >
                    {copied === "node-webhook" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
                    )}
                  </Button>
                </div>
                <pre className="text-xs sm:text-sm text-emerald-400 overflow-x-auto">
                  {`const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-bms-signature'];
  const payload = JSON.stringify(req.body);
  
  // Verify webhook signature if configured
  if (!verifyWebhookSignature(signature, payload)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  // Process the webhook data
  const { event, data } = req.body;
  
  switch (event) {
    case 'message_status':
      handleMessageStatus(data);
      break;
    case 'campaign_update':
      handleCampaignUpdate(data);
      break;
  }

  res.json({ status: 'success' });
});

// Start server
app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});`}
                </pre>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="postman-testing" className="border-slate-800">
          <AccordionTrigger className="text-white hover:text-emerald-400 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
              <span>Testing with Postman</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-slate-300 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                You can use Postman to test your webhook endpoint and verify that it correctly handles
                incoming payloads from BMS.
              </p>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Setting up Postman:</h3>
                <ol className="list-decimal pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Create a new POST request to your webhook URL</li>
                  <li>Set the Content-Type header to application/json</li>
                  <li>Add the X-BMS-Signature header if using signature verification</li>
                  <li>Use the payload samples provided above in the request body</li>
                  <li>Send the request and verify the response</li>
                </ol>
              </div>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Testing Different Events:</h3>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Test message status updates</li>
                  <li>Test campaign updates</li>
                  <li>Verify error handling</li>
                  <li>Check signature verification</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
} 