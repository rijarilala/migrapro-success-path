
import { ComponentType } from 'react';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export const withScrollToTop = <P extends object>(
  WrappedComponent: ComponentType<P>,
  scrollBehavior: ScrollBehavior = 'auto'
) => {
  return function WithScrollToTopComponent(props: P) {
    useScrollToTop(scrollBehavior);
    return <WrappedComponent {...props} />;
  };
};
