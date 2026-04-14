import React from "react";
import { Layout, ShoppingBag, Printer, Globe, Cloud, Palette, Smartphone, Share2, Database, Search, Megaphone } from "lucide-react";

export const services = [
  {
    icon: <Layout className="h-6 w-6"/>,
    title: "WordPress Development",
    desc: "High-quality, custom WordPress sites tailored to your business needs, focusing on performance, security, and scalability.",
    bullets: ["Custom Themes", "Plugin Development", "Optimization"]
  },
  {
    icon: <ShoppingBag className="h-6 w-6"/>,
    title: "Shopify Development",
    desc: "Expert Shopify store development and customization to help you build a high-converting e-commerce business.",
    bullets: ["Store Setup", "Liquid Coding", "App Integration"]
  },
  {
    icon: <Printer className="h-6 w-6"/>,
    title: "DecoNetwork Sites",
    desc: "Specialized setup and customization for DecoNetwork platforms, empowering your apparel and print business.",
    bullets: ["Platform Setup", "Template Design", "Workflow Configuration"]
  },
  {
    icon: <Globe className="h-6 w-6"/>,
    title: "Wix Studio",
    desc: "Professional Wix Studio design and development for stunning, highly interactive websites that stand out.",
    bullets: ["Advanced Design", "Interaction Setup", "SEO Ready"]
  },
  {
    icon: <Cloud className="h-6 w-6"/>,
    title: "AWS Services",
    desc: "Scalable cloud infrastructure setup, management, and optimization using Amazon Web Services.",
    bullets: ["Cloud Migration", "Server Management", "DevOps Automation"]
  },
  {
    icon: <Palette className="h-6 w-6"/>,
    title: "Custom Web Designs",
    desc: "Unique, user-centric web designs that reflect your brand identity and provide an exceptional user experience.",
    bullets: ["UI/UX Design", "Brand Guidelines", "Responsive Layouts"]
  },
  {
    icon: <Smartphone className="h-6 w-6"/>,
    title: "Mobile App",
    desc: "End-to-end mobile application development for iOS and Android, focusing on performance and user engagement.",
    bullets: ["iOS/Android Dev", "Native Performance", "Cross-Platform"]
  },
  {
    icon: <Share2 className="h-6 w-6"/>,
    title: "Social Media Handling",
    desc: "Strategic social media management to grow your brand presence, engage your audience, and drive results.",
    bullets: ["Content Strategy", "Community Management", "Ad Campaigns"]
  },
  {
    icon: <Database className="h-6 w-6"/>,
    title: "ERP Service",
    desc: "Custom ERP solutions to streamline your business processes, enhance efficiency, and provide real-time insights.",
    bullets: ["Process Automation", "System Integration", "Business Intelligence"]
  },
  {
    icon: <Search className="h-6 w-6"/>,
    title: "SEO Services",
    desc: "Data-driven search engine optimization to improve your search rankings, visibility, and organic traffic.",
    bullets: ["Technical SEO", "Content Optimization", "Link Building"]
  },
  {
    icon: <Megaphone className="h-6 w-6"/>,
    title: "Digital Marketing",
    desc: "Comprehensive digital marketing strategies including PPC, content marketing, and email campaigns to grow your business.",
    bullets: ["Performance Marketing", "Brand Positioning", "Lead Generation"]
  }
];
