import Bag from "./Icons/Bag"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">
            <h2>Onlineshop</h2>
        </Link>
        <div className="nav-bag">
         <Bag/>
        </div>
        <span className="bag-quantity">
            <span>3</span>
        </span>
      </nav>
    </>
  );
};

export default Navbar;
