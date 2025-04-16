
import { Check } from 'lucide-react';

const CoachingBenefits = () => {
  const benefits = [
    {
      title: "Maîtriser les codes du CV canadien et malgache",
      description: "Apprenez à adapter votre CV aux attentes spécifiques des recruteurs selon le marché visé, en mettant en avant les éléments qui font la différence."
    },
    {
      title: "Rédiger des lettres percutantes adaptées aux recruteurs",
      description: "Développez la capacité de créer des lettres de motivation qui captent l'attention, démontrent votre valeur ajoutée et vous démarquent des autres candidats."
    },
    {
      title: "Gérer le stress et réussir ses entretiens avec aisance",
      description: "Acquérez les techniques pour transformer votre stress en énergie positive et répondre avec assurance aux questions les plus délicates en entretien."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Les bénéfices du programme
          </h2>
          <p className="text-lg text-gray-600">
            Des compétences concrètes qui vous donneront un avantage décisif sur le marché du travail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-migrapro-terre-cuite/10 flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-migrapro-terre-cuite" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachingBenefits;
