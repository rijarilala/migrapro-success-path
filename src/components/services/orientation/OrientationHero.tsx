
import { CompassIcon } from 'lucide-react';

const OrientationHero = () => {
  return (
    <div className="bg-gradient-to-r from-migrapro-vert-foret to-migrapro-vert-foret/90 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 animate-fade-in">
            <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
              <CompassIcon size={40} />
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Conseil & Orientation Professionnelle
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-white/90 max-w-2xl">
              Un diagnostic complet de votre profil, un bilan approfondi de vos compétences et 
              un plan de carrière personnalisé pour guider vos choix professionnels.
            </p>
          </div>
          
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-end">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Orientation professionnelle" 
              className="rounded-lg shadow-lg max-w-full animate-fade-in animate-delay-200"
              style={{maxHeight: '300px'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrientationHero;
