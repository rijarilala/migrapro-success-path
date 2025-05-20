
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SearchCommand from '@/components/search/SearchCommand';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return <div className="relative bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Hero background image overlay with gradient */}
      <div className="absolute inset-0 bg-cover bg-center bg-blend-overlay bg-black/10 bg-fixed" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`,
      backgroundSize: 'cover'
    }}></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-md mb-4">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">{t('hero.subtitle')}</p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <SearchCommand className="w-full md:w-auto bg-white/90 hover:bg-white text-gray-800" />
            <span className="text-white text-sm mt-2 md:mt-0 md:ml-2">{t('hero.searchPlaceholder')}</span>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-migrapro-terre-cuite hover:bg-opacity-90 text-white text-lg px-8 py-6" asChild>
              <Link to="/services">
                {t('hero.discoverServices')} <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            
            <Button variant="outline" className="bg-white bg-opacity-20 border-white text-white hover:bg-white hover:text-migrapro-bleu-ciel text-lg px-8 py-6" asChild>
              <Link to="/contact">
                {t('hero.contactUs')}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,146.86,85.02,321.39,56.44Z" fill="#fff" opacity="1"></path>
        </svg>
      </div>
    </div>;
};

export default Hero;
