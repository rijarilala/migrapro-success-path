
import { CheckCircle } from "lucide-react";

const EtudesServices = () => {
  const services = [
    {
      title: "Recherche de programmes et d'établissements",
      items: [
        "Analyse de votre profil académique et vos objectifs",
        "Recommandation personnalisée de programmes adaptés",
        "Sélection d'établissements selon vos critères et budget",
        "Information sur les classements et accréditations"
      ]
    },
    {
      title: "Préparation et soumission des dossiers",
      items: [
        "Préparation personnalisée aux tests linguistiques (IELTS, TOEFL)",
        "Rédaction et révision des documents de candidature",
        "Traduction et légalisation de documents",
        "Soumission et suivi des dossiers d'admission"
      ]
    },
    {
      title: "Accompagnement visa et installation",
      items: [
        "Constitution du dossier de permis d'études",
        "Préparation à l'entretien d'immigration",
        "Assistance pour l'assurance santé et le logement",
        "Orientation pour l'installation au Canada"
      ]
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Notre accompagnement complet
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            UMEGREAT Pro vous offre un accompagnement personnalisé à chaque étape de votre projet d'études au Canada, depuis le choix du programme jusqu'à votre installation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-md animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <h3 className="text-xl font-bold mb-6 text-migrapro-bleu-ciel font-heading">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-migrapro-terre-cuite flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EtudesServices;
