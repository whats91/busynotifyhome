import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://busynotify.in'),
  title: {
    default: 'BusyNotify - Smart Payment Reminders for Modern Businesses',
    template: '%s | BusyNotify'
  },
  description: 'Automate your payment collection process with BusyNotify\'s intelligent reminder system. Streamline workflows, improve cash flow, and never miss a payment.',
  keywords: ['payment reminders', 'business automation', 'payment collection', 'ERP chatbot', 'WhatsApp business', 'busy software', 'payment automation'],
  authors: [{ name: 'BusyNotify' }],
  creator: 'BusyNotify',
  publisher: 'BusyNotify',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://busynotify.in',
    title: 'BusyNotify - Smart Payment Reminders for Modern Businesses',
    description: 'Automate your payment collection process with BusyNotify\'s intelligent reminder system. Streamline workflows, improve cash flow, and never miss a payment.',
    siteName: 'BusyNotify',
    images: [{
      url: 'https://busynotify.in/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'BusyNotify - Smart Payment Collection'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BusyNotify - Smart Payment Reminders for Modern Businesses',
    description: 'Automate your payment collection process with BusyNotify\'s intelligent reminder system. Streamline workflows, improve cash flow, and never miss a payment.',
    images: ['https://busynotify.in/twitter-image.jpg'],
    creator: '@busynotify',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://busynotify.in" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to important third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "BusyNotify",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "29",
                "priceCurrency": "USD"
              },
              "description": "Automate your payment collection process with BusyNotify's intelligent reminder system.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-[#0f172a] to-black overflow-x-hidden`}>
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        <main className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}