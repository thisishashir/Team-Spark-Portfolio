import { motion } from 'motion/react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    name: 'Disease Prediction System',
    description: 'Machine learning model for early disease diagnosis using patient data and predictive analytics.',
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Data Analysis']
  },
  {
    name: 'Smart Resource Allocator',
    description: 'Optimization system for efficient resource distribution across multiple departments.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Optimization']
  },
  {
    name: 'Automated Documentation Platform',
    description: 'AI-powered tool for generating and maintaining technical documentation automatically.',
    technologies: ['TypeScript', 'NLP', 'API Design', 'Automation']
  },
  {
    name: 'Performance Monitoring Dashboard',
    description: 'Real-time analytics dashboard for tracking system performance and identifying bottlenecks.',
    technologies: ['React', 'GraphQL', 'MongoDB', 'Data Visualization']
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-16 text-center">Selected Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="border-b border-gray-100 pb-12 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="mb-3">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full transition-colors hover:bg-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
