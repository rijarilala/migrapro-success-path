
import { GraduationCap } from 'lucide-react';

const FormationHero = () => {
  return (
    <div className="bg-gradient-to-r from-migrapro-vert-foret to-migrapro-vert-foret/90 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-16 w-16" />
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Formation Professionnelle
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Développez un savoir-faire immédiatement opérationnel pour répondre aux attentes des recruteurs locaux et canadiens.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormationHero;
