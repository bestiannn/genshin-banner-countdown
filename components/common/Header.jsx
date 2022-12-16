import Config from "../../public/config.json";

const Header = () => {
  const { title, subtitle } = Config;

  return (
    <header>
      <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">{title}</h1>
      <h2 className="text-base font-light md:text-xl lg:text-lg">{subtitle}</h2>
    </header>
  );
};

export default Header;
