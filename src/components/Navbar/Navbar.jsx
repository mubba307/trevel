'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import {
  FaGlobe,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaUser,
  FaPlaneDeparture,
} from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: <FaHome />, label: 'Home' },
    { href: '/aboutme', icon: <FaInfoCircle />, label: 'About' },
    { href: '/contactme', icon: <FaEnvelope />, label: 'Contact' },
    { href: '/auth', icon: <FaUser />, label: 'Login' },
    { href: '/Status', icon: <FaPlaneDeparture />, label: 'Flight Status' },
  ];

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-lg z-50">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center space-x-2 hover:text-orange-400 transition duration-300"
      >
        <FaGlobe size={28} className="drop-shadow-md" />
        <span className="text-lg font-bold tracking-wide select-none">Travel Platform</span>
      </Link>

      {/* Nav Links */}
      <div className="flex space-x-6 text-xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Tilt
              key={item.href}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={800}
              scale={1.1}
              transitionSpeed={500}
              glareEnable={true}
              glareMaxOpacity={0.15}
              className="cursor-pointer rounded-md"
            >
              <motion.div
                whileHover={{
                  scale: 1.15,
                  textShadow: '0 0 8px #fb923c', // orange glow
                  filter: 'drop-shadow(0 0 5px #fb923c)',
                }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center justify-center px-2 py-1 transition-colors duration-300 ${
                  isActive ? 'text-orange-400' : 'text-gray-300 hover:text-orange-400'
                }`}
              >
                <Link href={item.href} aria-label={item.label} tabIndex={0}>
                  {item.icon}
                </Link>

                {/* Animated underline */}
                <motion.span
                  className="absolute left-0 bottom-[-6px] h-[2px] w-full bg-orange-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                />
              </motion.div>
            </Tilt>
          );
        })}
      </div>
    </nav>
  );
}
