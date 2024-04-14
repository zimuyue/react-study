import { nanoid } from 'nanoid';
import { useState, useEffect, useReducer } from 'react';

import http from './http';

export function useProducts () {
  const [ product, setProduct ] = useState([]);

  useEffect(() => {
    ;(async () => {
      try {
        const data = await http('/products');
        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  return [ product, setProduct ];
}

export function useDetail (id) {
  const [ detail, setDetail ] = useState({});

  useEffect(() => {
    ;(async () => {
      try {
        const data = await http('/detail/' + id);
        setDetail(data.data);
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  return [ detail, setDetail ];
}

export function useCounter (initialValue, max) {
  const [ count, dispatch ] = useReducer(reducer, initialValue);

  function reducer (count, { type, payload }) {
    switch (type) {
      case 'PLUS':
        if (count + 1 > max) return count;
        return count += 1;
      case 'MINUS':
        if (count - 1 < 0) return count;
        return count -= 1;
      case 'INPUT':
        if (payload > max) return count;
        return count = payload; 
    }
  }

  return [ count, dispatch ];
}

export function useCart (initialValue) {
  const [ cartList, dispatch ] = useReducer(reducer, initialValue);

  function reducer (cartList, { type, payload }) {
    switch (type) {
      case 'ADD':
        // payload => detail
        payload.cid = nanoid();
        return [ ...cartList, payload ];
      case 'DELETE':
        // payload => id
        return cartList.filter(cart => cart.id !== payload);
      case 'MODIFY':
        // payload => { id, count }
        return cartList.map(cart => {
          if (cart.id == payload.id) {
            cart.count = payload.count;
          }
          return cart;
        })
      default:
        return cartList;
    }
  }

  return [ cartList, dispatch ];
}

export function useTotalPrice (cartList) {
  const [ total, setTotal ] = useState(0);

  useEffect(() => {
    const total = compute();
    setTotal(total);
  }, [cartList])

  function compute () {
    return cartList.reduce((pre, next) => {
      const total = +next.price * +next.count;
      pre += total;
      return pre;
    }, 0)
  }

  return total;
} 
