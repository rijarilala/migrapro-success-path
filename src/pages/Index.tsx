
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import PackReussitePro from '@/components/home/PackReussitePro';
import ServicesPreview from '@/components/home/ServicesPreview';
import Testimonials from '@/components/home/Testimonials';
import BlogPreview from '@/components/home/BlogPreview';
import ImmigrationOverview from '@/components/home/ImmigrationOverview';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PackReussitePro />
        <ImmigrationOverview />
        <ServicesPreview />
        <Testimonials />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
