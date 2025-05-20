
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
      
      // Give the component time to fully load and render
      const timer = setTimeout(() => {
        // Ensure we're on the categories tab first
        const categoriesTab = document.querySelector('[value="categories"]');
        if (categoriesTab && categoriesTab instanceof HTMLElement) {
          // Switch to categories tab
          categoriesTab.click();
          
          // After showing the categories tab, find and click on the formation
          const formationTimer = setTimeout(() => {
            // Try to find the formation element by ID
            const formationElement = document.getElementById(modalToShow);
            
            if (formationElement) {
              // Scroll to the formation with animation
              formationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
              
              // Apply highlight effect
              formationElement.classList.add('bg-yellow-200', 'transition-colors', 'duration-1000');
              setTimeout(() => {
                formationElement.classList.remove('bg-yellow-200');
              }, 2000);
              
              // Find the details button (the last button in the formation card)
              const detailButton = formationElement.querySelector('button:last-child');
              if (detailButton && detailButton instanceof HTMLElement) {
                // Open the formation details modal
                detailButton.click();
              } else {
                console.error("Could not find the details button for formation:", modalToShow);
                toast({
                  variant: "destructive",
                  title: "Erreur",
                  description: "Impossible d'ouvrir les détails de la formation",
                });
              }
            } else {
              console.error("Could not find formation element with ID:", modalToShow);
              toast({
                variant: "destructive",
                title: "Formation introuvable",
                description: `La formation "${modalToShow}" n'a pas pu être trouvée`,
              });
              
              // Fallback: Try one more time with a longer delay
              const retryTimer = setTimeout(() => {
                const retryElement = document.getElementById(modalToShow);
                if (retryElement) {
                  retryElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  retryElement.classList.add('bg-yellow-200', 'transition-colors', 'duration-1000');
                  
                  const retryButton = retryElement.querySelector('button:last-child');
                  if (retryButton && retryButton instanceof HTMLElement) {
                    retryButton.click();
                  }
                }
              }, 1500);
              
              // Clean up retry timer
              return () => clearTimeout(retryTimer);
            }
          }, 1000);
          
          // Clean up formation timer
          return () => clearTimeout(formationTimer);
        }
      }, 800);
      
      // Clean up main timer
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
            if (tabsElement && tabsElement instanceof HTMLElement) {
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
            if (tabsElement && tabsElement instanceof HTMLElement) {
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
