import { useEffect } from "react";
import { connect } from "react-redux";

import { BASE_URL } from "../api/fakeStore";
import { addToCard, setProducts } from "../redux/actions";
import FetchApi from "./FetchApi";
import ProductList from "./ProductList";
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
      {products.products.map((item) => (
        <ProductList
          key={item.id}
          data={item}
          // count={count}
          addToCard={addToCard}
        />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { products: state.products, count: state.card };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (props) => dispatch(setProducts(props)),
    addToCard: (props) => dispatch(addToCard(props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
