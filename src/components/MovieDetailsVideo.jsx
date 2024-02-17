import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const MovieDetailsVideo = ({ movieid }) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  console.log(movieid);
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
      API_OPTION
    );
    const json = await data.json();
    console.log("Trailer data");
    console.log(json);
    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer" || video.name === "Official Trailer"
    );
    const trailer = filterData.length ? filterData[1] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, [movieid]);
  return (
    <div>
      <iframe
        width="1920"
        height="1080"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=2"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MovieDetailsVideo;
