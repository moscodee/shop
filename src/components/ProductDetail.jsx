import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";

import FetchApi from "./FetchApi";
import { BASE_URL } from "../api/fakeStore";
import { selectedProduct, removeSelectedProduct } from "../redux/actions";
import CSS from "../styles/ProductDetail.module.css";

const ProductDetail = ({ product, selectedProduct, removeSelectedProduct }) => {
  const { productId } = useParams();
  const { title, price, description, image, rating, category } = product;

  useEffect(() => {
    async function fetchData() {
      const respons = await FetchApi(BASE_URL, `products/${productId}`);
      selectedProduct(respons.data);
    }
    if (productId && productId !== "") fetchData();
    removeSelectedProduct();
  }, []);
  return (
    <div className={CSS.detail_container}>
      {Object.keys(product).length === 0 ? (
        <div className={CSS.loading}>Loading...</div>
      ) : (
        <div className={CSS.detail_card}>
          <div className={CSS.l_col}>
            <img className={CSS.image} src={image} alt={title} width={100} />
          </div>
          <div className={CSS.r_col}>
            <div className={CSS.title}>{title}</div>
            <div className={CSS.description}>{description}</div>
            {/* <div>{rating.rate}</div> */}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectedProduct: (props) => dispatch(selectedProduct(props)),
    removeSelectedProduct: () => dispatch(removeSelectedProduct()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
