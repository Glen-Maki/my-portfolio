import { Link } from "react-router-dom";

const LinkPage: { link: string; title: string }[] = [
  { link: "/Profile", title: "Profile" },
  { link: "/Works", title: "Works" },
  { link: "/Profile", title: "Profile" },
];

export const SideBer = () => {
  return (
    <div className="px-4 py-2">
      {LinkPage.map(({ link, title }) => {
        return (
          <div key={title}>
            <Link to={link}>{title}</Link>
          </div>
        );
      })}
    </div>
  );
};
