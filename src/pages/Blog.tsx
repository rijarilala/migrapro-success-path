
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQHero from '@/components/blog/FAQHero';
import FAQList from '@/components/blog/FAQList';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const redirectionProcessedRef = useRef<boolean>(false);

  useEffect(() => {
    // Si la redirection a déjà été traitée, ne pas continuer
    if (redirectionProcessedRef.current) {
      return;
    }

    // Get category and question from URL parameters
    const category = searchParams.get('category');
    const questionId = searchParams.get('question');

    if (category || questionId) {
      // Marquer la redirection comme traitée pour éviter la répétition
      redirectionProcessedRef.current = true;
      
      console.log(`Blog page handling redirection. Category: ${category}, Question ID: ${questionId}`);
      
      // Show toast to indicate that FAQ will be highlighted
      if (questionId) {
        toast({
          title: "FAQ trouvée",
          description: "Chargement de la question spécifique...",
          duration: 3000,
        });
      }
      
      // Reset URL params to avoid issues with refreshing - do this early
      window.history.replaceState({}, '', '/blog');
      
      // Attendre que le DOM soit prêt avec un délai raisonnable
      setTimeout(() => {
        try {
          // Sélectionner la catégorie si spécifiée avec un système de retry
          if (category) {
            selectCategory(category, questionId);
          } 
          // Si seule la question est spécifiée, la développer directement
          else if (questionId) {
            expandQuestion(questionId);
          }
        } catch (error) {
          console.error("Erreur lors de la navigation vers la FAQ:", error);
          toast({
            variant: "destructive",
            title: "Erreur de redirection",
            description: "Impossible de trouver la FAQ demandée. Veuillez essayer à nouveau.",
          });
        }
      }, 800);
    }
  }, [searchParams, toast]);
  
  // Fonction pour sélectionner une catégorie avec plusieurs tentatives
  const selectCategory = (category: string, questionId: string | null) => {
    let attempts = 0;
    const maxAttempts = 8;  // Augmenter le nombre de tentatives
    const retryInterval = 300;
    
    const attemptSelectCategory = () => {
      attempts++;
      console.log(`Attempt ${attempts} to select category: ${category}`);
      
      // Essayer toutes les méthodes possibles pour trouver le bouton de catégorie
      const categoryButton = document.querySelector(`[value="${category}"]`);
      
      if (categoryButton instanceof HTMLElement) {
        console.log(`Category button found: ${category}`);
        // Appliquer une surbrillance temporaire pour aider à localiser
        categoryButton.classList.add('ring-2', 'ring-migrapro-terre-cuite', 'ring-offset-2');
        
        // Cliquer sur le bouton pour activer la catégorie
        categoryButton.click();
        
        // Retirer la surbrillance après un délai
        setTimeout(() => {
          categoryButton.classList.remove('ring-2', 'ring-migrapro-terre-cuite', 'ring-offset-2');
        }, 2000);
        
        // Si une question spécifique doit être ouverte, attendre que la catégorie soit chargée
        if (questionId) {
          setTimeout(() => {
            expandQuestion(questionId);
          }, 600);
        }
      } else if (attempts < maxAttempts) {
        // Augmenter progressivement l'intervalle pour les tentatives ultérieures
        const nextInterval = retryInterval * (1 + (attempts * 0.2));
        console.log(`Category button not found yet, retrying in ${nextInterval}ms...`);
        setTimeout(attemptSelectCategory, nextInterval);
      } else {
        console.error(`Failed to find category button after ${maxAttempts} attempts: ${category}`);
        toast({
          variant: "destructive",
          title: "Catégorie introuvable",
          description: "La catégorie demandée n'a pas pu être trouvée. Nous affichons toutes les questions.",
        });
        
        // Essayer quand même de développer la question si elle existe
        if (questionId) {
          expandQuestion(questionId);
        }
      }
    };
    
    // Démarrer le processus de sélection de catégorie
    attemptSelectCategory();
  };
  
  // Fonction améliorée pour trouver et développer une question spécifique
  const expandQuestion = (questionId: string) => {
    let attempts = 0;
    const maxAttempts = 8;  // Augmenter le nombre de tentatives
    const retryInterval = 300;
    
    const attemptExpandQuestion = () => {
      attempts++;
      console.log(`Attempt ${attempts} to expand question: ${questionId}`);
      
      try {
        // Trouver l'élément d'accordéon contenant la question par ID
        const accordionItem = document.getElementById(`faq-${questionId}`);
        
        if (accordionItem) {
          console.log(`Found FAQ item: faq-${questionId}`);
          
          // Faire défiler jusqu'à la question avec une marge en haut
          accordionItem.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center'  // Centrer pour une meilleure visibilité
          });
          
          // Ajouter un effet de surbrillance plus prononcé
          accordionItem.classList.add('bg-yellow-200', 'shadow-lg', 'transition-all', 'duration-1000', 'p-3', 'rounded-md');
          
          // Ajouter une pause avant de tenter l'expansion pour s'assurer que la surbrillance est visible
          setTimeout(() => {
            // Trouver le déclencheur de l'accordéon avec une approche robuste
            const trigger = accordionItem.querySelector('[data-state]');
            
            if (trigger instanceof HTMLElement) {
              console.log(`Found trigger with state: ${trigger.getAttribute('data-state')}`);
              
              if (trigger.getAttribute('data-state') === 'closed') {
                console.log('Clicking to expand accordion');
                trigger.click();
                
                // Vérifier si l'accordéon s'est réellement développé après un court délai
                setTimeout(() => {
                  if (trigger.getAttribute('data-state') === 'closed') {
                    console.log('First click failed, trying again');
                    trigger.click();
                    
                    // En dernier recours, essayer de cliquer sur n'importe quel bouton dans l'élément
                    setTimeout(() => {
                      if (trigger.getAttribute('data-state') === 'closed') {
                        console.log('Second click failed, trying to find any button');
                        const button = accordionItem.querySelector('button');
                        if (button instanceof HTMLElement) {
                          button.click();
                        }
                      }
                    }, 400);
                  }
                }, 400);
              } else {
                console.log('Accordion is already open');
              }
            } else {
              // Recherche alternative de boutons ou d'ancres à cliquer
              console.log('No data-state trigger found, looking for buttons');
              const button = accordionItem.querySelector('button');
              if (button instanceof HTMLElement) {
                button.click();
              }
            }
            
            // Retirer progressivement la surbrillance après un délai
            setTimeout(() => {
              accordionItem.classList.remove('bg-yellow-200', 'shadow-lg', 'p-3');
              
              // Ajouter un effet de transition douce pour le retrait de la surbrillance
              accordionItem.classList.add('transition-all', 'duration-1000');
              
              // Notification de succès
              toast({
                title: "FAQ trouvée",
                description: "La question a été localisée et ouverte pour vous.",
                duration: 2000,
              });
            }, 3000);
          }, 400);
        } else if (attempts < maxAttempts) {
          // Augmenter progressivement l'intervalle pour les tentatives ultérieures
          const nextInterval = retryInterval * (1 + (attempts * 0.2));
          console.log(`FAQ item not found yet, retrying in ${nextInterval}ms...`);
          setTimeout(attemptExpandQuestion, nextInterval);
        } else {
          console.error(`Failed to find FAQ item after ${maxAttempts} attempts: faq-${questionId}`);
          toast({
            variant: "destructive",
            title: "Question introuvable",
            description: "La question demandée n'a pas pu être trouvée. Veuillez la rechercher manuellement.",
          });
        }
      } catch (error) {
        console.error("Erreur lors de l'expansion de la question:", error);
        
        if (attempts < maxAttempts) {
          console.log(`Error occurred, retrying (${attempts}/${maxAttempts})...`);
          setTimeout(attemptExpandQuestion, retryInterval);
        } else {
          toast({
            variant: "destructive",
            title: "Erreur technique",
            description: "Un problème est survenu lors de l'ouverture de la question.",
          });
        }
      }
    };
    
    // Démarrer le processus d'expansion de question
    attemptExpandQuestion();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <FAQHero />
        <div className="container mx-auto px-4 py-8 md:py-12">
          <FAQList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
