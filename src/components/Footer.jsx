import React from "react";

const Footer = ({ artist, linkArtist }) => {
  return (
    <div className="fixed bottom-5 w-full">
      <div className="flex justify-center">
        <p className="w-56 lg:w-1/2 text-xl lg:text-3xl font-bold bg-black bg-opacity-60 rounded-2xl py-3 px-5 border-6 border-black">
          🎨 Art by: {" "}
          <a
            className="hover:underline hover:decoration-white"
            href={linkArtist}
            target="_blank"
            rel="noreferrer"
          >
            {artist}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
