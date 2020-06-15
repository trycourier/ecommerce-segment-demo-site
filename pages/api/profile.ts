import { config } from "../../utils/config";

export const getUser = async (anonymous_id, type = "traits") => {
  const response = await fetch(
    `https://profiles.segment.com/v1/spaces/${config.api.PERSONAS_SPACE_ID}/collections/users/profiles/anonymous_id:${anonymous_id}/${type}`,
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
