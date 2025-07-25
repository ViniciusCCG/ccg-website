import { useState } from 'react'
import { FileText, Upload, Calendar, DollarSign, CheckCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { heroBanner } from '../assets';

const Quote = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'phone',
    bestTimeToCall: '',
    projectType: '',
    propertyType: '',
    projectSize: '',
    timeline: '',
    location: '',
    description: '',
    requirements: '',
    budget: '',
    hasPlans: 'no',
    previousContractor: 'no',
    specialConsiderations: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const processSteps = [
    {
      step: '1',
      title: 'Initial Review',
      time: '24-48 hours',
      description: 'We review your submission and contact you to schedule an initial consultation.'
    },
    {
      step: '2',
      title: 'Site Visit',
      time: 'Within 1 week',
      description: 'Our team visits your project location to assess requirements and discuss your vision in detail.'
    },
    {
      step: '3',
      title: 'Detailed Quote',
      time: '3-5 business days',
      description: 'We provide a comprehensive written quote including timeline, materials, and detailed scope of work.'
    },
    {
      step: '4',
      title: 'Project Planning',
      time: 'Upon acceptance',
      description: 'We begin detailed project planning and coordinate all necessary permits and approvals.'
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
            Request a Quote
          </h1>
          <p className="text-xl md:text-2xl">
            Get Your Free Project Quote Today
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              Tell Us About Your Project
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Please provide as much detail as possible about your construction project. This helps us prepare an accurate quote and timeline for your specific needs.
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form 
                action="https://formspree.io/f/xrbleoda"
                method="POST"
                className="space-y-8"
              >
                <input type="hidden" name="_subject" value="New Quote Request Submission" />

                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-4 flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-company-gold" />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-company-gold focus:border-transparent"
                      >
                        <option value="phone">Phone</option>
                        <option value="email">Email</option>
                        <option value="text">Text Message</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="bestTimeToCall">Best Time to Call</Label>
                      <Input
                        id="bestTimeToCall"
                        name="bestTimeToCall"
                        type="text"
                        value={formData.bestTimeToCall}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="e.g., Weekdays 9AM-5PM, Evenings after 6PM"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-4 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-company-gold" />
                    Project Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="projectType">Project Type *</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-company-gold focus:border-transparent"
                      >
                        <option value="">Select Project Type</option>
                        <option value="new-construction">New Construction</option>
                        <option value="renovation">Renovation</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="commercial-fitout">Commercial Fit-Out</option>
                        <option value="fitness-facility">Fitness Facility</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="propertyType">Property Type *</Label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        required
                        value={formData.propertyType}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-company-gold focus:border-transparent"
                      >
                        <option value="">Select Property Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="projectSize">Project Size</Label>
                      <select
                        id="projectSize"
                        name="projectSize"
                        value={formData.projectSize}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-company-gold focus:border-transparent"
                      >
                        <option value="">Select Project Size</option>
                        <option value="small">Small (under $50k)</option>
                        <option value="medium">Medium ($50k-$200k)</option>
                        <option value="large">Large (over $200k)</option>
                        <option value="unsure">Not sure</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Preferred Timeline</Label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-company-gold focus:border-transparent"
                      >
                        <option value="">Select Timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-plus-months">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="location">Project Location *</Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Full address or suburb"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-4 flex items-center">
                    <Upload className="mr-2 h-5 w-5 text-company-gold" />
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="description">Detailed Project Description *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleInputChange}
                        className="mt-1"
                        rows={4}
                        placeholder="Please describe your project in detail..."
                      />
                    </div>
                    <div>
                      <Label htmlFor="requirements">Specific Requirements</Label>
                      <Textarea
                        id="requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        className="mt-1"
                        rows={3}
                        placeholder="Any specific materials, finishes, or features you want included..."
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-company-gold focus:border-transparent"
                        >
                          <option value="">Select Budget Range</option>
                          <option value="under-25k">Under $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-200k">$100,000 - $200,000</option>
                          <option value="200k-plus">$200,000+</option>
                          <option value="unsure">Not sure</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="hasPlans">Do you have plans/drawings?</Label>
                        <select
                          id="hasPlans"
                          name="hasPlans"
                          value={formData.hasPlans}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-company-gold focus:border-transparent"
                        >
                          <option value="no">No</option>
                          <option value="yes">Yes</option>
                          <option value="partial">Partial/Sketches</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="specialConsiderations">Special Considerations</Label>
                      <Textarea
                        id="specialConsiderations"
                        name="specialConsiderations"
                        value={formData.specialConsiderations}
                        onChange={handleInputChange}
                        className="mt-1"
                        rows={3}
                        placeholder="Any special considerations, access issues, or other important information we should know..."
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-company-gold hover:bg-company-gold/90 text-dark-charcoal font-semibold text-lg py-3"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Submit Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-charcoal mb-4">
              What Happens Next?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined quote process ensures you receive a comprehensive and accurate estimate for your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-company-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-dark-charcoal font-bold text-xl">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-company-gold font-medium mb-2">
                    {step.time}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-company-gold">
              Why Choose Our Quote Process?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-company-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-300">
                No hidden costs or surprise variations. Our detailed quotes provide complete transparency from project start to finish.
              </p>
            </div>
            <div className="text-center">
              <DollarSign className="h-16 w-16 text-company-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Competitive Rates</h3>
              <p className="text-gray-300">
                We deliver premium quality at competitive rates through our efficient processes and direct material sourcing.
              </p>
            </div>
            <div className="text-center">
              <Calendar className="h-16 w-16 text-company-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliable Timeline</h3>
              <p className="text-gray-300">
                We understand the importance of meeting deadlines and consistently deliver projects on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Quote
