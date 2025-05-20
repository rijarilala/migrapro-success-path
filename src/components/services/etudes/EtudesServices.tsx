
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const EtudesServices = () => {
  const { t } = useTranslation();

  const services = [{
    title: "Recherche de programmes et d'établissements",
    items: ["Analyse de votre profil académique et vos objectifs", "Recommandation personnalisée de programmes adaptés", "Sélection d'établissements selon vos critères et budget", "Information sur les classements et accréditations"]
  }, {
    title: "Préparation et soumission des dossiers",
    items: ["Préparation personnalisée aux tests linguistiques (IELTS, TOEFL)", "Rédaction et révision des documents de candidature", "Traduction et légalisation de documents", "Soumission et suivi des dossiers d'admission"]
  }, {
    title: "Accompagnement visa et installation",
    items: ["Constitution du dossier de permis d'études", "Préparation à l'entretien d'immigration", "Assistance pour l'assurance santé et le logement", "Orientation pour l'installation au Canada"]
  }];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nos services d'accompagnement</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-migrapro-bleu-ciel">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-migrapro-terre-cuite shrink-0 mt-0.5" />
                    <span>{item}</span>
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
