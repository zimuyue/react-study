import { useParams } from "react-router";
import { useProductDetail } from "../hooks";
import { connect } from "@/react-redux";
import { detailAction } from "../store/action";
import { useEffect } from "react";

function Detail ({ productDetail, detailAction }) {
  const { id } = useParams();
  // const productDetail = useProductDetail(id);
  
  useEffect(() => {
    if (!Object.keys(productDetail).length || productDetail.id != id) {
      detailAction(id);
    }
  }, []);


  return (
    <div>
      <img src={ productDetail.image } style={{ width: 300 }} />
      <h1>{ productDetail.name }</h1>
      <p>{ productDetail.intro }</p>
      <p>{ productDetail.price }</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    productDetail: state.product.detail
  }
}

const mapDispatchToProps = {
  detailAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);