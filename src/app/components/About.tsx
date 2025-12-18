import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-8 text-center">Spark · Team</h2>
        <div className="space-y-6 text-gray-600">
          <p>
            Spark is a small, dedicated team of engineers and problem-solvers working across modern technologies. We believe in clear thinking, clean execution, and building solutions that are practical, reliable, and impactful.
          </p>
          <p>
            Our process is simple: understand the problem, design with clarity, and deliver with precision.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
