
import { UserRound, BarChart, Building, GraduationCap, Globe, ListTodo } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const OrientationPrestations = () => {
  const prestations = [
    {
      title: "Entretien bilan personnalisé",
      description: "Analyse approfondie de votre parcours, de vos compétences et de votre projet professionnel.",
      icon: <UserRound className="h-10 w-10 text-migrapro-vert-foret" />
    },
    {
      title: "Tests d'aptitude et évaluation",
      description: "Entretiens pour cerner vos points forts et axes d'amélioration.",
      icon: <BarChart className="h-10 w-10 text-migrapro-vert-foret" />
    },
    {
      title: "Identification des métiers en demande",
      description: "Présentation des secteurs porteurs et des critères d'embauche au Canada et à Madagascar.",
      icon: <Building className="h-10 w-10 text-migrapro-vert-foret" />
    },
    {
      title: "Valorisation de votre profil",
      description: "Démarches d'équivalence de diplôme, formations complémentaires et certifications requises.",
      icon: <GraduationCap className="h-10 w-10 text-migrapro-vert-foret" />
    },
    {
      title: "Conseils d'adaptation culturelle",
      description: "Explication des codes professionnels, comportements attendus et différences culturelles au travail.",
      icon: <Globe className="h-10 w-10 text-migrapro-vert-foret" />
    },
    {
      title: "Plan d'action personnalisé",
      description: "Élaboration d'un parcours de développement avec étapes concrètes pour atteindre vos objectifs.",
      icon: <ListTodo className="h-10 w-10 text-migrapro-vert-foret" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Nos prestations d'orientation professionnelle
          </h2>
          <p className="text-lg text-gray-600">
            Un accompagnement complet pour faire les meilleurs choix de carrière et valoriser vos compétences 
            sur le marché du travail canadien et malgache.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prestations.map((item, index) => (
            <Card 
              key={item.title} 
              className="hover-scale animate-fade-in border border-gray-100"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4">
                  {item.icon}
                </div>
                <CardTitle className="text-xl font-heading">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrientationPrestations;
