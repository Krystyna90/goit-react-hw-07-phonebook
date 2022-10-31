import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContacts,
  removeContacts,
} from "./contactsOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: {
    [fetchContacts.pending]: (store) => {
      store.isLoading = true;
    },
    [fetchContacts.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = payload;
    },
    [fetchContacts.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [addContacts.pending]: (store) => {
      store.isLoading = true;
    },
    [addContacts.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload);
    },
    [addContacts.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
    [removeContacts.pending]: (store) => {
      store.isLoading = true;
    },
    [removeContacts.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items = store.items.filter((item) => item.id !== payload);
    },
    [removeContacts.rejected]: (store, { payload }) => {
      store.isLoading = false;
      store.error = payload;
    },
  },
});

export const persistedReducer = contactsSlice.reducer;
