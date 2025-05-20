
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesBanner = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-gradient-to-r from-migrapro-bleu-ciel to-migrapro-bleu-ciel/90 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            {t('services.title')}
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-white/90">
            {t('services.subtitle')}
          </p>
          
          <Button 
            className="bg-migrapro-terre-cuite hover:bg-opacity-90 text-white"
            asChild
          >
            <Link to="/contact">
              {t('hero.contactUs')} <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
