
import { CompassIcon, BookOpen, Plane, Users, GraduationCap, HeadphonesIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const ServicesOverview = () => {
  const services = [
    {
      title: "Conseil & Orientation Professionnelle",
      description: "Diagnostic de profil, bilan de compétences, plan de carrière personnalisé.",
      longDescription: "Notre service de conseil vous aide à identifier vos forces et à les aligner avec les opportunités professionnelles au Canada et à Madagascar.",
      icon: <CompassIcon className="h-12 w-12 text-migrapro-vert-foret" />,
      link: "/services/orientation",
      color: "bg-gradient-to-br from-teal-50 to-green-50 border-migrapro-vert-foret/20"
    },
    {
      title: "Formation",
      description: "Modules pratiques pour développer vos compétences clés à Madagascar et au Canada.",
      longDescription: "Développez les compétences essentielles pour réussir professionnellement grâce à nos formations spécialisées en présentiel ou en ligne.",
      icon: <GraduationCap className="h-12 w-12 text-migrapro-terre-cuite" />,
      link: "/services/formation",
      color: "bg-gradient-to-br from-amber-50 to-yellow-50 border-migrapro-terre-cuite/20"
    },
    {
      title: "Coaching",
      description: "Accompagnement sur mesure pour atteindre vos objectifs professionnels.",
      longDescription: "Un coaching personnalisé pour renforcer votre confiance, clarifier votre projet et vous préparer aux entretiens professionnels.",
      icon: <HeadphonesIcon className="h-12 w-12 text-migrapro-bleu-ciel" />,
      link: "/services/coaching",
      color: "bg-gradient-to-br from-sky-50 to-blue-50 border-migrapro-bleu-ciel/20"
    },
    {
      title: "Pack Réussite Pro",
      description: "CV, Lettre de Motivation et Coaching pour maximiser vos chances.",
      longDescription: "Une solution complète pour vous démarquer sur le marché du travail avec des documents professionnels et une préparation aux entretiens.",
      icon: <BookOpen className="h-12 w-12 text-migrapro-terre-cuite" />,
      link: "/services/pack-reussite",
      color: "bg-gradient-to-br from-orange-50 to-red-50 border-migrapro-terre-cuite/20"
    },
    {
      title: "Immigration & Accompagnement",
      description: "Accompagnement complet pour votre projet d'immigration au Canada.",
      longDescription: "De l'évaluation de votre éligibilité jusqu'à votre installation, nous vous guidons à chaque étape de votre parcours d'immigration.",
      icon: <Plane className="h-12 w-12 text-migrapro-bleu-ciel" />,
      link: "/services/immigration",
      color: "bg-gradient-to-br from-blue-50 to-indigo-50 border-migrapro-bleu-ciel/20"
    },
    {
      title: "Recrutement",
      description: "Service de mise en relation entre talents et entreprises canadiennes.",
      longDescription: "Bientôt disponible : notre service de recrutement facilitera la connexion entre les talents qualifiés et les entreprises canadiennes à la recherche de compétences.",
      icon: <Users className="h-12 w-12 text-migrapro-jaune-soleil" />,
      link: "/services/recrutement",
      comingSoon: true,
      color: "bg-gradient-to-br from-yellow-50 to-amber-50 border-migrapro-jaune-soleil/20"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`hover-scale animate-fade-in border-2 ${service.color} overflow-hidden`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="font-heading text-2xl flex items-center gap-2">
                      {service.title}
                      {service.comingSoon && (
                        <Badge className="bg-migrapro-jaune-soleil text-xs ml-2">Bientôt</Badge>
                      )}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-lg mt-2">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{service.longDescription}</p>
                
                <Button 
                  className="w-full bg-migrapro-bleu-ciel hover:bg-migrapro-bleu-ciel/80"
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

export default ServicesOverview;
