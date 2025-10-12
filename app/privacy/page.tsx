"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";

export default function PrivacyPolicy() {
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

      <div className="container mx-auto px-4 py-10 md:py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-6 md:p-8 lg:p-12 border border-slate-800">
            <div className="mb-8 md:mb-10">
              <Link href="/">
                <Button variant="ghost" className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 mb-6">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Privacy Policy</h1>
              <p className="text-slate-400">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="space-y-6 md:space-y-8 text-slate-300 text-sm md:text-base">
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">1. Introduction</h2>
                <p>
                  BusyNotify ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our payment reminder and business automation platform.
                </p>
                <p className="mt-2">
                  By using BusyNotify, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">2. Information We Collect</h2>
                <p className="mb-4">We collect several types of information for various purposes to provide and improve our service to you:</p>
                <h3 className="text-lg md:text-xl font-medium text-white mb-2">2.1 Personal Data</h3>
                <p>While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you, including but not limited to:</p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Business name and address</li>
                  <li>Payment information</li>
                </ul>

                <h3 className="text-lg md:text-xl font-medium text-white mt-4 mb-2">2.2 Usage Data</h3>
                <p>We may also collect information on how the service is accessed and used. This usage data may include:</p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                  <li>Your computer's Internet Protocol address (e.g., IP address)</li>
                  <li>Browser type and version</li>
                  <li>Pages of our service that you visit</li>
                  <li>Time and date of your visit</li>
                  <li>Time spent on those pages</li>
                  <li>Other diagnostic data</li>
                </ul>

                <h3 className="text-lg md:text-xl font-medium text-white mt-4 mb-2">2.3 Google Drive Access</h3>
                <p>
                  BusyNotify requires access to your Google Drive to enable certain features such as Invoice PDF retrieval and storage. When you grant us permission:
                </p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                  <li>We access only the specific folders and files needed for the service functionality</li>
                  <li>We process invoice PDFs to extract relevant information for payment reminders</li>
                  <li>We may store copies of these documents in our secure system</li>
                  <li>We maintain a record of file access for security and audit purposes</li>
                </ul>
                <p className="mt-2">
                  You can revoke our access to your Google Drive at any time through your Google Account settings, though this may limit certain features of BusyNotify.
                </p>

                <h3 className="text-lg md:text-xl font-medium text-white mt-4 mb-2">2.4 Mobile Application</h3>
                <p className="mb-4">
                  When you use our BusyNotify mobile application, we collect and process additional information necessary for the app's functionality:
                </p>

                <h4 className="text-lg md:text-xl font-medium text-white mt-4 mb-2">Required Permissions</h4>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                  <li>
                    <span className="font-medium text-white">Local Storage:</span>
                    <p className="ml-6 mt-1 text-slate-300">
                      We store authentication tokens and essential app data locally on your device to keep you logged in and maintain your preferences. This is necessary for the basic functionality of the app.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium text-white">Internet Access:</span>
                    <p className="ml-6 mt-1 text-slate-300">
                      Required for connecting to our servers, syncing data with Busy Accounting Software, and sending payment reminders.
                    </p>
                  </li>
                </ul>

                <h4 className="text-lg md:text-xl font-medium text-white mt-4 mb-2">Optional Permissions</h4>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                  <li>
                    <span className="font-medium text-white">Camera:</span>
                    <p className="ml-6 mt-1 text-slate-300">
                      Used for scanning barcodes and capturing transportation slip images. This permission is only requested when you attempt to use these features.
                    </p>
                  </li>
                  <li>
                    <span className="font-medium text-white">Photo Gallery:</span>
                    <p className="ml-6 mt-1 text-slate-300">
                      Allows you to select existing images from your device for uploading transportation slips. This permission is only requested when you choose to upload existing images.
                    </p>
                  </li>
                </ul>

                <h4 className="text-lg md:text-xl font-medium text-white mt-4 mb-2">Data Storage and Transfer</h4>
                <p className="mb-2 text-slate-300">
                  Images and documents captured or selected through the app are:
                </p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                  <li>Temporarily stored on your device before upload</li>
                  <li>Securely transferred to our cloud storage and/or your connected Google Drive</li>
                  <li>Automatically removed from local storage once upload is complete</li>
                  <li>Processed in accordance with our data security standards</li>
                </ul>

                <h4 className="text-lg md:text-xl font-medium text-white mt-4 mb-2">App-Specific Features</h4>
                <p className="mb-2 text-slate-300">
                  The BusyNotify mobile app provides:
                </p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                  <li>Payment reminder management and notifications</li>
                  <li>Customer information management</li>
                  <li>Busy Accounting Software reporting and analytics</li>
                  <li>Document scanning and upload capabilities</li>
                  <li>Real-time synchronization with your Busy account</li>
                </ul>

                <p className="mt-4 text-slate-300">
                  You can manage these permissions through your device's settings at any time. Disabling optional permissions may limit certain features but won't affect the core functionality of the app.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">3. Use of Data</h2>
                <p className="mb-4">BusyNotify uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To allow you to participate in interactive features of our service when you choose to do so</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our service</li>
                  <li>To monitor the usage of our service</li>
                  <li>To detect, prevent and address technical issues</li>
                  <li>To process transactions and send related information including confirmations and invoices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">4. Data Security</h2>
                <p>
                  The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
                </p>
                <p className="mt-2">
                  We implement a variety of security measures to maintain the safety of your personal information, including encryption, secure servers, and regular security assessments.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">5. Data Retention</h2>
                <p>
                  We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your personal data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">6. Your Data Protection Rights</h2>
                <p className="mb-4">
                  You have certain data protection rights. BusyNotify aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data.
                </p>
                <p className="mb-2">You have the right to:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify or correct any personal data we hold about you</li>
                  <li>Request the deletion of your personal data</li>
                  <li>Restrict the processing of your personal data</li>
                  <li>Request the transfer of your personal data</li>
                  <li>Withdraw your consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">7. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
                </p>
                <p className="mt-2">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">8. Company Information</h2>
                <p>
                  BusyNotify is operated by Wilford Technology, a company registered in India.
                </p>
                <p className="mt-2">
                  <strong className="text-white">Registered Address:</strong><br />
                  Wilford Technology<br />
                  131, C21 Mall<br />
                  Ujjain, Madhya Pradesh 456010<br />
                  India
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-2 text-emerald-400">privacy@busynotify.in</p>
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