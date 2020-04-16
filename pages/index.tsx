import { config } from "../utils/config";
import AppLayout from "../components/layouts/AppLayout";
import Button from "../components/Button";
import { addToCart } from "../utils/cart";

const ITEMS = [
  {
    name: "The Skincare Set",
    description: "daily skin essentials",
    image:
      "https://static-assets.glossier.com/production/spree/images/attachments/000/003/684/portrait_normal/skincaresetcompressed.gif?1557169506=&w=600&q=80 600w",
    price: 40,
  },
];

const IndexPage = () => {
  return (
    <AppLayout>
      <div>
        <h2 className="text-xl my-8">Beauty inspired by real life</h2>
        <div className="flex mb-16">
          <p className="flex-1">
            Glossier is a new approach to beauty. It’s about fun and freedom and
            being OK with yourself today. We make intuitive, uncomplicated
            products designed to live with you.
          </p>
          <Button>Shop All</Button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item) => {
            return (
              <div className="rounded overflow-hidden border">
                <img src={item.image} />
                <div className="p-4">{item.name}</div>
                <Button onClick={() => addToCart(item)}>Add to bag</Button>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default IndexPage;
