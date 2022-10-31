import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./contacts/contacts-slice";
import { filterReducer } from "./filter/filter-slice";

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterReducer,
  },
});
