
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return <footer className="bg-migrapro-bleu-ciel text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="font-heading font-bold text-2xl">
              <span className="text-migrapro-terre-cuite">UMEGREAT</span>Pro
            </div>
            <p className="text-gray-300">
              Votre partenaire pour un avenir professionnel réussi, spécialisé dans l'orientation professionnelle et l'immigration au Canada.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xl">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-migrapro-terre-cuite" />
                <span>Lot A351 Moramanga Ville</span>
              </div>
              <div className="flex items-center gap-2">
              <Mail size={20} className="text-migrapro-terre-cuite" />
                <a href="mailto:contact@umegreatpro.com">
                  contact@umegreatpro.com
                </a>
              </div>
              <div className="flex items-center gap-2">
              <Phone size={20} className="text-migrapro-terre-cuite" />
                <a href="tel:+261340535068">
                  +261 34 05 350 68
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xl">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-migrapro-terre-cuite transition-colors">
                  {t('footer.services')}
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-migrapro-terre-cuite transition-colors">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/temoignages" className="hover:text-migrapro-terre-cuite transition-colors">
                  {t('footer.testimonials')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-migrapro-terre-cuite transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-migrapro-terre-cuite transition-colors">
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xl">{t('footer.followUs')}</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-migrapro-terre-cuite transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-migrapro-terre-cuite transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-migrapro-terre-cuite transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {currentYear} UMEGREAT Pro. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
