import { Link } from 'react-router-dom';
import { ProductContext } from '../App';

import ProductItem from '@/components/ProductItem';

function List () {
  return (
    <div>
      <Link to="/">返回</Link>
      <h1>全部商品</h1>
      <ProductContext.Consumer>
          {
            product => (
              <div>
                {
                  product && product.map(item => (
                    <ProductItem key={ item.id } data={ item } />
                  ))
                }
              </div>
            )
          }
      </ProductContext.Consumer>
    </div>
  )
}

export default List;