import React from "react";

const Footer = ({ artist, linkArtist }) => {
  return (
    <div className="">
      <div className="">
        <p className="">
          🎨 Art by:{" "}
          <a className="" href={linkArtist} target="_blank" rel="noreferrer">
            {artist}
          </a>
        </p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          sapiente autem corrupti, aliquam nobis sunt!
        </span>
        <span>GITHUB</span>
      </div>
    </div>
  );
};

export default Footer;
