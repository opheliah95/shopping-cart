import { useGetAllProductsQuery } from "../features/productsAPI";
import { useSelector } from "react-redux";
const Home = () => {
  const { items, status } = useSelector((state) => state.products);
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("data is: ", data);
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
                  <span className="price">£{product.price}</span>
                </div>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
