import "../styles/ProductList.css";

const ProductsList = (data) => {
  const { id, image, title, price, category } = data.data;
  console.log(title);
  return (
    <div className="product_card">
      <img className="image" src={image} alt={title} width={100} />
      <div className="title">{title}</div>
      <div className="price">$ {price}</div>
      <div className="category">{category}</div>
    </div>
  );
};
export default ProductsList;
