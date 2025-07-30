import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { heroBanner } from '../assets';
import residentialImage from '../assets/residential-construction.jpg'
import commercialImage from '../assets/commercial-office-fitout.jpeg'
import maintenanceImage from '../assets/construction-maintenance.jpeg'
import fitnessImage from '../assets/gym-interior.jpg'

const Home = () => {
  const services = [
    {
      title: 'Specialized Expertise',
      description: 'With particular strength in fitness industry construction, we bring specialized knowledge to unique requirements, delivering solutions that exceed expectations.',
      image: fitnessImage,
      link: '/services'
    },
    {
      title: 'Commercial Projects',
      description: 'Enhance your business space with professional commercial construction. We specialize in office fit-outs, retail spaces, and specialized facilities that support your business goals.',
      image: commercialImage,
      link: '/services'
    },
    {
      title: 'Residential Construction',
      description: 'Transform your home with our expert residential services. From custom new builds to complete renovations, we deliver quality craftsmanship tailored to your lifestyle and budget.',
      image: residentialImage,
      link: '/services'
    },
    {
      title: 'Maintenance & Repairs',
      description: 'Keep your property in peak condition with our preventative maintenance and rapid-response repair services. We ensure your investment remains protected year-round.',
      image: maintenanceImage,
      link: '/services'
    }
  ]

  const whyChooseUs = [
    {
      title: 'Local Expertise',
      description: 'Deep knowledge of Sydney\'s regulatory environment and site conditions ensures smooth project execution and compliance at every milestone.'
    },
    {
      title: 'Transparent Communication',
      description: 'Regular budget reviews with clear, jargon-free explanations keep you informed throughout your project journey.'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous adherence to industry standards and comprehensive quality inspections at every milestone guarantee exceptional results.'
    },
    {
      title: 'End-to-End Service',
      description: 'From initial concept through to handover, our comprehensive project management approach ensures seamless execution and stress-free experience.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-caps text-4xl md:text-6xl lg:text-7xl mb-6 text-company-gold">
            Building Excellence Across New South Wales
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted partner for turnkey builds, bespoke renovations and reliable maintenance across Sydney and beyond.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Founded in 2023, Collaborative Construction Group delivers comprehensive construction services with a hands-on approach and unwavering commitment to quality. From residential renovations to commercial fit-outs, we bring your vision to life with professional expertise and transparent communication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-company-gold hover:bg-company-gold/90 text-dark-charcoal font-semibold">
              <Link to="/quote">Get Your Free Quote Today</Link>
            </Button>
                     <Button asChild size="lg" className="bg-company-gold hover:bg-company-gold/90 text-dark-charcoal font-semibold">
              <Link to="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              Comprehensive Construction Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From residential renovations to commercial fit-outs, we deliver quality craftsmanship and professional expertise across all construction disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-company-gold hover:text-company-gold/80 font-medium"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              Why Clients Choose Collaborative Construction Group
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence, transparency, and client satisfaction sets us apart in the construction industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-company-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-gold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today for a free consultation and discover how we can bring your construction vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-12 w-12 text-company-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">0409 499 333</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 text-company-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">admin@collaborativegroup.com.au</p>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 bg-company-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-dark-charcoal font-bold text-lg">ABN</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">ABN</h3>
              <p className="text-gray-300">12 665 847 478</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-company-gold hover:bg-company-gold/90 text-dark-charcoal font-semibold">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

