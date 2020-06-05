import { algolia } from "../../utils/algolia";
import { config } from "../../utils/config";
import _ from "lodash";

const getUser = async (anonymous_id) => {
  const response = await fetch(
    `https://profiles.segment.com/v1/spaces/${config.api.PERSONAS_SPACE_ID}/collections/users/profiles/anonymous_id:${anonymous_id}/traits`,
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

  const { requests, anonID } = req.body;

  // API -> email -> Profile API -> Computed/SQL -> Optional Filters -> Algolia -> Personalized results

  // personalize
  const user = await getUser(anonID);
  let { last_brand_viewed } = _.get(user, "traits", {});

  // modify request with optional filters
  requests[0].params.optionalFilters = [`brand:${last_brand_viewed}`];

  const results = await algolia.search(requests);
  res.status(200).send(results);
};
