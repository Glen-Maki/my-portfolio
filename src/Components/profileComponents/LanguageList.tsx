import { IconContext } from "react-icons";
import { SiTypescript, SiReact, SiPython } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";

export const LanguageList = () => {
  return (
    <div className="grid grid-cols-3 gap-2 text-lg">
      <div className="flex items-center justify-center gap-1 bg-card-color p-2">
        <IconContext.Provider value={{ size: "20px" }}>
          <SiTypescript />
        </IconContext.Provider>
        <p>TypeScript </p>
      </div>
      <div className="flex items-center justify-center gap-1 bg-card-color p-2">
        <IconContext.Provider value={{ size: "20px" }}>
          <SiReact />
        </IconContext.Provider>
        <p>React.js</p>
      </div>
      <div className="flex items-center justify-center gap-1 bg-card-color p-2">
        <IconContext.Provider value={{ size: "20px" }}>
          <FaVuejs />
        </IconContext.Provider>
        <p>Vue.js</p>
      </div>

      <div className="flex items-center justify-center gap-1 bg-card-color p-2">
        <IconContext.Provider value={{ size: "20px" }}>
          <SiPython />
        </IconContext.Provider>
        <p>Python</p>
      </div>
    </div>
  );
};
