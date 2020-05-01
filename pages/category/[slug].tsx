import { Item } from "../../components/Item";
import AppLayout from "../../components/layouts/AppLayout";
import { useRouter } from "next/router";

const ITEMS = [0, 1, 2, 3, 4, 5, 6, 7, 9];

const CategoryPage = () => {
  const router = useRouter();

  return (
    <AppLayout>
      <h1 className="my-8 text-2xl font-semibold capitalize">
        Shop all {router?.query?.slug}
      </h1>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {ITEMS.map(() => (
          <Item />
        ))}
      </div>
    </AppLayout>
  );
};

export default CategoryPage;
