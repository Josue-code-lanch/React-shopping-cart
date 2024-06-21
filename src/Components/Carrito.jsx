import CartIcon from "../Icons/CartIcon";
import "../Styles/Carrito.css";

export default function Carrito({ cartItems }) {
  return (
    <div className="cart">
      <CartIcon />
      <h2 className="cart-title">Carrito</h2>
    </div>
  );
}
