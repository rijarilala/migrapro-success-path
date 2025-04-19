
import { ComponentType } from 'react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export const withScrollToTop = <P extends object>(
  WrappedComponent: ComponentType<P>,
  scrollBehavior: ScrollBehavior = 'smooth'
) => {
  return function WithScrollToTopComponent(props: P) {
    useScrollToTop(scrollBehavior);
    return <WrappedComponent {...props} />;
  };
};
