import { connectHits, connectRefinementList } from "react-instantsearch-dom";
import { Item } from "./Item";
import _ from "lodash";

export const Hits = connectHits(({ hits }) => {
  return hits.map((hit) => (
    <Item
      idx={hit.objectID}
      title={hit.name}
      price={hit.price.value}
      src={_.get(hit, "images[0].url")}
      item={hit}
    />
  ));
});

export const RefinementList = connectRefinementList(() => null);
