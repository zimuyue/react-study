import routes from '@/config/routes';

import { RouterProvider, createHashRouter } from 'react-router-dom';
const router = createHashRouter(routes);

import { createContext } from 'react';
import { useProducts, useCart } from '@/config/hooks';

export const ProductContext = createContext(null);
export const CartContext = createContext(null);

function App () {
  const [ product ] = useProducts();
  const [ cartList, cartDispatch ] = useCart([]);

  return (
    <ProductContext.Provider value={ product }>
      <CartContext.Provider value={ { cartList, cartDispatch } }>
        <RouterProvider router={ router } />
      </CartContext.Provider>
    </ProductContext.Provider>
  )
}

export default App;