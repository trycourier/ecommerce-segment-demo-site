import Header from "../Header";

interface Props {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div className="max-w-screen-xl mx-auto mx-0 sm:mx-8">
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;
