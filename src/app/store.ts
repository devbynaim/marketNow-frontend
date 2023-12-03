import { configureStore, combineReducers, } from "@reduxjs/toolkit";
import { apiSlilce } from "../features/api/api";
import { setupListeners } from "@reduxjs/toolkit/query";

const reducers = combineReducers({
  [apiSlilce.reducerPath]:apiSlilce.reducer
});
const store = configureStore({
  reducer: reducers,
  middleware:(getDefaultMiddleware)=>(getDefaultMiddleware().concat(apiSlilce.middleware))

});


setupListeners(store.dispatch)

export default store;
