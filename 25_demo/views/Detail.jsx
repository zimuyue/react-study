import { useParams, useNavigate } from 'react-router-dom';
import { useDetail } from '@/config/hooks';

import ProductDetail from '@/components/ProductDetail';

function Detail () {
  const { id } = useParams();
  const nav = useNavigate();
  const [ detail ] = useDetail(id);

  return (
    <div>
      <a href="#" onClick={ () => nav(-1) }>返回</a>
      <h1>商品详情</h1>
      <div>
        <ProductDetail data={ detail } />
      </div>
    </div>
  )
}

export default Detail;