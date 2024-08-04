import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/ProductList.css";
import { addToCard } from "../redux/actions";

const ProductList = (data) => {
  const { card, addToCard } = data;
  const { id, image, title, price, category } = data.data;
  const isInBag = card.some((item) => item.id === id);
  return (
    <div className="product_card">
      <Link to={`/product/${id}`}>
        <img className="image" src={image} alt={title} width={100} />
      </Link>
      <div className="title">{title}</div>
      <div className="price">$ {price}</div>
      <button
        onClick={() => addToCard(data.data)}
        className={!isInBag ? "buy" : "remove"}
      >
        {!isInBag ? "ADD" : "REMOVE"}
      </button>
      <div className="category">{category}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCard: (props) => dispatch(addToCard(props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
