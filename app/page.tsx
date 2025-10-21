import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Features />
      <Waitlist />
      
      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text mb-2">Ekta</h3>
              <p className="text-gray-400">Unifying XR Development</p>
            </div>
            
            <div className="flex gap-8">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Discord
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Ekta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
