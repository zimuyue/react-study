import { useOutletContext } from 'react-router-dom';

import ProductItem from '@/components/ProductItem';

function HighList () {
  const { highList } = useOutletContext();

  return (
    <div>
      <h1>精品商品</h1>
      <div>
        {
          highList && highList.map(item => (
            <ProductItem key={ item.id } data={ item } />
          ))
        }
      </div>
    </div>
  )
}

export default HighList;