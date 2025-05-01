
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EtudesHero from "@/components/services/etudes/EtudesHero";
import EtudesPrograms from "@/components/services/etudes/EtudesPrograms";
import EtudesServices from "@/components/services/etudes/EtudesServices";
import EtudesAdvantages from "@/components/services/etudes/EtudesAdvantages";
import EtudesSteps from "@/components/services/etudes/EtudesSteps";
import ServiceCTA from "@/components/services/ServiceCTA";

const EtudesCanada = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <EtudesHero />
        <EtudesAdvantages />
        <EtudesPrograms />
        <EtudesServices />
        <EtudesSteps />
        <ServiceCTA 
          title="Prêt à réaliser votre rêve d'études au Canada ?"
          subtitle="Contactez-nous dès aujourd'hui pour bénéficier de notre expertise et maximiser vos chances de réussite."
          buttonText="Demander un accompagnement"
          buttonLink="/contact"
        />
      </main>
      <Footer />
    </div>
  );
};

export default EtudesCanada;
