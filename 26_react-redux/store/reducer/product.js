import productState from '../state/product';

// dispatch({ type: 'LIST', payload: [{},{},{},{},{}] })
// dispatch({ type: 'DETAIL', payload: {} })
export default function product (state={ ...productState }, action={}) {
  const { type, payload } = action;

  switch (type) {
    case 'LIST':
      return {
        ...state,
        list: payload
      }
    case 'DETAIL':
      return {
        ...state,
        detail: payload
      }
    default:
      return state;    
  }
}