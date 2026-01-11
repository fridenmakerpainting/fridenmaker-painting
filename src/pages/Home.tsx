import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award, Users, CheckCircle, Star } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Fourth Generation',
      description: 'Over 70 years of family expertise passed down through generations.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Museum-grade finishes using only the finest materials available.',
    },
    {
      icon: Clock,
      title: 'Reliable Process',
      description: 'Clear timelines, consistent communication, and respect for your home.',
    },
    {
      icon: Users,
      title: 'Trusted Partners',
      description: 'Preferred by Seattle\'s top builders, designers, and architects.',
    },
  ];

  const services = [
    {
      title: 'Interior Painting',
      description: 'Flawless walls, trim, and ceilings with meticulous preparation and premium finishes.',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop',
    },
    {
      title: 'Exterior Painting',
      description: 'Weather-resistant coatings that protect and beautify your home for years.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    },
    {
      title: 'Cabinet Refinishing',
      description: 'Transform your kitchen with hand-finished cabinetry that rivals factory quality.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    },
  ];

  const testimonials = [
    {
      quote: "Fridenmaker Painting exceeded every expectation. Their attention to detail and professionalism made our historic home restoration seamless.",
      author: 'Sarah M.',
      location: 'Medina, WA',
      rating: 5,
    },
    {
      quote: "We've worked with many painters over 20 years of building luxury homes. Fridenmaker is our only call now. Consistently excellent.",
      author: 'James K.',
      location: 'Custom Home Builder',
      rating: 5,
    },
    {
      quote: "Their color consultation was invaluable. They understood our vision and delivered finishes that transformed our space completely.",
      author: 'The Anderson Family',
      location: 'Mercer Island, WA',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20">
          <div className="max-w-2xl">
            <p className="text-tan font-medium tracking-wider text-sm mb-4 uppercase">
              Fourth Generation Excellence
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-lavender-light leading-tight mb-6">
              Seattle's Premier
              <br />
              <span className="text-tan">Residential Painters</span>
            </h1>
            <p className="text-lavender-light/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              For over 70 years, Seattle's most discerning homeowners have trusted our family
              to protect and beautify their investments with uncompromising craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gold text-sage-dark px-8 py-4 font-medium tracking-wide hover:bg-gold/90 transition-colors"
              >
                Schedule Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center border-2 border-cream/30 text-lavender-light px-8 py-4 font-medium tracking-wide hover:bg-cream/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-sage-dark py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-lavender-light/70 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-tan" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-tan" />
              <span>5-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-tan" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-tan" />
              <span>Eco-Friendly Options</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage-dark mb-4">
              Why Seattle's Finest Choose Fridenmaker
            </h2>
            <p className="text-warm-gray">
              Experience the difference that four generations of dedication brings
              to every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-charcoal/10 hover:border-gold/50 transition-colors"
              >
                <feature.icon className="text-tan mb-4" size={32} />
                <h3 className="text-lg font-semibold text-sage-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage-dark mb-4">
                Our Services
              </h2>
              <p className="text-warm-gray max-w-xl">
                From complete interior transformations to meticulous exterior protection,
                we bring expertise to every surface.
              </p>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center text-sage-dark font-medium hover:text-tan transition-colors"
            >
              View All Services
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-sage-dark/0 group-hover:bg-sage-dark/20 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-sage-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage-dark mb-4">
              Trusted by Homeowners & Professionals
            </h2>
            <p className="text-warm-gray">
              Our commitment to excellence has earned us the trust of Seattle's
              most discerning clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-charcoal/10"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-tan fill-tan"
                    />
                  ))}
                </div>
                <blockquote className="text-charcoal leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-medium text-sage-dark">{testimonial.author}</p>
                  <p className="text-warm-gray text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-sage-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lavender-light mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lavender-light/70 max-w-2xl mx-auto mb-8">
            Schedule a consultation with our team to discuss your vision.
            We'll provide a detailed proposal and transparent timeline for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-gold text-sage-dark px-8 py-4 font-medium tracking-wide hover:bg-gold/90 transition-colors"
            >
              Request Free Estimate
              <ArrowRight className="ml-2" size={18} />
            </Link>
            <a
              href="tel:206-555-0123"
              className="inline-flex items-center justify-center border-2 border-cream/30 text-lavender-light px-8 py-4 font-medium tracking-wide hover:bg-cream/10 transition-colors"
            >
              Call (206) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
