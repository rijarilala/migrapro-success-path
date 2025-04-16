
import { Shield, Users, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    icon: <Shield className="w-10 h-10 text-migrapro-terre-cuite" />,
    title: "Qualité",
    description: "Un accompagnement professionnel et personnalisé pour chaque client"
  },
  {
    icon: <Users className="w-10 h-10 text-migrapro-terre-cuite" />,
    title: "Proximité",
    description: "Une équipe à l'écoute et disponible tout au long de votre parcours"
  },
  {
    icon: <Globe className="w-10 h-10 text-migrapro-terre-cuite" />,
    title: "Expertise Internationale",
    description: "Une connaissance approfondie des marchés malgache et canadien"
  }
];

const AboutValues = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Nos Engagements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value) => (
            <Card key={value.title} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">{value.icon}</div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
