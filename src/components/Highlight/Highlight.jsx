'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export default function Highlights() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12 text-gray-800"
      >
        Trekker’s <span className="text-orange-500">Highlights</span>
      </motion.h2>

      {/* Testimonial Card with 3D Tilt */}
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.15}
        scale={1.05}
        transitionSpeed={450}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 backdrop-blur"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 140, 0, 0.4)' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Profile Image */}
          <div className="relative w-32 h-32 flex-shrink-0">
            <Image
              src="/image/maria.jpg" // Replace with actual path
              alt="Maria Angelou"
              className="rounded-full object-cover border-4 border-orange-400 shadow-lg"
              fill
              sizes="128px"
            />
          </div>

          {/* Testimonial Content */}
          <div className="text-center md:text-left">
            <p className="text-gray-700 italic text-lg mb-4 leading-relaxed">
              “The best travel experience I’ve ever had! The views were breathtaking, and everything was perfectly planned.”
            </p>

            {/* Star Ratings with glowing effect */}
            <div className="flex justify-center md:justify-start items-center mb-2 space-x-1">
              {[...Array(5)].map((_, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.3, textShadow: '0 0 8px #f59e0b' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Star size={20} className="text-yellow-500 fill-yellow-400" />
                </motion.div>
              ))}
            </div>

            {/* Reviewer Info */}
            <p className="font-bold text-lg text-orange-600">– Maria Angelou</p>
            <span className="text-sm text-green-600 font-medium">✔ Verified Trekker</span>
          </div>
        </motion.div>
      </Tilt>
    </section>
  );
}
