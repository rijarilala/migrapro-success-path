
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FormationHero from '@/components/services/formation/FormationHero';
import FormationTabs from '@/components/services/formation/FormationTabs';
import ServiceCTA from '@/components/services/ServiceCTA';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Formation = () => {
  const location = useLocation();

  // Handle direct links to packs or formations
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Switch to packs tab if there's a hash for a pack
      if (hash.includes('pack')) {
        const tabsElement = document.querySelector('[value="packs"]');
        if (tabsElement) {
          setTimeout(() => {
            (tabsElement as HTMLElement).click();
            // After tab switch, scroll to the specific pack
            setTimeout(() => {
              const packElement = document.querySelector(hash);
              if (packElement) {
                packElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }, 300);
          }, 100);
        }
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <FormationHero />
        <FormationTabs />
        <ServiceCTA 
          title="Prêt à développer vos compétences ?" 
          subtitle="Nos formations vous préparent aux exigences du marché du travail local et canadien"
          buttonText="reserver ma place" 
          buttonLink="/contact?service=formation" 
        />
      </main>
      <Footer />
    </div>
  );
};

export default Formation;
