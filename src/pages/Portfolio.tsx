import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  details: string[];
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Interior', 'Exterior', 'Cabinets', 'Historic'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Madison Park Estate',
      location: 'Madison Park, Seattle',
      category: 'Interior',
      description: 'Complete interior transformation of a 6,500 sq ft waterfront estate, including custom color development and specialty finishes.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      details: ['6,500 sq ft', 'Custom color palette', 'Venetian plaster accents', '4-week project'],
    },
    {
      id: 2,
      title: 'Capitol Hill Victorian',
      location: 'Capitol Hill, Seattle',
      category: 'Historic',
      description: 'Meticulous restoration of a 1902 Victorian home, matching original paint colors and period-appropriate techniques.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      details: ['Historic restoration', 'Period color matching', 'Lead paint abatement', '6-week project'],
    },
    {
      id: 3,
      title: 'Mercer Island Modern',
      location: 'Mercer Island, WA',
      category: 'Interior',
      description: 'Minimalist interior with clean lines and a sophisticated neutral palette for a contemporary new construction.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      details: ['New construction', 'Modern aesthetic', 'Premium matte finishes', '3-week project'],
    },
    {
      id: 4,
      title: 'Bellevue Kitchen Refresh',
      location: 'Bellevue, WA',
      category: 'Cabinets',
      description: 'Hand-sprayed cabinet refinishing that transformed dated oak to a fresh, contemporary white.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      details: ['Cabinet refinishing', 'Color: Simply White', 'Hardware update', '1-week project'],
    },
    {
      id: 5,
      title: 'Queen Anne Craftsman',
      location: 'Queen Anne, Seattle',
      category: 'Exterior',
      description: 'Full exterior repaint of a classic Craftsman home, including extensive wood repair and trim detailing.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      details: ['Exterior repaint', 'Wood repair included', 'Three-color scheme', '2-week project'],
    },
    {
      id: 6,
      title: 'Medina Waterfront',
      location: 'Medina, WA',
      category: 'Interior',
      description: 'Luxury interior featuring custom metallic accents, high-gloss lacquer trim, and detailed ceiling work.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
      details: ['8,000 sq ft', 'Metallic accents', 'High-gloss trim', '5-week project'],
    },
    {
      id: 7,
      title: 'Magnolia Classic',
      location: 'Magnolia, Seattle',
      category: 'Exterior',
      description: 'Classic three-color exterior scheme with cedar shake accent painting and comprehensive trim work.',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      details: ['Full exterior', 'Cedar shake accents', 'Premium duration paint', '2-week project'],
    },
    {
      id: 8,
      title: 'Kirkland Bathroom Vanities',
      location: 'Kirkland, WA',
      category: 'Cabinets',
      description: 'Three bathroom vanity refinishing with durable waterproof finishes in a coordinated color scheme.',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
      details: ['3 vanities', 'Waterproof finish', 'Color: Hale Navy', '4-day project'],
    },
    {
      id: 9,
      title: 'Laurelhurst Tudor',
      location: 'Laurelhurst, Seattle',
      category: 'Historic',
      description: 'Careful restoration of a 1920s Tudor home, preserving original character while updating protection.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      details: ['1920s Tudor', 'Historic preservation', 'Stucco expertise', '4-week project'],
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-sage-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-tan font-medium tracking-wider text-sm mb-4 uppercase">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-lavender-light leading-tight mb-6">
              Portfolio of
              <br />
              <span className="text-tan">Excellence</span>
            </h1>
            <p className="text-lavender-light/80 text-lg md:text-xl leading-relaxed">
              Explore our recent projects and see the quality that has made us
              the trusted choice for Seattle's finest homes.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-cream py-8 border-b border-charcoal/10 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm font-medium tracking-wide transition-colors ${
                  selectedCategory === category
                    ? 'bg-sage-dark text-lavender-light'
                    : 'bg-white text-warm-gray hover:text-sage-dark border border-charcoal/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-sage-dark/0 group-hover:bg-sage-dark/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-lavender-light font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-cream/90 text-sage-dark px-3 py-1 text-xs font-medium tracking-wide">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-sage-dark mb-1">
                  {project.title}
                </h3>
                <p className="text-warm-gray text-sm">{project.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-sage-dark/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-cream max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-cream/90 p-2 hover:bg-cream transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-sage-dark/10 text-sage-dark px-3 py-1 text-xs font-medium tracking-wide">
                  {selectedProject.category}
                </span>
                <span className="text-warm-gray text-sm">{selectedProject.location}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-sage-dark mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-warm-gray leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProject.details.map((detail, index) => (
                  <span
                    key={index}
                    className="bg-sage/20 text-charcoal px-4 py-2 text-sm"
                  >
                    {detail}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center bg-sage-dark text-lavender-light px-6 py-3 font-medium tracking-wide hover:bg-charcoal transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                Start Your Project
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-sage-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-lavender-light mb-4">
            Ready to See Your Home Here?
          </h2>
          <p className="text-lavender-light/70 max-w-2xl mx-auto mb-8">
            Let's discuss your project and create something beautiful together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-gold text-sage-dark px-8 py-4 font-medium tracking-wide hover:bg-gold/90 transition-colors"
          >
            Schedule Consultation
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
