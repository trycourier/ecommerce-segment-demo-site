import { connectHits } from "react-instantsearch-dom";

const HitsComponent = ({ hits }) => (
  <ol>
    {hits.map((hit) => (
      <li className="bg-orange-200" key={hit.objectID}>
        {hit.name}
      </li>
    ))}
  </ol>
);

export const Hits = connectHits(HitsComponent);
