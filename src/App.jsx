import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import "./styles/App.css";
import ProductDetail from "./components/ProductDetail";
import MyCard from "./components/MyCard";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/mycard" element={<MyCard />} />
      </Routes>
    </Router>
  );
};

export default App;
