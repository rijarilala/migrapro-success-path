
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ImmigrationEvaluation from '@/components/services/immigration/ImmigrationEvaluation';

const Eligibility = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Évaluez votre éligibilité
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Découvrez en quelques minutes si vous êtes admissible à l'immigration canadienne grâce à notre outil d'évaluation gratuit.
            </p>
          </div>
          <ImmigrationEvaluation />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Eligibility;
