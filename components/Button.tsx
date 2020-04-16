const Button = ({
  children,
  bgColor = "black",
  textColor = "white",
  ...props
}) => {
  return (
    <div
      className={`flex items-center rounded px-10 py-2 bg-${bgColor} text-${textColor} text-sm font-bold cursor-pointer`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;
