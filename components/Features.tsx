"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const features = [
  {
    title: "Cross-Platform XR",
    description: "Write once, deploy to Meta Quest, Apple Vision Pro, HoloLens, and more.",
    icon: "🌐",
  },
  {
    title: "Unified IDE Experience",
    description: "Powerful code editor with real-time collaboration and intelligent autocomplete.",
    icon: "⚡",
  },
  {
    title: "Live Preview",
    description: "See your XR app in action instantly with our cloud-based simulator.",
    icon: "👁️",
  },
  {
    title: "Built for Performance",
    description: "Optimized pipeline ensures 90+ FPS across all supported devices.",
    icon: "🚀",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="glass px-6 py-2 rounded-full border border-white/20">
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-primary to-cyan-accent bg-clip-text text-transparent">
                FEATURES
              </span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Build Without Limits</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to create immersive XR experiences.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Feature cards stacked */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-primary to-cyan-accent flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Sleek IDE mockup */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-[#0a0314]/80 backdrop-blur-xl">
              {/* IDE Header - sleeker */}
              <div className="bg-black/40 border-b border-white/5 px-4 py-2.5 flex items-center justify-between backdrop-blur-sm">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">Ekta IDE</span>
                <div className="w-16" /> {/* Spacer for centering */}
              </div>

              {/* IDE Tabs - sleeker */}
              <div className="bg-black/20 border-b border-white/5 flex items-center">
                <div className="flex items-center">
                  <div className="px-4 py-2 bg-[#0a0314] border-r border-white/5 flex items-center gap-2.5 relative">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
                    <span className="text-xs text-gray-200 font-medium">XRScene.tsx</span>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-primary to-cyan-accent" />
                  </div>
                  <div className="px-4 py-2 flex items-center gap-2.5 opacity-40 hover:opacity-60 transition-opacity">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    <span className="text-xs text-gray-400 font-medium">App.tsx</span>
                  </div>
                  <div className="px-4 py-2 flex items-center gap-2.5 opacity-40 hover:opacity-60 transition-opacity">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    <span className="text-xs text-gray-400 font-medium">Camera.tsx</span>
                  </div>
                </div>
              </div>

              {/* Line numbers sidebar */}
              <div className="flex">
                <div className="bg-black/20 px-3 py-6 border-r border-white/5 font-mono text-xs text-gray-600 select-none">
                  <div className="leading-6">1</div>
                  <div className="leading-6">2</div>
                  <div className="leading-6">3</div>
                  <div className="leading-6">4</div>
                  <div className="leading-6">5</div>
                  <div className="leading-6">6</div>
                  <div className="leading-6">7</div>
                  <div className="leading-6">8</div>
                  <div className="leading-6">9</div>
                  <div className="leading-6">10</div>
                  <div className="leading-6">11</div>
                  <div className="leading-6">12</div>
                  <div className="leading-6">13</div>
                  <div className="leading-6">14</div>
                </div>

                {/* IDE Code Editor - more polished */}
                <div className="flex-1 bg-[#0a0314] p-6 font-mono text-[13px] leading-6 overflow-x-auto">
                  <pre className="text-gray-300">
                    <code>
                      <span className="text-purple-400">import</span> <span className="text-white">{'{'}</span> <span className="text-cyan-accent">XRScene</span><span className="text-white">, </span><span className="text-cyan-accent">Camera</span><span className="text-white">, </span><span className="text-cyan-accent">Cube</span> <span className="text-white">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@ekta/core'</span><span className="text-gray-500">;</span>
                      {'\n'}
                      <span className="text-purple-400">import</span> <span className="text-white">{'{'}</span> <span className="text-cyan-accent">useRotation</span> <span className="text-white">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@ekta/hooks'</span><span className="text-gray-500">;</span>
                      {'\n\n'}
                      <span className="text-purple-400">export default function</span> <span className="text-yellow-400">XRApp</span><span className="text-white">() {'{'}</span>
                      {'\n  '}
                      <span className="text-purple-400">const</span> rotation <span className="text-purple-400">=</span> <span className="text-yellow-400">useRotation</span><span className="text-white">();</span>
                      {'\n\n  '}
                      <span className="text-purple-400">return</span> <span className="text-white">(</span>
                      {'\n    '}
                      <span className="text-gray-500">&lt;</span><span className="text-pink-400">XRScene</span><span className="text-gray-500">&gt;</span>
                      {'\n      '}
                      <span className="text-gray-500">&lt;</span><span className="text-pink-400">Camera</span> <span className="text-cyan-accent">position</span><span className="text-purple-400">=</span><span className="text-white">{'{'}</span>[<span className="text-orange-400">0</span>, <span className="text-orange-400">1.6</span>, <span className="text-orange-400">0</span>]<span className="text-white">{'}'}</span> <span className="text-gray-500">/&gt;</span>
                      {'\n      '}
                      <span className="text-gray-500">&lt;</span><span className="text-pink-400">Cube</span>
                      {'\n        '}
                      <span className="text-cyan-accent">position</span><span className="text-purple-400">=</span><span className="text-white">{'{'}</span>[<span className="text-orange-400">0</span>, <span className="text-orange-400">1</span>, <span className="text-orange-400">-3</span>]<span className="text-white">{'}'}</span>
                      {'\n        '}
                      <span className="text-cyan-accent">rotation</span><span className="text-purple-400">=</span><span className="text-white">{'{'}</span>rotation<span className="text-white">{'}'}</span>
                      {'\n      '}
                      <span className="text-gray-500">/&gt;</span>
                      {'\n    '}
                      <span className="text-gray-500">&lt;/</span><span className="text-pink-400">XRScene</span><span className="text-gray-500">&gt;</span>
                      {'\n  '}
                      <span className="text-white">);</span>
                      {'\n'}
                      <span className="text-white">{'}'}</span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* IDE Footer / Status bar - sleeker */}
              <div className="bg-black/40 border-t border-white/5 px-4 py-1.5 flex items-center justify-between text-[11px] font-medium backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-gray-400">Ready</span>
                  </div>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-400">Meta Quest 3</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <span>TypeScript JSX</span>
                  <span>•</span>
                  <span>UTF-8</span>
                  <span>•</span>
                  <span>Ln 8, Col 9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
