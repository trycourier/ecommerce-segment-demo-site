import Button from "./Button";
import { useRecoilState } from "recoil";
import { cartState } from "../utils/states";
import Link from "next/link";
import Router from "next/router";
import { getProduct } from "../utils/track";

const Item = ({ idx, src, title, price = 10, item, inCart = false }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const productClicked = (e) => {
    e.preventDefault();
    window.analytics.track("Product Clicked", getProduct(item));
    Router.push("/product/[id]", `/product/${idx}`);
  };

  const buttonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const trackProp = { ...getProduct(item), quantity: 1 };
    if (!inCart) {
      window.analytics.track("Product Added", trackProp);
      setCart({ ...cart, [idx]: item });
    } else {
      window.analytics.track("Product Removed", trackProp);
      let cartClone = { ...cart };
      delete cartClone[idx];
      setCart(cartClone);
    }
  };

  return (
    <Link href="/product/[id]" as={`/product/${idx}`}>
      <a className="cursor-pointer" onClick={(e) => productClicked(e)}>
        <div className="overflow-hidden bg-gray-100 rounded">
          <div className="relative w-full" style={{ paddingTop: `100%` }}>
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url("${src}")` }}
            />
          </div>
          <div className="p-6">
            <h6 className="mb-4 font-semibold">{title}</h6>
            <Button full inverse disabled={inCart} onClick={buttonClick}>
              {inCart ? `Remove from Cart` : `Add to Cart - ${price}`}
            </Button>
          </div>
        </div>
      </a>
    </Link>
  );
};

export { Item };
