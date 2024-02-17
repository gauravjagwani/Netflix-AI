import React, { useState, useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MovieDescription from "./MovieDescription";
import MovieDetailsVideo from "./MovieDetailsVideo";
import { API_OPTION } from "../utils/constants";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  // const { original_title } = useParams();
  // console.log(searchParams.get("v"));

  // const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  // if (!movies) return null;
  // console.log(id);

  const getMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      API_OPTION
    );
    const json = await data.json();
    // console.log(json?.original_title);
    // dispatch(addNowPlayingMovies(json?.results));
    setMovie(json);
  };

  useEffect(() => {
    getMovies();
  }, [id]);

  return (
    <div>
      <MovieDescription
        title={movie?.original_title}
        overview={movie?.overview}
        posterimg={movie?.poster_path}
      />
      <MovieDetailsVideo movieid={id} />
    </div>
  );
};
//const movie = movies.map(movie => movies.)
// const { mainMovie } = [...movies];
// console.log("Movie detailes list");
// console.log(movies);
// console.log(original_title);

// console.log(mainMovie);

// const { id } = mainMovie;

export default MovieDetails;
