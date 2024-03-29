import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { useState } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const json = await data.json();
    console.log(json?.results);
    dispatch(addNowPlayingMovies(json?.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
    setIsLoading(false);
  }, []);
};

export default useNowPlayingMovies;
