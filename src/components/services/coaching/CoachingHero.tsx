import { Award } from 'lucide-react';

const CoachingHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-migrapro-bleu-ciel to-migrapro-bleu-ciel/90 text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-blend-overlay bg-black/30 bg-fixed" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover'
        }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 animate-fade-in">
            <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
              <Award size={40} />
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Coaching Professionnel
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-white/90 max-w-2xl">
              Renforcez votre confiance, clarifiez votre projet et soyez prêt pour 
              vos rendez-vous professionnels, grâce à une méthode éprouvée.
            </p>
          </div>
          
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-end">
            <img 
              src="https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Coaching Professionnel" 
              className="rounded-lg shadow-lg max-w-full animate-fade-in animate-delay-200"
              style={{maxHeight: '300px'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingHero;
