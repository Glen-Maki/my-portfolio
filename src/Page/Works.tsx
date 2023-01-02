import { WorksCards } from "../Components/worksComponents/WorksCards";
import image from "../Image/077m.jpeg";
import works_json from "../data/works.json";

export const Works = () => {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 pt-5">
      {works_json.map((work) => {
        return (
          <div className="w-2/5" key={work.title}>
            <WorksCards
              title={work.title}
              lang={work.lang}
              url={work.url}
              contents={work.contents}
              qiitaUrl={work.qiita_url ? work.qiita_url : null}
            />
          </div>
        );
      })}
    </div>
  );
};
