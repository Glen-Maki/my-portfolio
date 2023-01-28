import { IconContext } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";
import { SiQiita } from "react-icons/si";
import { LanguageList } from "../Components/profileComponents/LanguageList";

export const Profile = () => {
  return (
    <div className="flex w-full flex-col items-center gap-3 text-lg">
      <p className="mt-5 text-2xl">牧野 一哉</p>
      {/* プロフィール */}
      <div className="flex flex-col justify-center gap-2">
        <p>生年月日 : 1999年5月14日</p>
        <p>出身地 : 神奈川県のどこか</p>
        <p>青山学院大学社会情報学部</p>
        <p>宮治研究室に所属しています</p>
      </div>

      {/* 言語 */}
      <>使用言語</>
      <LanguageList />

      {/* リンク一覧 */}
      <div className="flex w-full justify-center gap-3">
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
            href="https://github.com/Glen-Maki"
            rel="noreferrer"
          >
            <IconContext.Provider value={{ size: "40px" }}>
              <SiQiita />
            </IconContext.Provider>
          </a>
        </div>
      </div>

      {/* 連絡先 */}
      <div className="">
        <p className="">E-mail : rukazurau0514[@]gmail.com</p>
        <p className="text-sm">実際に連絡する場合には[]を外してください</p>
      </div>
    </div>
  );
};
