
import { Users, Compass, Heart, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Entretien d'embauche",
    description: "Séance de simulation d'entretien de 1h30 avec feedback détaillé.",
    icon: <Users className="h-10 w-10 text-migrapro-bleu-ciel" />,
    duration: "1h30"
  },
  {
    title: "Orientation & Reconversion",
    description: "Définissez vos objectifs professionnels et construisez votre plan d'action.",
    icon: <Compass className="h-10 w-10 text-migrapro-vert-foret" />,
    duration: "2h"
  },
  {
    title: "Développement Personnel",
    description: "Renforcez votre confiance en vous et gérez votre stress efficacement.",
    icon: <Heart className="h-10 w-10 text-migrapro-terre-cuite" />,
    duration: "1h"
  },
  {
    title: "Immigration",
    description: "Préparez-vous mentalement et culturellement à votre nouvelle vie au Canada.",
    icon: <Globe className="h-10 w-10 text-migrapro-jaune-soleil" />,
    duration: "1h30"
  }
];

const CoachingServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Nos Services de Coaching
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Un accompagnement personnalisé pour chaque étape de votre parcours professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 bg-gradient-to-br from-gray-50 to-white"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    {service.icon}
                    <CardTitle className="mt-4 text-xl font-heading">{service.title}</CardTitle>
                  </div>
                  <span className="bg-migrapro-bleu-ciel/10 text-migrapro-bleu-ciel px-3 py-1 rounded-full text-sm">
                    {service.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/contact">Réserver une séance</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-migrapro-bleu-ciel hover:bg-migrapro-bleu-ciel/90">
            <Link to="/contact" className="px-8">
              Réserver un coaching
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoachingServices;
