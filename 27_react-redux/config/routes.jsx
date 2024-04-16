import Home from '@/views/Home';
import { lazy, Suspense } from 'react';
import ViewLoading from '@/components/ViewLoading';

const List = lazy(() => import('../views/List.jsx'));
const Detail = lazy(() => import('../views/Detail.jsx'));

export default [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/list',
    element: (
      <Suspense fallback={ <ViewLoading /> }>
        <List />
      </Suspense>
    )
  },
  {
    path: '/detail/:id', // http://localhost:5173/#/detail/1
    element: (
      <Suspense fallback={ <ViewLoading /> }>
        <Detail />
      </Suspense>
    )
  }
]