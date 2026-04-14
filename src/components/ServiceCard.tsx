"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  bullets: string[];
}

export default function ServiceCard({ icon, title, desc, bullets }: ServiceCardProps) {
  return (
    <motion.div variants={itemVariants} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
      <p className="text-slate-600 text-sm mt-1 mb-4 flex-grow">{desc}</p>
      <ul className="space-y-2 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 mt-0.5 text-blue-700 shrink-0"/>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
