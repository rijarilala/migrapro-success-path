
import { BookOpen, Users, GraduationCap } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesOverview = () => {
  const services = [
    {
      title: "Formation Professionnelle",
      description: "Développez des compétences clés pour réussir à Madagascar et au Canada",
      icon: GraduationCap,
      features: [
        "Parcours Rédaction de CV",
        "Parcours Lettre de Motivation",
        "Parcours Communication & Soft Skills",
      ],
      format: "Sessions en ligne ou en présentiel, tarifs à l'heure/forfait",
      benefit: "Renforcez votre employabilité dès aujourd'hui",
      ctaText: "Découvrir les formations",
      ctaLink: "/services/formation",
      isNew: true,
    },
    {
      title: "Coaching Professionnel",
      description: "Un accompagnement sur mesure pour votre réussite professionnelle",
      icon: Users,
      features: [
        "Coaching entretien d'embauche (1h30)",
        "Coaching orientation & reconversion",
        "Coaching développement personnel",
      ],
      format: "Séances individuelles ou de groupe, en Visio ou en face-à-face",
      benefit: "Préparation mentale et stratégique pour chaque étape de votre carrière",
      ctaText: "Réserver un coaching",
      ctaLink: "/services/coaching",
      isNew: true,
    },
    {
      title: "Pack Réussite Pro",
      description: "Solution complète pour maximiser vos chances de succès",
      icon: BookOpen,
      features: [
        "Formation CV (optimisation locale & canadienne)",
        "Formation Lettre de Motivation (personnalisée)",
        "Coaching Entretien (simulation + retour)",
      ],
      format: "Disponible en Pack Express (5 h) ou Pack Plus (suivi 1 semaine)",
      benefit: "Maximisez vos chances de succès avec une formule complète",
      ctaText: "Je choisis le Pack Réussite Pro",
      ctaLink: "/services/coaching-pro",
      imageSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600">
            Des solutions complètes pour votre réussite professionnelle au Canada et à Madagascar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
