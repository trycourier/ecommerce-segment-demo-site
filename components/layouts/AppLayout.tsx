import Header from "../Header";
import { useRecoilState } from "recoil";
import { cartState, orderState } from "../../utils/states";
import _ from "lodash";
import Button from "../Button";
import { Slider } from "./Slider";
import { useState } from "react";
import { X } from "react-feather";
import { useRouter } from "next/router";
import { getProduct } from "../../utils/track";
import { nanoid } from "nanoid";

interface Props {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const router = useRouter();
  const [cart, setCart] = useRecoilState(cartState);
  const [order, setOrder] = useRecoilState(orderState);
  const [open, setOpen] = useState(false);

  const cartArr = Object.keys(cart).map((key) => cart[key]);

  const onCartClick = () => {
    const products = Object.values(cart).map((p) => getProduct(p));
    window.analytics.track("Cart Viewed", { products });
    setOpen(true);
  };

  const goToCheckout = () => {
    const order_id = nanoid();
    const products = Object.values(cart).map((p) => getProduct(p));
    const value = products.reduce((r, n) => r + n.price, 0);

    const order = { order_id, products, value, currency: "usd" };
    setOrder(order);
    window.analytics.track("Checkout Started", order);
    router.push("/checkout");
  };

  return (
    <div>
      <Header onCartClick={onCartClick} />
      <div
        className="max-w-screen-xl mx-auto mx-0 px-4"
        style={{ marginTop: "100px" }}
      >
        {children}
      </div>
      <Slider open={open}>
        <div
          className="bg-white fixed right-0 top-0 h-full border-l z-20 flex flex-col"
          style={{ width: "300px" }}
        >
          <div className="text-2xl font-semibold my-2 text-center relative">
            Cart
            <div
              className="absolute left-0 top-0 ml-2 mt-2 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <X color="gray" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {cartArr.map((item) => (
              <div className="flex border-b px-4 py-2">
                <div className="flex-shrink-0 mr-2" style={{ width: "50px" }}>
                  <img src={_.get(item, "images[0].url")} />
                </div>
                <div className="flex-1">
                  <div className="text-sm">
                    {item.brand} {item.name}
                  </div>
                  <div className="font-bold">${item.price.value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="py-2 px-4">
            <Button full onClick={goToCheckout}>
              Checkout
            </Button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AppLayout;
