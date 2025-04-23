
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      behavior: behavior
    });
  }, [pathname, behavior]);
};
