import { Header } from "../Components/UI/Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-base-color">
      <div className="sticky top-0 left-0 z-10 max-h-14 w-full bg-base-color">
        <Header />
      </div>
      <div className="z-0 h-fit w-full flex-grow overflow-auto bg-base-color">
        {children}
      </div>
    </div>
  );
};
