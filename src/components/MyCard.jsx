import { connect } from "react-redux";
<<<<<<< HEAD
import { decreaseProduct, addToCard, removeFromCard } from "../redux/actions";
import "../styles/MyCard.css";

export const MyCard = ({
  card,
  addToCard,
  decreaseProduct,
  removeFromCard,
}) => {
=======
import { removeFromCard, addToCard } from "../redux/actions";
import "../styles/MyCard.css";

export const MyCard = ({ card, addToCard, removeFromCard }) => {
>>>>>>> db11362f246b11b06d6bffc98fff8c40c0e32057
  return (
    <div className="product_row">
      <table>
        <thead>
          <tr>
            <th className="image_th">Image</th>
            <th className="title_th">Title</th>
            <th className="remove_th">increase</th>
            <th className="quantity_th">Quantity</th>
            <th className="remove_th">decrease</th>
            <th className="remove_th">Remove</th>
          </tr>
        </thead>
        {card.map((item, index) => {
          const { image, title, count } = item;
          return (
            <tbody key={index}>
              <tr>
                <td>
                  <img src={image} alt={title} width={100} />
                </td>
                <td>{title}</td>
                <td>
                  <button
                    className="quantity_btn"
                    onClick={() => addToCard(item)}
                  >
                    +
                  </button>
                </td>
                <td>{count}</td>
                <td>
                  <button
                    className="quantity_btn"
<<<<<<< HEAD
                    onClick={() => decreaseProduct(item)}
=======
                    onClick={() => removeFromCard(item)}
>>>>>>> db11362f246b11b06d6bffc98fff8c40c0e32057
                  >
                    -
                  </button>
                </td>
                <td>
                  <button
                    className="remove_btn"
                    onClick={() => removeFromCard(item)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
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
<<<<<<< HEAD
    decreaseProduct: (props) => dispatch(decreaseProduct(props)),
=======
>>>>>>> db11362f246b11b06d6bffc98fff8c40c0e32057
    removeFromCard: (props) => dispatch(removeFromCard(props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCard);
