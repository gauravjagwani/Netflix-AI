import React, { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import MovieDetails from "./MovieDetails";
import { SkeletonTheme } from "react-loading-skeleton";

const Body = () => {
  // const dispatch = useDispatch();
  // const navigate = useNa

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/watch",
      element: <MovieDetails />,
    },
  ]);

  return (
    <div>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <RouterProvider router={appRouter} />
      </SkeletonTheme>
    </div>
  );
};

export default Body;
