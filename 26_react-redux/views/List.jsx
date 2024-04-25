import { Link } from "react-router-dom";
import { useProductList } from "../hooks";
import ListItem from '@/components/ListItem';
import { connect } from "@/react-redux";
import { listAction } from "../store/action";
import { useEffect } from "react";

function List ({ productList, listAction }) {
  // const productList = useProductList();

  useEffect(() => {
    if (!productList.length) {
      listAction();
    }
  }, []);

  return (
    <div>
      {
        productList.map(product => (
          <Link to={ '/detail/' + product.id } key={ product.id }>
            <ListItem data={ product } />
          </Link>
        ))
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  // 这个组件所需要redux store中的什么状态

  return {
    productList: state.product.list
  }
}

const mapDispatchToProps = {
  listAction
}

export default connect(mapStateToProps, mapDispatchToProps)(List);