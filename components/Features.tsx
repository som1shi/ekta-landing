"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "XR-Native AI Assistant",
    description: "Intelligent autocomplete trained on Unity, Unreal, React Three Fiber, and XR frameworks.",
  },
  {
    title: "Generate XR Components",
    description: "Describe what you want in natural language, get production-ready 3D scenes and interactions.",
  },
  {
    title: "Spatial Code Understanding",
    description: "AI that understands 3D transformations, physics, and spatial interactions out of the box.",
  },
];

const shapes = [
  { name: "Ball", type: "Sphere", prompt: "Generate a ball", code: "Sphere" },
  { name: "RedBall", type: "Sphere", prompt: "Make it red", code: "Sphere", color: "red" },
  { name: "BallWithGround", type: "Sphere", prompt: "Add some ground", code: "Sphere", color: "red", hasGround: true },
  { name: "FallingBall", type: "Sphere", prompt: "Add gravity", code: "Sphere", color: "red", hasGround: true, falling: true },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentShape, setCurrentShape] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentPrompt = shapes[currentShape].prompt;
    let currentIndex = 0;
    setTypedText("");
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (currentIndex < currentPrompt.length) {
        setTypedText(currentPrompt.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50);

    const shapeChangeTimeout = setTimeout(() => {
      setCurrentShape((prev) => (prev + 1) % shapes.length);
    }, 5000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(shapeChangeTimeout);
    };
  }, [currentShape]);

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
            <span className="gradient-text">Code Smarter, Ship Faster</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            AI-powered features designed specifically for XR developers.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left side - Feature cards stacked */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gradient-to-br from-purple-primary to-cyan-accent" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
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

          {/* Right side - XR-Styled IDE mockup */}
          <div className="lg:col-span-3 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-purple-primary/30 overflow-hidden shadow-2xl bg-[#0a0314]/90 backdrop-blur-xl">
              {/* IDE Header */}
              <div className="bg-black/60 border-b border-purple-primary/20 px-4 py-2.5 flex items-center justify-between backdrop-blur-sm">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[10px] text-purple-primary/80 font-bold tracking-wider uppercase">Ekta</span>
                <div className="w-16" />
              </div>

              {/* IDE Tabs */}
              <div className="bg-black/30 border-b border-purple-primary/10 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="px-3 py-2 bg-[#0a0314] border-r border-purple-primary/10 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
                    <span className="text-xs text-gray-200 font-medium">BouncingBall.cs</span>
                  </div>
                  <div className="px-3 py-2 border-r border-purple-primary/10 flex items-center gap-2 bg-purple-primary/5">
                    <svg className="w-3 h-3 text-purple-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-xs text-purple-primary font-medium">AI Assistant</span>
                  </div>
                  <div className="px-3 py-2 border-r border-purple-primary/10 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent/40" />
                    <span className="text-xs text-gray-500 font-medium">3D Preview</span>
                  </div>
                </div>
              </div>

              {/* Main Content Area - Split View */}
              <div className="grid grid-cols-2 divide-x divide-purple-primary/10">
                {/* Left: Code Editor */}
              <div className="flex">
                  <div className="bg-black/20 px-3 py-4 border-r border-purple-primary/10 font-mono text-[10px] text-gray-600 select-none">
                    <div className="leading-5">1</div>
                    <div className="leading-5">2</div>
                    <div className="leading-5">3</div>
                    <div className="leading-5">4</div>
                    <div className="leading-5">5</div>
                    <div className="leading-5">6</div>
                    <div className="leading-5">7</div>
                    <div className="leading-5">8</div>
                    <div className="leading-5">9</div>
                    <div className="leading-5">10</div>
                    <div className="leading-5">11</div>
                </div>

                  <div className="flex-1 bg-[#0a0314] p-6 font-mono text-[11px] leading-5 relative overflow-x-auto">
                  <pre className="text-gray-300">
                    <code>
                        <span className="text-purple-400">using</span> <span className="text-white">UnityEngine</span><span className="text-gray-500">;</span>
                        {'\n\n'}
                        <span className="text-purple-400">public class</span> <span className="text-yellow-400">BouncingBall</span> <span className="text-white">:</span> <span className="text-cyan-accent">MonoBehaviour</span>
                      {'\n'}
                        <span className="text-white">{'{'}</span>
                      {'\n  '}
                        <span className="text-purple-400">void</span> <span className="text-yellow-400">Start</span><span className="text-white">() {'{'}</span>
                      {'\n    '}
                        <span className="text-cyan-accent">GameObject</span> ball <span className="text-purple-400">=</span> <span className="text-yellow-400">GameObject</span><span className="text-white">.</span><span className="text-yellow-400">CreatePrimitive</span><span className="text-white">(</span>
                      {'\n      '}
                        <span className="text-cyan-accent">PrimitiveType</span><span className="text-white">.</span><span className="text-pink-400">Sphere</span><span className="text-white">);</span>
                        {currentShape >= 1 && (
                          <>
                            {'\n    '}
                            <AnimatePresence mode="wait">
                              <motion.span
                                key="color-change"
                                initial={{ opacity: 0, backgroundColor: 'rgba(139, 92, 246, 0.5)' }}
                                animate={{ opacity: 1, backgroundColor: 'rgba(139, 92, 246, 0)' }}
                                transition={{ duration: 0.5, backgroundColor: { duration: 2.5 } }}
                                className="inline-block rounded px-1"
                              >
                                <span className="text-white">ball</span><span className="text-white">.</span><span className="text-yellow-400">GetComponent</span><span className="text-white">{'<'}</span><span className="text-cyan-accent">Renderer</span><span className="text-white">{'>'}</span><span className="text-white">().</span><span className="text-white">material</span><span className="text-white">.</span><span className="text-white">color</span> <span className="text-purple-400">=</span> <span className="text-cyan-accent">Color</span><span className="text-white">.</span><span className="text-pink-400">red</span><span className="text-gray-500">;</span>
                              </motion.span>
                            </AnimatePresence>
                          </>
                        )}
                        {currentShape >= 2 && (
                          <>
                            {'\n    '}
                            <AnimatePresence mode="wait">
                              <motion.span
                                key="ground"
                                initial={{ opacity: 0, backgroundColor: 'rgba(139, 92, 246, 0.5)' }}
                                animate={{ opacity: 1, backgroundColor: 'rgba(139, 92, 246, 0)' }}
                                transition={{ duration: 0.5, backgroundColor: { duration: 2.5 } }}
                                className="inline-block rounded px-1"
                              >
                                <span className="text-yellow-400">GameObject</span><span className="text-white">.</span><span className="text-yellow-400">CreatePrimitive</span><span className="text-white">(</span><span className="text-cyan-accent">PrimitiveType</span><span className="text-white">.</span><span className="text-pink-400">Plane</span><span className="text-white">);</span>
                              </motion.span>
                            </AnimatePresence>
                          </>
                        )}
                        {currentShape >= 3 && (
                          <>
                      {'\n    '}
                            <AnimatePresence mode="wait">
                              <motion.span
                                key="rigidbody"
                                initial={{ opacity: 0, backgroundColor: 'rgba(139, 92, 246, 0.5)' }}
                                animate={{ opacity: 1, backgroundColor: 'rgba(139, 92, 246, 0)' }}
                                transition={{ duration: 0.5, backgroundColor: { duration: 2.5 } }}
                                className="inline-block rounded px-1"
                              >
                                <span className="text-white">ball</span><span className="text-white">.</span><span className="text-yellow-400">AddComponent</span><span className="text-white">{'<'}</span><span className="text-cyan-accent">Rigidbody</span><span className="text-white">{'>'}</span><span className="text-white">();</span>
                              </motion.span>
                            </AnimatePresence>
                          </>
                        )}
                      {'\n  '}
                        <span className="text-white">{'}'}</span>
                      {'\n'}
                      <span className="text-white">{'}'}</span>
                    </code>
                  </pre>
                </div>
              </div>

                {/* Right: 3D Preview */}
                <div className="bg-black/40 p-6 flex flex-col relative min-h-[320px]">
                  {/* Grid background */}
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `
                      linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px",
                  }} />
                  
                  {/* 3D Scene */}
                  <div className="relative perspective-1000 flex-1 flex flex-col">
                    {/* AI Prompt Input - Typing Animation */}
                    <div className="relative mb-4">
                      <div className="glass rounded-lg border border-purple-primary/30 bg-black/60 backdrop-blur-md">
                        <div className="flex items-center gap-2 px-3 py-1.5 border-b border-purple-primary/20">
                          <svg className="w-3 h-3 text-purple-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="text-[10px] text-purple-primary font-medium">AI Assistant</span>
                        </div>
                        <div className="px-3 py-2 min-h-[36px] flex items-center">
                          <span className="text-[10px] text-gray-300 font-mono">
                            {typedText}
                            {isTyping && <span className="inline-block w-1 h-3 bg-purple-primary ml-0.5 animate-pulse" />}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Preview Area */}
                    <div className="relative flex-1 flex items-end justify-center pb-16">
                    <div className="relative flex flex-col items-center">
                      {/* Ground - flat plane at bottom */}
                      {currentShape >= 2 && (
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          transition={{ duration: 0.5 }}
                          className="relative"
                        >
                          {/* Main ground platform */}
                          <div 
                            className="w-56 h-4 rounded-sm relative"
                            style={{
                              background: 'linear-gradient(to bottom, rgba(120, 100, 220, 0.7), rgba(80, 60, 160, 0.9))',
                              boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.4)',
                              border: '1px solid rgba(139, 92, 246, 0.5)'
                            }}
                          >
                            {/* Grid pattern */}
                            <div className="absolute inset-0 opacity-20" style={{
                              backgroundImage: `
                                linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
                              `,
                              backgroundSize: "16px 16px",
                            }} />
                          </div>
                          {/* Ground shadow */}
                          <div 
                            className="absolute top-full left-1/2 -translate-x-1/2 w-64 h-4 bg-gradient-to-b from-black/20 to-transparent"
                            style={{
                              borderRadius: '100%',
                              filter: 'blur(6px)'
                            }}
                          />
                        </motion.div>
                      )}
                      
                      {/* Ball */}
                      <motion.div
                        key={`ball-motion-${currentShape}`}
                        initial={false}
                        animate={currentShape >= 3 ? {
                          y: 0
                        } : {
                          y: -120
                        }}
                        transition={currentShape >= 3 ? {
                          duration: 1,
                          ease: [0.34, 1.56, 0.64, 1]
                        } : {
                          duration: 0.3
                        }}
                        className="absolute bottom-0 mb-1"
                        style={{ zIndex: 10 }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={currentShape}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="w-16 h-16 rounded-full relative"
                            style={{
                              background: currentShape >= 1 
                                ? 'radial-gradient(circle at 30% 30%, rgba(255, 100, 100, 0.9), rgba(200, 50, 50, 0.9) 50%, rgba(150, 30, 30, 0.8))'
                                : 'radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.9), rgba(100, 70, 200, 0.8) 50%, rgba(80, 50, 180, 0.7))',
                              boxShadow: currentShape >= 1
                                ? '0 0 30px rgba(255, 70, 70, 0.6), inset -12px -12px 24px rgba(0, 0, 0, 0.4), inset 6px 6px 16px rgba(255, 255, 255, 0.3)'
                                : '0 0 30px rgba(139, 92, 246, 0.6), inset -12px -12px 24px rgba(0, 0, 0, 0.4), inset 6px 6px 16px rgba(255, 255, 255, 0.2)'
                            }}
                          >
                            {/* Highlight for 3D effect */}
                            <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-white/40 blur-sm" />
                          </motion.div>
                        </AnimatePresence>
                      </motion.div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              {/* IDE Footer */}
              <div className="bg-black/60 border-t border-purple-primary/20 px-4 py-1.5 flex items-center justify-between text-[10px] font-medium backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-primary animate-pulse" />
                    <span className="text-purple-primary">AI Active</span>
                  </div>
                  <span className="text-gray-600">|</span>
                  <span className="text-gray-400">Meta Quest 3</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <span>C#</span>
                  <span className="text-gray-600">|</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-gray-400">Live Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
