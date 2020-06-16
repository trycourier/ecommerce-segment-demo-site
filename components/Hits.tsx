import { connectHits, connectRefinementList } from "react-instantsearch-dom";
import { Item } from "./Item";
import _ from "lodash";
import { useRecoilState } from "recoil";
import { cartState } from "../utils/states";

export const Hits = connectHits(({ hits }) => {
  const [cart] = useRecoilState(cartState);
  const objs = Object.keys(cart || {});
  console.log("cart", cart);

  return hits.map((hit) => (
    <Item
      idx={hit.objectID}
      title={hit.name}
      price={hit.price.value}
      src={_.get(hit, "images[0].url")}
      item={hit}
      inCart={objs.includes(hit.objectID)}
    />
  ));
});

export const RefinementList = connectRefinementList(() => null);
