
import { FileText, Mail, MessageSquare, Compass } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const modules = [
  {
    title: "Rédaction de CV",
    description: "Maîtrisez les techniques de rédaction de CV pour le marché local et canadien.",
    icon: <FileText className="h-10 w-10 text-migrapro-vert-foret" />,
    duration: "4h"
  },
  {
    title: "Lettres de Motivation",
    description: "Apprenez à rédiger des lettres de motivation percutantes et personnalisées.",
    icon: <Mail className="h-10 w-10 text-migrapro-terre-cuite" />,
    duration: "3h"
  },
  {
    title: "Communication & Soft Skills",
    description: "Développez vos compétences en communication et gestion du stress.",
    icon: <MessageSquare className="h-10 w-10 text-migrapro-bleu-ciel" />,
    duration: "6h"
  },
  {
    title: "Orientation & Projet Professionnel",
    description: "Construisez votre plan de carrière avec un bilan de compétences complet.",
    icon: <Compass className="h-10 w-10 text-migrapro-jaune-soleil" />,
    duration: "4h"
  }
];

const FormationModules = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Nos Modules de Formation
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Des formations modulaires adaptées à vos besoins, en présentiel à Moramanga ou en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <Card 
              key={module.title}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 bg-white"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    {module.icon}
                    <CardTitle className="mt-4 text-xl font-heading">{module.title}</CardTitle>
                  </div>
                  <span className="bg-migrapro-vert-foret/10 text-migrapro-vert-foret px-3 py-1 rounded-full text-sm">
                    {module.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/contact">En savoir plus</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/contact" className="px-8">
              Découvrir nos formations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FormationModules;
