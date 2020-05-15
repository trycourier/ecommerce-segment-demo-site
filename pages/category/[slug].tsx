import AppLayout from "../../components/layouts/AppLayout";
import { useRouter } from "next/router";
import { InstantSearch, connectRefinementList } from "react-instantsearch-dom";
import { searchClient } from "../../utils/algolia";
import { RefinementList, Hits } from "../../components/Hits";

const CategoryPage = () => {
  const router = useRouter();
  const slug = router.query.slug;
  let refines = {};
  if (slug === "men") refines = { category: "men", type: "shoes" };
  if (slug === "women") refines = { category: "women", type: "shoes" };
  if (slug === "clothing") refines = { type: "clothing" };

  const keys = Object.keys(refines);

  return (
    <AppLayout>
      <h1 className="my-8 text-2xl font-semibold capitalize">
        Shop all {slug !== "all" && slug}
      </h1>
      <InstantSearch searchClient={searchClient} indexName="dev_ecommerce">
        {keys.map((key) => (
          <RefinementList attribute={key} defaultRefinement={[refines[key]]} />
        ))}
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <Hits />
        </div>
      </InstantSearch>
    </AppLayout>
  );
};

export default CategoryPage;
