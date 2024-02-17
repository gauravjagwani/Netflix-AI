import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="w-screen aspect-video pt-[18%] px-24 absolute bg-gradient-to-r from-black
     "
    >
      <h1 className="md:text-5xl text-3xl font-bold text-white">{title}</h1>
      <p className=" hidden xl:inline-block py-6 text-lg w-[25%] text-white">
        {overview}
      </p>
      <div>
        <button className="bg-white text-black p-2 md:p-4 md:px-14 px-9 mt-4 rounded-md md:text-lg text-base hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="bg-gray-600 text-white p-2 md:p-4 md:px-14 px-9 mt-2 rounded-md text-lg bg-opacity-50 mx-2">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
