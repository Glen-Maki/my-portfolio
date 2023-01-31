import { IconContext } from "react-icons";
import {
  SiTypescript,
  SiReact,
  SiPython,
  SiFastapi,
  SiJavascript,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { Lang } from "../../data/Type";

type Props = {
  lang: Lang;
};

type LangList = {
  [lang in Lang]: JSX.Element;
};

export const WorkLanguage = ({ lang }: Props) => {
  const langList: LangList = {
    Python: <SiPython />,
    TypeScript: <SiTypescript />,
    "React.js": <SiReact />,
    "Vue.js": <FaVuejs />,
    FastAPI: <SiFastapi />,
    JavaScript: <SiJavascript />,
  };
  return (
    <div className="flex items-center justify-center gap-1 bg-card-color p-2">
      <IconContext.Provider value={{ size: "20px" }}>
        {langList[lang]}
      </IconContext.Provider>
      {lang}
    </div>
  );
};
