import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { WorkLanguage } from "../Components/worksComponents/WorkLanguage";
import { Lang, WorkKey } from "../data/Type";
import workJson from "../data/work.json";

type WorkData = {
  title: string;
  url?: string;
  githubUrl: string;
  contents: string[];
  lang: string[];
  qiita_url?: string;
};

export const WorkPage = () => {
  const { workKey } = useParams();
  const [workData, setWorkData] = useState<WorkData | undefined>();

  useEffect(() => {
    setWorkData(workJson[workKey as WorkKey]);
  }, [workKey]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-5">
      <div className="mt-5 text-2xl">{workData?.title}</div>
      <div className="w-3/5 text-left text-lg">
        {workData?.contents.map((e, i) => {
          return <span key={i}>{e}</span>;
        })}
      </div>
      {workData?.url ? (
        <div className="text-xl">
          url:
          <a
            href={workData?.url}
            className="text-sub-color visited:text-card-hovered"
          >
            {workData?.url}
          </a>
        </div>
      ) : (
        <></>
      )}
      <div className="grid grid-cols-3 gap-2 text-lg">
        {workData?.lang.map((e) => {
          return (
            <div key={e}>
              <WorkLanguage lang={e as Lang} />
            </div>
          );
        })}
      </div>

      <a href={workData?.githubUrl} className="flex items-center gap-2">
        <div className="text-gray-800 delay-75 duration-500 hover:text-sub-color">
          <IconContext.Provider value={{ size: "35px" }}>
            <AiOutlineGithub />
          </IconContext.Provider>
        </div>
        <div className="text-lg">Git Hub</div>
      </a>
    </div>
  );
};
