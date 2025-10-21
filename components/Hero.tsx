"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Unify</span> XR Development
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The next-generation IDE for building apps on AR/VR/XR headsets.
          <br />
          Develop once, deploy everywhere across all XR platforms.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={scrollToWaitlist}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-primary to-cyan-accent rounded-lg font-semibold text-lg text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 glow-hover"
          >
            <span className="relative z-10">Join the Waitlist</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-accent to-purple-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            className="px-8 py-4 glass rounded-lg font-semibold text-lg text-white transition-all duration-300 hover:bg-white/10"
            onClick={() => {
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </button>
        </motion.div>

        {/* Floating visual elements */}
        <motion.div
          className="mt-16 flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="glass px-6 py-3 rounded-full float" style={{ animationDelay: "0s" }}>
            <span className="text-sm font-medium text-cyan-accent">AR</span>
          </div>
          <div className="glass px-6 py-3 rounded-full float" style={{ animationDelay: "1s" }}>
            <span className="text-sm font-medium text-purple-primary">VR</span>
          </div>
          <div className="glass px-6 py-3 rounded-full float" style={{ animationDelay: "2s" }}>
            <span className="text-sm font-medium text-pink-accent">XR</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}

