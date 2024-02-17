import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MoodMagicSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store?.moodmagic);
  console.log(`Movviieejj list ${movieNames}`);
  console.log(`Movviieejj RESULTS ${movieResults}`);
  // console.log(movieNames);
  // if (!movieNames) return null;

  return (
    <div className="pt-15 p-4 m-4 bg-black text-white bg-opacity-60">
      <div>
        {movieNames?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies_type={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default MoodMagicSuggestions;
