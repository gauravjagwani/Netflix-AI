import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO, USER_PROFILE } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleMoodMagicView } from "../utils/moodmagicSlice";
// import lang from "../utils/languageConstants";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLangauge } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user);
  const showMoodMagic = useSelector((store) => store.moodmagic.showMoodMagic);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        // navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleMoodSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleMoodMagicView());
  };

  const handleLangaugeChange = (e) => {
    dispatch(changeLangauge(e.target.value));
  };
  return (
    <div className="absolute inline-block px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between ">
      <img className="w-44" src={LOGO} alt="Netflix logo" />
      {user && (
        <div className="flex p-2">
          {showMoodMagic && (
            <select
              className="p-2 m-2 bg-gray-950 text-white rounded-md"
              onChange={handleLangaugeChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleMoodSearchClick}
            className="bg-yellow-600 h-10 mx-2 my-auto px-3 rounded-md font-bold"
          >
            {showMoodMagic ? "Home Page" : "Mood Magic 🪄"}
          </button>
          <img
            className=" my-auto mx-2 w-10 h-10 rounded-sm "
            // src={user.photoURL}
            src={USER_PROFILE}
            alt="usericon"
          />
          <button
            className="border border-black border-2 rounded-lg m-3 px-2 text-white font-semibold"
            onClick={handleSignout}
          >
            SIGN OUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

// https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg
