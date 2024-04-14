import { useOutletContext } from 'react-router-dom';

import ProductItem from '@/components/ProductItem';

function HotList () {
  const { hotList } = useOutletContext();

  return (
    <div>
      <h1>热门商品</h1>
      <div>
        {
          hotList && hotList.map(item => (
            <ProductItem key={ item.id } data={ item } />
          ))
        }
      </div>
    </div>
  )
}

export default HotList;