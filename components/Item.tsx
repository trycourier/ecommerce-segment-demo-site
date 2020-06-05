import Button from "./Button";
import { useRecoilState } from "recoil";
import { cartState } from "../utils/states";
import Link from "next/link";
import Router from "next/router";
import { getProduct } from "../utils/track";

const Item = ({ idx, src, title, price = 10, item }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const productClicked = (e) => {
    e.preventDefault();
    window.analytics.track("Product Clicked", getProduct(item));
    Router.push("/product/[id]", `/product/${idx}`);
  };

  const buttonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.analytics.track("Product Added", {
      ...getProduct(item),
      quantity: 1,
    });
    setCart({ ...cart, [idx]: item });
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
            <Button full inverse onClick={buttonClick}>
              Add to Bag - ${price}
            </Button>
          </div>
        </div>
      </a>
    </Link>
  );
};

export { Item };
