import { InstantSearch, SearchBox } from "react-instantsearch-dom";
import { Hits } from "./Hits";
import { searchClient } from "../../utils/algolia";

const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="dev_ecommerce">
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
};

export { Search };
