
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Éviter l'exécution pendant le SSR
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: behavior
      });
    }
  }, [pathname, behavior]);
};
