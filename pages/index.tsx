import { config } from "../utils/config";
import AppLayout from "../components/layouts/AppLayout";
import Button from "../components/Button";
import { addToCart } from "../utils/cart";
import { CategorySection } from "../components/CategorySection";

const HERO_IMAGE = "https://source.unsplash.com/user/harpersunday/1600x900";

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
        title="Skin first."
        description="Our skincare essentials are designed to make you look and feel your glowy, dewy best before you even think about makeup."
        category="skincare"
      />
      <CategorySection
        title="Makeup second."
        description="Products that give you options but never cover you up, turn you into someone else, or over-complicate your routine. Because beauty should make you feel good."
        category="makeup"
      />
    </AppLayout>
  );
};

export default IndexPage;
