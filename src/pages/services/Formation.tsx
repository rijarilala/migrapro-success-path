
import { useEffect, useRef, useState } from 'react';
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
  const redirectionProcessedRef = useRef<boolean>(false);

  // Handle search redirections and hash navigation with improved reliability
  useEffect(() => {
    // Si la redirection a déjà été traitée, ne pas continuer
    if (redirectionProcessedRef.current) {
      return;
    }
    
    // Check for showModal param which indicates a formation modal should be opened
    const modalToShow = searchParams.get('showModal');
    
    if (modalToShow) {
      // Marquer la redirection comme traitée pour éviter la répétition
      redirectionProcessedRef.current = true;
      
      console.log(`Formation page handling redirect to modal: ${modalToShow}`);
      
      // Show toast to indicate that modal will open
      toast({
        title: "Formation trouvée",
        description: "Ouverture de la formation demandée...",
        duration: 3000,
      });
      
      setShouldOpenModal(modalToShow);
      
      // Reset the URL so refreshing doesn't reopen the modal
      window.history.replaceState({}, '', '/services/formation');
      
      // Utiliser un délai initial pour s'assurer que le DOM est prêt
      setTimeout(() => {
        try {
          openFormationDetails(modalToShow);
        } catch (error) {
          console.error("Erreur lors de l'ouverture de la formation:", error);
          toast({
            variant: "destructive",
            title: "Erreur technique",
            description: "Un problème est survenu lors de l'ouverture de la formation.",
          });
        }
      }, 800);
    } else {
      // Handle hash navigation (for direct links to packs)
      const hash = location.hash;
      if (hash) {
        // Marquer la redirection comme traitée
        redirectionProcessedRef.current = true;
        
        console.log(`Formation page handling hash navigation: ${hash}`);
        
        // Wait for DOM to be ready
        setTimeout(() => {
          if (hash.includes('pack')) {
            navigateToPack(hash);
          } else {
            navigateToFormation(hash);
          }
        }, 800);
      }
    }
  }, [location, searchParams, toast]);

  // Fonction pour ouvrir les détails d'une formation
  const openFormationDetails = (formationId: string) => {
    console.log(`Attempting to open formation details: ${formationId}`);
    
    // Localiser l'onglet des catégories et cliquer dessus
    let attempts = 0;
    const maxAttempts = 8;
    const retryInterval = 300;
    
    const tryClickCategoriesTab = () => {
      attempts++;
      console.log(`Attempt ${attempts} to click categories tab`);
      
      const categoriesTab = document.querySelector('[value="categories"]');
      if (categoriesTab instanceof HTMLElement) {
        console.log('Found categories tab, clicking it');
        
        // Mettre en évidence le bouton avant de cliquer
        categoriesTab.classList.add('ring-2', 'ring-migrapro-terre-cuite');
        
        categoriesTab.click();
        
        // Retirer la mise en évidence après un délai
        setTimeout(() => {
          categoriesTab.classList.remove('ring-2', 'ring-migrapro-terre-cuite');
        }, 1000);
        
        // Attendre que l'onglet soit chargé avant de chercher la formation
        setTimeout(() => {
          findAndOpenFormation(formationId);
        }, 800);
      } else if (attempts < maxAttempts) {
        // Augmenter progressivement l'intervalle pour les tentatives ultérieures
        const nextInterval = retryInterval * (1 + (attempts * 0.2));
        console.log(`Categories tab not found yet, retrying in ${nextInterval}ms...`);
        setTimeout(tryClickCategoriesTab, nextInterval);
      } else {
        console.error(`Failed to find categories tab after ${maxAttempts} attempts`);
        toast({
          variant: "destructive",
          title: "Navigation impossible",
          description: "Impossible de naviguer vers l'onglet des catégories.",
        });
      }
    };
    
    // Démarrer la recherche de l'onglet des catégories
    tryClickCategoriesTab();
  };
  
  // Fonction pour trouver et ouvrir une formation spécifique
  const findAndOpenFormation = (formationId: string) => {
    let attempts = 0;
    const maxAttempts = 8;
    const retryInterval = 400;
    
    const attemptFindFormation = () => {
      attempts++;
      console.log(`Attempt ${attempts} to find formation: ${formationId}`);
      
      try {
        const formationElement = document.getElementById(formationId);
        
        if (formationElement) {
          console.log(`Found formation element: ${formationId}`);
          
          // Faire défiler jusqu'à la formation avec une marge
          formationElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center'
          });
          
          // Appliquer un effet visuel fort pour attirer l'attention
          formationElement.classList.add('bg-yellow-200', 'shadow-lg', 'scale-105', 'transition-all', 'duration-500', 'z-10', 'relative', 'rounded-lg');
          
          // Attendre que le scroll et l'effet visuel soient visibles avant de cliquer
          setTimeout(() => {
            // Trouver et cliquer sur le bouton de détails
            const detailButton = formationElement.querySelector('button:last-child');
            if (detailButton instanceof HTMLElement) {
              console.log('Found details button, clicking it');
              detailButton.click();
              
              // Notification de succès
              toast({
                title: "Formation trouvée",
                description: "Les détails de la formation sont maintenant affichés.",
                duration: 2000,
              });
              
              // Retirer progressivement l'effet visuel après l'ouverture du modal
              setTimeout(() => {
                formationElement.classList.remove('bg-yellow-200', 'shadow-lg', 'scale-105', 'z-10');
                formationElement.classList.add('transition-all', 'duration-1000');
              }, 1500);
            } else {
              // Recherche alternative de boutons à cliquer
              console.log('No last-child button found, trying alternative button search');
              const anyButton = formationElement.querySelector('button');
              if (anyButton instanceof HTMLElement) {
                anyButton.click();
              } else {
                console.error('No button found in the formation element');
                toast({
                  variant: "destructive",
                  title: "Interaction impossible",
                  description: "Impossible d'ouvrir les détails de la formation.",
                });
              }
            }
          }, 600);
        } else if (attempts < maxAttempts) {
          // Augmenter progressivement l'intervalle pour les tentatives ultérieures
          const nextInterval = retryInterval * (1 + (attempts * 0.2));
          console.log(`Formation element not found yet, retrying in ${nextInterval}ms...`);
          setTimeout(attemptFindFormation, nextInterval);
        } else {
          console.error(`Failed to find formation element after ${maxAttempts} attempts: ${formationId}`);
          toast({
            variant: "destructive",
            title: "Formation introuvable",
            description: `Impossible de trouver la formation "${formationId}"`,
          });
        }
      } catch (error) {
        console.error("Erreur lors de la recherche de la formation:", error);
        
        if (attempts < maxAttempts) {
          console.log(`Error occurred, retrying (${attempts}/${maxAttempts})...`);
          setTimeout(attemptFindFormation, retryInterval);
        } else {
          toast({
            variant: "destructive",
            title: "Erreur technique",
            description: "Un problème est survenu lors de la recherche de la formation.",
          });
        }
      }
    };
    
    // Démarrer la recherche de la formation
    attemptFindFormation();
  };
  
  // Fonction pour naviguer vers un pack spécifique
  const navigateToPack = (hash: string) => {
    let attempts = 0;
    const maxAttempts = 8;
    const retryInterval = 300;
    
    const attemptPackNavigation = () => {
      attempts++;
      console.log(`Attempt ${attempts} to navigate to pack: ${hash}`);
      
      // Switch to packs tab
      const tabsElement = document.querySelector('[value="packs"]');
      if (tabsElement instanceof HTMLElement) {
        console.log('Found packs tab, clicking it');
        
        // Mettre en évidence le bouton avant de cliquer
        tabsElement.classList.add('ring-2', 'ring-migrapro-terre-cuite');
        
        tabsElement.click();
        
        // Retirer la mise en évidence après un délai
        setTimeout(() => {
          tabsElement.classList.remove('ring-2', 'ring-migrapro-terre-cuite');
        }, 1000);
        
        // After tab switch, scroll to the specific pack
        setTimeout(() => {
          const packElement = document.querySelector(hash);
          if (packElement) {
            console.log(`Found pack element: ${hash}`);
            
            packElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
            
            // Apply highlight effect
            packElement.classList.add('bg-yellow-200', 'shadow-lg', 'scale-105', 'transition-all', 'duration-500', 'z-10', 'relative', 'rounded-lg');
            
            // Notification de succès
            toast({
              title: "Pack trouvé",
              description: "Le pack demandé a été localisé.",
              duration: 2000,
            });
            
            // Remove highlight effect after a delay
            setTimeout(() => {
              packElement.classList.remove('bg-yellow-200', 'shadow-lg', 'scale-105', 'z-10');
              packElement.classList.add('transition-all', 'duration-1000');
            }, 2500);
          } else if (attempts < maxAttempts) {
            // Retry if pack element is not found yet
            const nextInterval = retryInterval * (1 + (attempts * 0.2));
            console.log(`Pack element not found yet, retrying in ${nextInterval}ms...`);
            setTimeout(attemptPackNavigation, nextInterval);
          } else {
            console.error(`Failed to find pack element after ${maxAttempts} attempts: ${hash}`);
            toast({
              variant: "destructive",
              title: "Pack introuvable",
              description: "Impossible de trouver le pack demandé.",
            });
          }
        }, 1000);
      } else if (attempts < maxAttempts) {
        // Retry if packs tab is not found yet
        const nextInterval = retryInterval * (1 + (attempts * 0.2));
        console.log(`Packs tab not found yet, retrying in ${nextInterval}ms...`);
        setTimeout(attemptPackNavigation, nextInterval);
      } else {
        console.error(`Failed to find packs tab after ${maxAttempts} attempts`);
        toast({
          variant: "destructive",
          title: "Navigation impossible",
          description: "Impossible de naviguer vers l'onglet des packs.",
        });
      }
    };
    
    // Démarrer la navigation vers le pack
    attemptPackNavigation();
  };
  
  // Fonction pour naviguer vers une formation spécifique via hash
  const navigateToFormation = (hash: string) => {
    let attempts = 0;
    const maxAttempts = 8;
    const retryInterval = 300;
    
    const attemptFormationNavigation = () => {
      attempts++;
      console.log(`Attempt ${attempts} to navigate to formation via hash: ${hash}`);
      
      // Need to be on the categories tab
      const tabsElement = document.querySelector('[value="categories"]');
      if (tabsElement instanceof HTMLElement) {
        console.log('Found categories tab, clicking it');
        
        // Mettre en évidence le bouton avant de cliquer
        tabsElement.classList.add('ring-2', 'ring-migrapro-terre-cuite');
        
        tabsElement.click();
        
        // Retirer la mise en évidence après un délai
        setTimeout(() => {
          tabsElement.classList.remove('ring-2', 'ring-migrapro-terre-cuite');
        }, 1000);
        
        // After tab switch, scroll to the specific formation
        setTimeout(() => {
          const formationElement = document.querySelector(hash);
          if (formationElement) {
            console.log(`Found formation element via hash: ${hash}`);
            
            formationElement.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
            
            // Apply highlight effect
            formationElement.classList.add('bg-yellow-200', 'shadow-lg', 'scale-105', 'transition-all', 'duration-500', 'z-10', 'relative', 'rounded-lg');
            
            // Notification de succès
            toast({
              title: "Formation trouvée",
              description: "La formation demandée a été localisée.",
              duration: 2000,
            });
            
            // Remove highlight effect after a delay
            setTimeout(() => {
              formationElement.classList.remove('bg-yellow-200', 'shadow-lg', 'scale-105', 'z-10');
              formationElement.classList.add('transition-all', 'duration-1000');
            }, 2500);
          } else if (attempts < maxAttempts) {
            // Retry if formation element is not found yet
            const nextInterval = retryInterval * (1 + (attempts * 0.2));
            console.log(`Formation element not found yet, retrying in ${nextInterval}ms...`);
            setTimeout(attemptFormationNavigation, nextInterval);
          } else {
            console.error(`Failed to find formation element after ${maxAttempts} attempts: ${hash}`);
            toast({
              variant: "destructive",
              title: "Formation introuvable",
              description: "Impossible de trouver la formation demandée.",
            });
          }
        }, 1000);
      } else if (attempts < maxAttempts) {
        // Retry if categories tab is not found yet
        const nextInterval = retryInterval * (1 + (attempts * 0.2));
        console.log(`Categories tab not found yet, retrying in ${nextInterval}ms...`);
        setTimeout(attemptFormationNavigation, nextInterval);
      } else {
        console.error(`Failed to find categories tab after ${maxAttempts} attempts`);
        toast({
          variant: "destructive",
          title: "Navigation impossible",
          description: "Impossible de naviguer vers l'onglet des catégories.",
        });
      }
    };
    
    // Démarrer la navigation vers la formation
    attemptFormationNavigation();
  };

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
