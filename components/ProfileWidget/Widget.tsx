import { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import _ from "lodash";
import { User } from "react-feather";
import isImage from "is-image";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      // @ts-ignore
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Widget = () => {
  const [hidden, setHidden] = useState(true);
  const [user, setUser] = useState<any>({});
  const node = useRef();

  useInterval(async () => {
    let anonID = localStorage.ajs_anonymous_id;
    anonID = anonID.substring(1, anonID.length - 1);
    const res = await fetch("/api/profile", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ anonID }),
    });
    const profile = await res.json();
    const user = _.get(profile, "user", {});
    setUser(user);
  }, 1000);

  const reset = () => {
    const r = confirm("Are you sure?");
    if (r == true) window.analytics.reset();
  };

  const update = async () => {
    let anonID = localStorage.ajs_anonymous_id;
    anonID = anonID.substring(1, anonID.length - 1);
    const res = await fetch("/api/profile", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ anonID }),
    });
    const profile = await res.json();
    const user = _.get(profile, "user", {});
    setUser(user);
  };

  const traits = _.get(user, "traits", {});
  const traitKeys = Object.keys(traits);

  const renderTrait = (k, val) => {
    if (!val) return;
    if (val && (isImage(val) || k.includes("image"))) {
      return <img src={val} style={{ width: "100px" }} />;
    }
    return val.toString();
  };

  return (
    <div
      ref={node}
      aria-hidden={!hidden}
      className={classNames(
        "p-4 h-screen z-50 fixed top-0 left-0 transform transition ease-in-out duration-200 bg-gray-100 text-black",
        {
          [`-translate-x-full`]: hidden,
          [`translate-x-0`]: !hidden,
        }
      )}
      style={{ width: "350px" }}
    >
      <div className="text-lg">
        {user?.traits?.name || user?.traits?.email || "Anonymous"}
      </div>
      <div className="py-4">
        <button
          className={classNames(
            "text-xs px-2 py-1 border-2 border-blue-200 rounded mr-2 hover:bg-blue-200"
          )}
        >
          traits
        </button>
      </div>
      <div>
        <table className="table-fixed w-full mb-4">
          <thead>
            <tr>
              <th className="w-1/2" />
              <th className="w-1/2" />
            </tr>
          </thead>
          <tbody className="text-xs">
            {traitKeys.map(
              (key) =>
                traits[key] != undefined && (
                  <tr>
                    <td className="p-1 font-semibold border break-words">
                      {key}
                    </td>
                    <td className="p-1 border break-words">
                      {renderTrait(key, traits[key])}
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>

        <div className="flex space-x-4">
          <div className="m-2">
            <button
              className="border rounded border-red-600 text-red-600 text-sm p-2"
              onClick={reset}
            >
              clear profile
            </button>            
          </div>
          <div className="m-2">
            <button
              className="border rounded border-green-600 text-green-600 text-sm p-2"
              onClick={update}
            >
              update
            </button>            
          </div>
        </div>        
      </div>
      {/* <!-- toggler --> */}
      <div
        className="bg-gray-100 text-gray-600 absolute flex items-center justify-center cursor-pointer"
        style={{ width: "40px", height: "40px", top: "24px", right: "-40px" }}
        onClick={() => setHidden((x) => !x)}
      >
        <User />
      </div>
    </div>
  );
};

export { Widget };
