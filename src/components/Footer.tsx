"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.png" alt="Drishti Infotech Logo" width={40} height={40} className="object-contain mb-3" />
            <p className="text-sm text-slate-400 max-w-xs">Smart solutions for a digital world. We help teams build secure, scalable, and delightful products.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Custom Software</li>
              <li>Web & Mobile Apps</li>
              <li>IT Consulting</li>
              <li>Data & Automation</li>
              <li>Cloud Solutions</li>
              <li>Support & Maintenance</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Subscribe</h4>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="rounded-xl bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500" />
              <Button className="rounded-xl bg-blue-600 hover:bg-blue-500">Join</Button>
            </div>
            <p className="text-xs text-slate-500 mt-3">Monthly updates. No spam.</p>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 text-xs text-slate-500 flex flex-wrap justify-between">
          <span>© {new Date().getFullYear()} Drishti Infotech. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-slate-300 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
