
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EtudesHero = () => {
  return <section className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-white">
      <div className="absolute inset-0 z-0 opacity-20 bg-pattern-grid"></div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-migrapro-bleu-ciel uppercase rounded-full bg-blue-100">
              Études Supérieures
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Réalisez votre projet <span className="text-migrapro-bleu-ciel">d'études au Canada</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Nous vous accompagnons dans toutes les étapes de votre parcours académique, de la recherche des programmes 
              à l'obtention de votre permis d'études et votre installation au Canada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-migrapro-bleu-ciel hover:bg-migrapro-bleu-ciel/90">
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-delay-150 hidden lg:block">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-migrapro-terre-cuite/20 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-migrapro-bleu-ciel/20 rounded-full"></div>
            
            <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="Étudiants sur un campus universitaire au Canada" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default EtudesHero;
