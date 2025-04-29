
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Andry Rakoto",
    role: "Développeur Web",
    company: "Tech Solutions Inc., Montréal",
    image: "/placeholder.svg",
    content: "Grâce à UMEGREAT Pro, j'ai pu optimiser mon CV et réussir mes entretiens. Aujourd'hui, je travaille comme développeur à Montréal !"
  },
  {
    name: "Soa Razafy",
    role: "Infirmière",
    company: "Hôpital Général, Québec",
    image: "/placeholder.svg",
    content: "L'accompagnement pour l'immigration et l'intégration a été crucial. UMEGREAT Pro m'a guidée à chaque étape."
  },
  {
    name: "Patrick Ranaivo",
    role: "Comptable",
    company: "Finance Plus, Toronto",
    image: "/placeholder.svg",
    content: "Le pack réussite a été déterminant. Les conseils personnalisés m'ont permis de me démarquer."
  }
];

const TestimonialsList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-migrapro-terre-cuite">{testimonial.company}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsList;
