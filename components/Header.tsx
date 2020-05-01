import { Search } from "react-feather";
import Link from "next/link";
import Cart from "./Cart";

const NAV_ITEMS = [
  { name: "Shop All" },
  { name: "Skincare" },
  { name: "Makeup" },
  { name: "Body" },
  { name: "Fragrance" },
];

const Header = () => {
  const [all, ...rest] = NAV_ITEMS;

  return (
    <div className="border-b">
      <div className="max-w-screen-xl px-4 mx-0 mx-auto">
        <div className="flex items-center justify-between pt-4 pb-2">
          <div>
            <Search />
          </div>
          <Link href="/">
            <div className="italic font-semibold cursor-pointer">
              Ecommerce.
            </div>
          </Link>
          <div>
            <Cart />
          </div>
        </div>
        <div className="text-center">
          <ul>
            <Link href="/products">
              <li className="inline-block p-3 text-sm font-semibold cursor-pointer hover:text-blue-400">
                {all.name}
              </li>
            </Link>
            {rest.map(({ name }) => (
              <Link
                href="/category/[slug]"
                as={`/category/${name.toLowerCase()}`}
              >
                <li className="inline-block p-3 text-sm font-semibold cursor-pointer hover:text-blue-400">
                  {name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
