import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-6 tracking-tight">
          We Are Spark — Building Smart Solutions with Clarity & Purpose
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          A focused team creating thoughtful technology for real-world problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-black text-white transition-opacity hover:opacity-80"
          >
            View Our Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border border-black transition-colors hover:bg-gray-50"
          >
            Contact Us
          </button>
        </div>
      </motion.div>
    </section>
  );
}
