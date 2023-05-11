import { WorksCards } from "../Components/worksComponents/WorksCards";
import works_json from "../data/works.json";

export const Works = () => {
  return (
    <div className="flex min-h-screen w-full flex-col flex-wrap gap-4 p-5">
      <div className="mb-5 text-lg ">KAZUYA'S WORKS</div>
      <div className="flex w-full flex-col items-center justify-between gap-4">
        {works_json.map((work) => {
          return (
            <div className="w-4/5 md:w-3/5" key={work.title}>
              <WorksCards
                workKey={work.workKey}
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
    </div>
  );
};
