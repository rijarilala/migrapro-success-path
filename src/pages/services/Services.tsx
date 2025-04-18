
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesBanner from '@/components/services/ServicesBanner';
import ServicesOverview from '@/components/services/ServicesOverview';

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ServicesBanner />
        <ServicesOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
