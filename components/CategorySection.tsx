import Button from "./Button";
import { Item } from "./Item";

const CategorySection = ({ title, description, category }) => {
  return (
    <div className="w-full py-16 border-b">
      <div className="mb-16 text-center">
        <h3 className="text-4xl font-semibold">{title}</h3>
        <p className="max-w-lg mx-auto my-4 font-light">{description}</p>
        <Button>Shop All {category}</Button>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map(() => (
            <Item />
          ))}
        </div>
      </div>
    </div>
  );
};

export { CategorySection };
