import { Header } from "../Components/UI/Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-base-color">
      <div className="sticky top-0 max-h-14 w-full bg-base-color">
        <Header />
      </div>
      <div className="h-screen w-full flex-grow overflow-auto bg-base-color">
        {children}
      </div>
    </div>
  );
};
