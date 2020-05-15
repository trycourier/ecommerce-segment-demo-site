import Button from "./Button";
import { useRecoilState } from "recoil";
import { cartState } from "../utils/states";

const Item = ({ idx, src, title, price = 10, item }) => {
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <div className="overflow-hidden bg-gray-100 rounded">
      <div className="relative w-full" style={{ paddingTop: `100%` }}>
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("${src}")` }}
        />
      </div>
      <div className="p-6">
        <h6 className="mb-4 font-semibold">{title}</h6>
        <Button full inverse onClick={() => setCart({ ...cart, [idx]: item })}>
          Add to Bag - ${price}
        </Button>
      </div>
    </div>
  );
};

export { Item };
