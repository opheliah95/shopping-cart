import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsAPI";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate} from "react-router";

const Home = () => {
  const { items, status } = useSelector((state) => state.products);
  const { data, error, isLoading } = useGetAllProductsQuery();
  const navigate = useNavigate();
  // add dispatch
  const dispatch = useDispatch();
  const handleAddToCart = (product) =>{
      dispatch(addToCart(product));
      // update quantity
      navigate("/cart")
  }

  // home page
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred {error.data} </p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span />
                  <span className="price">£ {product.price}</span>
                </div>
                <button onClick={()=> handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
