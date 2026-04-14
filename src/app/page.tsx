"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, CheckCircle2, Server } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/constants";

export default function LandingPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const blob1Y = useTransform(scrollY, [0, 2000], [0, 400]);
  const blob2Y = useTransform(scrollY, [0, 2000], [0, -400]);

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div style={{ y: blob1Y }} className="absolute top-[10%] -left-20 w-96 h-96 bg-blue-100/40 blur-[100px] rounded-full" />
        <motion.div style={{ y: blob2Y }} className="absolute bottom-[10%] -right-20 w-[30rem] h-[30rem] bg-indigo-100/40 blur-[120px] rounded-full" />
      </div>
      <Header />
      <section id="home" className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.img style={{ y: heroY }} src="/hero-bg-v2.png" alt="Tech" className="h-[120%] w-full object-cover scale-110" />
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-500/20 text-blue-200 border-blue-500/30 hover:bg-blue-500/30 backdrop-blur-md rounded-xl">Enterprise-Grade IT Solutions</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">Your Vision, <span className="text-blue-400">Our Technology</span>.</h1>
              <p className="text-slate-100 text-lg leading-relaxed max-w-xl opacity-90">Drishti Infotech builds high-quality, reliable, and scalable software to help businesses move faster with confidence.</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact"><Button className="bg-blue-600 hover:bg-blue-500 rounded-2xl text-white px-8 h-12 text-lg">Start a Project</Button></Link>
                <Link href="/services"><Button variant="outline" className="rounded-2xl border-white/20 text-white hover:bg-white/10 px-8 h-12 text-lg">Our Services</Button></Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-white/5 p-1 shadow-2xl backdrop-blur-sm">
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-blue-900/40 via-blue-600/40 to-transparent p-6 flex flex-col justify-between">
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="h-20 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm" />
                    ))}
                  </div>
                  <div className="text-white">
                    <p className="text-sm opacity-80">SOC2 Practices • 99.9% Uptime</p>
                    <p className="text-lg font-semibold tracking-tight">Enterprise Infrastructure Ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-24 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-end mb-16 gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight max-w-lg">Expert solutions for every digital challenge</h2>
            <Link href="/services"><Button variant="ghost" className="text-blue-600 font-bold hover:text-blue-700 hover:bg-blue-50">View all 11+ services →</Button></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((s, i) => <ServiceCard key={i} {...s} />)}
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US - ZIGZAG TIMELINE */}
      <section id="why-us" className="py-24 bg-white overflow-hidden border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Why Choose <span className="text-blue-600">Drishti</span></h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We combine engineering excellence with secure delivery to reduce your time-to-value and risk.</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12 md:space-y-0">
              {[
                { icon: <Shield className="h-6 w-6" />, title: "Security by Design", desc: "OWASP, SOC 2-aligned practices baked into every stage of development to protect your data." },
                { icon: <Zap className="h-6 w-6" />, title: "Accelerated Delivery", desc: "Agile squads, reusable accelerators, and robust CI/CD pipelines to launch products faster." },
                { icon: <Server className="h-6 w-6" />, title: "Scalable Architectures", desc: "Cloud-native, resilient, and cost-efficient foundations built for future growth." },
                { icon: <CheckCircle2 className="h-6 w-6" />, title: "Quality Assured", desc: "Automated testing, code reviews, and SRE best practices ensuring 99.9% reliability." }
              ].map((d, i) => (
                <div key={i} className="relative flex flex-col md:flex-row items-center">
                  <div className={`flex-1 w-full order-2 ${i % 2 === 0 ? "md:order-1" : "md:order-3"}`}>
                    {i % 2 === 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all md:text-right"
                      >
                        <div className="flex items-center gap-4 mb-3 md:flex-row-reverse">
                          <div className="h-12 w-12 rounded-2xl bg-blue-900 text-white grid place-items-center shadow-lg shadow-blue-900/20">{d.icon}</div>
                          <h3 className="text-xl font-bold text-slate-900">{d.title}</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">{d.desc}</p>
                      </motion.div>
                    )}
                  </div>
                  <div className="relative h-20 md:h-auto flex items-center justify-center md:mx-12 order-1 md:order-2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="h-12 w-12 rounded-full bg-blue-900 text-white border-4 border-white shadow-2xl flex items-center justify-center font-bold text-sm z-10"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.div>
                  </div>
                  <div className={`flex-1 w-full order-3 ${i % 2 === 1 ? "md:order-3" : "md:order-1"}`}>
                    {i % 2 === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className="h-12 w-12 rounded-2xl bg-blue-900 text-white grid place-items-center shadow-lg shadow-blue-900/20">{d.icon}</div>
                          <h3 className="text-xl font-bold text-slate-900">{d.title}</h3>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">{d.desc}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
