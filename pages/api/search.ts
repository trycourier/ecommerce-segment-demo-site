import { algolia } from "../../utils/algolia";
import { config } from "../../utils/config";

const getUser = async (email) => {
  const response = await fetch(
    `https://profiles.segment.com/v1/spaces/${config.api.PERSONAS_SPACE_ID}/collections/users/profiles/email:${email}/traits`,
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
  // console.log(user);
  return user;
};

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).end(); // method not allowed
    return;
  }

  const { requests, email } = req.body;

  // API -> email -> Profile API -> Computed/SQL -> Optional Filters -> Algolia -> Personalized results

  // personalize
  if (email) {
    const user = await getUser(email);

    let categories = user?.traits?.affinity_category || []; // ["Cell Phones", "Audio"]
    // @TODO: delete later
    if (process.env.NODE_ENV === "development") {
      categories = ["Cell Phones", "Audio"];
    }
    // modify request with optional filters
    requests[0].params.optionalFilters = categories.map(
      (m) => `categories:${m}`
    );
  }

  const results = await algolia.search(requests);
  res.status(200).send(results);
};
