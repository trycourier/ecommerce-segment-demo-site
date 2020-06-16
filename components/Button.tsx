import classNames from "classnames";

const Button = ({
  children,
  inverse = false,
  full = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={classNames(
        `rounded px-10 py-4 border text-md font-bold text-center cursor-pointer`,
        {
          [`bg-gray-200 text-gray-600 hover:bg-gray-300`]: disabled,
          [`bg-black text-white border-black hover:bg-gray-900`]:
            !inverse && !disabled,
          [`bg-white text-black hover:bg-gray-100`]: inverse && !disabled,
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
