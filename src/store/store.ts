import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/reducers';
import { baseApi } from '../services/api';

const store = configureStore({
  reducer: {
    rootReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(baseApi.middleware)  // Include the API middleware here
  },
});

export default store;