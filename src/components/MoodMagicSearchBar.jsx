import React from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTION } from "../utils/constants";
import { addmoviemagicResult } from "../utils/moodmagicSlice";

const MoodMagicSearchBar = () => {
  const language = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();

    return json.results;
  };

  const gptQuery =
    "Act as a movie Recommendation system and suggest some movies for the query : " +
    searchText?.current?.value +
    ".only give names of 5 movies, comma seperated like the example result ahead. Example Result: Don, Tamasha, Fault in our stars ";
  // console.log(searchText);
  const handleMoodMagicSeachClick = async () => {
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // console.log(gptResults.choices[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(`GPT Movies ${gptMovies}`);
    console.log(tmdbResults);

    dispatch(
      addmoviemagicResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );

    //[promises * 5]
  };

  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="md:w-[45%] w-full bg-black grid grid-cols-12 bg-opacity-50 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-10 p-4 m-4 ml-6 rounded-sm"
          placeholder={lang[language].moodMagicPlaceHolder}
        />
        <button
          className="rounded-md my-4 md:w-full w-[60px] bg-red-700 text-white md:ml-6 ml-3"
          onClick={handleMoodMagicSeachClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default MoodMagicSearchBar;
