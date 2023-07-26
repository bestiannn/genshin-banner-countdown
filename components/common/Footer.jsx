import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto w-full lg:w-4/5">
      <a
        href="https://github.com/bestiannn/genshin-banner-countdown"
        target="_blank"
        rel="noopener noreferrer"
        className="text-base md:text-lg"
      >
        <FaGithub className="inline text-xl" />{" "}
        <p className="inline underline decoration-solid">
          Repository of this project
        </p>{" "}
      </a>
      <br />
      <span className="text-justify text-xs font-light md:text-base lg:text-lg">
        This website is an open source project and is not associated with
        HoYoverse or any other company. The information on this website is
        delivered by unofficial sources. All of these timers are not guaranteed
        to be correct and they can be changed at any time. Use this information
        only for reference.
      </span>
    </footer>
  );
};

export default Footer;
