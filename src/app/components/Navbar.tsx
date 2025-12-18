import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="tracking-wider transition-opacity hover:opacity-60"
          >
            SPARK
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 transition-colors hover:text-black"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 transition-colors hover:text-black"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-600 transition-colors hover:text-black"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 transition-colors hover:text-black"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-black transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-black transition-colors text-left py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-black transition-colors text-left py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-600 hover:text-black transition-colors text-left py-2"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-black transition-colors text-left py-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
