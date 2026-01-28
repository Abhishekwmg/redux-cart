import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./store/cartSlice";

export default function Items() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <ol>
      {cartItems.map((item) => {
        return (
          <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
            <button onClick={() => dispatch(addItem(item))}>Add</button>
          </li>
        );
      })}
    </ol>
  );
}
