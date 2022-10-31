import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./fetch-contacts-api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const contacts = await API.getContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContact",
  async (data, { rejectWithValue }) => {
    try {
      const result = await API.addContacts(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContacts = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      await API.removeContacts(id);
      return id;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
