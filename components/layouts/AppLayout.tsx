import Header from "../Header";

interface Props {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl mx-auto mx-0 px-4">{children}</div>
    </div>
  );
};

export default AppLayout;
