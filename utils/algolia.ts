import algoliasearch from "algoliasearch";
import fetch from "isomorphic-unfetch";

export const algolia = algoliasearch(
  "64RBY11HKZ",
  "a7767803d5301c01ed1c7bf425f66ccc"
);

export const searchClient = {
  search(requests) {
    return fetch("/api/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requests,
        // email: "strafe.x754@gmailx.com", // @TODO: comment this out
      }),
    }).then((res) => res.json());
  },
};
