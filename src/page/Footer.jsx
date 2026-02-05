import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  FileText,
  Mail,
  Shield,
  TrendingUp,
} from "lucide-react";

import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp 
} from 'react-icons/fa';

import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    product: [
      { name: "How It Works", href: "#how-it-works" },
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API Access", href: "#api" },
    ],
    resources: [
      { name: "Resume Tips", href: "#tips" },
      { name: "ATS Guide", href: "#guide" },
      { name: "Sample Resumes", href: "#samples" },
      { name: "Blog", href: "#blog" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/syed-ibrahim786/resumater",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/syed-ibrahim2003",
    },
    {
      name: "Twitter",
      icon: FaWhatsapp,
      href: "https://wa.me/919384799362",
    },
  ];
  return (
    <>
      <Outlet />
      <footer className="p-6 bg-bg border border-default">
        <div className="flex gap-2 items-center mb-4">
          <b className="flex justify-center items-center text-white w-10 h-10  rounded-lg bg-primary">
            <FileText className="" />
          </b>
          <b className="text-2xl font-bold text-gradient">resuMATER</b>
        </div>
        <p className="w-[80%] md:w-[60%] text-sm text-muted mb-6">
          AI-powered ATS resume analyzer that helps job seekers optimize their
          resumes and land more interviews with instant, actionable feedback.
        </p>

        <div className="flex flex-col gap-4 w-fit capitalize mb-10 ">
          <b className=" text-accent ">have questions?</b>

          <a
            href="mailto:asyedibrahim7860@gmail.com"
            className="px-4 py-2 rounded-lg flex gap-2  capitalize font-semibold text-white bg-primary"
          >
            <Mail />
            get in touch
          </a>
        </div>


        {/* Social Links */}
        <div className="flex gap-3 mb-10">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-bg border-2 border-default rounded-lg text-muted hover:text-accent hover:border-accent transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

      <div className="flex flex-col sm:flex-row sm:gap-10">
        {/* Product Links */}
        
        <div className=" mb-6">
          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            Product
          </h4>
          <ul className="space-y-2">
            {footerLinks.product.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-muted hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-accent" />
            Resources
          </h4>
          <ul className="space-y-2">
            {footerLinks.resources.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-muted hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        </div>

        <div className=" mt-10 py-6  flex flex-col justify-center items-center text-center text-accent gap-4 border-t-2 border-b-2 border-default">
          <p>
            © {currentYear} resuMATER. All rights reserved. Built with ❤️ by
            Syed Ibrahim
          </p>
          <div className="flex items-center gap-2 sm:gap-4 text-sm underline">
            <a href="">terms of service</a>
            <a href="">privacy policy</a>
            <a href="">contacts</a>
            
          </div>
        </div>

        <p className="flex items-center justify-center w-fit mx-auto mt-6 px-3 py-1 rounded-2xl bg-green-400/30 border-2 text-white text-[10px] font-semibold border-green-700">
          <Shield />
          <strong className="text-success">100% Secure</strong> - Your resume
          data is never stored
        </p>
      </footer>
    </>
  );
};

export default Footer;
