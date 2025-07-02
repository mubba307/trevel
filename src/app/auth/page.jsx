'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

function LoginForm({ switchToSignup }) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>
      <form className="space-y-5">
        <div>
          <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="loginEmail"
            required
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="loginPassword"
            required
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Log In
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don&apos;t have an account?{' '}
        <button onClick={switchToSignup} className="text-blue-600 hover:underline font-semibold">
          Sign Up
        </button>
      </p>
    </motion.div>
  );
}

function SignupForm({ switchToLogin }) {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
      <form className="space-y-5">
        <div>
          <label htmlFor="signupName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="signupName"
            required
            placeholder="Your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="signupEmail"
            required
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="signupPassword"
            required
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button onClick={switchToLogin} className="text-green-600 hover:underline font-semibold">
          Log In
        </button>
      </p>
    </motion.div>
  );
}

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-green-100 px-4 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Form Column */}
        <div className="w-full">
          {isLogin ? (
            <LoginForm switchToSignup={() => setIsLogin(false)} />
          ) : (
            <SignupForm switchToLogin={() => setIsLogin(true)} />
          )}
        </div>

        {/* Destinations Column */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-700">🌍 Top Destinations</h2>
          <div className="grid grid-cols-2 gap-5">
            {[
              { name: 'Santorini, Greece', image: '/image/santorina.jpg' },
              { name: 'Venice, Italy', image: '/image/Venice.jpg' },
              { name: 'Dubai, UAE', image: '/image/Dubai.jpg' },
              { name: 'Norway, Europe', image: '/image/norway.jpg' },
            ].map((place) => (
              <div
                key={place.name}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3 text-center text-sm font-medium text-gray-700 bg-white">
                  {place.name}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
