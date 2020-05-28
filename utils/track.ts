import _ from "lodash";

export const getProduct = (item) => ({
  product_id: item.obejctID,
  name: item.name,
  price: _.get(item, "price.value", 0),
  image_url: _.get(item, "images[0].url"),
  brand: item.brand,
  sku: item.sku,
  category: item.category,
});
