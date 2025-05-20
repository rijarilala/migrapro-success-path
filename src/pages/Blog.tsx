
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQHero from '@/components/blog/FAQHero';
import FAQList from '@/components/blog/FAQList';

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <FAQHero />
        <div className="container mx-auto px-4 py-12">
          <FAQList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
