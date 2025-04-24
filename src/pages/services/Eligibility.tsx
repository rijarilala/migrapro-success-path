
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ImmigrationEvaluation from '@/components/services/immigration/ImmigrationEvaluation';
import { AuthRequired } from '@/components/auth/AuthRequired';
import { useEffect } from 'react';

const Eligibility = () => {
  // Force scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto' // Using 'auto' for immediate scroll without animation
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-16">
        <AuthRequired>
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
        </AuthRequired>
      </main>
      <Footer />
    </div>
  );
};

export default Eligibility;
