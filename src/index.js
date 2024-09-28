import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import HomeLayout from "./js/layout/HomeLayout.tsx";
import { Provider } from "react-redux";
import store from '../src/store/store.ts'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense>
        <HomeLayout />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
