"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Copy, Download, FileText, Globe, Lock, Code, Terminal, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export function BusyApi() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <Card className="bg-slate-900/50 border-slate-800">
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl text-white">Busy API Overview</CardTitle>
          <CardDescription className="text-sm sm:text-base text-slate-400">
            Access and integrate with your Busy accounting data programmatically
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
          <p className="text-sm sm:text-base text-slate-300 mb-4">
            The Busy API allows you to fetch customer information, ledgers, and bill details from your Busy accounting software.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <Button variant="outline" className="bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/50 text-xs sm:text-sm">
              <FileText className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              View Documentation
            </Button>
            <Button variant="outline" className="bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-700/50 text-xs sm:text-sm">
              <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Download Postman Collection
            </Button>
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="authentication" className="border-slate-800">
          <AccordionTrigger className="text-white hover:text-emerald-400 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
              <span>Authentication</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-slate-300 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                To access the Busy API, authentication is mandatory. The API uses a two-parameter authentication system:
              </p>
              <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <li><strong>authToken</strong>: A unique token assigned to the user.</li>
                <li><strong>compCode</strong>: The company code associated with the request.</li>
              </ul>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-slate-400">Base API URL</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 sm:h-8 px-2 text-slate-400 hover:text-emerald-400"
                    onClick={() => copyToClipboard("https://api.busynotify.in/api", "base-url")}
                  >
                    {copied === "base-url" ? "Copied!" : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
                  </Button>
                </div>
                <code className="text-xs sm:text-sm text-emerald-400">https://api.busynotify.in/api</code>
              </div>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-slate-400">Example Request</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 sm:h-8 px-2 text-slate-400 hover:text-emerald-400"
                    onClick={() => copyToClipboard("https://api.busynotify.in/api/fetchCustomerList?authToken=YOUR_AUTH_TOKEN&compCode=YOUR_COMP_CODE", "auth-example")}
                  >
                    {copied === "auth-example" ? "Copied!" : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
                  </Button>
                </div>
                <code className="text-xs sm:text-sm text-emerald-400">https://api.busynotify.in/api/fetchCustomerList?authToken=YOUR_AUTH_TOKEN&compCode=YOUR_COMP_CODE</code>
              </div>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-slate-400">Error Response</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 sm:h-8 px-2 text-slate-400 hover:text-emerald-400"
                    onClick={() => copyToClipboard(`{
  "success": false,
  "message": "Authentication failed: Missing or invalid parameters."
}`, "auth-error")}
                  >
                    {copied === "auth-error" ? "Copied!" : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
                  </Button>
                </div>
                <pre className="text-xs sm:text-sm text-emerald-400 overflow-x-auto">
                  {`{
  "success": false,
  "message": "Authentication failed: Missing or invalid parameters."
}`}
                </pre>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="customer-info" className="border-slate-800">
          <AccordionTrigger className="text-white hover:text-emerald-400 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
              <span>Customer Information</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-slate-300 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                Retrieve customer information and company details using the fetchCustomerList endpoint.
              </p>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-slate-400">Endpoint</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 sm:h-8 px-2 text-slate-400 hover:text-emerald-400"
                    onClick={() => copyToClipboard("GET /api/fetchCustomerList", "customer-endpoint")}
                  >
                    {copied === "customer-endpoint" ? "Copied!" : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
                  </Button>
                </div>
                <code className="text-xs sm:text-sm text-emerald-400">GET /api/fetchCustomerList</code>
              </div>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-slate-400">Example Response</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 sm:h-8 px-2 text-slate-400 hover:text-emerald-400"
                    onClick={() => copyToClipboard(`{
  "success": true,
  "data": [
    {
      "id": 1,
      "User_Id": 1288,
      "Account_Name": "Wax91",
      "WhatsApp_No": "919425008429",
      "Account_Group_Name": "Sundry Debtors",
      "Opening_Balance": -5000,
      "Balance_Type": "Dr.",
      "Closing_Balance": -39000,
      "CompCode": "Comp0001",
      "reportName": "customersInformation"
    }
  ],
  "compInfo": [
    {
      "id": 1,
      "Company_Name": "Test BMS",
      "GST_No": "23DBQPA9343Q1Z1",
      "Address_Line_1": "C21 Mall Ujjain",
      "Address_Line_2": "Nanakheda",
      "Address_Line_3": "Madhay Pradesh",
      "Address_Line_4": "India",
      "Email": "demo@gmail.com",
      "Phone_No": "9898989589",
      "CompCode": "Comp0001",
      "reportName": "companyInformation"
    }
  ]
}`, "customer-response")}
                  >
                    {copied === "customer-response" ? "Copied!" : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
                  </Button>
                </div>
                <pre className="text-xs sm:text-sm text-emerald-400 overflow-x-auto">
                  {`{
  "success": true,
  "data": [
    {
      "id": 1,
      "User_Id": 1288,
      "Account_Name": "Wax91",
      "WhatsApp_No": "919425008429",
      "Account_Group_Name": "Sundry Debtors",
      "Opening_Balance": -5000,
      "Balance_Type": "Dr.",
      "Closing_Balance": -39000,
      "CompCode": "Comp0001",
      "reportName": "customersInformation"
    }
  ],
  "compInfo": [
    {
      "id": 1,
      "Company_Name": "Test BMS",
      "GST_No": "23DBQPA9343Q1Z1",
      "Address_Line_1": "C21 Mall Ujjain",
      "Address_Line_2": "Nanakheda",
      "Address_Line_3": "Madhay Pradesh",
      "Address_Line_4": "India",
      "Email": "demo@gmail.com",
      "Phone_No": "9898989589",
      "CompCode": "Comp0001",
      "reportName": "companyInformation"
    }
  ]
}`}
                </pre>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ledger" className="border-slate-800">
          <AccordionTrigger className="text-white hover:text-emerald-400 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
              <span>Ledger Information</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-slate-300 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                Retrieve ledger information for a specific customer using the fetchLedger endpoint.
              </p>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-slate-400">Endpoint</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 sm:h-8 px-2 text-slate-400 hover:text-emerald-400"
                    onClick={() => copyToClipboard("GET /api/fetchLedger", "ledger-endpoint")}
                  >
                    {copied === "ledger-endpoint" ? "Copied!" : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
                  </Button>
                </div>
                <code className="text-xs sm:text-sm text-emerald-400">GET /api/fetchLedger</code>
              </div>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-slate-400">Required Parameters</span>
                </div>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
                  <li><code className="text-emerald-400">authToken</code> - Your authentication token</li>
                  <li><code className="text-emerald-400">compCode</code> - Your company code</li>
                  <li><code className="text-emerald-400">User_Id</code> - The ID of the customer</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bill-details" className="border-slate-800">
          <AccordionTrigger className="text-white hover:text-emerald-400 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
              <span>Bill Details</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-slate-300 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                Retrieve bill details for a specific customer using the fetchBillDetails endpoint.
              </p>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-slate-400">Endpoint</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 sm:h-8 px-2 text-slate-400 hover:text-emerald-400"
                    onClick={() => copyToClipboard("GET /api/fetchBillDetails", "bill-endpoint")}
                  >
                    {copied === "bill-endpoint" ? "Copied!" : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
                  </Button>
                </div>
                <code className="text-xs sm:text-sm text-emerald-400">GET /api/fetchBillDetails</code>
              </div>
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-slate-400">Required Parameters</span>
                </div>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1 text-sm sm:text-base">
                  <li><code className="text-emerald-400">authToken</code> - Your authentication token</li>
                  <li><code className="text-emerald-400">compCode</code> - Your company code</li>
                  <li><code className="text-emerald-400">User_Id</code> - The ID of the customer</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="postman-guide" className="border-slate-800">
          <AccordionTrigger className="text-white hover:text-emerald-400 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
              <span>Postman Guide</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-slate-300 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                Follow these steps to set up and use the Busy API in Postman:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Install Postman</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Download and install Postman from the official website.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Create a New Collection</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Open Postman, click on Collections in the left sidebar, and create a new collection named "Busy API".
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Set Up Environment Variables</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Create a new environment with the following variables:
                    </p>
                    <ul className="list-disc pl-4 mt-2 space-y-1 text-xs sm:text-sm">
                      <li><code className="text-emerald-400">base_url</code>: https://api.busynotify.in/api</li>
                      <li><code className="text-emerald-400">authToken</code>: Your authentication token</li>
                      <li><code className="text-emerald-400">compCode</code>: Your company code</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">4</div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Add API Requests</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Add requests for each API endpoint using the environment variables:
                    </p>
                    <div className="bg-slate-800/50 p-3 mt-2 rounded-lg">
                      <code className="text-xs sm:text-sm text-emerald-400">
                        {"{{base_url}}/fetchCustomerList?authToken={{authToken}}&compCode={{compCode}}"}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="request-flow" className="border-slate-800">
          <AccordionTrigger className="text-white hover:text-emerald-400 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
              <span>Request Flow</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-slate-300 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                The typical flow for using the Busy API involves these steps:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Fetch Customer Information</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      First, retrieve the list of customers and company details using the fetchCustomerList endpoint.
                    </p>
                    <div className="bg-slate-800/50 p-3 mt-2 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs sm:text-sm text-slate-400">Endpoint</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 sm:h-8 px-2 text-slate-400 hover:text-emerald-400"
                          onClick={() => copyToClipboard("GET https://api.busynotify.in/api/fetchCustomerList?authToken=YOUR_AUTH_TOKEN&compCode=YOUR_COMP_CODE", "flow-customer")}
                        >
                          {copied === "flow-customer" ? "Copied!" : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
                        </Button>
                      </div>
                      <code className="text-xs sm:text-sm text-emerald-400">
                        GET https://api.busynotify.in/api/fetchCustomerList?authToken=YOUR_AUTH_TOKEN&compCode=YOUR_COMP_CODE
                      </code>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Generate Customer Ledger PDF</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Use the generateLedgerPDF endpoint to create a PDF ledger for a specific customer.
                    </p>
                    <div className="bg-slate-800/50 p-3 mt-2 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs sm:text-sm text-slate-400">Endpoint</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 sm:h-8 px-2 text-slate-400 hover:text-emerald-400"
                          onClick={() => copyToClipboard("POST https://api.busynotify.in/api/generateLedgerPDF", "flow-ledger")}
                        >
                          {copied === "flow-ledger" ? "Copied!" : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
                        </Button>
                      </div>
                      <code className="text-xs sm:text-sm text-emerald-400">
                        POST https://api.busynotify.in/api/generateLedgerPDF
                      </code>
                      <div className="mt-2">
                        <span className="text-xs sm:text-sm text-slate-400">Request Body:</span>
                        <pre className="text-xs sm:text-sm text-emerald-400 mt-1">
                          {`{
  "authToken": "YOUR_AUTH_TOKEN",
  "compCode": "YOUR_COMP_CODE",
  "userId": "CUSTOMER_USER_ID"
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Generate Bill by Bill PDF</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Use the generateBillByBillPDF endpoint to create a PDF with bill-by-bill details for a customer.
                    </p>
                    <div className="bg-slate-800/50 p-3 mt-2 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs sm:text-sm text-slate-400">Endpoint</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 sm:h-8 px-2 text-slate-400 hover:text-emerald-400"
                          onClick={() => copyToClipboard("POST https://api.busynotify.in/api/generateBillByBillPDF", "flow-bill")}
                        >
                          {copied === "flow-bill" ? "Copied!" : <Copy className="h-3 w-3 sm:h-4 sm:w-4" />}
                        </Button>
                      </div>
                      <code className="text-xs sm:text-sm text-emerald-400">
                        POST https://api.busynotify.in/api/generateBillByBillPDF
                      </code>
                      <div className="mt-2">
                        <span className="text-xs sm:text-sm text-slate-400">Request Body:</span>
                        <pre className="text-xs sm:text-sm text-emerald-400 mt-1">
                          {`{
  "authToken": "YOUR_AUTH_TOKEN",
  "compCode": "YOUR_COMP_CODE",
  "userId": "CUSTOMER_USER_ID"
}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">4</div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Download PDFs</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Use the fileUrl from the API response to download the generated PDFs. Note that these links are valid for only 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="additional-params" className="border-slate-800">
          <AccordionTrigger className="text-white hover:text-emerald-400 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
              <span>Additional Parameters</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-slate-300 px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base">
                The Busy API supports additional parameters for various operations:
              </p>
              
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <h4 className="text-sm font-medium text-white mb-2">Send Message Parameters</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="py-2 px-3 text-left text-slate-400">Parameter</th>
                        <th className="py-2 px-3 text-left text-slate-400">Type</th>
                        <th className="py-2 px-3 text-left text-slate-400">Required</th>
                        <th className="py-2 px-3 text-left text-slate-400">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-3"><code className="text-emerald-400">senderId</code></td>
                        <td className="py-2 px-3">string</td>
                        <td className="py-2 px-3">Yes</td>
                        <td className="py-2 px-3">Your WhatsApp sender number</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-3"><code className="text-emerald-400">authToken</code></td>
                        <td className="py-2 px-3">string</td>
                        <td className="py-2 px-3">Yes</td>
                        <td className="py-2 px-3">Your authentication token</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-3"><code className="text-emerald-400">messageText</code></td>
                        <td className="py-2 px-3">string</td>
                        <td className="py-2 px-3">Yes</td>
                        <td className="py-2 px-3">The message content</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-3"><code className="text-emerald-400">receiverId</code></td>
                        <td className="py-2 px-3">string</td>
                        <td className="py-2 px-3">Yes</td>
                        <td className="py-2 px-3">Recipient's WhatsApp number</td>
                      </tr>
                      <tr className="border-b border-slate-700/50">
                        <td className="py-2 px-3"><code className="text-emerald-400">mediaurl</code></td>
                        <td className="py-2 px-3">string</td>
                        <td className="py-2 px-3">No</td>
                        <td className="py-2 px-3">URL of media to attach</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3"><code className="text-emerald-400">uploadFile</code></td>
                        <td className="py-2 px-3">file</td>
                        <td className="py-2 px-3">No</td>
                        <td className="py-2 px-3">File to upload (Form Data only)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="bg-slate-800/50 p-3 sm:p-4 rounded-lg">
                <h4 className="text-sm font-medium text-white mb-2">Error Handling</h4>
                <p className="text-xs sm:text-sm text-slate-400 mb-2">
                  All endpoints follow the same error response format:
                </p>
                <pre className="text-xs sm:text-sm text-emerald-400 overflow-x-auto">
                  {`{
  "status": "error",
  "code": "ERROR_CODE",
  "message": "Human readable error message"
}`}
                </pre>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  Common error codes:
                </p>
                <ul className="list-disc pl-4 mt-1 space-y-1 text-xs sm:text-sm">
                  <li><code className="text-emerald-400">AUTH_ERROR</code>: Authentication failed</li>
                  <li><code className="text-emerald-400">RATE_LIMIT</code>: Too many requests</li>
                  <li><code className="text-emerald-400">INVALID_PARAMS</code>: Missing or invalid parameters</li>
                  <li><code className="text-emerald-400">SERVER_ERROR</code>: Internal server error</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
} 