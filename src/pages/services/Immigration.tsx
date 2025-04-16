
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ImmigrationHero from '@/components/services/immigration/ImmigrationHero';
import ImmigrationSteps from '@/components/services/immigration/ImmigrationSteps';
import ImmigrationPack from '@/components/services/immigration/ImmigrationPack';
import ServiceCTA from '@/components/services/ServiceCTA';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Immigration = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ImmigrationHero />
        <section className="py-16 bg-migrapro-bleu-ciel/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Commencez votre projet d'immigration
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                La première étape vers votre nouvelle vie au Canada commence par l'évaluation de votre éligibilité. Notre outil gratuit vous permet de découvrir en quelques minutes si vous êtes admissible aux programmes d'immigration canadienne.
              </p>
              <Button size="lg" className="bg-migrapro-terre-cuite hover:bg-migrapro-terre-cuite/90" asChild>
                <Link to="/services/eligibility">
                  Évaluer mon éligibilité <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <p className="mt-4 text-sm text-gray-500">
                Rapide, gratuit et sans engagement
              </p>
            </div>
          </div>
        </section>
        <ImmigrationSteps />
        <ImmigrationPack />
        <ServiceCTA 
          title="Prêt à commencer votre aventure canadienne ?" 
          buttonText="Démarrer ma démarche" 
          buttonLink="/contact?service=immigration" 
        />
      </main>
      <Footer />
    </div>
  );
};

export default Immigration;
