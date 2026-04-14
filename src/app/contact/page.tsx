"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 1000], [0, 200]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSending(true);
    const toastId = toast.loading("Sending your message...");
    try {
      await emailjs.sendForm("service_7bfhcqx", "template_tc4i82p", formRef.current, "R71QCheFSrD0wEpOn");
      toast.success("Message sent successfully!", { id: toastId });
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message.", { id: toastId });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden relative">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <motion.div style={{ y: blob1Y }} className="absolute bottom-[20%] -left-20 w-[30rem] h-[30rem] bg-indigo-100/40 blur-[120px] rounded-full" />
      </div>
      <Header />
      <main className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Get in <span className="text-blue-600">Touch</span></h1>
              <p className="text-slate-600 text-lg leading-relaxed">Let's build something great together. We're ready to help you with your next digital masterpiece.</p>
              <div className="space-y-6 bg-slate-50 p-8 rounded-[2rem]">
                <div>
                  <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Email</dt>
                  <dd className="text-xl font-medium text-slate-900">tmaharshi7@gmail.com</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Phone</dt>
                  <dd className="text-xl font-medium text-slate-900">+91 84698 11808</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Address</dt>
                  <dd className="text-xl font-medium text-slate-900">Vadodara, Gujarat, India</dd>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[3rem] border border-slate-100 p-8 md:p-12 shadow-2xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input name="from_name" placeholder="Full name" className="rounded-xl h-12" required />
                  <Input name="reply_to" type="email" placeholder="Work email" className="rounded-xl h-12" required />
                </div>
                <Input name="company" placeholder="Company" className="rounded-xl h-12" />
                <Textarea name="message" placeholder="Tell us about your project" className="rounded-xl" rows={6} required />
                <Button type="submit" disabled={isSending} className="w-full rounded-2xl bg-blue-900 hover:bg-blue-800 h-14 text-lg font-bold">
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
