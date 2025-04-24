
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { toast } from "sonner";

export const AuthRequired = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, session, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      // Check if user is authenticated AND logged in via Google
      const isGoogleAuth = session?.user?.app_metadata?.provider === 'google';
      
      if (!isAuthenticated || !isGoogleAuth) {
        toast.error("Veuillez vous connecter avec Google pour accéder au test d'éligibilité");
        navigate('/auth');
      }
    }
  }, [isAuthenticated, isLoading, session, navigate]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-migrapro-bleu-ciel"></div>
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : null;
};
