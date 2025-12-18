import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Rahul Prajapat',
    role: 'Machine Learning',
    description: 'Builds machine learning models and data-driven systems. Has worked on projects involving prior prediction, disease diagnosis, and applied ML solutions.',
    imageUrl: 'https://i.ibb.co/0yc0JKwj/Whats-App-Image-2025-12-18-at-11-59-01-AM.jpg" alt="Whats-App-Image-2025-12-18-at-11-59-01-AM'
  },
  {
    name: 'Bhumi Khandelwal',
    role: 'Design & Planning',
    description: 'Focuses on structured thinking, planning, and creating simple, user-friendly designs.',
    imageUrl: 'https://i.ibb.co/BKNvRF98/Whats-App-Image-2025-12-18-at-11-58-02-AM.jpg'
  },
  {
    name: 'Harshvardhan Rathore',
    role: 'Backend & Systems',
    description: 'Works on backend logic, system design, and technical optimization.',
    imageUrl: 'https://i.ibb.co/pBKKz3L1/image.png'
  },
  {
    name: 'Ujala Soni',
    role: 'Problem Solving',
    description: 'Specializes in analytical thinking and solving complex technical challenges with innovative approaches.',
    imageUrl: 'https://i.ibb.co/Xx4z3mM8/Whats-App-Image-2025-12-18-at-11-58-10-AM.jpg" alt="Whats-App-Image-2025-12-18-at-11-58-10-AM'
  }
];

export function Team() {
  return (
    <section id="team" className="py-32 px-6 bg-gray-50">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-16 text-center">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto">
                <ImageWithFallback
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="mb-1">{member.name}</h3>
              <div className="text-gray-500 mb-3">{member.role}</div>
              <p className="text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}