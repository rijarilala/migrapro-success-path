
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQHero from '@/components/blog/FAQHero';
import FAQList from '@/components/blog/FAQList';
import FAQSearch from '@/components/blog/FAQSearch';

const Blog = () => {
  const [searchParams] = useSearchParams();
  const faqCategory = searchParams.get('category');
  const faqQuestion = searchParams.get('question');

  useEffect(() => {
    // If we have FAQ parameters, clean the URL after processing
    if (faqCategory || faqQuestion) {
      setTimeout(() => {
        const cleanUrl = window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      }, 500); // Delayed to ensure the page has time to process the parameters
    }
  }, [faqCategory, faqQuestion]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <FAQHero />
        <div className="container mx-auto px-4 py-8 md:py-12">
          <FAQSearch />
          <FAQList initialCategory={faqCategory} initialQuestionId={faqQuestion} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
