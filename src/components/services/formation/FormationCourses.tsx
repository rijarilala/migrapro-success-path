
import { FileText, Mail, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FormationCourses = () => {
  const courses = [
    {
      title: "Rédaction de CV",
      subtitle: "Local & Canadien",
      description: "Apprenez à rédiger un CV pertinente et adapté aux standards malgaches et canadiens pour maximiser vos chances auprès des recruteurs.",
      duration: "4h",
      format: ["En ligne", "Présentiel"],
      icon: <FileText className="h-12 w-12 text-migrapro-terre-cuite" />
    },
    {
      title: "Lettres de Motivation",
      subtitle: "Techniques & Exemples",
      description: "Maîtrisez l'art de la lettre de motivation efficace avec des techniques concrètes et des modèles adaptés à chaque situation.",
      duration: "3h",
      format: ["En ligne", "Présentiel"],
      icon: <Mail className="h-12 w-12 text-migrapro-terre-cuite" />
    },
    {
      title: "Préparation à la recherche du premier emploi / nouveau emploi",
      subtitle: "Démarches & outils",
      description: "Découvrez les stratégies, méthodes de prospection, et outils indispensables pour décrocher rapidement votre premier ou nouveau poste.",
      duration: "5h",
      format: ["En ligne", "Présentiel"],
      icon: <Briefcase className="h-12 w-12 text-migrapro-terre-cuite" />
    },
    {
      title: "Transition de la vie étudiante vers la vie active professionnelle",
      subtitle: "Accompagnement personnalisé",
      description: "Facilitez votre passage des études au marché du travail grâce à un accompagnement ciblé pour valoriser vos compétences et bien démarrer.",
      duration: "4h",
      format: ["En ligne", "Présentiel"],
      icon: <GraduationCap className="h-12 w-12 text-migrapro-terre-cuite" />
    },
    {
      title: "Gestion des Ressources Humaines",
      subtitle: "Fondamentaux, stratégie & pratique – adaptés à votre secteur",
      description: "Maîtrisez les bases et les stratégies RH, tout en découvrant leur mise en œuvre concrète à travers des exercices pratiques. Notre programme est conçu pour être modulable, permettant une adaptation aux spécificités de votre domaine d'activité (industrie, services, santé, etc.), afin de répondre au mieux à vos besoins opérationnels.",
      duration: "6h",
      format: ["En ligne", "Présentiel"],
      icon: <Briefcase className="h-12 w-12 text-migrapro-terre-cuite" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-migrapro-terre-cuite">
            Nos Formations
          </h2>
          <p className="text-lg text-gray-600">
            Des modules pratiques pour développer des compétences clés à Madagascar et au Canada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardHeader className="pb-2 flex flex-col items-center text-center">
                <div className="bg-gray-50 p-4 rounded-full mb-4">
                  {course.icon}
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <p className="text-migrapro-terre-cuite font-medium text-sm">{course.subtitle}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-center">{course.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-600 mr-2">Durée:</span>
                    <span className="text-sm text-gray-700">{course.duration}</span>
                  </div>
                  <div className="flex gap-2">
                    {course.format.map((fmt) => (
                      <Badge key={fmt} variant="outline" className="bg-gray-50">
                        {fmt}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3 text-migrapro-terre-cuite">Formats disponibles</h3>
          <p className="text-gray-700">
            Sessions en ligne via Zoom/Teams ou en présentiel à Moramanga<br />
            Durées modulaires de 2h à 6h par module selon vos besoins
          </p>
        </div>
      </div>
    </section>
  );
};

export default FormationCourses;
