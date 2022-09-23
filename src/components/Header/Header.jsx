import { SiTwitter, SiPixiv } from "react-icons/si";

const Header = ({ title, subTitle, artistData }) => {
  const { name, pixiv } = artistData;

  return (
    <div className="">
      <h1 className="text-xl lg:text-2xl font-bold">{title}</h1>
      <h2 className="text-lg lg:text-xl">{subTitle}</h2>

      {/* <div className="mt-5 text-lg lg:text-xl">
        <p>
          Art by <span className="underline decoration-solid">{name}</span>
        </p>
        <div className="mt-2 lg:mt-5 flex justify-center">
          <div className="grid auto-cols-max grid-flow-col gap-10">
            <a href={pixiv} target="_blank" rel="noopener noreferrer">
              <SiPixiv />
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
