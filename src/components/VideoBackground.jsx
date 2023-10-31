import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  //fetch trailer video
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTION
    );
    const json = await data.json();
    // console.log(json?.results);
    const filterData = json?.results.filter(
      (video) => video.type === "Trailer" || video.name === "Official Trailer"
    );
    const trailer = filterData.length ? filterData[1] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe
        width="1920"
        height="1080"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {
//     "id": 507089,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "For the Fans",
//         "key": "xxDmNyY5f4k",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2023-10-24T16:02:18.000Z",
//         "id": "65387139ae3668010b9c24d8"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "FNAF is...",
//         "key": "3voi3nf45_4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-10-20T16:08:19.000Z",
//         "id": "6533085b0929f601389dc732"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "A Look Inside",
//         "key": "AuP9krMmXrM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2023-10-16T16:03:04.000Z",
//         "id": "652de564ea84c700ca120daf"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Final Trailer",
//         "key": "X4d_v-HyR4o",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-08-30T19:00:10.000Z",
//         "id": "64ef92d0caa50800ab716a20"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "9fJtM5z0g7M",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-06-27T14:52:13.000Z",
//         "id": "649af8b8d35dea014dce7143"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Teaser",
//         "key": "f-zqS2CiZqw",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-05-17T00:57:27.000Z",
//         "id": "646429c476eecf00e31f9293"
//       }
//     ]
//   }
