import { CheckCircle, Award, Users, Calendar } from 'lucide-react'
import { Card, CardContent } from '../components/ui/card'
import { heroBanner } from '../assets';
import steveImg from '../assets/steve-image.jpg';
import paulinaImg from '../assets/paulinia-image.jpg';



const About = () => {
  const stats = [
    { icon: Calendar, label: 'Founded', value: '2023' },
    { icon: Users, label: 'Team Size', value: '2-10 employees' },
    { icon: Award, label: 'Experience', value: '35+ years' },
    { icon: CheckCircle, label: 'Projects', value: '8+ gyms completed' }
  ]

  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'We take pride in delivering exceptional workmanship that stands the test of time, with attention to detail in every aspect of construction.'
    },
    {
      title: 'Transparent Communication',
      description: 'Open, honest communication throughout every project ensures clients are informed and confident in our progress and decisions.'
    },
    {
      title: 'Client-Focused Approach',
      description: 'Every project is tailored to meet specific client needs, preferences, and budget requirements with personalized service.'
    },
    {
      title: 'Professional Excellence',
      description: 'Rigorous adherence to industry standards, safety protocols, and regulatory compliance in all our construction activities.'
    }
  ]

  const approach = [
    {
      step: '1',
      title: 'Initial Consultation',
      description: 'Comprehensive discussion of your project requirements, timeline, and budget. We listen carefully to understand your vision and provide expert guidance.'
    },
    {
      step: '2',
      title: 'Design and Planning',
      description: 'Detailed project planning including design development, permit applications, and timeline establishment. We coordinate with all necessary consultants.'
    },
    {
      step: '3',
      title: 'Project Execution',
      description: 'Professional construction management with regular progress updates and quality inspections. Our experienced team ensures efficient, high-standard work.'
    },
    {
      step: '4',
      title: 'Quality Assurance',
      description: 'Comprehensive quality inspections and compliance checks throughout the construction process. We address any issues immediately.'
    },
    {
      step: '5',
      title: 'Project Completion',
      description: 'Final walkthrough, documentation handover, and ongoing support. We ensure complete satisfaction and provide maintenance guidance.'
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
            About Us
          </h1>
          <p className="text-xl md:text-2xl">
            Building Excellence Since 2023
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Collaborative Construction Group was founded in 2023 with a clear vision: to deliver exceptional construction services that exceed client expectations while building lasting relationships throughout New South Wales. Based in North Wollongong, our family-owned and operated business has quickly established itself as a trusted partner for both residential and commercial construction projects.
                </p>
                <p>
                  Our journey began with Managing Director Steve Grant's 35 years of construction industry experience and a commitment to doing things differently. Rather than simply completing projects, we focus on creating collaborative partnerships with our clients, ensuring every build reflects their unique vision and requirements.
                </p>
                <p>
                  From our early days, we recognized the importance of specialization alongside comprehensive service delivery. While we excel in all aspects of residential and commercial construction, we have developed particular expertise in the fitness industry, working with major brands like Anytime Fitness and EMF Fitness Centres across Sydney and beyond.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <stat.icon className="h-12 w-12 text-company-gold mx-auto mb-4" />
                    <div className="text-2xl font-bold text-dark-charcoal mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings decades of construction expertise and a commitment to excellence in every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src={steveImg}
                    alt="Steve Grant"
                    className="w-full md:w-60 h-auto rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-dark-charcoal mb-2">
                      Steve Grant
                    </h3>
                    <p className="text-company-gold font-semibold mb-4">
                      Managing Director
                    </p>
                    <p className="text-gray-600">
                      With 35 years of construction industry experience, Steve brings unparalleled expertise and leadership to every project. His hands-on approach and commitment to quality have established Collaborative Construction Group as a trusted name in NSW construction. Steve's vision of collaborative partnerships with clients ensures that every project is delivered with transparency, professionalism, and exceptional attention to detail.
                    </p>
                  </div>
                </div>   
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className= "flex flex-col md:flex-row gap-6 items-start">
                  <img
                  src={paulinaImg}
                  alt="Paulina Maureira"
                  className="w-full md:w-60 h-auto rounded-lg object-cover border border-gray-200 bg-white"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-dark-charcoal mb-2">
                      Paulina Maureira
                    </h3>
                    <p className="text-company-gold font-semibold mb-4">
                      Director
                    </p>
                    <p className="text-gray-600">
                      Paulina brings strategic oversight and operational excellence to Collaborative Construction Group. Her dedication to client satisfaction and business development ensures that our company continues to grow while maintaining the personal touch that sets us apart in the construction industry.
                  </p>
                  </div>
                </div>                  
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-company-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures every project is delivered on time, within budget, and to the highest quality standards.
            </p>
          </div>

          <div className="space-y-8">
            {approach.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-company-gold rounded-full flex items-center justify-center">
                        <span className="text-dark-charcoal font-bold text-lg">
                          {step.step}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-dark-charcoal mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-dark-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-company-gold">
              Credentials and Affiliations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-16 w-16 text-company-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Licensed</h3>
                <p className="text-gray-300">
                  Fully licensed for construction work across New South Wales
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-company-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Insured</h3>
                <p className="text-gray-300">
                  Comprehensive public liability and professional indemnity coverage
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-company-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-dark-charcoal font-bold text-xl">ABN</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">ABN</h3>
                <p className="text-gray-300">
                  12 665 847 478
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

