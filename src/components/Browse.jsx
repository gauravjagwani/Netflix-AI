import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import MoodMagicSearchPage from "./MoodMagicSearchPage";
import { useSelector } from "react-redux";

const Browse = ({ isLoading, setIsLoading }) => {
  const showMoodMagic = useSelector((store) => store.moodmagic.showMoodMagic);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showMoodMagic ? (
        <MoodMagicSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </>
      )}
    </div>
  );
};

export default Browse;
