import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { RoutedComponents } from "./routed-components";
import { useRouter } from 'hooks/use-router'

const Router = () => {
  return (
    <>
      <ScrollToTop />
      {
        RoutedComponents && RoutedComponents.map(component =>
          <Route exact {...component} />
        )
      }
    </>
  );
}

const ScrollToTop = () => {
  const router = useRouter();
  useEffect(() => {
    const unlisten = router.history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [router.history]);
  return (null);
}

export default Router;