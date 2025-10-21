"use client";

import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";

type FormData = {
  email: string;
  name?: string;
};

export default function Waitlist() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Waitlist submission:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="waitlist" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 sm:p-12 lg:p-16 glow"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Join the Revolution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Be among the first to experience the future of XR development.
              Sign up for early access and exclusive updates.
            </p>
          </div>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name (Optional)
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full px-6 py-4 bg-white/5 border ${
                    errors.email ? "border-red-500" : "border-white/10"
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-primary focus:border-transparent transition-all duration-300`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gradient-to-r from-purple-primary to-cyan-accent rounded-lg font-semibold text-lg text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : "glow-hover"
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Joining...
                  </span>
                ) : (
                  "Get Early Access"
                )}
              </motion.button>

              {/* Privacy note */}
              <p className="text-sm text-gray-400 text-center">
                We respect your privacy. No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-primary to-cyan-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Welcome to the Future! 🎉
              </h3>
              <p className="text-xl text-gray-300">
                You're on the waitlist! Check your email for confirmation.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-accent/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-primary/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}

