import { Widget } from "./Widget";

const ProfileWidget = ({ children }) => {
  return (
    <>
      {children}
      <Widget />
    </>
  );
};

export { ProfileWidget };
