import { ShoppingCart } from "react-feather";
import { cartState } from "../utils/states";
import { useRecoilState } from "recoil";

const Cart = ({ onClick }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const num = Object.keys(cart).length;

  return (
    <div
      className="relative flex items-center justify-center"
      onClick={onClick}
    >
      <ShoppingCart size={30} />
      <span
        className="text-xs absolute"
        style={{ fontSize: "10px", marginLeft: "3px", marginTop: "-1px" }}
      >
        {num}
      </span>
    </div>
  );
};

export default Cart;
