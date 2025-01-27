import { Suspense } from 'react';
import { useRoutes } from 'react-router';
import routes from '~react-pages';
import RootLayout from './pages/_layout';

export default function App() {
  return (
    <>
      <RootLayout>
        <Suspense fallback={<div />}>{useRoutes(routes)}</Suspense>
      </RootLayout>
    </>
  );
}
