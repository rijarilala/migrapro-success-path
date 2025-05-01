
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EtudesSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation initiale",
      description: "Évaluation de votre profil académique, vos objectifs et votre budget pour définir votre projet d'études."
    },
    {
      number: "02",
      title: "Recherche de programmes",
      description: "Identification des formations et établissements correspondant à votre profil et vos objectifs professionnels."
    },
    {
      number: "03",
      title: "Préparation du dossier",
      description: "Accompagnement pour constituer un dossier de candidature convaincant (CV, lettre de motivation, recommandations)."
    },
    {
      number: "04",
      title: "Soumission des candidatures",
      description: "Envoi et suivi de vos dossiers auprès des établissements sélectionnés."
    },
    {
      number: "05",
      title: "Demande de permis d'études",
      description: "Préparation et soumission de votre demande de permis d'études et visa étudiant canadien."
    },
    {
      number: "06",
      title: "Préparation à l'installation",
      description: "Conseils pour votre logement, assurance santé, transport et intégration au Canada."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Un parcours simplifié en 6 étapes
          </h2>
          <p className="text-lg text-gray-600">
            Notre méthodologie vous guide pas à pas vers votre objectif d'études au Canada, en simplifiant chaque étape de votre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="bg-white border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-5">
                  <span className="text-4xl font-bold text-migrapro-bleu-ciel">{step.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-migrapro-bleu-ciel hover:bg-migrapro-bleu-ciel/90">
            <Link to="/contact">Démarrer mon projet d'études</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EtudesSteps;
