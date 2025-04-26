
import { CheckSquare, FileText, Send, Home } from 'lucide-react';

const ImmigrationSteps = () => {
  const steps = [
    {
      icon: <CheckSquare className="w-12 h-12 text-migrapro-bleu-ciel" />,
      title: "Évaluation & éligibilité",
      description: "Analyse de votre profil et évaluation de votre admissibilité aux différents programmes d'immigration canadienne.",
      link: "#evaluation"
    },
    {
      icon: <FileText className="w-12 h-12 text-migrapro-bleu-ciel" />,
      title: "Préparation du dossier",
      description: "Accompagnement pour la préparation de tous les documents nécessaires : CV, lettres, formulaires et pièces justificatives.",
      link: "#preparation"
    },
    {
      icon: <Send className="w-12 h-12 text-migrapro-bleu-ciel" />,
      title: "Dépôt de la demande",
      description: "Assistance pour le dépôt de votre demande de visa ou de permis, avec un suivi personnalisé jusqu'à l'obtention.",
      link: "#depot"
    },
    {
      icon: <Home className="w-12 h-12 text-migrapro-bleu-ciel" />,
      title: "Suivi post-arrivée",
      description: "Support pour votre installation : recherche de logement, emploi, démarches administratives.",
      link: "#installation"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Étapes clés de votre parcours d'immigration
          </h2>
          <p className="text-lg text-gray-600">
            Un accompagnement structuré et professionnel pour faciliter chaque étape de votre projet.
          </p>
        </div>

        <div className="relative">
          {/* Ligne de connexion verticale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block"></div>
          
          <div className="grid grid-cols-1 gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                id={step.link.substring(1)}
                className="flex flex-col md:flex-row items-center gap-8 relative animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-migrapro-bleu-ciel z-10 hidden md:block"></div>
                
                {/* Contenu */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:text-left md:pl-12'}`}>
                  <div className="flex flex-col items-center md:items-end">
                    <div className="p-3 bg-migrapro-bleu-ciel/10 rounded-full mb-4 flex items-center justify-center md:hidden">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-heading font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                {/* Icône (visible uniquement sur desktop) */}
                <div className={`hidden md:flex items-center justify-center p-6 bg-migrapro-bleu-ciel/10 rounded-full ${index % 2 === 0 ? 'md:order-last' : ''}`}>
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationSteps;
