import { Suspense } from 'react';
import { useRoutes } from 'react-router';
import routes from '~react-pages';

import { Skeleton } from 'antd';

export default function App() {
  return (
    <>
      <Suspense fallback={<Skeleton />}>{useRoutes(routes)}</Suspense>
    </>
  );
}
