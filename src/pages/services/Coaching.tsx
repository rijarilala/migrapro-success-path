
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CoachingHero from '@/components/services/coaching/CoachingHero';
import CoachingServices from '@/components/services/coaching/CoachingServices';
import PackReussitePro from '@/components/home/PackReussitePro';
import ServiceCTA from '@/components/services/ServiceCTA';

const Coaching = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <CoachingHero />
        <CoachingServices />
        <PackReussitePro />
        <ServiceCTA
          title="Besoin d'un accompagnement personnalisé ?"
          subtitle="Nos coachs sont là pour vous aider à atteindre vos objectifs professionnels."
          buttonText="Réserver un coaching"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Coaching;
