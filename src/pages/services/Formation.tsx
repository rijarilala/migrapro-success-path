
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

  // Handle query params and hash navigation with improved timing
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
      // But keep this effect running only once per parameter change
      window.history.replaceState({}, '', '/services/formation');
      
      // Use a slightly longer timeout to ensure DOM is fully loaded
      setTimeout(() => {
        try {
          // Switch to formations tab if needed (as default is categories)
          const categoriesTab = document.querySelector('[value="categories"]');
          if (categoriesTab) {
            (categoriesTab as HTMLElement).click();
            
            // After showing the categories tab, find and click on the formation
            setTimeout(() => {
              const formationElement = document.getElementById(modalToShow);
              if (formationElement) {
                // Scroll with animation to the element
                formationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Apply highlight effect
                formationElement.classList.add('bg-yellow-100');
                setTimeout(() => {
                  formationElement.classList.remove('bg-yellow-100');
                  formationElement.classList.add('transition-colors', 'duration-1000');
                }, 1500);
                
                // Find and click the "details" button for this formation
                const detailButton = formationElement.querySelector('button');
                if (detailButton) {
                  detailButton.click(); // This will open the modal
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
                  description: "La formation demandée n'a pas pu être trouvée",
                });
              }
            }, 500); // Increased timeout for better reliability
          }
        } catch (error) {
          console.error("Error opening formation modal:", error);
          toast({
            variant: "destructive",
            title: "Erreur",
            description: "Une erreur est survenue lors de l'ouverture de la formation",
          });
        }
      }, 300); // Increased initial timeout for better reliability
    } else {
      // Handle hash navigation (for direct links to packs)
      const hash = location.hash;
      if (hash) {
        // Use a timeout to ensure DOM is ready
        setTimeout(() => {
          if (hash.includes('pack')) {
            // Switch to packs tab
            const tabsElement = document.querySelector('[value="packs"]');
            if (tabsElement) {
              (tabsElement as HTMLElement).click();
              // After tab switch, scroll to the specific pack
              setTimeout(() => {
                const packElement = document.querySelector(hash);
                if (packElement) {
                  packElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  // Apply highlight effect
                  packElement.classList.add('bg-yellow-100');
                  setTimeout(() => {
                    packElement.classList.remove('bg-yellow-100');
                    packElement.classList.add('transition-colors', 'duration-1000');
                  }, 1500);
                }
              }, 500);
            }
          } else {
            // For other hash links (like individual formations)
            // Need to be on the categories tab
            const tabsElement = document.querySelector('[value="categories"]');
            if (tabsElement) {
              (tabsElement as HTMLElement).click();
              // After tab switch, scroll to the specific formation
              setTimeout(() => {
                const formationElement = document.querySelector(hash);
                if (formationElement) {
                  formationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  // Apply highlight effect
                  formationElement.classList.add('bg-yellow-100');
                  setTimeout(() => {
                    formationElement.classList.remove('bg-yellow-100');
                    formationElement.classList.add('transition-colors', 'duration-1000');
                  }, 1500);
                }
              }, 500);
            }
          }
        }, 300);
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
