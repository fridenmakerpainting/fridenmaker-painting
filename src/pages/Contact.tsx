import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    timeline: '',
    message: '',
    referral: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(206) 555-0123',
      link: 'tel:206-555-0123',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@fridenmakerpainting.com',
      link: 'mailto:info@fridenmakerpainting.com',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      content: 'Greater Seattle Area',
      subtext: 'Seattle, Bellevue, Mercer Island, Medina, Kirkland & surrounding areas',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon - Fri: 7:00 AM - 5:00 PM',
      subtext: 'Consultations available by appointment',
    },
  ];

  const faqs = [
    {
      question: 'How do I get an estimate?',
      answer: 'Fill out the form on this page or give us a call. We\'ll schedule a convenient time to visit your home, discuss your project, and provide a detailed written proposal within 48 hours.',
    },
    {
      question: 'What\'s included in your proposals?',
      answer: 'Our proposals include a detailed scope of work, material specifications, timeline, and itemized pricing. We believe in complete transparency so there are no surprises.',
    },
    {
      question: 'Do you offer color consultation?',
      answer: 'Yes! Our color consultation service helps you select the perfect palette for your home. We consider lighting, architecture, and your existing furnishings to create cohesive spaces.',
    },
    {
      question: 'What warranty do you offer?',
      answer: 'We stand behind our work with a 5-year warranty on all interior and exterior painting. Our warranty covers workmanship, peeling, and premature fading.',
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-cream">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} className="text-sage" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-sage-dark mb-4">
            Thank You
          </h1>
          <p className="text-warm-gray leading-relaxed mb-8">
            We've received your inquiry and will be in touch within one business day
            to discuss your project. We look forward to speaking with you.
          </p>
          <a
            href="/"
            className="inline-flex items-center bg-sage-dark text-lavender-light px-8 py-4 font-medium tracking-wide hover:bg-charcoal transition-colors"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-sage-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-tan font-medium tracking-wider text-sm mb-4 uppercase">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-lavender-light leading-tight mb-6">
              Start Your
              <br />
              <span className="text-tan">Project Today</span>
            </h1>
            <p className="text-lavender-light/80 text-lg md:text-xl leading-relaxed">
              Ready to transform your home? Contact us for a complimentary consultation
              and detailed proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-charcoal py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <info.icon size={20} className="text-tan" />
                </div>
                <div>
                  <p className="text-lavender-light/60 text-xs uppercase tracking-wider mb-1">
                    {info.title}
                  </p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-lavender-light hover:text-tan transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-lavender-light">{info.content}</p>
                  )}
                  {info.subtext && (
                    <p className="text-lavender-light/60 text-sm mt-1">{info.subtext}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-sage-dark mb-2">
                Request a Consultation
              </h2>
              <p className="text-warm-gray mb-8">
                Tell us about your project and we'll be in touch within one business day.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-charcoal/20 bg-white focus:border-navy focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-charcoal/20 bg-white focus:border-navy focus:outline-none transition-colors"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-charcoal/20 bg-white focus:border-navy focus:outline-none transition-colors"
                      placeholder="(206) 555-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-charcoal mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-charcoal/20 bg-white focus:border-navy focus:outline-none transition-colors"
                      placeholder="Street address, city"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-charcoal mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-charcoal/20 bg-white focus:border-navy focus:outline-none transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="interior">Interior Painting</option>
                      <option value="exterior">Exterior Painting</option>
                      <option value="cabinets">Cabinet Refinishing</option>
                      <option value="color">Color Consultation</option>
                      <option value="specialty">Specialty Finishes</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-charcoal mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-charcoal/20 bg-white focus:border-navy focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="planning">Just planning ahead</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal/20 bg-white focus:border-navy focus:outline-none transition-colors resize-none"
                    placeholder="Please describe your project, including approximate square footage, number of rooms, any specific concerns or goals..."
                  />
                </div>

                <div>
                  <label htmlFor="referral" className="block text-sm font-medium text-charcoal mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    id="referral"
                    name="referral"
                    value={formData.referral}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-charcoal/20 bg-white focus:border-navy focus:outline-none transition-colors"
                  >
                    <option value="">Select one</option>
                    <option value="referral">Friend/Family Referral</option>
                    <option value="contractor">Builder/Contractor</option>
                    <option value="designer">Designer/Architect</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="signage">Saw Our Work/Signage</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-sage-dark text-lavender-light px-12 py-4 font-medium tracking-wide hover:bg-charcoal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-white border border-charcoal/10 p-8 mb-8">
                <h3 className="text-xl font-semibold text-sage-dark mb-4">
                  What Happens Next?
                </h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-sage-dark/10 flex items-center justify-center text-sage-dark font-medium">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-charcoal">We'll call you</p>
                      <p className="text-warm-gray text-sm">Within one business day to discuss your project</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-sage-dark/10 flex items-center justify-center text-sage-dark font-medium">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-charcoal">Home visit</p>
                      <p className="text-warm-gray text-sm">We'll schedule a convenient time to see your space</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-sage-dark/10 flex items-center justify-center text-sage-dark font-medium">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-charcoal">Detailed proposal</p>
                      <p className="text-warm-gray text-sm">You'll receive a comprehensive quote within 48 hours</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-sage-dark p-8">
                <h3 className="text-xl font-semibold text-lavender-light mb-4">
                  Prefer to Call?
                </h3>
                <p className="text-lavender-light/70 text-sm mb-4">
                  Speak directly with our team during business hours.
                </p>
                <a
                  href="tel:206-555-0123"
                  className="inline-flex items-center text-tan hover:text-tan/80 transition-colors"
                >
                  <Phone size={18} className="mr-2" />
                  (206) 555-0123
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-warm-gray">
              Have questions? We have answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-cream p-8 border border-charcoal/10">
                <h3 className="text-lg font-semibold text-sage-dark mb-3">
                  {faq.question}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
