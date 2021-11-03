import fetch from "isomorphic-unfetch";
import { config } from "../../utils/config";

const includeList = "name,email,last_brand_viewed,last_order_date,last_order_number,last_product_added,last_product_image,last_product_viewed,most_frequent_product_category_purchased,number_of_orders_completed_all_time,product_view_counts,unique_list_products_purchased,upt_number_of_products_purchased"

export const getUser = async (anonymous_id, type = "traits") => {
  const response = await fetch(
    `https://profiles.segment.com/v1/spaces/${config.api.PERSONAS_SPACE_ID}/collections/users/profiles/anonymous_id:${anonymous_id}/${type}?include=${includeList}&limit=50`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${config.api.PERSONAS_API_KEY}:`).toString("base64"),
      },
    }
  );
  const user = await response.json();
  return user;
};

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).end(); // method not allowed
    return;
  }

  const { anonID } = req.body;
  const user = await getUser(anonID);
  res.status(200).send({ user });
};
