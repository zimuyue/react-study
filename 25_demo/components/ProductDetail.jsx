import { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../App';

import Counter from './Counter';

function ProductDetail ({ data }) {
  const { cartList, cartDispatch } = useContext(CartContext);

  // 计算当前商品已加入购物车的 count 数量
  const currentCount = useMemo(() => cartList.find(cart => (cart.id === data.id))?.count || 0, [data]);

  return (
    <div>
      <img src={ data.image } style={{ width: 300 }} />
      <h1>{ data.name }</h1>
      <hr />
      <p>{ data.intro }</p>
      <p>{ data.price }</p>
      <Counter
        id={ data.id }
        max={ data.max_order }
        currentCount={ currentCount }
        detail={ data }
        cartList={ cartList }
        cartDispatch={ cartDispatch }
      />
      <Link to="/cart">购物车</Link>
    </div>
  )
}

export default ProductDetail;
