
import { CompassIcon, BookOpen, Plane, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const ServicesPreview = () => {
  const services = [
    {
      title: "Conseil & Orientation Professionnelle",
      description: "Diagnostic de profil, bilan de compétences, plan de carrière personnalisé.",
      icon: <CompassIcon className="h-8 w-8 text-migrapro-vert-foret" />,
      link: "/services/orientation",
      color: "bg-gradient-to-br from-teal-50 to-green-50 border-migrapro-vert-foret/20"
    },
    {
      title: "Pack Réussite Pro",
      description: "CV, Lettre de Motivation et Coaching Entretien pour maximiser vos chances.",
      icon: <BookOpen className="h-8 w-8 text-migrapro-terre-cuite" />,
      link: "/services/coaching",
      color: "bg-gradient-to-br from-orange-50 to-red-50 border-migrapro-terre-cuite/20"
    },
    {
      title: "Immigration & Accompagnement",
      description: "Accompagnement complet pour votre projet d'immigration au Canada.",
      icon: <Plane className="h-8 w-8 text-migrapro-bleu-ciel" />,
      link: "/services/immigration",
      color: "bg-gradient-to-br from-blue-50 to-indigo-50 border-migrapro-bleu-ciel/20"
    },
    {
      title: "Recrutement",
      description: "Service de mise en relation entre talents et entreprises canadiennes.",
      icon: <Users className="h-8 w-8 text-migrapro-jaune-soleil" />,
      link: "/services/recrutement",
      comingSoon: true,
      color: "bg-gradient-to-br from-yellow-50 to-amber-50 border-migrapro-jaune-soleil/20"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Nos Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Des solutions complètes pour votre réussite professionnelle et votre installation au Canada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`hover-scale animate-fade-in border ${service.color}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-3">
                  {service.icon}
                </div>
                <CardTitle className="font-heading text-xl flex items-center gap-2">
                  {service.title}
                  {service.comingSoon && (
                    <Badge className="bg-migrapro-jaune-soleil text-xs">Bientôt</Badge>
                  )}
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 hover:border-migrapro-terre-cuite hover:text-migrapro-terre-cuite"
                  asChild
                >
                  <Link to={service.link}>
                    En savoir plus
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
