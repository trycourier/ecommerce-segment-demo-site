import { Search } from "react-feather";
import Link from "next/link";
import Cart from "./Cart";
// import Courier Inbox
import { config } from "../utils/config";
import { CourierProvider } from "@trycourier/react-provider";
import { Inbox } from "@trycourier/react-inbox";

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
            <CourierProvider userId="CourierTest" clientKey={config.api.COURIER_CLIENT_KEY}>
              <Inbox />
            </CourierProvider>
            <Cart onClick={onCartClick} />
          </div>
        </div>
        <div className="text-center">
          <ul>
            {NAV_ITEMS.map(({ name, value }) => (
              <Link
                key={value}
                href="/category/[slug]"
                as={`/category/${value.toLowerCase()}`}
              >
                <a>
                  <li className="inline-block p-3 text-sm font-semibold cursor-pointer hover:text-blue-400">
                    {name}
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
