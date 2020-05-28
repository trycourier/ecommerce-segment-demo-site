import AppLayout from "../../components/layouts/AppLayout";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import _ from "lodash";
import { algolia } from "../../utils/algolia";
import { useState, useEffect } from "react";
import Button from "../../components/Button";
import { cartState } from "../../utils/states";
import { getProduct } from "../../utils/track";

const CategoryPage = ({ product }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const idx = _.get(product, "objectID");
  const name = _.get(product, "name");
  // const category = _.get(product, "category");
  const brand = _.get(product, "brand");
  const image = _.get(product, "images[0].url");
  const price = _.get(product, "price.value");
  const sku = _.get(product, "sku");
  const variants = _.get(product, "variantOptions", []).map((variant) =>
    _.get(variant, "images[0].url")
  );

  useEffect(() => {
    window.analytics.track("Product Viewed", getProduct(product));
  }, []);

  const buttonClick = (e) => {
    window.analytics.track("Product Added", {
      ...getProduct(product),
      quantity: 1,
    });
    setCart({ ...cart, [idx]: product });
  };

  return (
    <AppLayout>
      <div className="max-w-lg w-full mx-auto my-16">
        <div className="mb-8">
          <img
            src={image}
            className="w-full mx-auto"
            style={{ maxWidth: "300px" }}
          />
          <div className="flex flex-wrap mt-4 justify-center">
            {variants.map((v) => (
              <img src={v} className="mr-4" style={{ width: "50px" }} />
            ))}
          </div>
        </div>
        <div className="text-center">
          <div>
            <div className="text-3xl font-semibold">{name}</div>
            <div className="text-lg font-bold mb-3">{brand}</div>
          </div>
          <div className="text-gray-500 text-sm mb-3">{sku}</div>
          <div className="text-4xl mb-3">
            {price !== undefined && `$${price.toFixed(2)}`}
          </div>
          <Button onClick={buttonClick}>Add to Bag - ${price}</Button>
        </div>
      </div>
    </AppLayout>
  );
};

CategoryPage.getInitialProps = async (ctx) => {
  const id = ctx.query.id;
  const index = algolia.initIndex("dev_ecommerce");
  // @ts-ignore
  const product = await index.getObject(id);
  return { product };
};

export default CategoryPage;
