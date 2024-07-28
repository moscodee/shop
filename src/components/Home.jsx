import { useEffect } from "react";
import { connect } from "react-redux";

import { BASE_URL } from "../api/fakeStore";
import { setProducts } from "../redux/actions";
import { FetchApi } from "./FetchApi";

const Home = ({ products, setProducts }) => {
  console.log(products);
  useEffect(() => {
    async function fetchData() {
      const respons = await FetchApi(BASE_URL, "products");
      setProducts(respons.data);
    }
    fetchData();
  }, []);
  return <div>home</div>;
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
