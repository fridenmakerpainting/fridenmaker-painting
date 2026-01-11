import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-dark text-lavender-light">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/images/logo-dark.svg"
                alt="Fridenmaker Painting"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-lavender-light/70 text-sm leading-relaxed mb-6">
              Four generations of exceptional craftsmanship, serving Seattle's finest homes since 1952.
            </p>
            <div className="flex items-center space-x-2 text-tan">
              <span className="text-sm font-medium">Est. 1952</span>
              <span className="text-lavender-light/40">|</span>
              <span className="text-sm font-medium">4th Generation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-lavender-light/70 hover:text-lavender-light transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm text-lavender-light/70">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Cabinet Refinishing</li>
              <li>Color Consultation</li>
              <li>Specialty Finishes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:206-555-0123"
                  className="flex items-start space-x-3 text-lavender-light/70 hover:text-lavender-light transition-colors"
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">(206) 555-0123</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@fridenmakerpainting.com"
                  className="flex items-start space-x-3 text-lavender-light/70 hover:text-lavender-light transition-colors"
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">info@fridenmakerpainting.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-lavender-light/70">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Seattle, WA<br />
                    Serving Greater Seattle Area
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-lavender-light/50 text-xs">
            © {currentYear} Fridenmaker Painting Co. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-lavender-light/50">
            <span>Licensed & Insured</span>
            <span>WA License #FRIDEP*123AB</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
