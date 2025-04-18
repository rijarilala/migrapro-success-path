
import { FileText, Mail, Users, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FormationCourses = () => {
  const courses = [
    {
      title: "Rédaction de CV",
      subtitle: "Local & Canadien",
      description: "Apprenez à rédiger un CV percutant adapté aux standards locaux et internationaux. Maximisez vos chances d'être remarqué par les recruteurs.",
      duration: "4h",
      format: ["En ligne", "Présentiel"],
      icon: <FileText className="h-12 w-12 text-migrapro-terre-cuite" />
    },
    {
      title: "Lettres de Motivation",
      subtitle: "Techniques & Exemples",
      description: "Maîtrisez l'art de la lettre de motivation qui capte l'attention et valorise votre candidature. Techniques et structures efficaces.",
      duration: "3h",
      format: ["En ligne", "Présentiel"],
      icon: <Mail className="h-12 w-12 text-migrapro-terre-cuite" />
    },
    {
      title: "Communication & Soft Skills",
      subtitle: "Prise de parole & Gestion du stress",
      description: "Développez vos compétences en communication orale et écrite. Apprenez à gérer votre stress lors des situations professionnelles importantes.",
      duration: "6h",
      format: ["En ligne", "Présentiel"],
      icon: <Users className="h-12 w-12 text-migrapro-terre-cuite" />
    },
    {
      title: "Orientation & Projet Professionnel",
      subtitle: "Bilan & Plan de carrière",
      description: "Faites le point sur vos compétences et aspirations. Construisez un plan de carrière cohérent et réalisable à court et long terme.",
      duration: "5h",
      format: ["En ligne", "Présentiel"],
      icon: <Target className="h-12 w-12 text-migrapro-terre-cuite" />
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
