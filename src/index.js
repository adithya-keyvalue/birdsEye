import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import HomeLayout from "./js/layout/HomeLayout.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense>
      <HomeLayout />
    </Suspense>
  </React.StrictMode>
);

