import { SVGProps } from "react";

type WorksCardsProps = {
  //image: string;
  title: string;
  contents: string;
  url: string;
  lang: string;
  qiitaUrl: string | null;
};

export const WorksCards = ({
  title,
  contents,
  url,
  lang,
  qiitaUrl,
}: WorksCardsProps) => {
  return (
    <div className="h-fit	w-full rounded-2xl  bg-card-color px-5 py-3">
      <div className="text-lg">{title}</div>
      {/* ここから内容 */}
      <div className="mt-2 h-full w-full text-left">
        <p>{contents}</p>
      </div>
      <div className="mt-2 h-full w-full">
        <p>使用言語: {lang}</p>

        {qiitaUrl ? (
          <p>
            <a
              href={qiitaUrl}
              className="text-cyan-600 visited:text-violet-700"
            >
              Qiita記事はこちらから
            </a>
          </p>
        ) : (
          <></>
        )}

        <a href={url} className="text-cyan-600 visited:text-violet-700">
          ソースコードはこちらから
        </a>
      </div>
    </div>
  );
};
