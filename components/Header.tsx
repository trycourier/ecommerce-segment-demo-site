import Cart from "./Cart";

const NAV_ITEMS = [
  { name: "Shop All" },
  { name: "Skincare" },
  { name: "Makeup" },
  { name: "Body" },
  { name: "Fragrance" },
];

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <div>left</div>
        <div>
          <img className="h-8" src="images/logo.png" />
        </div>
        <div>
          <Cart />
        </div>
      </div>
      <div className="text-center">
        <ul>
          {NAV_ITEMS.map(({ name }) => (
            <li className="inline-block p-3 text-sm font-semibold hover:text-blue-400 cursor-pointer">
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
