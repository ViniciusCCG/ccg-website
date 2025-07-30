import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-brand text-xl text-company-gold mb-4">
              COLLABORATIVE CONSTRUCTION GROUP
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted partner for turnkey builds, bespoke renovations and reliable maintenance across Sydney and beyond. Founded in 2023, we deliver comprehensive construction services with a hands-on approach and unwavering commitment to quality.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/collaborative-construction-group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-company-gold transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-brand text-xl text-company-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-company-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-company-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-company-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-company-gold transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-company-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-300 hover:text-company-gold transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-brand text-xl text-company-gold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-company-gold" />
                <span className="text-gray-300">0409 499 333</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-company-gold" />
                <span className="text-gray-300">admin@collaborativegroup.com.au</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-company-gold mt-1" />
                <span className="text-gray-300">
                  2/24 Ralph Black Dr<br />
                  North Wollongong, NSW 2500
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              <p>&copy; 2023 Collaborative Construction Group. All rights reserved.</p>
              <p className="mt-1">ABN: 12 665 847 478</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-300 text-sm">
                Licensed and insured construction services across New South Wales
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
