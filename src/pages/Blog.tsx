
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQHero from '@/components/blog/FAQHero';
import FAQList from '@/components/blog/FAQList';

const Blog = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Get category and question from URL parameters
    const category = searchParams.get('category');
    const questionId = searchParams.get('question');

    if (category || questionId) {
      // Set a timeout to ensure DOM is fully loaded
      setTimeout(() => {
        // If category is specified, select that category tab
        if (category) {
          const categoryButton = document.querySelector(`[value="${category}"]`);
          if (categoryButton) {
            (categoryButton as HTMLElement).click();
          }
          
          // If both category and question are specified, wait for category tab to load then expand question
          if (questionId) {
            setTimeout(() => {
              expandQuestion(questionId);
            }, 300);
          }
        } 
        // If only question is specified, just expand it directly
        else if (questionId) {
          expandQuestion(questionId);
        }
        
        // Reset URL params to avoid issues with refreshing
        window.history.replaceState({}, '', '/blog');
      }, 100);
    }
  }, [searchParams]);
  
  // Function to find and expand a specific question
  const expandQuestion = (questionId: string) => {
    // Find the accordion item containing the question
    const accordionItem = document.getElementById(`faq-${questionId}`);
    if (accordionItem) {
      // Scroll to the question with smooth behavior
      accordionItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Add a highlight effect
      accordionItem.classList.add('bg-yellow-50');
      setTimeout(() => {
        accordionItem.classList.remove('bg-yellow-50');
        accordionItem.classList.add('transition-colors', 'duration-1000');
      }, 2000);
      
      // Click to expand the accordion
      const trigger = accordionItem.querySelector('[data-state]');
      if (trigger && trigger.getAttribute('data-state') === 'closed') {
        (trigger as HTMLElement).click();
      }
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
