import { Link } from 'react-router-dom';

import Counter from './Counter';

function CartItem ({
  data,
  cartList,
  cartDispatch
}) {
  return (
    <div>
      <Link to={ '/detail/' + data.id }>
        <img src={ data.image } style={{ width: 100 }} />
      </Link>
      <div>
        <h1>{ data.name }</h1>
        <p>{ data.price }</p>
      </div>
      <Counter
        id={ data.id }
        max={ data.max_order }
        currentCount={ data.count }
        detail={ data }
        cartList={ cartList }
        cartDispatch={ cartDispatch }
      />
      <hr />
    </div>
  )
}

export default CartItem;