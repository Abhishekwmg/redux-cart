import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Header() {
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
              <>
                <p>{cart.title}</p>
                <p>{cart.price}</p>
                <p>{}</p>
                <button>+</button>
                <button>-</button>
              </>
            );
          })}
        </div>
      )}
    </header>
  );
}
