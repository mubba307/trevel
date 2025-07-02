'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export default function Stories() {
  const stories = [
    {
      title: 'Food and Drinks in LA',
      image: '/image/LA food.jpg',
      snippet: 'Top 5 dishes and drinks you must try in Los Angeles.',
    },
    {
      title: 'Hiking in Peru',
      image: '/image/Hiking.jpg',
      snippet: 'Experience the magical trails of Machu Picchu.',
    },
    {
      title: 'Markets of Marrakech',
      image: '/image/Market.jpg',
      snippet: 'Colorful spices and souvenirs in Moroccan bazaars.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#FFF7F0] to-white">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-16 text-gray-800 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ✨ Latest Travel Stories
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {stories.map((story, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={400}
            className="rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div
              className="bg-white rounded-3xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Optimized Image */}
              <div className="relative w-full h-56">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {story.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{story.snippet}</p>

                <motion.button
                  className="text-orange-500 font-semibold hover:text-orange-600 transition duration-200 relative group"
                  whileHover={{ x: 5, textShadow: '0 0 8px #fb923c' }}
                >
                  Read more →
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
