import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";
import { SiQiita } from "react-icons/si";
import { LanguageList } from "../Components/profileComponents/LanguageList";

export const Profile = () => {
  return (
    <div className="flex w-full flex-col items-center gap-2 text-lg">
      <h2 className="mt-5 bg-sub-color py-3 px-5 text-2xl">牧野 一哉</h2>
      {/* プロフィール */}
      <div className="flex flex-col justify-center gap-2 bg-card-color py-3 px-2 ">
        <p>生年月日 : 1999年5月14日</p>
        <p>出身地 : 神奈川県のどこか</p>
        <p>青山学院大学社会情報学部</p>
        <p>宮治研究室に所属しています</p>
      </div>
      {/* インターン・職歴 */}
      <h2 className="mt-5 bg-sub-color py-3 px-5 text-xl">インターン経験</h2>
      <div className="flex  w-4/5 flex-col justify-center gap-2 bg-card-color py-3 px-2 md:w-2/5">
        <p>2022年5月頭~10月末</p>
        <p>株式会社 Ghost</p>
        <p className="text-left">
          フロントエンドエンジニアとして、医療機関が使用する備品管理サイトやチャットボットを搭載した
          チャットアプリなどといったWebアプリケーションの受託開発のコーディング業務に携わる。
          <br />
          使用技術はTypeScript（React.js）が中心。
        </p>
      </div>

      {/* 言語 */}
      <h2 className="mt-5 bg-sub-color py-2 px-3 text-xl">使用言語</h2>
      <LanguageList />

      {/* リンク一覧 */}
      <div className="mt-4 flex w-full justify-center gap-3">
        <div className="grid max-h-fit max-w-fit place-items-center rounded-full p-1 delay-100 duration-500 hover:bg-sub-color">
          <a
            target="_blank"
            href="https://github.com/Glen-Maki"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ size: "40px" }}>
              <AiOutlineGithub />
            </IconContext.Provider>
          </a>
        </div>
        <div className="grid max-h-fit max-w-fit place-items-center rounded-full p-1 delay-100 duration-500  hover:bg-sub-color">
          <a
            target="_blank"
            href="https://qiita.com/Glen-Maki"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ size: "40px" }}>
              <SiQiita />
            </IconContext.Provider>
          </a>
        </div>
      </div>

      {/* 連絡先 */}
      <div className="mb-10 mt-3">
        <p className="">E-mail : rukazurau0514[@]gmail.com</p>
        <p className="text-sm">実際に連絡する場合には[]を外してください</p>
      </div>
    </div>
  );
};
