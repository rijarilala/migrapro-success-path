
import { FileText, Mail, Video } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CoachingDetails = () => {
  const services = [
    {
      title: "CV Masterclass",
      subtitle: "Normes canadiennes & malgaches",
      description: "Formation complète sur les normes CV canadiennes et malgaches, les attentes des recruteurs, et techniques de mise en valeur de votre profil.",
      icon: <FileText className="h-16 w-16 text-migrapro-terre-cuite" />
    },
    {
      title: "Lettre de Motivation efficace",
      subtitle: "Structuration & personnalisation",
      description: "Techniques de structuration et personnalisation pour capter l'attention des recruteurs avec une lettre percutante adaptée au poste convoité.",
      icon: <Mail className="h-16 w-16 text-migrapro-terre-cuite" />
    },
    {
      title: "Coaching Entretien",
      subtitle: "1h30 avec simulations & feedback",
      description: "Séance de coaching personnalisée avec simulations d'entretiens, conseils sur la communication non-verbale et feedback détaillé pour vous améliorer.",
      icon: <Video className="h-16 w-16 text-migrapro-terre-cuite" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Détail du Pack Réussite Pro
          </h2>
          <p className="text-lg text-gray-600">
            Un programme complet qui combine formation et coaching personnalisé 
            pour vous donner toutes les clés de la réussite professionnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <Card 
              key={item.title} 
              className="hover-scale animate-fade-in border-2 border-gray-100"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-2xl font-heading">{item.title}</CardTitle>
                <p className="text-migrapro-terre-cuite font-medium">{item.subtitle}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingDetails;
