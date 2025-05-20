
import { FileText, Mail, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PackReussitePro = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t('packSuccess.services.cv.title'),
      icon: <FileText className="h-10 w-10 text-migrapro-terre-cuite" />,
      description: t('packSuccess.services.cv.description')
    }, 
    {
      title: t('packSuccess.services.coverLetter.title'),
      icon: <Mail className="h-10 w-10 text-migrapro-vert-foret" />,
      description: t('packSuccess.services.coverLetter.description')
    }, 
    {
      title: t('packSuccess.services.coaching.title'),
      icon: <Video className="h-10 w-10 text-migrapro-bleu-ciel" />,
      description: t('packSuccess.services.coaching.description')
    }
  ];
  
  return <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-fade-in mx-0">
            {t('packSuccess.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in animate-delay-100">
            {t('packSuccess.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => <Card key={service.title} className="border border-gray-200 shadow-md hover-scale animate-fade-in" style={{
          animationDelay: `${(index + 1) * 100}ms`
        }}>
              <CardHeader className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-gray-50 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center">
          <Button className="bg-migrapro-terre-cuite hover:bg-opacity-90 text-white text-lg px-8 py-6 animate-fade-in animate-delay-400" asChild>
            <Link to="/services/pack-reussite">
              {t('packSuccess.choosePack')}
            </Link>
          </Button>
          
          <p className="mt-4 text-sm text-gray-500 animate-fade-in animate-delay-500">
            {t('packSuccess.preferentialRates')}
          </p>
        </div>
      </div>
    </section>;
};

export default PackReussitePro;
