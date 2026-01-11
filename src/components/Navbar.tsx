import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-cream/95 backdrop-blur-sm z-50 border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            {/* Stag Icon */}
            <svg className="w-10 h-10 text-tan" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 4c-1 0-2 1-2.5 2.5L16 10l-4-2c-.5-.3-1 0-1 .5v3c0 .5.3 1 .7 1.2l3.3 1.8-1.5 3c-.3.5-.1 1.2.4 1.5l2.1 1v4l-4 6c-.3.5-.2 1.2.3 1.5l3 2c.5.3 1.2.1 1.5-.4l3.2-5.1 3.2 5.1c.3.5 1 .7 1.5.4l3-2c.5-.3.6-1 .3-1.5l-4-6v-4l2.1-1c.5-.3.7-1 .4-1.5l-1.5-3 3.3-1.8c.4-.2.7-.7.7-1.2v-3c0-.5-.5-.8-1-.5l-4 2-1.5-3.5C22 5 21 4 20 4z"/>
            </svg>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-bold text-sage-dark tracking-tight">
                Fridenmaker
              </span>
              <span className="text-xs tracking-[0.2em] text-tan uppercase -mt-0.5">
                Painting Co.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-sage-dark font-medium'
                    : 'text-warm-gray hover:text-sage-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:206-555-0123"
              className="flex items-center space-x-2 text-warm-gray hover:text-sage-dark transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">(206) 555-0123</span>
            </a>
            <Link
              to="/contact"
              className="bg-sage-dark text-cream px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-charcoal transition-colors"
            >
              Get Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-sage-dark p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-charcoal/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-base ${
                  isActive(link.path)
                    ? 'text-sage-dark font-medium'
                    : 'text-warm-gray'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-charcoal/10">
              <a
                href="tel:206-555-0123"
                className="flex items-center space-x-2 text-warm-gray mb-4"
              >
                <Phone size={16} />
                <span>(206) 555-0123</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-sage-dark text-cream px-6 py-3 font-medium tracking-wide"
              >
                Get Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
