
import { FileText, Mail, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const PackReussitePro = () => {
  const services = [
    {
      title: "CV Professionnel",
      icon: <FileText className="h-10 w-10 text-migrapro-terre-cuite" />,
      description: "Module e-learning complet sur les normes CV canadiennes et malgaches."
    },
    {
      title: "Lettre de Motivation",
      icon: <Mail className="h-10 w-10 text-migrapro-vert-foret" />,
      description: "Techniques de structuration et personnalisation pour capter l'attention des recruteurs."
    },
    {
      title: "Coaching Entretien",
      icon: <Video className="h-10 w-10 text-migrapro-bleu-ciel" />,
      description: "Séance de coaching personnalisée de 1h30 avec simulations et feedback."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in animate-delay-100">
        🎯 Vous souhaitez mettre toutes les chances de votre côté ?
        Trouver un emploi au Canada demande plus que de bons documents — il faut une stratégie complète, adaptée et percutante.
            C’est pourquoi nous avons créé le Pack Réussite :
          un accompagnement 3-en-1 pensé pour vous aider à décrocher des entretiens et réussir votre intégration professionnelle.

👇 Découvrez le contenu du pack 👇




          </p>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Pack Réussite
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in animate-delay-100">
            CV + Lettre de Motivation + Coaching Entretien : tout ce dont vous avez besoin pour 
            maximiser vos chances de succès professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="border border-gray-200 shadow-md hover-scale animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardHeader className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-gray-50 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-migrapro-terre-cuite hover:bg-opacity-90 text-white text-lg px-8 py-6 animate-fade-in animate-delay-400"
            asChild
          >
            <Link to="/services/pack-reussite">
              Je choisis ce pack
            </Link>
          </Button>
          
          <p className="mt-4 text-sm text-gray-500 animate-fade-in animate-delay-500">
            Tarifs préférentiels par rapport aux services à l'unité
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackReussitePro;
