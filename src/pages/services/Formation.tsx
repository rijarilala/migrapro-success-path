
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FormationHero from '@/components/services/formation/FormationHero';
import FormationTabs from '@/components/services/formation/FormationTabs';
import ServiceCTA from '@/components/services/ServiceCTA';
import { useToast } from '@/components/ui/use-toast';

const Formation = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [shouldOpenModal, setShouldOpenModal] = useState<string | null>(null);
  const { toast } = useToast();

  // Handle search redirections and hash navigation with improved reliability
  useEffect(() => {
    // Check for showModal param which indicates a formation modal should be opened
    const modalToShow = searchParams.get('showModal');
    
    if (modalToShow) {
      // Show toast to indicate that modal will open
      toast({
        title: "Chargement du contenu",
        description: "Ouverture de la formation demandée...",
        duration: 3000,
      });
      
      setShouldOpenModal(modalToShow);
      
      // Reset the URL so refreshing doesn't reopen the modal
      window.history.replaceState({}, '', '/services/formation');
      
      // Nouvelle approche avec temporisations plus fiables
      const timer = setTimeout(() => {
        try {
          // Localiser l'onglet des catégories et cliquer dessus
          const categoriesTab = document.querySelector('[value="categories"]');
          if (categoriesTab instanceof HTMLElement) {
            categoriesTab.click();
            
            // Attendre que l'onglet soit chargé avant de chercher la formation
            const findFormationTimer = setTimeout(() => {
              try {
                // Chercher la formation par ID avec plusieurs tentatives
                let attempts = 0;
                const maxAttempts = 5;
                
                function findAndOpenFormation() {
                  attempts++;
                  const formationElement = document.getElementById(modalToShow);
                  
                  if (formationElement) {
                    // Formation trouvée, faire défiler et mettre en évidence
                    formationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    formationElement.classList.add('bg-yellow-200', 'transition-colors', 'duration-1500');
                    
                    // Trouver et cliquer sur le bouton de détails
                    setTimeout(() => {
                      const detailButton = formationElement.querySelector('button:last-child');
                      if (detailButton instanceof HTMLElement) {
                        detailButton.click();
                        
                        // Retirer la surbrillance après un délai
                        setTimeout(() => {
                          formationElement.classList.remove('bg-yellow-200');
                        }, 2000);
                      } else {
                        console.error("Bouton de détails non trouvé pour la formation:", modalToShow);
                      }
                    }, 300);
                  } else if (attempts < maxAttempts) {
                    // Réessayer après un court délai
                    setTimeout(findAndOpenFormation, 400);
                  } else {
                    console.error("Formation non trouvée après plusieurs tentatives:", modalToShow);
                    toast({
                      variant: "destructive",
                      title: "Formation introuvable",
                      description: `Impossible de trouver la formation "${modalToShow}"`,
                    });
                  }
                }
                
                // Démarrer le processus de recherche
                findAndOpenFormation();
                
              } catch (error) {
                console.error("Erreur lors de la recherche de la formation:", error);
              }
            }, 600);
            
            return () => clearTimeout(findFormationTimer);
          } else {
            console.error("Onglet des catégories non trouvé");
          }
        } catch (error) {
          console.error("Erreur lors de l'ouverture de la formation:", error);
        }
      }, 500);
      
      return () => clearTimeout(timer);
    } else {
      // Handle hash navigation (for direct links to packs)
      const hash = location.hash;
      if (hash) {
        // Wait for DOM to be ready
        const hashTimer = setTimeout(() => {
          if (hash.includes('pack')) {
            // Switch to packs tab
            const tabsElement = document.querySelector('[value="packs"]');
            if (tabsElement instanceof HTMLElement) {
              tabsElement.click();
              
              // After tab switch, scroll to the specific pack
              setTimeout(() => {
                const packElement = document.querySelector(hash);
                if (packElement) {
                  packElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  // Apply highlight effect
                  packElement.classList.add('bg-yellow-200', 'transition-colors', 'duration-1500');
                  setTimeout(() => {
                    packElement.classList.remove('bg-yellow-200');
                  }, 2000);
                }
              }, 1000);
            }
          } else {
            // For other hash links (like individual formations)
            // Need to be on the categories tab
            const tabsElement = document.querySelector('[value="categories"]');
            if (tabsElement instanceof HTMLElement) {
              tabsElement.click();
              
              // After tab switch, scroll to the specific formation
              setTimeout(() => {
                const formationElement = document.querySelector(hash);
                if (formationElement) {
                  formationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  // Apply highlight effect
                  formationElement.classList.add('bg-yellow-200', 'transition-colors', 'duration-1500');
                  setTimeout(() => {
                    formationElement.classList.remove('bg-yellow-200');
                  }, 2000);
                }
              }, 1000);
            }
          }
        }, 800);
        
        // Clean up hash timer
        return () => clearTimeout(hashTimer);
      }
    }
  }, [location, searchParams, toast]);

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
