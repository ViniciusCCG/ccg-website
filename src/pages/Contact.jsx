import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { heroBanner } from '../assets';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    location: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      location: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '0409 499 333',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'admin@collaborativegroup.com.au',
      description: 'Send us your project details'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '2/24 Ralph Black Dr, North Wollongong, NSW 2500',
      description: 'Visit our office location'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 7AM-5PM, Sat: 8AM-2PM',
      description: 'Sunday by appointment only'
    }
  ]

  const serviceAreas = [
    'Greater Sydney Metropolitan Area',
    'Wollongong and Illawarra Region',
    'Central Coast',
    'Regional NSW (project-dependent)'
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
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl">
            Get in Touch with Collaborative Construction Group
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to start your construction project? Contact us today for a free consultation and discover how we can bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <info.icon className="h-12 w-12 text-company-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-2">
                    {info.title}
                  </h3>
                  <p className={`text-gray-700 font-medium mb-2 ${info.title === 'Email' ? 'text-center text-sm truncate w-full' : ''}`}>
                    {info.details}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-dark-charcoal mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="mt-1" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <select id="projectType" name="projectType" value={formData.projectType} onChange={handleInputChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-company-gold focus:border-transparent">
                        <option value="">Select Project Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="fitness">Fitness Industry</option>
                        <option value="maintenance">Maintenance & Repairs</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="location">Project Location</Label>
                    <Input id="location" name="location" type="text" value={formData.location} onChange={handleInputChange} className="mt-1" placeholder="City, Suburb, or Address" />
                  </div>
                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} className="mt-1" rows={6} placeholder="Please describe your project requirements, timeline, and any specific details..." />
                  </div>
                  <Button type="submit" className="w-full bg-company-gold hover:bg-company-gold/90 text-dark-charcoal font-semibold">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-dark-charcoal mb-4">
                    Our Location
                  </h3>
                  <div className="mb-4 rounded-lg overflow-hidden h-64">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.7144873113025!2d150.8901779764613!3d-34.408602247221246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b131911d286e2d1%3A0x631d9fcffab9a5b8!2sUnit%202%2F24%20Ralph%20Black%20Dr%2C%20North%20Wollongong%20NSW%202500!5e0!3m2!1sen!2sau!4v1753674369530!5m2!1sen!2sau"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Address:</strong> 2/24 Ralph Black Dr, North Wollongong, NSW 2500</p>
                    <p><strong>ABN:</strong> 12 665 847 478</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-dark-charcoal mb-4">
                    Service Areas
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We proudly serve clients throughout New South Wales, with particular expertise in:
                  </p>
                  <ul className="space-y-2">
                    {serviceAreas.map((area, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-company-gold rounded-full mr-3"></span>
                        {area}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-dark-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-gold">
            Emergency Repairs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Need urgent construction or maintenance assistance? We offer 24/7 emergency repair services for critical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dark-charcoal">
              <a href="mailto:steve@collaborativegroup.com.au">Email for Urgent Issues</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;
