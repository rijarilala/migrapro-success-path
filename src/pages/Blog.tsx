
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQHero from '@/components/blog/FAQHero';
import FAQList from '@/components/blog/FAQList';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    // Get category and question from URL parameters
    const category = searchParams.get('category');
    const questionId = searchParams.get('question');

    if (category || questionId) {
      // Show toast to indicate that FAQ will be highlighted
      if (questionId) {
        toast({
          title: "Chargement du contenu",
          description: "Recherche de la FAQ demandée...",
          duration: 3000,
        });
      }
      
      // Reset URL params to avoid issues with refreshing - do this early
      window.history.replaceState({}, '', '/blog');
      
      // Nouvelle approche avec intervalles pour une meilleure fiabilité
      setTimeout(() => {
        try {
          // Si une catégorie est spécifiée, sélectionner cet onglet
          if (category) {
            let categoryFound = false;
            let attempts = 0;
            const maxAttempts = 5;
            
            const trySelectCategory = () => {
              attempts++;
              const categoryButton = document.querySelector(`[value="${category}"]`);
              
              if (categoryButton instanceof HTMLElement) {
                categoryButton.click();
                categoryFound = true;
                
                // Si à la fois catégorie et question sont spécifiées, attendre que l'onglet de catégorie se charge, puis développer la question
                if (questionId) {
                  setTimeout(() => {
                    expandQuestion(questionId);
                  }, 800);
                }
              } else if (attempts < maxAttempts) {
                // Réessayer après un court délai
                setTimeout(trySelectCategory, 300);
              } else {
                console.error("Catégorie introuvable après plusieurs tentatives:", category);
                toast({
                  variant: "destructive",
                  title: "Catégorie introuvable",
                  description: "La catégorie demandée n'a pas pu être trouvée",
                });
                
                // Essayer quand même de développer la question si elle existe
                if (questionId) {
                  setTimeout(() => {
                    expandQuestion(questionId);
                  }, 500);
                }
              }
            };
            
            trySelectCategory();
          } 
          // Si seule la question est spécifiée, la développer directement
          else if (questionId) {
            expandQuestion(questionId);
          }
        } catch (error) {
          console.error("Erreur lors de la navigation vers la FAQ:", error);
        }
      }, 500);
    }
  }, [searchParams, toast]);
  
  // Fonction pour trouver et développer une question spécifique avec une fiabilité améliorée
  const expandQuestion = (questionId: string) => {
    let attempts = 0;
    const maxAttempts = 5;
    
    const findAndExpandQuestion = () => {
      attempts++;
      try {
        // Trouver l'élément d'accordéon contenant la question
        const accordionItem = document.getElementById(`faq-${questionId}`);
        
        if (accordionItem) {
          // Faire défiler jusqu'à la question
          accordionItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Ajouter un effet de surbrillance plus prononcé
          accordionItem.classList.add('bg-yellow-200', 'transition-colors', 'duration-1500', 'p-2', 'rounded');
          
          // Cliquer pour développer l'accordéon avec plusieurs tentatives si nécessaire
          setTimeout(() => {
            const trigger = accordionItem.querySelector('[data-state]');
            
            if (trigger instanceof HTMLElement) {
              if (trigger.getAttribute('data-state') === 'closed') {
                trigger.click();
                
                // Vérifier si l'accordéon s'est réellement développé
                setTimeout(() => {
                  if (trigger.getAttribute('data-state') === 'closed') {
                    // Essayer encore une fois
                    trigger.click();
                    
                    // Recherche de bouton alternatif si nécessaire
                    setTimeout(() => {
                      if (trigger.getAttribute('data-state') === 'closed') {
                        const button = accordionItem.querySelector('button');
                        if (button instanceof HTMLElement) {
                          button.click();
                        }
                      }
                    }, 300);
                  }
                }, 300);
              }
            }
            
            // Retirer la surbrillance après un délai
            setTimeout(() => {
              accordionItem.classList.remove('bg-yellow-200', 'p-2');
            }, 2500);
          }, 500);
        } else if (attempts < maxAttempts) {
          // Réessayer après un court délai
          setTimeout(findAndExpandQuestion, 400);
        } else {
          console.error("FAQ introuvable après plusieurs tentatives:", questionId);
          toast({
            variant: "destructive",
            title: "Question introuvable",
            description: "La question demandée n'a pas pu être trouvée",
          });
        }
      } catch (error) {
        console.error("Erreur lors de l'expansion de la question:", error);
      }
    };
    
    findAndExpandQuestion();
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
