
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQHero from '@/components/blog/FAQHero';
import FAQList from '@/components/blog/FAQList';
import FAQSearch from '@/components/blog/FAQSearch';
import FAQCategories from '@/components/blog/FAQCategories';

const Blog = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <FAQHero />
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <FAQList />
            </div>
            <aside>
              <FAQSearch />
              <FAQCategories />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
