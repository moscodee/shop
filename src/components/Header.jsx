import { Link } from "react-router-dom";
import card from "../img/card.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header_container">
      <div className="l_col">
        <div className="logo">FakeStore</div>
        <Link to="/" className="home">
          Home
        </Link>
      </div>
      <div className="card">
        <Link to="/mycard">
          <img className="card" src={card} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
