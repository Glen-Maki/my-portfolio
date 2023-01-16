import { Link } from "react-router-dom";

const LinkPage: { link: string; title: string }[] = [
  { link: "/profile", title: "Profile" },
  { link: "/works", title: "Works" },
  { link: "/profile", title: "Profile" },
];

export const SideBer = () => {
  return (
    <div className="flex flex-col gap-3 px-5 pt-5">
      {LinkPage.map(({ link, title }) => {
        return (
          <div key={title} className="text-lg">
            <Link to={link}>{title}</Link>
          </div>
        );
      })}
    </div>
  );
};
