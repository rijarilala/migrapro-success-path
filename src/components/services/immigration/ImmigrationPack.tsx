
import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ImmigrationPack = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Pack Intégration Canada
          </h2>
          <p className="text-lg text-gray-600">
            Un accompagnement complet sur 2 mois pour faciliter votre installation et votre intégration au Canada.
          </p>
        </div>

        <Card className="border-2 border-migrapro-bleu-ciel shadow-lg hover-scale animate-fade-in max-w-3xl mx-auto">
          <CardHeader className="text-center bg-migrapro-bleu-ciel text-white rounded-t-lg">
            <CardTitle className="text-3xl font-heading">Pack Intégration Canada</CardTitle>
            <div className="flex justify-center items-baseline mt-4">
              <span className="text-4xl font-bold">650€</span>
            </div>
            <p className="mt-2 text-white/90">Suivi personnalisé pendant 2 mois</p>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-4">Avant le départ</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-migrapro-bleu-ciel mr-3" />
                    <span>Préparation et vérification des documents</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-migrapro-bleu-ciel mr-3" />
                    <span>Recherche de logement temporaire</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-migrapro-bleu-ciel mr-3" />
                    <span>Informations sur le coût de la vie</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-migrapro-bleu-ciel mr-3" />
                    <span>Liste des démarches administratives à prévoir</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-migrapro-bleu-ciel mr-3" />
                    <span>3 séances de préparation par visioconférence</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold mb-4">Après l'arrivée</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-migrapro-bleu-ciel mr-3" />
                    <span>Accompagnement pour démarches administratives</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-migrapro-bleu-ciel mr-3" />
                    <span>Assistance pour l'ouverture d'un compte bancaire</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-migrapro-bleu-ciel mr-3" />
                    <span>Aide à la recherche d'emploi</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-migrapro-bleu-ciel mr-3" />
                    <span>Intégration à notre réseau local</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-migrapro-bleu-ciel mr-3" />
                    <span>5 séances de suivi par visioconférence</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                className="bg-migrapro-bleu-ciel hover:bg-migrapro-bleu-ciel/90 text-white text-lg px-8 py-6 w-full md:w-auto"
                asChild
              >
                <a href="/contact?service=integration">
                  Je souscris au Pack Intégration
                </a>
              </Button>
              <p className="text-sm text-gray-500 mt-3">Possibilité de paiement en plusieurs fois</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ImmigrationPack;
