
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FormationHero from '@/components/services/formation/FormationHero';
import FormationCourses from '@/components/services/formation/FormationCourses';
import ServiceCTA from '@/components/services/ServiceCTA';

const Formation = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <FormationHero />
        <FormationCourses />
        <ServiceCTA 
          title="Prêt à développer vos compétences ?" 
          subtitle="Nos formations vous préparent aux exigences du marché du travail local et canadien"
          buttonText="reserver ma place" 
          buttonLink="/contact?service=formation" 
        />
      </main>
      <Footer />
    </div>
  );
};

export default Formation;
