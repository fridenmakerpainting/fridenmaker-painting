import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Paintbrush, Home, Palette, Sparkles, Shield, Clock } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Paintbrush,
      title: 'Interior Painting',
      description: 'Transform your living spaces with flawless walls, trim, and ceilings. Our meticulous preparation ensures smooth, lasting finishes that enhance your home\'s beauty.',
      features: [
        'Complete surface preparation and repair',
        'Premium low-VOC and zero-VOC paint options',
        'Precise trim and detail work',
        'Ceiling and crown molding expertise',
        'Furniture and fixture protection',
        'Thorough daily cleanup',
      ],
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop',
    },
    {
      icon: Home,
      title: 'Exterior Painting',
      description: 'Protect your investment with expertly applied coatings that withstand Pacific Northwest weather while elevating your home\'s curb appeal.',
      features: [
        'Comprehensive power washing and prep',
        'Wood repair and replacement',
        'Premium weather-resistant coatings',
        'Deck and fence staining',
        'Gutter and trim painting',
        '5-year warranty on all exterior work',
      ],
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    },
    {
      icon: Sparkles,
      title: 'Cabinet Refinishing',
      description: 'Give your kitchen or bathroom a complete transformation without the cost and disruption of replacement. Our hand-finished cabinetry rivals factory quality.',
      features: [
        'Professional degreasing and prep',
        'High-adhesion primer systems',
        'Hand-brushed or sprayed finishes',
        'Hardware removal and reinstallation',
        'Minimal disruption to your routine',
        'Custom color matching available',
      ],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Work with our color experts to select the perfect palette for your home. We consider lighting, architecture, and your personal style to create cohesive, beautiful spaces.',
      features: [
        'In-home color analysis',
        'Large-format sample testing',
        'Coordination with existing elements',
        'Trend and timelessness guidance',
        'Complete color scheme development',
        'Material and finish recommendations',
      ],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    },
  ];

  const specialtyServices = [
    {
      title: 'Specialty Finishes',
      description: 'Venetian plaster, faux finishes, metallic effects, and custom textures that add unique character to your spaces.',
    },
    {
      title: 'Wallpaper Installation',
      description: 'Expert installation of designer wallpapers and wall coverings, including removal of existing materials.',
    },
    {
      title: 'Historic Restoration',
      description: 'Careful restoration of period details in historic homes, matching original techniques and materials.',
    },
    {
      title: 'Commercial Painting',
      description: 'After-hours and weekend scheduling for offices, retail spaces, and multi-family properties.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'We visit your home to understand your vision, assess the scope, and provide a detailed proposal.',
    },
    {
      step: '02',
      title: 'Preparation',
      description: 'Thorough surface preparation, repairs, and protection of your furnishings and flooring.',
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Expert application by our trained craftsmen, with daily cleanup and clear communication.',
    },
    {
      step: '04',
      title: 'Inspection',
      description: 'Final walkthrough together to ensure every detail meets our mutual high standards.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-sage-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-tan font-medium tracking-wider text-sm mb-4 uppercase">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-lavender-light leading-tight mb-6">
              Comprehensive
              <br />
              <span className="text-tan">Painting Services</span>
            </h1>
            <p className="text-lavender-light/80 text-lg md:text-xl leading-relaxed">
              From complete home transformations to precise detail work, we bring
              four generations of expertise to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-charcoal py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-lavender-light/80">
              <Shield size={20} className="text-tan" />
              <span className="text-sm">5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-3 text-lavender-light/80">
              <Clock size={20} className="text-tan" />
              <span className="text-sm">On-Time Completion</span>
            </div>
            <div className="flex items-center gap-3 text-lavender-light/80">
              <CheckCircle size={20} className="text-tan" />
              <span className="text-sm">Detailed Proposals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="text-tan" size={28} />
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-sage-dark">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-warm-gray leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-sage flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sage-dark font-medium hover:text-tan transition-colors"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage-dark mb-4">
              Specialty Services
            </h2>
            <p className="text-warm-gray">
              Beyond our core offerings, we provide specialized services for unique projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialtyServices.map((service, index) => (
              <div
                key={index}
                className="bg-cream p-8 border border-charcoal/10"
              >
                <h3 className="text-xl font-semibold text-sage-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage-dark mb-4">
              Our Process
            </h2>
            <p className="text-warm-gray">
              A clear, organized approach that keeps you informed at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-serif font-semibold text-tan mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-sage-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 md:py-28 bg-sage-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lavender-light mb-6">
                What to Expect Working With Us
              </h2>
              <div className="space-y-6 text-lavender-light/80">
                <p className="leading-relaxed">
                  We understand that inviting contractors into your home requires trust.
                  That's why we prioritize clear communication, respect for your space,
                  and consistent follow-through on every commitment.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-tan flex-shrink-0 mt-1" />
                    <span>Detailed written proposals with transparent pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-tan flex-shrink-0 mt-1" />
                    <span>Dedicated project manager as your single point of contact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-tan flex-shrink-0 mt-1" />
                    <span>Daily progress updates and open communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-tan flex-shrink-0 mt-1" />
                    <span>Thorough protection of floors, furniture, and fixtures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-tan flex-shrink-0 mt-1" />
                    <span>Complete cleanup at the end of each workday</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=500&fit=crop"
                alt="Professional painting"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage-dark mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-warm-gray max-w-2xl mx-auto mb-8">
            Contact us for a complimentary consultation. We'll visit your home,
            discuss your vision, and provide a detailed proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-sage-dark text-lavender-light px-8 py-4 font-medium tracking-wide hover:bg-charcoal transition-colors"
            >
              Schedule Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <a
              href="tel:206-555-0123"
              className="inline-flex items-center justify-center border-2 border-navy text-sage-dark px-8 py-4 font-medium tracking-wide hover:bg-sage-dark hover:text-lavender-light transition-colors"
            >
              Call (206) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
