
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (behavior: ScrollBehavior = 'auto') => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo(0, 0);
  }, [pathname]);
};
