import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ({ isLoading, setIsLoading }) => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="relative p-6 -mt-52 z-40">
          <MovieList
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            title={"Now Playing"}
            movies_type={movies.nowPlayingMovies}
          />
          <MovieList title={"Popular"} movies_type={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies_type={movies.UpcomingMovies} />
          {/* <MovieList title={"Trending"} movies_type={movies} /> */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
