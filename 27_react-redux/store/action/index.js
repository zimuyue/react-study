import http from '@/utils/http';

// async => Promise

// return { type, payload } => 

// dispatch(listAction())

// redux-thunk   redux-promise   redux中间件

export async function listAction () {

  // redux-thunk
  // return (dispatch) => {
  //   http('/products').then(res => {
  //     dispatch({ type: 'LIST', payload: res.data });
  //   })
  // }

  // redux-promise
  return http('/products').then(res => {
    return { type: 'LIST', payload: res.data };
  });
}

export async function detailAction (id) {
  return http('/detail/' + id).then(res => {
    return { type: 'DETAIL', payload: res.data };
  })
}

export function fieldAction (field) {
  return {
    type: 'FIELD',
    payload: field
  }
}