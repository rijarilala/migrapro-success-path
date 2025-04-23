
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si nous avons un hash dans l'URL, ne rien faire (pour permettre la navigation aux ancrages)
    if (hash) return;
    
    // Éviter l'exécution pendant le SSR
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: behavior
      });
    }
  }, [pathname, hash, behavior]);
};
