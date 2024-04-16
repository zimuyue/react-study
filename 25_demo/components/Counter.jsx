import { useEffect } from 'react';
import { useCounter } from '@/config/hooks';

function Counter ({
  id,
  max,
  currentCount,
  detail,
  cartList,
  cartDispatch
}) {
  const [ count, counterDispatch ] = useCounter(currentCount, max);

  useEffect(() => {
    if (count === 0) {
      cartDispatch({ type: 'DELETE', payload: id })
    } else {
      const current = cartList.find(cart => cart.id === id);

      if (current) {
        cartDispatch({ type: 'MODIFY', payload: { id, count } });
      } else {
        cartDispatch({ type: 'ADD', payload: { ...detail, count } });
      }
    }
  }, [count])

  // 添加完商品后再次进入时重新设置 count 值
  useEffect(() => {
    counterDispatch({ type: 'INPUT', payload: currentCount });
  }, [currentCount])

  return (
    <div>
      <button onClick={ () => counterDispatch({ type: 'MINUS' }) }> - </button>&nbsp;
      <input 
        type="number" 
        value={ count } 
        onChange={ (e) => counterDispatch({ type: 'INPUT', payload: e.target.value }) } />&nbsp;
      <button onClick={ () => counterDispatch({ type: 'PLUS' }) }> + </button>
    </div>
  )
}

export default Counter;
