'use client';

import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = () => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setError('Please enter a valid email address');
      return;
    }

    setSubscribed(true);
    setEmail('');
    setError('');
  };

  return (
    <section
      className="bg-cover bg-center py-24 px-4 text-white"
      style={{ backgroundImage: "url('/images/newsletter-bg.jpg')" }}
    >
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        perspective={1000}
        scale={1.03}
        glareEnable={true}
        glareMaxOpacity={0.15}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          className="bg-black/70 p-10 rounded-3xl text-center backdrop-blur-sm shadow-2xl shadow-orange-700/40"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-extrabold leading-tight mb-6 text-orange-400 drop-shadow-lg">
            Get Travel Inspiration <br />
            <span className="text-white">Straight to Your Inbox</span>
          </h2>

          {!subscribed ? (
            <>
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-3 w-full rounded-xl text-black focus:outline-none focus:ring-4 focus:ring-orange-500 mb-4 shadow-inner shadow-orange-500/50"
                whileFocus={{ scale: 1.02, boxShadow: '0 0 12px #fb923c' }}
              />
              <motion.button
                onClick={handleSubscribe}
                className="bg-orange-500 px-6 py-3 w-full rounded-xl text-white font-bold uppercase tracking-wide hover:bg-orange-600 transition duration-200 shadow-lg shadow-orange-600/60"
                whileHover={{ scale: 1.07, boxShadow: '0 0 20px #fb923c' }}
                whileTap={{ scale: 0.95, boxShadow: '0 0 10px #c05621' }}
              >
                Subscribe
              </motion.button>

              {error && (
                <motion.p
                  className="text-red-400 mt-3 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ⚠ {error}
                </motion.p>
              )}
            </>
          ) : (
            <motion.div
              className="flex flex-col items-center justify-center text-green-300 font-semibold mt-6 text-lg"
              initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <FaCheckCircle size={32} className="mb-2 text-green-400 drop-shadow" />
              🎉 Thanks for subscribing! Exciting journeys await you!
            </motion.div>
          )}
        </motion.div>
      </Tilt>
    </section>
  );
}
