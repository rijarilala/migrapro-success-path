
import { CompassIcon, BookOpen, Plane, Users, GraduationCap, HeadphonesIcon } from 'lucide-react';
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
      color: "from-teal-50 to-green-50 border-migrapro-vert-foret/20",
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    }, 
    {
      title: "Formation",
      description: "Modules pratiques pour développer vos compétences clés à Madagascar et au Canada.",
      icon: <GraduationCap className="h-8 w-8 text-migrapro-terre-cuite" />,
      link: "/services/formation",
      color: "from-amber-50 to-yellow-50 border-migrapro-terre-cuite/20",
      bgImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    }, 
    {
      title: "Coaching",
      description: "Accompagnement sur mesure pour atteindre vos objectifs professionnels.",
      icon: <HeadphonesIcon className="h-8 w-8 text-migrapro-bleu-ciel" />,
      link: "/services/coaching",
      color: "from-sky-50 to-blue-50 border-migrapro-bleu-ciel/20",
      bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    }, 
    {
      title: "Pack Réussite",
      description: "CV, Lettre de Motivation et Coaching pour maximiser vos chances.",
      icon: <BookOpen className="h-8 w-8 text-migrapro-terre-cuite" />,
      link: "/services/pack-reussite",
      color: "from-orange-50 to-red-50 border-migrapro-terre-cuite/20",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    }, 
    {
      title: "Immigration & Accompagnement",
      description: "Accompagnement complet pour votre projet d'immigration au Canada.",
      icon: <Plane className="h-8 w-8 text-migrapro-bleu-ciel" />,
      link: "/services/immigration",
      color: "from-blue-50 to-indigo-50 border-migrapro-bleu-ciel/20",
      bgImage: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    }, 
    {
      title: "Recrutement",
      description: "Service de mise en relation entre talents et entreprises canadiennes.",
      icon: <Users className="h-8 w-8 text-migrapro-jaune-soleil" />,
      link: "/services/recrutement",
      comingSoon: true,
      color: "from-yellow-50 to-amber-50 border-migrapro-jaune-soleil/20",
      bgImage: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Nos Compétences</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Des solutions complètes pour votre réussite professionnelle et votre installation au Canada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`bg-gradient-to-br ${service.color} rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden animate-fade-in`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 opacity-10"
                style={{ backgroundImage: `url('${service.bgImage}')`}}
              />
              
              <div className="relative z-10">
                <div className="mb-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-heading font-bold mb-2 flex items-center gap-2">
                  {service.title}
                  {service.comingSoon && <Badge className="bg-migrapro-jaune-soleil text-xs">Bientôt</Badge>}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 bg-white/80 backdrop-blur-sm hover:bg-white hover:border-migrapro-terre-cuite hover:text-migrapro-terre-cuite" 
                  asChild
                >
                  <Link to={service.link}>
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
