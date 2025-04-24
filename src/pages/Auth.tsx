
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuth } from '@/components/auth/GoogleAuth';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

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
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-4">Connexion requise</h1>
            <p className="text-gray-600">
              Pour accéder au test d'éligibilité, veuillez vous connecter avec votre compte Google.
            </p>
          </div>
          <div className="space-y-4">
            <GoogleAuth />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
