
import { FileText } from 'lucide-react';

const PackReussiteHero = () => {
  return (
    <div className="bg-gradient-to-r from-migrapro-terre-cuite to-migrapro-bleu-ciel/90 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 animate-fade-in">
            <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
              <FileText size={40} />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Pack Réussite
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white/90 max-w-2xl">
              Rédigez un CV et une lettre de motivation percutants et bénéficiez d’un coaching d’entretien clé en main. Obtenez tous les outils pour maximiser vos chances de succès sur le marché du travail, au Canada comme à Madagascar.
            </p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-end">
            <img
              src="/lovable-uploads/76b90d6d-5780-41b4-a603-46a6c941848b.png"
              alt="Approche Pack Réussite"
              className="rounded-lg shadow-lg max-w-full animate-fade-in animate-delay-200"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackReussiteHero;
