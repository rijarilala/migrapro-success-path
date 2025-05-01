
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-migrapro-bleu-ciel text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/0f7066c6-64a1-4c7c-819c-5a6157fc5732.png" 
                alt="UMEGREAT Pro Logo"
                className="h-14 w-auto" 
              />
            </div>
            <p className="text-gray-300">
              Votre partenaire pour un avenir professionnel réussi, spécialisé dans l'orientation professionnelle et l'immigration au Canada.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xl">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-migrapro-terre-cuite" />
                <span>Moramanga, Madagascar</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} className="text-migrapro-terre-cuite" />
                <a href="mailto:contact@umegreatpro.com" >
                  contact@umegreatpro.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} className="text-migrapro-terre-cuite"  />
                <a href="tel:+261340535068">
                  +261 34 05 350 68
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xl">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-migrapro-terre-cuite transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-migrapro-terre-cuite transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/temoignages" className="hover:text-migrapro-terre-cuite transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-migrapro-terre-cuite transition-colors">
                  Blog / Conseils
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-migrapro-terre-cuite transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xl">Suivez-nous</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-migrapro-terre-cuite transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-migrapro-terre-cuite transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-migrapro-terre-cuite transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} UMEGREAT Pro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
