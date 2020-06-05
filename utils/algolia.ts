import algoliasearch from "algoliasearch";
import fetch from "isomorphic-unfetch";

export const algolia = algoliasearch(
  "64RBY11HKZ",
  "a7767803d5301c01ed1c7bf425f66ccc"
);

export const searchClient = {
  search(requests) {
    let anonID = localStorage.ajs_anonymous_id;
    anonID = anonID.substring(1, anonID.length - 1);

    return fetch("/api/search", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requests,
        anonID,
        // email: "strafe.x754@gmailx.com", // @TODO: comment this out
      }),
    }).then((res) => res.json());
  },
};
