import { useEffect, useState } from "react";
import store from '@/store';
import { detailAction, listAction } from "../store/action";

/**
 * redux + react 毫无关系
 * 
 * redux 只管理状态
 * 
 * 视图的更新驱动是要依靠 react state
 * 
 * react 对于 store state 的变更是毫无察觉
 * 
 * store => state 变更的时候 => 通知 => react 设置 react state => 视图更新
 * subscribe
 * 
 */

export function useProductList () {
  const [ productList, setProductList ] = useState([]);

  useEffect(() => {
    const list = store.getState().product.list;

    if (list.length) {
      setProductList(list);
    } else {
      store.dispatch(listAction());
    }

    const unsubscribe = store.subscribe(() => {
      setProductList(store.getState().product.list);
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return productList;
}

export function useProductDetail (id) {
  const [ productDetail, setProductDetail ] = useState({});

  useEffect(() => {
    const detail = store.getState().product.detail;

    if (Object.keys(detail).length && detail.id == id) {
      setProductDetail(detail);
    } else {
      store.dispatch(detailAction(id));
    }

    const unsubscribe = store.subscribe(() => {
      setProductDetail(store.getState().product.detail);
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return productDetail;
}

export function useFieldList () {
  const list = useProductList();
  const [ fieldList, setFieldList ] = useState([]);

  useEffect(() => {
    filterList(list, setFieldList);

    const unsubscribe = store.subscribe(() => {
      filterList(list, setFieldList);
    });
    
    return () => {
      unsubscribe();
    }
  }, [list]);

  return fieldList;
}

function filterList (list, setList) {
  const field = store.getState().status.field;

  switch (field) {
    case 'HOT':
      setList(list.filter(item => item.hot));
      break;
    case 'HIGH':
      setList(list.filter(item => item.high));
      break;
    default:
      setList(list);
      break;
  }
}