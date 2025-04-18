
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const CoachingTestimonials = () => {
  const testimonials = [
    {
      name: "Marc Rakotoson",
      position: "Ingénieur logiciel",
      avatar: "MR",
      content: "Le coaching entretien a transformé ma façon de me présenter. Je suis passé d'entretiens ratés à une offre dans une grande entreprise canadienne en seulement 3 séances.",
      rating: 5
    },
    {
      name: "Sophie Andriamahefa",
      position: "Responsable marketing",
      avatar: "SA",
      content: "J'étais perdue dans ma reconversion professionnelle. Mon coach m'a aidée à identifier mes forces et construire un plan d'action clair. Je recommande vivement !",
      rating: 5
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-migrapro-bleu-ciel">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-gray-600">
            Des témoignages inspirants de personnes qui ont bénéficié de notre coaching
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
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
                  <Avatar className="h-12 w-12 border-2 border-migrapro-bleu-ciel">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-migrapro-terre-cuite text-white">
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
      </div>
    </section>
  );
};

export default CoachingTestimonials;
