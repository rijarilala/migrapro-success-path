
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
      
      // Set a timeout to ensure DOM is fully loaded
      setTimeout(() => {
        try {
          // If category is specified, select that category tab
          if (category) {
            const categoryButton = document.querySelector(`[value="${category}"]`);
            if (categoryButton) {
              (categoryButton as HTMLElement).click();
              
              // If both category and question are specified, wait for category tab to load then expand question
              if (questionId) {
                setTimeout(() => {
                  expandQuestion(questionId);
                }, 500); // Increased timeout for better reliability
              }
            } else {
              console.error("Could not find category tab:", category);
              toast({
                variant: "destructive",
                title: "Catégorie introuvable",
                description: "La catégorie demandée n'a pas pu être trouvée",
              });
            }
          } 
          // If only question is specified, just expand it directly
          else if (questionId) {
            expandQuestion(questionId);
          }
          
          // Reset URL params to avoid issues with refreshing
          window.history.replaceState({}, '', '/blog');
        } catch (error) {
          console.error("Error navigating to FAQ:", error);
          toast({
            variant: "destructive",
            title: "Erreur",
            description: "Une erreur est survenue lors de l'accès à la FAQ",
          });
        }
      }, 300);
    }
  }, [searchParams, toast]);
  
  // Function to find and expand a specific question with improved reliability
  const expandQuestion = (questionId: string) => {
    try {
      // Find the accordion item containing the question
      const accordionItem = document.getElementById(`faq-${questionId}`);
      if (accordionItem) {
        // Scroll to the question
        accordionItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Add a highlight effect with more visibility
        accordionItem.classList.add('bg-yellow-100');
        setTimeout(() => {
          accordionItem.classList.remove('bg-yellow-100');
          accordionItem.classList.add('transition-colors', 'duration-1000');
        }, 2000);
        
        // Click to expand the accordion with retries if needed
        const trigger = accordionItem.querySelector('[data-state]');
        if (trigger && trigger.getAttribute('data-state') === 'closed') {
          (trigger as HTMLElement).click();
          
          // Check if it actually expanded
          setTimeout(() => {
            if (trigger.getAttribute('data-state') === 'closed') {
              // Try one more time
              (trigger as HTMLElement).click();
            }
          }, 300);
        }
      } else {
        console.error("Could not find FAQ with ID:", questionId);
        toast({
          variant: "destructive",
          title: "Question introuvable",
          description: "La question demandée n'a pas pu être trouvée",
        });
      }
    } catch (error) {
      console.error("Error expanding question:", error);
    }
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
