import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../App';
import { useTotalPrice } from '@/config/hooks';

import CartItem from '@/components/CartItem';

function Cart () {
  const nav = useNavigate();
  const { cartList, cartDispatch } = useContext(CartContext);
  const total = useTotalPrice(cartList);

  return (
    <div>
      <a href="#" onClick={ () => nav(-1) }>返回</a>
      <h1>购物车列表</h1>
      <div>
        {
          cartList && cartList.map(cart => (
            <CartItem 
              data={ cart }
              cartList={ cartList }
              cartDispatch={ cartDispatch }
              key={ cart.id }
            />
          ))
        }
      </div>
      <p>共计：{ total }元</p>
    </div>
  )
}

export default Cart;