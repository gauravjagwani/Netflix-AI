import React from "react";
import { POSTER_PATH } from "../utils/constants";

const MovieCard = ({ posterimg }) => {
  if (!posterimg) return null;
  return (
    <div className="w-48">
      <img
        // src="https://image.tmdb.org/t/p/w500/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg"
        src={POSTER_PATH + posterimg}
        alt="Movieposter"
      />
    </div>
  );
};

export default MovieCard;
