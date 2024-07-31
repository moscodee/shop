import "../styles/Header.css";
import card from "../img/card.svg";

const Header = () => {
  return (
    <div className="header_container">
      <div className="logo">FakeStore</div>
      <div className="card">
        <img className="card" src={card} />
      </div>
    </div>
  );
};

export default Header;
