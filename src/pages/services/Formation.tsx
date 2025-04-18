
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FormationHero from '@/components/services/formation/FormationHero';
import FormationModules from '@/components/services/formation/FormationModules';
import PackReussitePro from '@/components/home/PackReussitePro';
import ServiceCTA from '@/components/services/ServiceCTA';

const Formation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <FormationHero />
        <FormationModules />
        <PackReussitePro />
        <ServiceCTA
          title="Prêt à développer vos compétences ?"
          subtitle="Nos formations sont conçues pour répondre aux exigences des marchés malgache et canadien."
          buttonText="Contactez-nous"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Formation;
