
import { Plane, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ImmigrationOverview = () => {
  const benefits = [
    "Évaluation gratuite et instantanée de votre profil",
    "Plan d'action dédié : dossier complet, accompagnement administratif, conseils d'installation",
    "Experts certifiés pour sécuriser votre visa et votre permis"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-migrapro-bleu-ciel/5 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="inline-block p-3 bg-migrapro-bleu-ciel/10 rounded-full mb-6">
              <Plane className="h-8 w-8 text-migrapro-bleu-ciel" />
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Faites du Canada votre nouvelle adresse
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Rejoignez des milliers de candidats qui ont déjà sauté le pas, 
              et transformez votre projet migratoire en réalité.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-migrapro-bleu-ciel" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button 
              className="bg-migrapro-terre-cuite hover:bg-migrapro-terre-cuite/90"
              size="lg"
              asChild
            >
              <Link to="/services/eligibility">
                Testez votre éligibilité maintenant
              </Link>
            </Button>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1519834099055-c7ceba0a4c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Immigration Canada"
              className="rounded-lg shadow-xl w-full object-cover"
              style={{ maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationOverview;
