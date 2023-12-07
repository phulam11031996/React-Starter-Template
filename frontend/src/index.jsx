import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ComparisonSlider from "./components/ComparisionSlider";
import beforeImage from "./assets/before.jpg";
import afterImage from "./assets/after.jpg";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <ComparisonSlider beforeImage={beforeImage} afterImage={afterImage} />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);