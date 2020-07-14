import Button from "./Button";
import { InstantSearch, Configure } from "react-instantsearch-dom";
import { RefinementList, Hits } from "./Hits";
import { searchClient } from "../utils/algolia";

const CategorySection = ({ facets = {}, category, title, description }) => {
  const keys = Object.keys(facets);
  return (
    <div className="w-full py-16 border-b">
      <div className="mb-16 text-center">
        <h3 className="text-4xl font-semibold">{title}</h3>
        <p className="max-w-lg mx-auto my-4 font-light">{description}</p>
        <Button>Shop All {category}</Button>
      </div>
      <div className="max-w-4xl mx-auto">
        <InstantSearch searchClient={searchClient} indexName="dev_ecommerce">
          <Configure hitsPerPage={6} />
          {keys.map((key) => (
            <RefinementList
              key={key}
              attribute={key}
              defaultRefinement={[facets[key]]}
            />
          ))}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            <Hits />
          </div>
        </InstantSearch>
      </div>
    </div>
  );
};

export { CategorySection };
