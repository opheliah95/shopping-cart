import Bag from "./Icons/Bag";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">
          <h2>Onlineshop</h2>
        </Link>
        <Link to="/cart">
          <div className="nav-bag">
            <Bag />
            <span className="bag-quantity">
            <span>3</span>
          </span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
