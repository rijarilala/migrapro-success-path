
import { Award, BookOpen, DollarSign, LucideGlobe, MapPin, UserCheck } from "lucide-react";

const EtudesAdvantages = () => {
  const advantages = [
    {
      title: "Excellence académique",
      description: "Les établissements canadiens sont reconnus mondialement pour la qualité de leur enseignement et leurs infrastructures modernes.",
      icon: <Award className="h-12 w-12 text-migrapro-terre-cuite" />
    },
    {
      title: "Diplômes valorisés",
      description: "Les diplômes canadiens sont reconnus internationalement et très appréciés par les employeurs du monde entier.",
      icon: <BookOpen className="h-12 w-12 text-migrapro-vert-foret" />
    },
    {
      title: "Frais abordables",
      description: "Les frais de scolarité sont généralement plus accessibles que dans d'autres pays anglophones comme les États-Unis ou le Royaume-Uni.",
      icon: <DollarSign className="h-12 w-12 text-migrapro-jaune-soleil" />
    },
    {
      title: "Environnement multiculturel",
      description: "Étudier au Canada, c'est évoluer dans un environnement diversifié, ouvert et accueillant pour les étudiants internationaux.",
      icon: <LucideGlobe className="h-12 w-12 text-migrapro-bleu-ciel" />
    },
    {
      title: "Opportunités post-diplôme",
      description: "Possibilité de travailler pendant et après vos études, avec des voies simplifiées vers l'immigration permanente.",
      icon: <UserCheck className="h-12 w-12 text-migrapro-terre-cuite" />
    },
    {
      title: "Qualité de vie exceptionnelle",
      description: "Le Canada est régulièrement classé parmi les meilleurs pays au monde pour sa qualité de vie, sa sécurité et ses infrastructures.",
      icon: <MapPin className="h-12 w-12 text-migrapro-vert-foret" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Pourquoi étudier au Canada ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Le Canada offre de nombreux avantages qui en font une destination de choix pour les étudiants internationaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={advantage.title} 
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EtudesAdvantages;
