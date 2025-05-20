
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FormationHero from '@/components/services/formation/FormationHero';
import FormationTabs from '@/components/services/formation/FormationTabs';
import ServiceCTA from '@/components/services/ServiceCTA';
import { toast } from '@/hooks/use-toast';

const Formation = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [shouldOpenModal, setShouldOpenModal] = useState<string | null>(null);

  // Handle query params and hash navigation
  useEffect(() => {
    // Check for showModal param which indicates a formation modal should be opened
    const modalToShow = searchParams.get('showModal');
    if (modalToShow) {
      setShouldOpenModal(modalToShow);
      
      // Show toast notification
      toast({
        title: "Formation trouvée",
        description: "Ouverture des détails de la formation...",
        duration: 3000,
      });
      
      // Reset the URL so refreshing doesn't reopen the modal
      // But keep this effect running only once per parameter change
      window.history.replaceState({}, '', '/services/formation');
      
      // Switch to formations tab if needed (as default is categories)
      setTimeout(() => {
        document.querySelector('[value="categories"]')?.dispatchEvent(
          new MouseEvent('click', { bubbles: true })
        );
        
        // After showing the categories tab, find and click on the formation
        setTimeout(() => {
          const formationElement = document.getElementById(modalToShow);
          if (formationElement) {
            formationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Add highlight effect
            formationElement.classList.add('bg-yellow-50');
            setTimeout(() => {
              formationElement.classList.remove('bg-yellow-50');
              formationElement.classList.add('transition-colors', 'duration-1000');
            }, 2000);
            
            // Find and click the "details" button for this formation
            const detailButton = formationElement.querySelector('button');
            if (detailButton) {
              detailButton.click(); // This will open the modal
            }
          }
        }, 300);
      }, 100);
    } else {
      // Handle hash navigation (for direct links to packs)
      const hash = location.hash;
      if (hash) {
        if (hash.includes('pack')) {
          // Switch to packs tab
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
        } else {
          // For other hash links (like individual formations)
          // Need to be on the categories tab
          const tabsElement = document.querySelector('[value="categories"]');
          if (tabsElement) {
            setTimeout(() => {
              (tabsElement as HTMLElement).click();
              // After tab switch, scroll to the specific formation
              setTimeout(() => {
                const formationElement = document.querySelector(hash);
                if (formationElement) {
                  formationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }, 300);
            }, 100);
          }
        }
      }
    }
  }, [location, searchParams]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <FormationHero />
        <FormationTabs initialModalToOpen={shouldOpenModal} />
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
