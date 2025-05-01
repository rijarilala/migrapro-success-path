
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, MapPin, Clock, DollarSign, FileText } from "lucide-react";

const EtudesPrograms = () => {
  const programTypes = [
    {
      title: "Programmes universitaires",
      description: "Diplômes de premier cycle (Bachelor), cycles supérieurs (Master, MBA) et doctorats dans les universités canadiennes reconnues mondialement.",
      icon: <GraduationCap className="h-10 w-10 text-migrapro-bleu-ciel" />
    },
    {
      title: "Formations professionnelles",
      description: "Diplômes et certificats techniques axés sur les métiers en demande au Canada, avec des stages pratiques en entreprise.",
      icon: <Briefcase className="h-10 w-10 text-migrapro-terre-cuite" />
    },
    {
      title: "Programmes collégiaux",
      description: "Formations pratiques de 1 à 3 ans dans les collèges canadiens, offrant une excellente insertion professionnelle.",
      icon: <MapPin className="h-10 w-10 text-migrapro-vert-foret" />
    },
    {
      title: "Programmes courts et certifications",
      description: "Formations intensives de quelques mois pour acquérir rapidement des compétences spécifiques et valorisées.",
      icon: <Clock className="h-10 w-10 text-migrapro-jaune-soleil" />
    },
    {
      title: "Programmes avec opportunités d'immigration",
      description: "Formations dans des secteurs prioritaires facilitant l'obtention de la résidence permanente après les études.",
      icon: <FileText className="h-10 w-10 text-migrapro-bleu-ciel" />
    },
    {
      title: "Programmes avec aide financière",
      description: "Formations éligibles aux bourses et programmes de financement pour étudiants internationaux.",
      icon: <DollarSign className="h-10 w-10 text-migrapro-terre-cuite" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-migrapro-bleu-ciel">
            Des programmes adaptés à votre projet
          </h2>
          <p className="text-lg text-gray-600">
            Le Canada offre une grande variété de formations reconnues internationalement et adaptées à tous les profils d'étudiants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programTypes.map((program, index) => (
            <Card 
              key={program.title} 
              className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-migrapro-bleu-ciel/10 p-3 rounded-lg">
                  {program.icon}
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EtudesPrograms;
