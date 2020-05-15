import classNames from "classnames";

export const Slider = ({ open, children }) => {
  const isHidden = open ? false : true;

  return (
    <>
      <div
        aria-hidden={!isHidden}
        className={classNames(
          "h-screen z-50 fixed top-0 right-0 transform transition ease-in-out duration-200 bg-white text-black",
          {
            [`translate-x-full`]: isHidden,
            [`translate-x-0`]: !isHidden,
          }
        )}
        style={{ width: "300px" }}
      >
        {children}
      </div>
    </>
  );
};
