
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
    // Récupérer le paramètre fromSearch qui indique si la navigation vient de la recherche
    const fromSearch = searchParams.get('fromSearch') === 'true';
    
    // Extraire le hash (sans le #) s'il existe
    const hash = location.hash ? location.hash.substring(1) : '';
    
    console.log(`Formation.tsx: Chargement de la page avec hash=${hash}, fromSearch=${fromSearch}`);
    
    if (hash) {
      // Augmenter le délai pour s'assurer que le DOM est chargé (800ms au lieu de 500ms)
      setTimeout(() => {
        console.log(`Formation.tsx: Tentative de localisation de l'élément avec ID=${hash}`);
        
        // Essayer d'abord dans l'onglet catégories (par défaut)
        const tabsElement = document.querySelector('[value="categories"]');
        if (tabsElement) {
          console.log("Formation.tsx: Activation de l'onglet 'categories'");
          (tabsElement as HTMLElement).click();
          
          // Augmenter le délai pour le changement d'onglet (500ms au lieu de 300ms)
          setTimeout(() => {
            // Rechercher la formation par son ID dans l'onglet catégories
            const formationElement = document.getElementById(hash);
            if (formationElement) {
              console.log(`Formation.tsx: Élément trouvé dans l'onglet 'categories', défilement en cours`);
              formationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
              
              // Améliorer la surbrillance avec un effet plus visible
              formationElement.classList.add('ring-4', 'ring-migrapro-terre-cuite', 'ring-opacity-50', 'shadow-lg');
              setTimeout(() => {
                formationElement.classList.remove('ring-4', 'ring-migrapro-terre-cuite', 'ring-opacity-50', 'shadow-lg');
                formationElement.classList.add('transition-all', 'duration-1000');
              }, 3000); // Durée de surbrillance plus longue (3 secondes)
              
              // Notification de succès
              if (fromSearch) {
                toast({
                  title: "Formation trouvée",
                  description: "Voici la formation que vous recherchiez",
                  duration: 3000,
                });
              }
            } else {
              // Si l'élément n'a pas été trouvé dans l'onglet catégories, essayer dans l'onglet packs
              console.log("Formation.tsx: Formation non trouvée dans l'onglet 'categories', vérification dans 'packs'");
              const packsTab = document.querySelector('[value="packs"]');
              if (packsTab) {
                console.log("Formation.tsx: Activation de l'onglet 'packs'");
                (packsTab as HTMLElement).click();
                
                // Augmenter le délai pour le changement d'onglet (500ms au lieu de 300ms)
                setTimeout(() => {
                  const packElement = document.getElementById(hash);
                  if (packElement) {
                    console.log(`Formation.tsx: Élément trouvé dans l'onglet 'packs', défilement en cours`);
                    packElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // Améliorer la surbrillance avec un effet plus visible
                    packElement.classList.add('ring-4', 'ring-migrapro-terre-cuite', 'ring-opacity-50', 'shadow-lg');
                    setTimeout(() => {
                      packElement.classList.remove('ring-4', 'ring-migrapro-terre-cuite', 'ring-opacity-50', 'shadow-lg');
                      packElement.classList.add('transition-all', 'duration-1000');
                    }, 3000); // Durée de surbrillance plus longue (3 secondes)
                    
                    // Notification de succès
                    if (fromSearch) {
                      toast({
                        title: "Formation trouvée",
                        description: "Voici la formation que vous recherchiez",
                        duration: 3000,
                      });
                    }
                  } else {
                    console.log(`Formation.tsx: Formation avec ID=${hash} non trouvée dans aucun onglet`);
                    if (fromSearch) {
                      toast({
                        title: "Formation non trouvée",
                        description: "Impossible de localiser la formation demandée",
                        variant: "destructive",
                        duration: 3000,
                      });
                    }
                  }
                }, 500);
              }
            }
          }, 500);
        }
      }, 800);
      
      // Nettoyer l'URL pour éviter les rechargements de page avec les mêmes paramètres
      if (fromSearch) {
        window.history.replaceState({}, '', `/services/formation${location.hash}`);
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
