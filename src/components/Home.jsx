import { useEffect } from "react";
import { connect } from "react-redux";

import { BASE_URL } from "../api/fakeStore";
import { setProducts } from "../redux/actions";
import { FetchApi } from "./FetchApi";
import ProductsList from "./ProductList";
import "../styles/Home.css";

const Home = ({ products, setProducts }) => {
  useEffect(() => {
    async function fetchData() {
      const respons = await FetchApi(BASE_URL, "products");
      setProducts(respons.data);
    }
    fetchData();
  }, []);
  return (
    <div className="products_container">
      {products.map((item) => (
        <ProductsList key={item.id} data={item} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return state.products;
};
const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (props) => dispatch(setProducts(props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
