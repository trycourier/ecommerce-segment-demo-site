import { algolia } from "../../utils/algolia";
import { config } from "../../utils/config";
import _ from "lodash";
import { getUser } from "./profile";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).end(); // method not allowed
    return;
  }

  const { requests, anonID } = req.body;

  // API -> email -> Profile API -> Computed/SQL -> Optional Filters -> Algolia -> Personalized results

  // personalize
  if (!!anonID && anonID != "null") {
    console.log("anonID: " + anonID);
    const user = await getUser(anonID);
    console.log(user);
    let { last_brand_viewed } = _.get(user, "traits", {});

    // modify request with optional filters
    requests[0].params.optionalFilters = [`brand:${last_brand_viewed}`];
  }

  const results = await algolia.search(requests);
  res.status(200).send(results);
};
