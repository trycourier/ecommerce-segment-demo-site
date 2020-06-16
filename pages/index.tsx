import AppLayout from "../components/layouts/AppLayout";
import Button from "../components/Button";
import { CategorySection } from "../components/CategorySection";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80";

const IndexPage = () => {
  return (
    <AppLayout>
      <div className="flex flex-col w-full pb-4 border-b md:flex-row">
        <div className="flex-1 w-full md:w-3/4">
          <div
            className="relative w-full"
            style={{ paddingTop: `${(17 / 30) * 100}%` }}
          >
            <div
              className="absolute inset-0 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${HERO_IMAGE})` }}
            />
          </div>
        </div>
        <div className="self-center flex-shrink-0 w-full py-4 text-center  md:ml-8 md:w-1/4 md:text-left">
          <h2 className="text-5xl font-semibold leading-none">
            New! Product is here
          </h2>
          <p className="my-4 text-sm">
            Our new product is here, get it before it becomes sold out!
          </p>
          <Button full>Shop Now</Button>
        </div>
      </div>
      <CategorySection
        title="Nike?"
        category="shoes"
        description="Just do it."
        facets={{ brand: "Nike", type: "shoes" }}
      />
      <CategorySection
        title="Or adidas?"
        category="shoes"
        description="Impossible is nothing/"
        facets={{ brand: "adidas", type: "shoes" }}
      />
    </AppLayout>
  );
};

export default IndexPage;
