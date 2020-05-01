import Button from "./Button";

const Item = ({
  src = "https://static-assets.glossier.com/production/spree/images/attachments/000/005/228/portrait_normal/HandCream_ShopGrid_1-main.jpg?1587494542=&w=600&q=80 600w",
  title = "Hand Cream",
  price = 10,
}) => {
  return (
    <div className="overflow-hidden bg-gray-100 rounded">
      <div className="relative w-full" style={{ paddingTop: `133%` }}>
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url("${src}")` }}
        />
      </div>
      <div className="p-6">
        <h6 className="mb-4 font-semibold">Hand Cream</h6>
        <Button full inverse>
          Add to Bag - ${price}
        </Button>
      </div>
    </div>
  );
};

export { Item };
