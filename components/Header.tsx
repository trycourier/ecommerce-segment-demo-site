import { Search } from "react-feather";
import Link from "next/link";
import Cart from "./Cart";

const NAV_ITEMS = [
  { name: "Shop All", value: "all" },
  { name: "Men's", value: "men" },
  { name: "Women's", value: "women" },
  { name: "Clothing", value: "clothing" },
];

const Header = ({ onCartClick }) => {
  return (
    <div
      className="border-b fixed top-0 left-0 right-0 z-10 bg-white"
      style={{ height: "100px" }}
    >
      <div className="max-w-screen-xl px-4 mx-0 mx-auto">
        <div className="flex items-center justify-between pt-4 pb-2">
          <div>{/* <Search /> */}</div>
          <Link href="/">
            <div className="italic font-semibold cursor-pointer">
              Ecommerce.
            </div>
          </Link>
          <div className="cursor-pointer">
            <Cart onClick={onCartClick} />
          </div>
        </div>
        <div className="text-center">
          <ul>
            {NAV_ITEMS.map(({ name, value }) => (
              <Link
                href="/category/[slug]"
                as={`/category/${value.toLowerCase()}`}
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
