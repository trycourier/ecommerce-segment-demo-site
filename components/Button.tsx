import classNames from "classnames";

const Button = ({
  children,
  bgColor = "black",
  textColor = "white",
  inverse = false,
  full = false,
  ...props
}) => {
  return (
    <button
      className={classNames(
        `rounded px-10 py-4 border text-md font-bold text-center cursor-pointer`,
        {
          [`bg-black text-white border-black hover:bg-gray-900`]: !inverse,
          [`bg-white text-black hover:bg-gray-100`]: inverse,
        },
        full && `w-full`
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
