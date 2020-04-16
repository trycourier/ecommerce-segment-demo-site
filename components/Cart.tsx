import { ShoppingCart } from "react-feather";
import { useState } from "react";
import { useInterval } from "./useInterval";
import { getCart } from "../utils/cart";

const Cart = () => {
  let [cart, setCart] = useState({});

  // update cart every 200 mil
  useInterval(() => {
    setCart(getCart());
  }, 200);

  return (
    <div>
      <ShoppingCart />
      {Object.keys(cart).reduce((val, key) => {
        val = val + cart[key];
        return val;
      }, 0)}
    </div>
  );
};

export default Cart;
