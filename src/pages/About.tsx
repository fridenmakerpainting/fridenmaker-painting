import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart, Eye, Users } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '1952',
      title: 'The Beginning',
      description: 'Hans Fridenmaker, a master craftsman from Germany, established our company with a simple promise: every surface deserves the care of an artist.',
    },
    {
      year: '1978',
      title: 'Second Generation',
      description: 'Robert Fridenmaker expanded our services to include specialty finishes, bringing European techniques to Pacific Northwest homes.',
    },
    {
      year: '1999',
      title: 'Third Generation',
      description: 'Michael Fridenmaker modernized operations while preserving traditional craftsmanship, establishing relationships with Seattle\'s premier builders.',
    },
    {
      year: '2018',
      title: 'Fourth Generation',
      description: 'Today, the Fridenmaker legacy continues with a new generation combining time-honored techniques with modern innovation.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every edge, every corner, every detail receives our complete attention. We believe excellence is found in the elements others overlook.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest communication, transparent pricing, and standing behind our work. We treat your home as we would our own.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'We listen carefully to understand your goals, then apply decades of expertise to bring your vision to life.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We collaborate closely with homeowners, designers, and builders to ensure seamless execution of every project.',
    },
  ];

  const stats = [
    { number: '70+', label: 'Years of Excellence' },
    { number: '4', label: 'Generations' },
    { number: '2,500+', label: 'Projects Completed' },
    { number: '100%', label: 'Satisfaction Guarantee' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-sage-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-tan font-medium tracking-wider text-sm mb-4 uppercase">
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-lavender-light leading-tight mb-6">
              Four Generations of
              <br />
              <span className="text-tan">Exceptional Craft</span>
            </h1>
            <p className="text-lavender-light/80 text-lg md:text-xl leading-relaxed">
              Since 1952, the Fridenmaker family has dedicated ourselves to a singular pursuit:
              bringing artistry and precision to every surface we touch.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-charcoal py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-semibold text-tan mb-1">
                  {stat.number}
                </p>
                <p className="text-lavender-light/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage-dark mb-6">
                A Legacy Built on Excellence
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  When Hans Fridenmaker arrived in Seattle in 1952, he brought more than
                  just his painter's tools—he brought a philosophy. Trained as a master
                  craftsman in Munich, he believed that every home deserved the same
                  attention to detail as the finest European estates.
                </p>
                <p>
                  That philosophy has guided our family through four generations. While
                  techniques and materials have evolved, our commitment to exceptional
                  craftsmanship remains unchanged. Each Fridenmaker who has held a brush
                  has added to our collective expertise, creating a depth of knowledge
                  that simply cannot be replicated.
                </p>
                <p>
                  Today, we continue to serve Seattle's most discerning homeowners,
                  builders, and designers. Our clients choose us not just for our
                  technical skill, but for the peace of mind that comes from working
                  with a family that has staked its reputation on excellence for
                  over seven decades.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=800&fit=crop"
                alt="Craftsman at work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-sage-dark p-6 hidden md:block">
                <p className="text-tan font-serif text-2xl font-semibold">Est. 1952</p>
                <p className="text-lavender-light/70 text-sm">Seattle, Washington</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage-dark mb-4">
              Our Journey
            </h2>
            <p className="text-warm-gray">
              Four generations of growth, innovation, and unwavering commitment to our craft.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-charcoal/20" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-cream p-8 border border-charcoal/10">
                      <p className="text-tan font-serif text-2xl font-semibold mb-2">
                        {item.year}
                      </p>
                      <h3 className="text-xl font-semibold text-sage-dark mb-3">
                        {item.title}
                      </h3>
                      <p className="text-warm-gray leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-4 h-4 bg-gold rounded-full z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage-dark mb-4">
              Our Values
            </h2>
            <p className="text-warm-gray">
              The principles that guide every decision and every brushstroke.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 border border-charcoal/10 flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-sage-dark/5 flex items-center justify-center">
                    <value.icon className="text-tan" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sage-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                alt="Fridenmaker team"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-sage-dark mb-6">
                Our Team
              </h2>
              <div className="space-y-4 text-warm-gray leading-relaxed">
                <p>
                  Every member of the Fridenmaker team shares our family's commitment
                  to excellence. We hire not just for skill, but for character—seeking
                  craftspeople who take genuine pride in their work.
                </p>
                <p>
                  Our painters undergo extensive training in both traditional techniques
                  and modern methods. They understand that in luxury homes, the details
                  matter: clean lines, smooth finishes, and meticulous protection of
                  your belongings throughout the project.
                </p>
                <p>
                  Many of our team members have been with us for over a decade. This
                  stability means consistent quality and familiar faces on every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-sage-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lavender-light mb-4">
            Experience the Fridenmaker Difference
          </h2>
          <p className="text-lavender-light/70 max-w-2xl mx-auto mb-8">
            Let's discuss how our four generations of expertise can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-gold text-sage-dark px-8 py-4 font-medium tracking-wide hover:bg-gold/90 transition-colors"
          >
            Start Your Project
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
