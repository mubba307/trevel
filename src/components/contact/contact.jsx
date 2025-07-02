'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen px-6 py-16 bg-gray-50 flex items-center justify-center perspective-800">
      <motion.div
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg"
        initial={{ rotateX: 8, rotateY: -8, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        whileHover={{
          rotateX: 0,
          rotateY: 0,
          boxShadow: '0 25px 40px rgba(0,0,0,0.25)',
          scale: 1.03,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6 drop-shadow-md">
          Contact Us
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {['name', 'email'].map((field) => (
            <motion.div key={field}>
              <motion.input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                className="w-full px-4 py-3 border rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                whileFocus={{ scale: 1.02, boxShadow: '0 0 10px #3b82f6' }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </motion.div>
          ))}

          <motion.div>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm resize-none"
              whileFocus={{ scale: 1.02, boxShadow: '0 0 10px #3b82f6' }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>

          <motion.div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
              whileHover={{ scale: 1.05, boxShadow: '0 12px 20px rgba(59,130,246,0.6)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              Send Message
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
