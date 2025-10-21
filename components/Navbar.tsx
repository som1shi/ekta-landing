"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 3, 20, 0)", "rgba(10, 3, 20, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl border-b border-white/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="#" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-primary to-cyan-accent flex items-center justify-center glow">
                <span className="text-xl font-bold text-white">E</span>
              </div>
              <span className="text-xl md:text-2xl font-bold gradient-text">
                Ekta
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              About
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Features
            </a>
            <a
              href="#waitlist"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Waitlist
            </a>
            <button
              onClick={scrollToWaitlist}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-primary to-cyan-accent rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 glow-hover"
            >
              Get Started
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden glass p-2 rounded-lg"
            onClick={scrollToWaitlist}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className="w-5 h-0.5 bg-white"></span>
              <span className="w-5 h-0.5 bg-white"></span>
              <span className="w-5 h-0.5 bg-white"></span>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

