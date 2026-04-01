"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Shield, Zap, Code2, Server, Smartphone, ShoppingCart, Cog } from "lucide-react";

const colors = {
  primary: "#1e3a8a", // blue-900
  primaryAccent: "#3b82f6", // blue-500
  dark: "#0f172a", // slate-900
  mid: "#1f2937", // gray-800
  light: "#f8fafc", // slate-50
};

const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
};

export default function DrishtiInfotechSite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-blue-900 grid place-items-center text-white font-bold shadow-sm">DI</div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-900">Drishti Infotech</span>
              <span className="text-xs text-slate-500">Innovating Tomorrow, Today</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="text-slate-600 hover:text-slate-900">Home</a>
            <a href="#services" className="text-slate-600 hover:text-slate-900">Services</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900">About</a>
            <a href="#portfolio" className="text-slate-600 hover:text-slate-900">Projects</a>
            <a href="#careers" className="text-slate-600 hover:text-slate-900">Careers</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900">Contact</a>
          </div>
          <div className="hidden md:block">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-2xl">Get a Quote</Button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <motion.div variants={container} initial="hidden" animate="show" className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={item} className="space-y-6">
              <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-xl">Enterprise-Grade IT Solutions</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">Your Vision, <span className="text-blue-700">Our Technology</span>.</h1>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">Drishti Infotech builds high-quality, reliable, and scalable software—across web, mobile, cloud, and data—to help businesses move faster with confidence.</p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-blue-900 hover:bg-blue-800 rounded-2xl">Start a Project</Button>
                <Button variant="outline" className="rounded-2xl">Explore Services</Button>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <span className="flex items-center text-sm text-slate-600"><Shield className="h-4 w-4 mr-2 text-blue-700"/>Security-first</span>
                <span className="flex items-center text-sm text-slate-600"><Zap className="h-4 w-4 mr-2 text-blue-700"/>Rapid delivery</span>
                <span className="flex items-center text-sm text-slate-600"><CheckCircle2 className="h-4 w-4 mr-2 text-blue-700"/>Proven quality</span>
              </div>
            </motion.div>
            <motion.div variants={item} className="relative">
              <div className="aspect-[4/3] rounded-3xl border bg-white p-1 shadow-xl">
                <div className="h-full w-full rounded-2xl bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 p-6 flex flex-col justify-between">
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(9)].map((_, i) => (
                      <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="h-20 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm" />
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-sm/5 opacity-90">Delivery dashboard</p>
                      <p className="text-xl font-semibold">99.95% uptime • SOC2 practices</p>
                    </div>
                    <Button variant="secondary" className="rounded-xl bg-white/90 hover:bg-white text-blue-900">Live Demo</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-16 lg:py-24 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Services</h2>
              <p className="text-slate-600 mt-2 max-w-2xl">Our specialized domains designed to support digital transformation and scalable business operations.</p>
            </div>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* E-Commerce Services */}
            <ServiceCard 
              icon={<ShoppingCart className="h-6 w-6"/>}
              title="E-Commerce Services" 
              desc="Online platforms, digital commerce operations, SaaS-based e commerce systems."
              bullets={["E-Commerce Operator Services", "OIDAR Services", "Digital / Online Services"]}
            />

            {/* Mobile Application Development */}
            <ServiceCard 
              icon={<Smartphone className="h-6 w-6"/>}
              title="Mobile Application Development" 
              desc="Development of Android, iOS, and hybrid cross-platform applications."
              bullets={["Information Technology Services", "Application Development", "Custom Software Development", "IT Consulting Services"]}
            />

            {/* Software Development */}
            <ServiceCard 
              icon={<Code2 className="h-6 w-6"/>}
              title="Software Development" 
              desc="Web development, automation tools, custom systems, and integrations."
              bullets={["Software Development Services", "Web Development", "Programming Services", "Software Maintenance & Support"]}
            />

            {/* Operational Services */}
            <ServiceCard 
              icon={<Cog className="h-6 w-6"/>}
              title="Operational / Business Services" 
              desc="Outsourcing, data operations, technical support, and managed services."
              bullets={["Business Support Services", "Back Office Operations", "Technical Support Services", "Data Processing Services", "Management & Consultancy Services"]}
            />
          </motion.div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-16 lg:py-24 bg-slate-50 border-y">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-slate-900">Why Drishti</h3>
              <p className="text-slate-600 mt-3">We combine engineering excellence with secure delivery to reduce your time-to-value and operational risk.</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                {icon: <Shield className="h-5 w-5"/>, title: "Security by Design", desc: "OWASP, SOC 2-aligned practices baked into every stage."}, 
                {icon: <Zap className="h-5 w-5"/>, title: "Accelerated Delivery", desc: "Agile squads, reusable accelerators, and robust CI/CD."}, 
                {icon: <Server className="h-5 w-5"/>, title: "Scalable Architectures", desc: "Cloud-native, resilient, and cost-efficient foundations."}, 
                {icon: <CheckCircle2 className="h-5 w-5"/>, title: "Quality Assured", desc: "Automated testing, code reviews, and SRE best practices."}
              ].map((d, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-blue-50 text-blue-700 grid place-items-center">{d.icon}</div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{d.title}</h4>
                      <p className="text-sm text-slate-600 mt-1">{d.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">About Us</h2>
              <p className="text-slate-600 mt-4">Drishti Infotech is a technology-driven organization delivering custom software, cloud, data, and consulting services. We partner with clients across industries to build secure, scalable solutions that unlock growth.</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700"/><span><b>Mission:</b> Deliver measurable business value through engineering excellence.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700"/><span><b>Vision:</b> Be a trusted partner enabling digital transformation at speed and scale.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-700"/><span><b>Values:</b> Trust, craftsmanship, transparency, and continuous improvement.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Selected Projects</h2>
              <p className="text-slate-600 mt-2 max-w-2xl">A snapshot of outcomes across web, mobile, data, and cloud platforms.</p>
            </div>
            <Button variant="outline" className="rounded-2xl">View All Case Studies</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "E commerce Platform Revamp", tag: "Web", result: "+38% conversion", color: "from-blue-600 to-blue-400" },
              { title: "Field Service Mobile Suite", tag: "Mobile", result: "-44% MTTR", color: "from-slate-700 to-slate-500" },
              { title: "Cloud Cost Optimization", tag: "Cloud", result: "-27% spend", color: "from-blue-800 to-blue-600" },
            ].map((p, i) => (
              <Card key={i} className="rounded-2xl overflow-hidden shadow-sm">
                <div className={`h-36 bg-gradient-to-br ${p.color}`}></div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <Badge className="rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100">{p.tag}</Badge>
                    <span className="text-sm text-slate-500">Outcome: <b className="text-slate-900">{p.result}</b></span>
                  </div>
                  <h3 className="mt-3 font-semibold text-lg text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">Brief case study summary goes here highlighting the business impact and technology stack.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Careers</h2>
            <p className="text-slate-600 mt-2">Join a team that values craftsmanship, collaboration, and continuous learning.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { role: "Senior React Engineer", type: "Full-time", location: "Hybrid", stack: "React, TypeScript, Next.js" },
              { role: "Cloud DevOps Engineer", type: "Full-time", location: "Remote", stack: "Azure/AWS, K8s, Terraform" },
              { role: "Data Engineer", type: "Full-time", location: "Onsite", stack: "Python, DBT, Airflow" },
            ].map((j, i) => (
              <Card key={i} className="rounded-2xl border shadow-sm">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900">{j.role}</h3>
                    <Badge className="rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100">{j.type}</Badge>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{j.location}</p>
                  <p className="text-sm text-slate-700 mt-3"><b>Stack:</b> {j.stack}</p>
                  <div className="mt-4 flex gap-2">
                    <Button className="rounded-2xl bg-blue-900 hover:bg-blue-800">Apply</Button>
                    <Button variant="outline" className="rounded-2xl">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 lg:py-24 bg-slate-50 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Let’s Build Something Great</h2>
              <p className="text-slate-600 mt-3">Tell us about your goals and we’ll recommend the best path—whether a quick POC or a full-scale product build.</p>
              <div className="mt-6 rounded-2xl border p-6 bg-white shadow-sm">
                <dl className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-slate-500">Email</dt>
                    <dd className="font-medium text-slate-900">hello@drishtiinfotech.com</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500">Phone</dt>
                    <dd className="font-medium text-slate-900">+91 00000 00000</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-slate-500">Address</dt>
                    <dd className="font-medium text-slate-900">Vadodara, Gujarat, India</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Full name" className="rounded-xl" required />
                  <Input type="email" placeholder="Work email" className="rounded-xl" required />
                </div>
                <Input placeholder="Company" className="rounded-xl" />
                <Input placeholder="Project budget (optional)" className="rounded-xl" />
                <Textarea placeholder="Tell us about your project" className="rounded-xl" rows={5} />
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500">By submitting, you agree to our privacy policy.</div>
                  <Button className="rounded-2xl bg-blue-900 hover:bg-blue-800">Send message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="h-10 w-10 rounded-2xl bg-blue-600 grid place-items-center text-white font-bold mb-3">DI</div>
              <p className="text-sm text-slate-400 max-w-xs">Smart solutions for a digital world. We help teams build secure, scalable, and delightful products.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#careers" className="hover:text-white">Careers</a></li>
                <li><a href="#portfolio" className="hover:text-white">Projects</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
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
              <a href="#" className="hover:text-slate-300">Privacy</a>
              <a href="#" className="hover:text-slate-300">Terms</a>
              <a href="#" className="hover:text-slate-300">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc, bullets }: { icon: React.ReactNode; title: string; desc: string; bullets: string[] }) {
  return (
    <motion.div variants={item} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center mb-3">{icon}</div>
      <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
      <p className="text-slate-600 text-sm mt-1">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-700"/><span>{b}</span></li>
        ))}
      </ul>
    </motion.div>
  );
}
