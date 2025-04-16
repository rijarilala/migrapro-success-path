
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ImmigrationHero from '@/components/services/immigration/ImmigrationHero';
import ImmigrationSteps from '@/components/services/immigration/ImmigrationSteps';
import ImmigrationEvaluation from '@/components/services/immigration/ImmigrationEvaluation';
import ImmigrationPack from '@/components/services/immigration/ImmigrationPack';
import ServiceCTA from '@/components/services/ServiceCTA';

const Immigration = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ImmigrationHero />
        <ImmigrationSteps />
        <ImmigrationEvaluation />
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
