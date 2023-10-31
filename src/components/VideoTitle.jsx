import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="w-screen aspect-video pt-[18%] px-24 absolute bg-gradient-to-r from-black
     "
    >
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-[25%] text-white">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-14 rounded-md text-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="bg-gray-600 text-white p-4 px-14 rounded-md text-lg bg-opacity-50 mx-2">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
