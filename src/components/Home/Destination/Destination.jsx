'use client';
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function Destinations() {
  const places = [
    { name: "Santorini, Greece", image: "/image/santorina.jpg" },
    { name: "Paris, France", image: "/image/paris.jpg" },
    { name: "Tokyo, Japan", image: "/image/tokyo tower.jpg" },
    { name: "California, America", image: "/image/califonia.webp" },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 mb-12"
      >
        🌍 Explore Top Destinations
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {places.map((place, index) => (
          <motion.div
            key={place.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}

            // Idle floating animation (subtle up/down)
            animate={{
              y: [0, -10, 0],
              rotateZ: [0, 1, 0],
            }}
            transitiom={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 ease-in-out"
            >
              <div className="relative group cursor-pointer">
                {/* Image */}
                <Image
                  src={place.image}
                  alt={place.name}
                  width={400}
                  height={250}
                  className="object-cover w-full h-60 group-hover:scale-110 transition-transform duration-700"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-50 transition duration-500" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                  <h3 className="text-xl font-semibold">{place.name}</h3>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
