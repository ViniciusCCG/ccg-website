import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Home, Building, Wrench, Dumbbell } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { heroBanner } from '../assets';
import residentialImage from "../assets/residential-construction-2.jpg";
import commercialImage from "../assets/commercial-construction-2.jpg";
import maintenanceImage from "../assets/construction-maintenance-2.jpg";
import fitnessImage from "../assets/fitness-construction-2.jpg";
import housesfromtop from "../assets/houses-from-top.jpg";
import pilates from "../assets/pilates-room.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Transform your home with our expert residential services.',
      services: [
        'New Home Construction',
        'Complete Renovations', 
        'Kitchen and Bathroom Renovations',
        'Home Extensions',
        'Maintenance and Repairs'
      ],
      image: residentialImage
    },
    {
      icon: Building,
      title: 'Commercial Projects',
      description: 'Enhance your business space with professional commercial construction.',
      services: [
        'Office Fit-Outs',
        'Retail Spaces',
        'Industrial Projects',
        'Specialized Facilities'
      ],
      image: commercialImage
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: 'Keep your property in peak condition with our comprehensive maintenance services.',
      services: [
        'Preventative Maintenance Programs',
        'Emergency Repairs',
        'Facility Assessments',
        'Equipment Relocation'
      ],
      image: maintenanceImage
    },
    {
      icon: Dumbbell,
      title: 'Fitness Industry Specialists',
      description: 'Specialized expertise in fitness facility construction and renovation.',
      services: [
        'Gym Design and Construction',
        'Fitness Facility Renovations',
        'Equipment Installation',
        'Specialized Flooring'
      ],
      image: fitnessImage
    }
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Comprehensive discussion of your project requirements, timeline, and budget. We listen carefully to understand your vision and provide expert guidance on feasibility and options.'
    },
    {
      step: '2',
      title: 'Design and Planning',
      description: 'Detailed project planning including design development, permit applications, and timeline establishment. We coordinate with architects, engineers, and other consultants as required.'
    },
    {
      step: '3',
      title: 'Project Execution',
      description: 'Professional construction management with regular progress updates and quality inspections. Our experienced team ensures that work proceeds efficiently while maintaining the highest standards.'
    },
    {
      step: '4',
      title: 'Quality Assurance',
      description: 'Comprehensive quality inspections and compliance checks throughout the construction process. We address any issues immediately to ensure exceptional final results.'
    },
    {
      step: '5',
      title: 'Project Completion',
      description: 'Final walkthrough, documentation handover, and ongoing support. We ensure that you\'re completely satisfied with your completed project and provide guidance for ongoing maintenance.'
    }
  ]

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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl">
            Comprehensive Construction Services Across New South Wales
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Collaborative Construction Group delivers end-to-end construction solutions for residential and commercial clients throughout New South Wales. Our experienced team combines traditional craftsmanship with modern techniques to deliver exceptional results that stand the test of time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-company-gold mr-3" />
                    <h3 className="text-2xl font-bold text-dark-charcoal">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-company-gold mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="border-company-gold text-company-gold hover:bg-company-gold hover:text-white">
                    <Link to="/quote">Get Quote for This Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Descriptions */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              Service Details
            </h2>
          </div>

          <div className="space-y-16">
            {/* Commercial Services FIRST now */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src={pilates} 
                  alt="Commercial Construction"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-dark-charcoal mb-4">
                  Commercial Construction Solutions
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>Office Fit-Outs:</strong> Create productive work environments with our professional office fit-out services. We understand the importance of functional design and deliver spaces that enhance productivity and reflect your company culture.
                  </p>
                  <p>
                    <strong>Retail Spaces:</strong> Develop retail environments that attract customers and drive sales. Our retail construction expertise ensures that your space is both functional and appealing to your target market.
                  </p>
                  <p>
                    <strong>Specialized Facilities:</strong> Custom construction for specialized business requirements. Whether you need a medical facility, educational space, or unique commercial application, we deliver tailored solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Residential Services SECOND now */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-dark-charcoal mb-4">
                  Residential Construction Excellence
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>New Home Construction:</strong> Build your dream home with our comprehensive new construction services. From initial design consultation through final handover, we manage every aspect of your new home build, ensuring quality craftsmanship and attention to detail at every stage.
                  </p>
                  <p>
                    <strong>Complete Renovations:</strong> Transform your existing home with our complete renovation services. Whether you're updating a single room or undertaking a whole-house renovation, our team delivers results that enhance both functionality and value.
                  </p>
                  <p>
                    <strong>Kitchen and Bathroom Renovations:</strong> Specialized expertise in kitchen and bathroom renovations, combining practical functionality with beautiful design. Our team understands the complexities of these high-impact spaces and delivers results that exceed expectations.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src={housesfromtop} 
                  alt="Residential Construction"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-dark-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-gold">
              Service Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We proudly serve clients throughout New South Wales, with particular expertise in:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">Greater Sydney</h3>
                <p className="text-gray-300">Metropolitan Area</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Wollongong</h3>
                <p className="text-gray-300">Illawarra Region</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Central Coast</h3>
                <p className="text-gray-300">Coastal Areas</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Regional NSW</h3>
                <p className="text-gray-300">Project-dependent</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-company-gold hover:bg-company-gold/90 text-dark-charcoal font-semibold">
              <Link to="/quote">Start Your Project Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services;
