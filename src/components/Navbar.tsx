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
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-semibold text-navy tracking-tight">
                Fridenmaker
              </span>
              <span className="text-xs tracking-[0.25em] text-warm-gray uppercase -mt-1">
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
                    ? 'text-navy font-medium'
                    : 'text-warm-gray hover:text-navy'
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
              className="flex items-center space-x-2 text-warm-gray hover:text-navy transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">(206) 555-0123</span>
            </a>
            <Link
              to="/contact"
              className="bg-navy text-cream px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-charcoal transition-colors"
            >
              Get Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-navy p-2"
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
                    ? 'text-navy font-medium'
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
                className="block text-center bg-navy text-cream px-6 py-3 font-medium tracking-wide"
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
