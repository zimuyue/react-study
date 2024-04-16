import {
  Outlet, // 子路由视图 => vue router-view
  Link // 跳转路由 => vue router-link
} from 'react-router-dom';

import { useContext, useMemo } from 'react';
import { ProductContext } from '../App';

function Home () {
  const product = useContext(ProductContext);
  
  // 数据分流
  const hotList = useMemo(() => product.filter(p => p.hot), [product]);
  const highList = useMemo(() => product.filter(p => p.high), [product]);

  return (
    <div>
      <h1>Home</h1>
      <Link to="/">热门商品</Link> |&nbsp;
      <Link to="/high_list">精品商品</Link> |&nbsp;
      <Link to="/list">全部商品</Link>
      <Outlet context={ { hotList, highList } } />
    </div>
  )
}

export default Home;