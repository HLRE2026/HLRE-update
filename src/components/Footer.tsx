import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About HLRE */}
          <div>
            <Link to="/" className="block mb-4">
              <div className="inline-block">
                <h2 className="text-5xl font-bold text-white tracking-wider">HLRE</h2>
              </div>
            </Link>
            <p className="text-sm">
              Empowering lives through hope, love, resilience, and the journey of recovery. 
              Join us in documenting and sharing stories of transformation through our Canadian Rockies expedition.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@hlre2025.com</span>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Dan Adcock (Producer): 780-554-5576</span>
                </div>
                <div className="flex items-center space-x-2 pl-7">
                  <span>Matt Dringenberg (Director): 780-909-2763</span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <span>#1107, 9918-101 St.</span>
                  <span>Edmonton</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/about" className="block hover:text-primary-400 transition-colors">
                About the Expedition
              </Link>
              <Link to="/resources" className="block hover:text-primary-400 transition-colors">
                Books & Resources
              </Link>
              <a 
                href="https://vimeo.com/773854707"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary-400 transition-colors"
              >
                Watch Project Pitch
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-800 text-center">
          <p>&copy; {new Date().getFullYear()} Hope, Love, Resilience Expedition. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}