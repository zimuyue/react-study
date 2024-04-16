import { Link } from "react-router-dom";
import { useFieldList } from "../hooks";
import { fieldAction, listAction } from "../store/action";
import ListItem from '@/components/ListItem';
import store from '@/store';
import { useEffect, useMemo } from "react";
import { connect } from "@/react-redux";

function Home ({ productList, field, fieldAction, listAction }) {
  // const fieldList = useFieldList();

  useEffect(() => {
    if (!productList.length) {
      listAction();
    }
  }, []);

  const fieldList = useMemo(() => {
    switch (field) {
      case 'HOT':
        return productList.filter(item => item.hot);
      case 'HIGH':
        return productList.filter(item => item.high);
      default:
        return productList;  
    }
  }, [productList, field]);

  return (
    <div>
      <a href="#" onClick={ () => fieldAction('HOT') }>热门</a> |
      <a href="#" onClick={ () => fieldAction('HIGH') }>精品</a> |
      <Link to="/list">商品列表</Link>
      <div>
        {
          fieldList.map(product => (
            <Link to={ '/detail/' + product.id } key={ product.id }>
              <ListItem data={ product } />
            </Link>
          ))
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productList: state.product.list,
    field: state.status.field
  }
}

const mapDispatchToProps = {
  fieldAction,
  listAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);