
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CoachingPricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Tarification
          </h2>
          <p className="text-lg text-gray-600">
            Économisez en choisissant notre pack complet par rapport aux services à l'unité.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-migrapro-terre-cuite shadow-lg hover-scale animate-fade-in">
            <CardHeader className="text-center bg-migrapro-terre-cuite text-white rounded-t-lg">
              <CardTitle className="text-3xl font-heading">Pack Complet Réussite Pro</CardTitle>
              <div className="flex justify-center items-baseline mt-4">
                <span className="text-4xl font-bold">350€</span>
                <span className="ml-2 text-white/80">au lieu de 450€</span>
              </div>
              <p className="mt-2 text-white/90">Économisez 100€ (22%)</p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-migrapro-terre-cuite mr-3" />
                  <span>Module e-learning CV (valeur : 150€)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-migrapro-terre-cuite mr-3" />
                  <span>Module e-learning Lettre de Motivation (valeur : 150€)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-migrapro-terre-cuite mr-3" />
                  <span>Coaching Entretien 1h30 (valeur : 150€)</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-migrapro-terre-cuite mr-3" />
                  <span>Suivi personnalisé pendant 1 mois</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-migrapro-terre-cuite mr-3" />
                  <span>Accès à la bibliothèque de ressources exclusives</span>
                </li>
              </ul>

              <div className="mt-8 text-center">
                <Button 
                  className="bg-migrapro-terre-cuite hover:bg-migrapro-terre-cuite/90 text-white text-lg px-8 py-6 w-full"
                  asChild
                >
                  <Link to="/contact?service=coaching">
                    Réserver mon Pack
                  </Link>
                </Button>
                <p className="text-sm text-gray-500 mt-3">Possibilité de paiement en plusieurs fois</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoachingPricing;
