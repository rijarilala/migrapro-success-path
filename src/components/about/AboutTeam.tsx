
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Sarah Rakoto",
    role: "Fondatrice & Consultante Senior",
    bio: "10 ans d'expérience en recrutement international",
    image: "/placeholder.svg"
  },
  {
    name: "Jean Randria",
    role: "Expert Immigration",
    bio: "Spécialiste des procédures d'immigration canadienne",
    image: "/placeholder.svg"
  },
  {
    name: "Marie Ratsima",
    role: "Conseillère Carrière",
    bio: "Coach certifiée en développement professionnel",
    image: "/placeholder.svg"
  }
];

const AboutTeam = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Notre Équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-migrapro-terre-cuite font-medium mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
