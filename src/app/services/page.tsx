"use client";

import React from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/constants";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ServicesPage() {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 500], [0, 150]);
  const blob1Y = useTransform(scrollY, [0, 2000], [0, 300]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative overflow-hidden">
      {/* BACKGROUND ELEMENTS */}
      <motion.div 
         style={{ y: blob1Y }}
         className="absolute top-[20%] -right-20 w-96 h-96 bg-blue-100/40 blur-[100px] rounded-full -z-10"
      />

      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-blue-900 py-20 lg:py-32 text-white relative overflow-hidden">
          <motion.div 
            style={{ y: headerY }}
            className="absolute inset-0 opacity-10"
          >
            <div className="absolute top-0 left-0 w-96 h-96 bg-white blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
          </motion.div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Our <span className="text-blue-400">Services</span></h1>
              <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Comprehensive digital solutions tailored to help your business scale, secure your assets, and deliver exceptional experiences to your customers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {services.map((service, i) => (
                <div key={i} className="h-full">
                   <ServiceCard {...service} />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-slate-50 border-y">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
             <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-blue-100 space-y-6 max-w-4xl mx-auto">
               <h2 className="text-3xl font-bold text-slate-900">Need a Custom Solution?</h2>
               <p className="text-slate-600 text-lg">Every business is unique. We specialize in building bespoke systems that fit your specific requirements perfectly.</p>
               <div className="pt-4">
                 <a href="/#contact">
                   <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-2xl px-10 py-4 font-bold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1">
                     Talk to an Expert
                   </button>
                 </a>
               </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
