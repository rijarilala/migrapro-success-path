
import { Users } from 'lucide-react';

const RecrutementHero = () => {
  return (
    <div className="bg-gradient-to-r from-migrapro-jaune-soleil to-migrapro-jaune-soleil/90 text-migrapro-bleu-ciel">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 animate-fade-in">
            <div className="inline-block p-3 bg-white/20 rounded-full mb-6">
              <Users size={40} />
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Service de Recrutement
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-migrapro-bleu-ciel/90 max-w-2xl">
              Bientôt disponible : notre service de mise en relation entre talents et 
              entreprises canadiennes à la recherche de compétences.
            </p>
            
            <div className="inline-flex items-center px-4 py-2 bg-migrapro-bleu-ciel text-white rounded-full text-sm">
              <span className="animate-pulse w-3 h-3 bg-migrapro-terre-cuite rounded-full mr-2"></span>
              Prochainement
            </div>
          </div>
          
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-end">
            <img 
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Service de Recrutement" 
              className="rounded-lg shadow-lg max-w-full animate-fade-in animate-delay-200"
              style={{maxHeight: '300px'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecrutementHero;
