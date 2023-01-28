import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";
import { SiQiita } from "react-icons/si";

type WorksCardsProps = {
  workKey: string;
  title: string;
  contents: string;
  url: string;
  lang: string;
  qiitaUrl: string | null;
};

export const WorksCards = ({
  workKey,
  title,
  contents,
  url,
  lang,
  qiitaUrl,
}: WorksCardsProps) => {
  console.log(workKey);
  return (
    <div className="relative h-fit w-full rounded-2xl bg-card-color delay-100 duration-500 hover:bg-card-hovered">
      <Link to={`/works/${workKey}`}>
        <div className="h-fit w-full px-5 pt-3 pb-10">
          <div className="text-lg">{title}</div>
          {/* ここから内容 */}
          <div className="my-2 h-full w-full text-left">{contents}</div>
          <p>使用言語: {lang}</p>
        </div>
      </Link>
      <div className="absolute bottom-0 left-1/2 flex h-fit w-fit -translate-x-1/2 items-center justify-center gap-3 py-1">
        {qiitaUrl ? (
          <p>
            <a
              href={qiitaUrl}
              className="text-gray-800 delay-75 duration-500 hover:text-green-500"
            >
              <IconContext.Provider value={{ size: "40px" }}>
                <SiQiita />
              </IconContext.Provider>
            </a>
          </p>
        ) : (
          <></>
        )}

        <a
          href={url}
          className="text-gray-800 delay-75 duration-500 hover:text-sub-color"
        >
          <IconContext.Provider value={{ size: "35px" }}>
            <AiOutlineGithub />
          </IconContext.Provider>
        </a>
      </div>
    </div>
  );
};
