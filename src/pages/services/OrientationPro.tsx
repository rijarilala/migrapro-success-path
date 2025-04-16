
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import OrientationHero from '@/components/services/orientation/OrientationHero';
import OrientationPrestations from '@/components/services/orientation/OrientationPrestations';
import ServiceCTA from '@/components/services/ServiceCTA';

const OrientationPro = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <OrientationHero />
        <OrientationPrestations />
        <ServiceCTA 
          title="Prêt à définir votre avenir professionnel ?" 
          buttonText="Je prends rendez-vous" 
          buttonLink="/contact" 
        />
      </main>
      <Footer />
    </div>
  );
};

export default OrientationPro;
