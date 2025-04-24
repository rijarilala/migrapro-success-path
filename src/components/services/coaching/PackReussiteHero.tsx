import { FileText } from 'lucide-react';

const PackReussiteHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-migrapro-terre-cuite to-migrapro-bleu-ciel/90 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-blend-overlay bg-black/30 bg-fixed" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover'
        }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 animate-fade-in">
            <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
              <FileText size={40} />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Pack Réussite
            </h1>
            <p className="text-lg md:text-xl mb-6 text-white/90 max-w-2xl">
              Rédigez un CV et une lettre de motivation percutants et bénéficiez d'un coaching d'entretien clé en main. Obtenez tous les outils pour maximiser vos chances de succès sur le marché du travail, au Canada comme à Madagascar.
            </p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1522071820081-006deb682c5a"
              alt="Préparation d'entretien professionnel"
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
