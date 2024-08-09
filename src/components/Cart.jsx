import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Arrow from "./Icons/Arrow";

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is currently Empty</p>
                    <div className="start-shopping">
                        <Link to="/">
                            <span>Start Shopping</span>
                            <Arrow />
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="cart-display">
                    <div className="titles">
                        <h3 className="product-title">Product</h3>
                        <h3 className="price">Price</h3>
                        <h3 className="quantity">Quantity</h3>
                        <h3 className="total">Total</h3>
                    </div>
                    <div className="cart-items">
                        {
                            cart.cartItems?.map(
                                (item) => (
                                    <div className="cart-item" key={item.id}>
                                        <div className="cart-product">
                                            <div className="cart-image">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="cart-description">
                                                <h3>{item.name}</h3>
                                                <p>{item.desc}</p>
                                                <button>Remove</button>
                                            </div>
                                        </div>
                                        <div className="cart-product-price">
                                            £ {item.price}
                                        </div>
                                        <div className="cart-product-quantity">{item.cartQuantity}</div>
                                        <div className="cart-total-price">{parseFloat(item.price) * item.cartQuantity}</div>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className="cart-summary">
                        <button className="clear-cart">Clear Cart</button>
                        <div className="cart-checkout">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span className="amount">£ {cart.cartTotalAmount}</span>
                            </div>
                            <p>Tax and shipping calculated at checkout</p>
                            <button className="checkout">Check Out</button>
                        </div>
                    </div>
                    <div className="continue-shopping">
                        <Link to="/">
                            <span>Continue Shopping</span>
                            <Arrow />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
