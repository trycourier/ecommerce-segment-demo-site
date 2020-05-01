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
    <div className="relative flex items-center justify-center">
      <ShoppingCart size={30} />
      <span
        className="text-xs absolute"
        style={{ fontSize: "10px", marginLeft: "3px", marginTop: "-1px" }}
      >
        {Object.keys(cart).reduce((val, key) => {
          val = val + cart[key];
          return val;
        }, 0)}
      </span>
    </div>
  );
};

export default Cart;
