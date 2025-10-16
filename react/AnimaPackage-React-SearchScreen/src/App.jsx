import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SearchScreen } from "./screens/SearchScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <SearchScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
