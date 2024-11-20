import React, { Suspense } from 'react';
import Loading from './handlers/loadingHandler/Loading';
import { ErrorBoundary } from './handlers/errorHandler/ErrorBoundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import router from './routes';

const App: React.FC = () => {
  const browserRouter = createBrowserRouter(router);

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={browserRouter} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
