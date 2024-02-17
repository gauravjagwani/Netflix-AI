import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies_type }) => {
  // console.log("Here are movies types");
  // console.log(movies_type);
  return (
    <div>
      <h1 className="text-white font-semibold text-3xl ml-4">{title}</h1>
      <div className="flex overflow-x-auto p-4">
        <div className="flex gap-4">
          {/* <MovieCard posterimg={movies[0].poster_path}/> */}
          {movies_type?.map((card) => (
            <Link to={`/watch?v=${card.id}`}>
              <MovieCard key={card.id} posterimg={card.poster_path} />{" "}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
