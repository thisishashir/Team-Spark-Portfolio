import { motion } from 'motion/react';

const focusAreas = [
  'Machine Learning',
  'Software Development',
  'Problem Solving',
  'System Design',
  'Team Collaboration'
];

export function FocusAreas() {
  return (
    <section className="py-32 px-6 bg-gray-50">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-12">Focus Areas</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {focusAreas.map((area, index) => (
            <motion.span
              key={area}
              className="px-6 py-3 border border-gray-300 rounded-full transition-all hover:border-black hover:bg-gray-100"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {area}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
