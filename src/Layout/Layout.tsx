// import { Outlet } from "react-router-dom";
import { SideBer } from "../Components/sidebar/SideBar";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <div className="left-0 h-full overflow-x-auto bg-slate-300">
        <SideBer />
      </div>
      <div className="h-full w-full flex-grow overflow-auto pb-8">
        {children}
      </div>
    </div>
  );
};
