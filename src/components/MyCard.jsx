import { connect } from "react-redux";
import { removeFromCard, addToCard } from "../redux/actions";
import "../styles/MyCard.css";

export const MyCard = ({ card, addToCard, removeFromCard }) => {
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
        {card.map((item) => {
          const { image, title, id, count } = item;
          return (
            <tbody key={id}>
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
                    onClick={() => removeFromCard(item)}
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
    removeFromCard: (props) => dispatch(removeFromCard(props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCard);
