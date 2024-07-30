import { Link } from "react-router-dom";
import "../styles/ProductList.css";

const ProductsList = (data) => {
  const { id, image, title, price, category } = data.data;
  return (
    <div className="product_card">
      <Link to={`/product/${id}`}>
        <img className="image" src={image} alt={title} width={100} />
      </Link>
      <div className="title">{title}</div>
      <div className="price">$ {price}</div>
      <div className="category">{category}</div>
    </div>
  );
};
export default ProductsList;
