
import { Plane, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ImmigrationOverview = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const handleEligibilityClick = () => {
    navigate('/services/eligibility');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Extract benefits as array with proper typing
  const benefits = t('immigration.benefits', { returnObjects: true }) as string[];
  
  return <section className="py-16 md:py-24 bg-gradient-to-br from-migrapro-bleu-ciel/5 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-block p-3 bg-migrapro-bleu-ciel/10 rounded-full mb-6">
              <Plane className="h-8 w-8 text-migrapro-bleu-ciel" />
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              {t('immigration.title')}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              {t('immigration.subtitle')}
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-migrapro-bleu-ciel" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button 
              size="lg" 
              onClick={handleEligibilityClick} 
              className="bg-migrapro-terre-cuite hover:bg-migrapro-terre-cuite/90 font-light text-base text-center text-slate-50 py-0 my-0 mx-[236px] px-[47px] rounded-sm"
            >
              {t('immigration.testEligibility')}
            </Button>
          </div>

          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Immigration Canada" 
              className="rounded-lg shadow-xl w-full object-cover h-auto" 
            />
          </div>
        </div>
      </div>
    </section>;
};

export default ImmigrationOverview;
