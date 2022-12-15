import Config from "../../public/config.json";

const Header = () => {
  const { title, subtitle } = Config;

  return (
    <header>
      <h1 className="text-2xl font-bold">{title}</h1>
      <h2 className="text-lg">{subtitle}</h2>
    </header>
  );
};

export default Header;
