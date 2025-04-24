
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { GoogleAuth } from '@/components/auth/GoogleAuth';

const Auth = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/services/eligibility');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-migrapro-bleu-ciel mb-2">ESPACE MEMBRE</h1>
              <div className="h-1 w-20 bg-migrapro-terre-cuite mx-auto mb-8"></div>
              <h2 className="text-3xl font-bold mb-4">Connectez-vous</h2>
              <p className="text-gray-600 mb-8">
                Accédez à votre espace personnel pour bénéficier de nos services d'accompagnement.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-center mb-4">Connectez-vous</h3>
              <p className="text-gray-600 text-center mb-8">
                Connectez-vous pour accéder à tous nos services
              </p>

              <div className="space-y-4">
                <GoogleAuth />
              </div>

              <p className="text-sm text-gray-500 text-center mt-6">
                En vous connectant, vous acceptez nos{' '}
                <a href="#" className="text-migrapro-terre-cuite hover:underline">
                  Conditions d'utilisation
                </a>{' '}
                et notre{' '}
                <a href="#" className="text-migrapro-terre-cuite hover:underline">
                  Politique de confidentialité
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
