"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="glass px-6 py-2 rounded-full border border-white/20">
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
                ABOUT
              </span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Redefining XR Development</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Story */}
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Building for XR shouldn't mean choosing between platforms. Yet developers today
              face a fragmented landscape—separate tools for Meta Quest, Apple Vision Pro,
              HoloLens, and more.
            </p>
            <p>
              <span className="text-white font-semibold">Ekta changes that.</span> We're building
              a unified development environment where you write once and deploy everywhere. No more
              platform-specific rewrites. No more fragmented workflows.
            </p>
            <p>
              Our mission is simple: <span className="text-cyan-accent font-semibold">empower developers
              to focus on creating incredible XR experiences</span>, not wrestling with toolchains.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-gray-400">Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">1</div>
                <div className="text-sm text-gray-400">Codebase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">90+</div>
                <div className="text-sm text-gray-400">FPS Target</div>
              </div>
            </div>
          </div>

          {/* Right side - Vision cards */}
          <div className="space-y-4">
            {[
              {
                title: "Our Vision",
                description: "A world where XR development is as accessible and unified as web development.",
                icon: "🎯",
              },
              {
                title: "Our Approach",
                description: "Developer-first tools with intelligent abstractions that don't sacrifice control.",
                icon: "⚙️",
              },
              {
                title: "Our Promise",
                description: "Ship faster, reach more users, and build the immersive future you envision.",
                icon: "🚀",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-primary to-cyan-accent flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

