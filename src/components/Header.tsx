"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl bg-blue-900 grid place-items-center text-white font-bold shadow-sm">DI</div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-slate-900">Drishti Infotech</span>
            <span className="text-xs text-slate-500">Innovating Tomorrow, Today</span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
          <Link href="/services" className="text-slate-600 hover:text-slate-900 transition-colors">Services</Link>
          <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">About Us</Link>
          <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</Link>
        </div>
        <div className="hidden md:block">
          <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-2xl">Get a Quote</Button>
        </div>
      </nav>
    </header>
  );
}
