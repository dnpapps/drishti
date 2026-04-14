"use client";

import React from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Shield, Zap, Server, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 2000], [0, 300]);

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div 
           style={{ y: blob1Y }}
           className="absolute top-[20%] -left-20 w-96 h-96 bg-blue-100/40 blur-[100px] rounded-full"
        />
      </div>

      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="bg-blue-900 py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              Why Choose <span className="text-blue-400">Drishti</span>
            </motion.h1>
            <p className="text-blue-100 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              We've been delivering high-performance digital solutions since our inception, combining engineering excellence with a security-first mindset.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US (TIMELINE) */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 hidden md:block" />

              <div className="space-y-12 md:space-y-0">
                {[
                  {icon: <Shield className="h-6 w-6"/>, title: "Security by Design", desc: "OWASP, SOC 2-aligned practices baked into every stage of development to protect your data."}, 
                  {icon: <Zap className="h-6 w-6"/>, title: "Accelerated Delivery", desc: "Agile squads, reusable accelerators, and robust CI/CD pipelines to launch products faster."}, 
                  {icon: <Server className="h-6 w-6"/>, title: "Scalable Architectures", desc: "Cloud-native, resilient, and cost-efficient foundations built for future growth."}, 
                  {icon: <CheckCircle2 className="h-6 w-6"/>, title: "Quality Assured", desc: "Automated testing, code reviews, and SRE best practices ensuring 99.9% reliability."}
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

        {/* STATS SECTION */}
        <section className="py-20 bg-slate-50 border-y">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl font-bold text-blue-900">100+</div>
                        <div className="text-slate-500 text-sm mt-1">Projects Delivered</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-blue-900">50+</div>
                        <div className="text-slate-500 text-sm mt-1">Happy Clients</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-blue-900">10+</div>
                        <div className="text-slate-500 text-sm mt-1">Years Experience</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-blue-900">24/7</div>
                        <div className="text-slate-500 text-sm mt-1">Support</div>
                    </div>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
