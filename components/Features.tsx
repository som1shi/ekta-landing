"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Cross-Platform XR",
    description: "Write once, deploy to Meta Quest, Apple Vision Pro, HoloLens, and more. True cross-platform development for all XR devices.",
    icon: "🌐",
    gradient: "from-purple-primary to-blue-primary",
  },
  {
    title: "Unified IDE Experience",
    description: "Powerful code editor with real-time collaboration, intelligent autocomplete, and XR-specific debugging tools built in.",
    icon: "⚡",
    gradient: "from-blue-primary to-cyan-accent",
  },
  {
    title: "Live Preview",
    description: "See your XR app in action instantly. Preview on device or in our cloud-based XR simulator without leaving the IDE.",
    icon: "👁️",
    gradient: "from-cyan-accent to-purple-primary",
  },
  {
    title: "Built for Performance",
    description: "Optimized compilation and rendering pipeline ensures your XR apps run smoothly at 90+ FPS across all supported devices.",
    icon: "🚀",
    gradient: "from-pink-accent to-purple-dark",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/10 hover:scale-105 glow-hover">
        {/* Icon with gradient background */}
        <div
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
        >
          {feature.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-white">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed">
          {feature.description}
        </p>

        {/* Decorative gradient line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
        />
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to build incredible XR experiences, all in one place.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-primary/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}

