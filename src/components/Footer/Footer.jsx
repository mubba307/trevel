'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-tr from-gray-900 to-gray-800 text-white py-12 px-6 font-semibold"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
        {/* Logo / Brand */}
        <div className="text-3xl font-extrabold text-orange-400 tracking-widest hover:text-white transition whitespace-nowrap">
          🌍 Globe Trekker
        </div>

        {/* Social Media */}
        <div className="flex gap-5 flex-wrap justify-center">
          <a
            href="#"
            aria-label="Visit our Facebook page"
            className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-orange-500 transition-colors"
          >
            <Facebook size={22} />
          </a>
          <a
            href="#"
            aria-label="Visit our Instagram profile"
            className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-orange-500 transition-colors"
          >
            <Instagram size={22} />
          </a>
          <a
            href="#"
            aria-label="Visit our Twitter profile"
            className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-orange-500 transition-colors"
          >
            <Twitter size={22} />
          </a>
          <a
            href="mailto:info@globetrekker.com"
            aria-label="Send us an email"
            className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-orange-500 transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 whitespace-nowrap">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-white font-medium">Globe Trekker</span>. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
