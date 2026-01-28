import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./store/cartSlice";

export default function Header() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const cartItem = useSelector((state) => state.cart.cartItems);

  const [showCart, setShowCart] = useState(false);

  function handleShowCart() {
    setShowCart((prevCart) => !prevCart);
  }

  return (
    <header>
      <button onClick={handleShowCart}>
        <ShoppingCart size={20} />
        <span>{cartQuantity}</span>
      </button>
      {showCart && (
        <div style={{ background: "green" }}>
          {cartItem.map((cart) => {
            return (
              <div key={cart.id}>
                <p>{cart.title}</p>
                <p>{cart.price}</p>
                <p>{}</p>
                <button>+</button>
                <button onClick={() => dispatch(removeItem(cartItem.id))}>
                  -
                </button>
              </div>
            );
          })}
        </div>
      )}
    </header>
  );
}
