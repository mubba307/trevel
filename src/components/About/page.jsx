'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="max-w-3xl mx-auto p-8 text-center text-gray-50">
      <motion.h1
        className="text-5xl font-extrabold mb-6 text-blue-400 drop-shadow-lg"
        initial={{ opacity: 0, y: -30, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ perspective: 600 }}
      >
        About Us
      </motion.h1>
      
      <motion.p
        className="text-lg leading-relaxed bg-gradient-to-r from-blue-900/60 to-blue-800/70 rounded-3xl p-6 shadow-2xl"
        initial={{ opacity: 0, scale: 0.95, rotateY: 8 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        style={{ perspective: 600 }}
      >
        ✈️ Welcome to your gateway to unforgettable adventures! At <strong>Travel Platform</strong>, we turn your travel dreams into reality—whether it’s soaking in sunsets in Santorini, exploring the vibrant streets of Tokyo, or sailing through the magic of Venice. Our mission is to connect explorers with handpicked destinations, seamless booking experiences, and expert travel tips that make every journey effortless and exciting. Let the world become your playground—start your story with us today!
      </motion.p>
    </main>
  );
}
