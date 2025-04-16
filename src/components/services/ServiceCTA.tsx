
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCTAProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
}

const ServiceCTA = ({ title, subtitle, buttonText, buttonLink }: ServiceCTAProps) => {
  return (
    <section className="bg-gradient-to-r from-migrapro-bleu-ciel to-migrapro-bleu-ciel/90 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">{title}</h2>
        
        {subtitle && (
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">{subtitle}</p>
        )}
        
        <Button 
          className="bg-migrapro-terre-cuite hover:bg-migrapro-terre-cuite/90 text-white text-lg px-8 py-6"
          asChild
        >
          <Link to={buttonLink}>
            {buttonText} <ArrowRight className="ml-2" size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ServiceCTA;
