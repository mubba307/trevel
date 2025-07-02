'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function Hero() {
  return (
    <section className="bg-hero-pattern bg-cover bg-center min-h-screen text-center py-20 px-4 bg-gradient-to-br from-orange-50 to-white overflow-hidden justify-center">

      {/* Animated Airplane Symbol */}
      <motion.div
        initial={{ y: 0, rotate: 0 }}
        animate={{
          y: [0, -15, 0], // up and down floating
          rotate: [0, 15, -15, 0], // rotate left and right
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
        className="text-6xl mb-8 select-none"
        aria-label="Animated airplane symbol"
      >
        ✈️
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900"
      >
        Discover the World’s <br />
        <span className="text-orange-500">Hidden Wonders</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl mb-10"
      >
        Uncover amazing destinations you’ve never heard of before. Let your next journey begin with us.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center gap-4 mb-12 flex-wrap"
      >
        <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg">
          🌍 Find Your Trip
        </button>
        <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-100 px-8 py-3 rounded-full text-lg font-semibold">
          ✈️ Explore Tours
        </button>
      </motion.div>

      {/* 3D Tilt Featured Images */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {['Tokyo tower.jpg', 'santorina.jpg', 'califonia.webp', 'paris.jpg'].map((img, index) => (
          <Tilt
            key={index}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.05}
            transitionSpeed={1500}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
          >
            <motion.img
              src={`/image/${img}`}
              alt={`Place ${index + 1}`}
              className="rounded-2xl w-full h-44 md:h-52 object-cover hover:scale-[1.03] transition-transform duration-300 shadow-lg"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            />
          </Tilt>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="mt-12 animate-bounce text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        ↓ Scroll to explore
      </motion.div>
    </section>
  );
}
