import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="h-min-screen mt-5 flex w-full flex-col items-center gap-4">
      <div className="text-lg">牧野一哉のポートフォリオサイト</div>
      <Link to={"/works"}>
        <div className="text-xl">作品一覧</div>
      </Link>
    </div>
  );
};
