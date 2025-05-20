
import { useEffect } from 'react';
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

  // Handle query params and hash navigation
  useEffect(() => {
    // Check for showModal param which indicates a formation modal should be opened
    const modalToShow = searchParams.get('showModal');
    
    if (modalToShow) {
      // Show toast notification
      toast({
        title: "Formation trouvée",
        description: "Défilement vers la formation...",
        duration: 2000,
      });
      
      // Reset the URL so refreshing doesn't reopen the modal
      window.history.replaceState({}, '', '/services/formation');
      
      // Switch to categories tab if needed (as default is categories)
      setTimeout(() => {
        document.querySelector('[value="categories"]')?.dispatchEvent(
          new MouseEvent('click', { bubbles: true })
        );
        
        // After showing the categories tab, find and scroll to the formation
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
          }
        }, 300);
      }, 100);
    } else {
      // Handle hash navigation (for direct links to formations)
      const hash = location.hash;
      if (hash) {
        const hashWithoutPrefix = hash.substring(1); // Remove the # character
        
        // Laisser au DOM le temps de se charger complètement
        setTimeout(() => {
          // Par défaut, supposons qu'il s'agit d'un ID de formation dans l'onglet catégories
          // Switch to categories tab (default)
          const tabsElement = document.querySelector('[value="categories"]');
          if (tabsElement) {
            (tabsElement as HTMLElement).click();
            
            // Après le changement d'onglet, rechercher la formation et défiler vers elle
            setTimeout(() => {
              // Rechercher la formation par son ID
              const formationElement = document.getElementById(hashWithoutPrefix);
              if (formationElement) {
                formationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Ajouter un effet de surbrillance
                formationElement.classList.add('bg-yellow-50');
                setTimeout(() => {
                  formationElement.classList.remove('bg-yellow-50');
                  formationElement.classList.add('transition-colors', 'duration-1000');
                }, 2000);
              } else {
                // Si l'élément n'a pas été trouvé dans l'onglet catégories, essayer dans l'onglet packs
                const packsTab = document.querySelector('[value="packs"]');
                if (packsTab) {
                  (packsTab as HTMLElement).click();
                  
                  // Après le changement d'onglet, rechercher dans les packs
                  setTimeout(() => {
                    const packElement = document.getElementById(hashWithoutPrefix);
                    if (packElement) {
                      packElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      
                      // Ajouter un effet de surbrillance
                      packElement.classList.add('bg-yellow-50');
                      setTimeout(() => {
                        packElement.classList.remove('bg-yellow-50');
                        packElement.classList.add('transition-colors', 'duration-1000');
                      }, 2000);
                    }
                  }, 300);
                }
              }
            }, 300);
          }
        }, 500); // Délai légèrement plus long pour s'assurer que tout est chargé
      }
    }
  }, [location, searchParams]);

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
