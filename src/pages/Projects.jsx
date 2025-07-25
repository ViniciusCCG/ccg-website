import { useState } from 'react'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { heroBanner } from '../assets';
import anytimeFitnessMartinPlace from "../assets/anytime-fitness-martin-place.jpg";
import anytimeFitnessCircularQuay from "../assets/anytime-fitness-circular-quay.jpg";
import anytimeFitnessMosman from "../assets/anytime-fitness-mosman.jpg";
import emfFitnessErinaFair from "../assets/emf-fitness-erina-fair.jpg";
import taishoRestaurant from "../assets/taisho-restaurant.jpg";
import afLogo from "../assets/af-logo-featured.png";
import commercialConcept from "../assets/commercial-concept-featured.jpg";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      title: "Anytime Fitness Martin Place",
      category: "fitness",
      location: "Sydney CBD",
      description: "Complete gym construction in the heart of Sydney's business district. This project showcased our expertise in urban construction and fitness facility design.",
      image: anytimeFitnessMartinPlace,
      features: ["Custom gym flooring", "Equipment platforms", "Modern amenities", "Efficient layout design"]
    },
    {
      title: "Anytime Fitness Circular Quay",
      category: "fitness",
      location: "Circular Quay",
      description: "A state-of-the-art fitness center with stunning harbor views, featuring premium finishes and advanced ventilation systems.",
      image: anytimeFitnessCircularQuay,
      features: ["Harbor view design", "Premium finishes", "Advanced ventilation", "Waterfront access"]
    },
    {
      title: "Anytime Fitness Mosman",
      category: "fitness",
      location: "Mosman",
      description: "A premium fitness facility in Mosman, designed with sophisticated aesthetics and high-end equipment areas to cater to a discerning clientele.",
      image: anytimeFitnessMosman,
      features: ["Premium materials", "Sophisticated design", "Community focus", "High-end equipment areas"]
    },
    {
      title: "EMF Fitness Centre Erina Fair",
      category: "fitness",
      location: "Erina Fair",
      description: "Large-scale fitness center construction within a busy shopping complex, requiring precise coordination and efficient project management.",
      image: emfFitnessErinaFair,
      features: ["Shopping center integration", "Large-scale construction", "Multi-stakeholder coordination", "High-traffic design"]
    },
    {
      title: "Taisho Japanese BBQ Restaurant",
      category: "commercial",
      location: "Zetland",
      description: "A unique restaurant fit-out project, incorporating authentic Japanese design elements and specialized kitchen ventilation systems for BBQ operations.",
      image: taishoRestaurant,
      features: ["Authentic Japanese design", "Specialized kitchen", "BBQ ventilation systems", "Cultural authenticity"]
    },
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fitness', name: 'Fitness Industry' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-caps text-4xl md:text-6xl lg:text-7xl mb-6 text-company-gold">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl">
            Showcasing Our Construction Excellence
          </p>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              Project Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of completed projects across residential and commercial construction. Each project represents our commitment to quality, attention to detail, and client satisfaction.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={activeFilter === category.id 
                  ? "bg-company-gold hover:bg-company-gold/90 text-dark-charcoal" 
                  : "border-company-gold text-company-gold hover:bg-company-gold hover:text-dark-charcoal"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-company-gold bg-company-gold/10 rounded-full">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-dark-charcoal mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    📍 {project.location}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-dark-charcoal text-sm">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-company-gold rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              Featured Project Highlights
            </h2>
          </div>

          <div className="space-y-16">
            {/* Anytime Fitness Success Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-dark-charcoal mb-4">
                  Anytime Fitness Partnership
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our partnership with Anytime Fitness has resulted in the successful completion of multiple gym locations across Sydney and regional areas. Each project demonstrates our specialized expertise in fitness facility construction, from initial design through equipment installation.
                  </p>
                  <p>
                    <strong>Locations completed:</strong> Martin Place (Sydney CBD), Circular Quay, Sandy Bay (Tasmania), Mosman (North Shore), Erina Fair (Central Coast), and Camperdown (Inner Sydney).
                  </p>
                  <p>
                    These projects showcase our ability to adapt to different locations and requirements while maintaining consistent quality and meeting tight deadlines in the competitive fitness industry.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src={afLogo} 
                  alt="Anytime Fitness Projects"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Commercial Diversity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={commercialConcept} 
                  alt="Commercial Projects"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-dark-charcoal mb-4">
                  Commercial Project Diversity
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Beyond our fitness industry expertise, we have successfully completed diverse commercial projects including restaurant fit-outs, office spaces, and specialized facilities. Each project brings unique challenges that we approach with creativity and technical expertise.
                  </p>
                  <p>
                    The Taisho Japanese BBQ Restaurant project in Zetland exemplifies our ability to work with specialized requirements, incorporating authentic design elements and complex kitchen ventilation systems for BBQ operations.
                  </p>
                  <p>
                    Our commercial portfolio demonstrates versatility in handling projects of various scales and complexities while maintaining our commitment to quality and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-gold">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let us bring your construction vision to life with the same quality and attention to detail shown in our portfolio.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-company-gold hover:bg-company-gold/90 text-dark-charcoal font-semibold">
              <a href="/quote">Get Your Free Quote Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects

