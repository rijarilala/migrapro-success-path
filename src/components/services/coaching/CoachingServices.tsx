
import { BookOpen, Target, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const CoachingServices = () => {
  const coachingTypes = [
    {
      title: "Coaching Entretien d'embauche",
      description: "1h30 de simulation + feedback personnalisé pour vous préparer à vos entretiens et maximiser vos chances de réussite.",
      icon: <BookOpen className="h-10 w-10 text-migrapro-terre-cuite" />
    },
    {
      title: "Coaching Orientation & Reconversion",
      description: "Définition d'objectifs clairs et d'un plan d'action concret pour votre évolution professionnelle.",
      icon: <Target className="h-10 w-10 text-migrapro-terre-cuite" />
    },
    {
      title: "Coaching Développement Personnel",
      description: "Renforcez votre confiance en vous et apprenez à gérer efficacement le stress professionnel.",
      icon: <Users className="h-10 w-10 text-migrapro-terre-cuite" />
    },
    {
      title: "Coaching Immigration",
      description: "Préparation culturelle et mentale pour votre intégration professionnelle au Canada.",
      icon: <Globe className="h-10 w-10 text-migrapro-terre-cuite" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-migrapro-bleu-ciel">
            Nos Services de Coaching
          </h2>
          <p className="text-lg text-gray-600">
            Un accompagnement sur mesure à chaque étape de votre parcours professionnel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coachingTypes.map((service, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-migrapro-bleu-ciel/10 p-3 rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-migrapro-terre-cuite font-medium">
            Format : Séances individuelles ou en petit groupe, en ligne ou en présentiel à Moramanga
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoachingServices;
