
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Rakotondrabe",
      position: "Infirmière à Montréal",
      avatar: "MR",
      content: "Grâce à MigraPro, j'ai pu obtenir mon permis de travail pour le Canada en seulement 4 mois. Leur accompagnement pour la rédaction de mon CV et la préparation aux entretiens a été décisif dans mon parcours.",
      rating: 5
    },
    {
      name: "Jean Ramanantsoa",
      position: "Développeur Web à Québec",
      avatar: "JR",
      content: "Le Pack Réussite Pro a transformé ma façon de me présenter aux recruteurs. J'ai reçu 3 offres d'emploi après avoir refait mon CV et ma lettre de motivation selon leurs conseils.",
      rating: 5
    },
    {
      name: "Soa Andriantsoa",
      position: "Enseignante à Toronto",
      avatar: "SA",
      content: "L'équipe m'a guidée tout au long de mon processus d'immigration, de l'évaluation initiale jusqu'à mon installation. Leur expertise concernant l'adaptation culturelle m'a beaucoup rassurée.",
      rating: 4
    }
  ];

  const renderStars = (count: number) => {
    return Array(count)
      .fill(null)
      .map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-migrapro-jaune-soleil text-migrapro-jaune-soleil" />
      ));
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Témoignages
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Découvrez les parcours de réussite de nos clients qui ont atteint leurs objectifs professionnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="border border-gray-100 shadow-sm hover-scale animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 border-2 border-migrapro-terre-cuite">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-migrapro-bleu-ciel text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="/temoignages" 
            className="text-migrapro-terre-cuite hover:text-migrapro-bleu-ciel underline font-medium animate-fade-in animate-delay-400"
          >
            Voir tous les témoignages
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
