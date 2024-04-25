import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';

import routes from '@/config/routes';

const router = createHashRouter(routes);

function App () {
  return (
    <RouterProvider router={ router } />
  );
}

export default App;