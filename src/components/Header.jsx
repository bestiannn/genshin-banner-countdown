import { SiTwitter, SiPixiv } from "react-icons/si";

const Header = ({ title, subTitle, artistData }) => {
  const { name, twitter, pixiv } = artistData;

  return (
    <div className="">
      <h1 className="text-xl font-bold">{title}</h1>
      <h2 className="text-lg">{subTitle}</h2>

      <div className="mt-5 text-lg">
        <p>
          Art by <span className="underline decoration-solid">{name}</span>
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <SiTwitter />
          </a>
          <a href={pixiv} target="_blank" rel="noopener noreferrer">
            <SiPixiv />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
