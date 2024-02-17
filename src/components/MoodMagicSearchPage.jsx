import React from "react";
import MoodMagicSearchBar from "./MoodMagicSearchBar";
import MoodMagicSuggestions from "./MoodMagicSuggestions";

const MoodMagicSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="brightness-50 bg-cover bg-no-repeat overflow-auto scrollbar-hide "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <MoodMagicSearchBar />
      <MoodMagicSuggestions />
    </div>
  );
};

export default MoodMagicSearchPage;
