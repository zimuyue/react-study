import Home from '@/views/Home';
import List from '@/views/List';
import Detail from '@/views/Detail';
import Cart from '@/views/Cart';
import NotFound from '@/views/NotFound';
import HighList from '@/views/subs/HighList';
import HotList from '@/views/subs/HotList';

export default [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true, // 默认展示的页面
        element: <HotList />
      },
      {
        path: '/high_list',
        element: <HighList />
      }
    ]
  },
  {
    path: '/list',
    element: <List />
  },
  {
    path: '/detail/:id',
    element: <Detail />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '*',
    element: <NotFound />
  }
]
