"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0f172a] to-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-overlay filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="backdrop-blur-xl bg-slate-900/50 rounded-2xl px-6 py-3 flex justify-between items-center border border-slate-800">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/mainLogo_light.svg" 
              alt="BusyNotify Logo" 
              width={180} 
              height={36} 
              className="h-8 w-auto" 
              priority
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">Home</Link>
            <Link href="/pricing" className="text-slate-300 hover:text-emerald-400 transition-colors">Pricing</Link>
            <Link href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors">About</Link>
            <Link href="/blog" className="text-emerald-400">Blog</Link>
          </div>
          <Button variant="ghost" className="text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50">Sign In</Button>
        </div>
      </nav>

      {/* Blog Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-400 text-sm font-medium tracking-wider uppercase mb-3">Our Blog</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Insights</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights in business communication.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                  <p className="text-slate-300 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="relative mt-20 max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 rounded-3xl filter blur-3xl" />
          <div className="relative backdrop-blur-xl bg-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-800 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-slate-300 mb-6">Get the latest blog posts and updates delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const blogPosts = [
  {
    title: "10 Ways to Improve Your Business Communication",
    excerpt: "Learn effective strategies to enhance your business communication and boost productivity.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/blog/communication.jpg",
    slug: "improve-business-communication"
  },
  {
    title: "The Future of Remote Work",
    excerpt: "Explore the latest trends and best practices for managing remote teams effectively.",
    date: "March 12, 2024",
    readTime: "4 min read",
    image: "/blog/remote-work.jpg",
    slug: "future-of-remote-work"
  },
  {
    title: "Maximizing Productivity with BusyNotify",
    excerpt: "Discover how BusyNotify can help streamline your business operations.",
    date: "March 10, 2024",
    readTime: "3 min read",
    image: "/blog/productivity.jpg",
    slug: "maximizing-productivity"
  },
  {
    title: "Effective Team Collaboration Strategies",
    excerpt: "Learn the best practices for fostering collaboration in your team.",
    date: "March 8, 2024",
    readTime: "6 min read",
    image: "/blog/collaboration.jpg",
    slug: "team-collaboration-strategies"
  },
  {
    title: "Digital Transformation in Business",
    excerpt: "Understand the key aspects of digital transformation and its impact.",
    date: "March 5, 2024",
    readTime: "5 min read",
    image: "/blog/digital-transform.jpg",
    slug: "digital-transformation"
  },
  {
    title: "Customer Service Best Practices",
    excerpt: "Improve your customer service with these proven strategies and tips.",
    date: "March 3, 2024",
    readTime: "4 min read",
    image: "/blog/customer-service.jpg",
    slug: "customer-service-best-practices"
  }
]; 