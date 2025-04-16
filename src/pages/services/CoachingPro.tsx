
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CoachingHero from '@/components/services/coaching/CoachingHero';
import CoachingDetails from '@/components/services/coaching/CoachingDetails';
import CoachingBenefits from '@/components/services/coaching/CoachingBenefits';
import CoachingPricing from '@/components/services/coaching/CoachingPricing';
import CoachingTestimonials from '@/components/services/coaching/CoachingTestimonials';
import ServiceCTA from '@/components/services/ServiceCTA';

const CoachingPro = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <CoachingHero />
        <CoachingDetails />
        <CoachingBenefits />
        <CoachingPricing />
        <CoachingTestimonials />
        <ServiceCTA 
          title="Boostez votre profil professionnel dès maintenant" 
          buttonText="Réserver mon Pack" 
          buttonLink="/contact?service=coaching" 
        />
      </main>
      <Footer />
    </div>
  );
};

export default CoachingPro;
