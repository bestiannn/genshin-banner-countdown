import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/bestiannn/genshin-banner-countdown"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="inline text-xl" />{" "}
        <p className="inline underline decoration-solid">
          Repository of this project
        </p>{" "}
      </a>
      <br />
      <span>
        This website is an open source project and is not associated with
        HoYoverse or any other company. The information on this website is
        delivered by unoficial sources. All of these timers are not guaranteed
        to be correct and they can be changed at any time. Use this information
        only for reference.
      </span>
    </footer>
  );
};

export default Footer;
