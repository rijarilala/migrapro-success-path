
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PackReussiteHero from '@/components/services/coaching/PackReussiteHero';
import CoachingDetails from '@/components/services/coaching/CoachingDetails';
import CoachingBenefits from '@/components/services/coaching/CoachingBenefits';
import CoachingPricing from '@/components/services/coaching/CoachingPricing';
import CoachingTestimonials from '@/components/services/coaching/CoachingTestimonials';
import ServiceCTA from '@/components/services/ServiceCTA';

const PackReussite = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <PackReussiteHero />
        <CoachingDetails />
        <CoachingBenefits />
        <CoachingPricing />
        <CoachingTestimonials />
        <ServiceCTA
          title="Boostez votre profil professionnel dès maintenant"
          buttonText="Réserver mon Pack"
          buttonLink="/contact?service=pack-reussite"
        />
      </main>
      <Footer />
    </div>
  );
};

export default PackReussite;
