import { Link } from "react-router-dom";

const LinkPage: { link: string; title: string }[] = [
  { link: "/works", title: "Works" },
  { link: "/about", title: "About" },
];

export const Header = () => {
  return (
    <div className="flex items-center justify-between gap-3 text-sm md:text-lg">
      <div className="pl-4 text-sm md:text-xl">Kazuya Makino's Portfolio</div>
      <div className="mr-4 flex">
        {LinkPage.map(({ link, title }) => {
          return (
            <div
              key={title}
              className="py-3 px-5 delay-100 duration-500 hover:bg-sub-color"
            >
              <Link to={link}>{title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
