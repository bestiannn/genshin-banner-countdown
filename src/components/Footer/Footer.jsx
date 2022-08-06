import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3">
      <a
        href="https://github.com/Bestianbluns/genshin-banner-countdown"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="inline text-xl" />{" "}
        <p className="inline underline decoration-solid">
          Repository of this project
        </p>
      </a>
      <p className="text-xs md:text-sm">
        This website is an open source project and is not associated with
        HoYoverse or any other company. <br /> The information on this website
        is delivered by unoficial sources. All of these timers are not
        guaranteed to be correct and they can be changed at any time. Use this
        information only for reference.
      </p>
    </div>
  );
};

export default Footer;
