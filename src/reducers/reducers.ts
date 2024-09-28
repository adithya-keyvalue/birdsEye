import { combineReducers } from "@reduxjs/toolkit";
import reducers from ".";

const rootReducer = combineReducers({ ...reducers });

export default rootReducer;
