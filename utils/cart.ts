// add item to cart
export const addToCart = (item) => {
  let items: any = window.localStorage.getItem("cart");
  items = !!items ? JSON.parse(items) : {};
  const key = JSON.stringify(item);
  items[key] = items[key] ? items[key] + 1 : 1;
  window.localStorage.setItem("cart", JSON.stringify(items));
};

export const removeFromCart = () => {
  /* TODO */
};

// removes all items from the cart
export const removeAllFromCart = () => {
  window.localStorage.removeItem("cart");
};

export const getCart = () => {
  let cart = window.localStorage.getItem("cart");
  if (cart) return JSON.parse(cart);
  return {};
};
