
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CoachingHero from '@/components/services/coaching/CoachingHero';
import CoachingServices from '@/components/services/coaching/CoachingServices';
import CoachingTestimonials from '@/components/services/coaching/CoachingTestimonials';
import ServiceCTA from '@/components/services/ServiceCTA';

const Coaching = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <CoachingHero />
        <CoachingServices />
        <CoachingTestimonials />
        <ServiceCTA 
          title="Prêt à franchir la prochaine étape ?" 
          subtitle="Bénéficiez d'un accompagnement sur mesure pour atteindre vos objectifs"
          buttonText="Réserver un coaching" 
          buttonLink="/contact?service=coaching" 
        />
      </main>
      <Footer />
    </div>
  );
};

export default Coaching;
