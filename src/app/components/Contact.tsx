import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4 text-center">Contact</h2>
        <p className="text-gray-600 text-center mb-12">
          Let's build something meaningful together.
        </p>

        {/* Email */}
        <div className="flex items-center justify-center gap-2 mb-12 text-gray-600">
          <Mail size={20} />
          <a 
            href="mailto:hello@sparkteam.dev" 
            className="hover:text-black transition-colors"
          >
            hello@sparkteam.dev
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-200 rounded-none focus:outline-none focus:border-black transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-black text-white transition-opacity hover:opacity-80"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
