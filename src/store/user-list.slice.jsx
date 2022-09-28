import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  errorMsg: "",
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  let dataUrl = `http://localhost:4000/users`;
  let response = await axios.get(dataUrl);
  return response.data;
});

const userListSlice = createSlice({
  name: "Users",
  initialState: initialState,

  reducers: {
    add(state, action) {
      axios.post("http://localhost:4000/users", action.payload);
    },
    remove(state, action) {
      axios.delete(`http://localhost:4000/users/${action.payload}`);
    },
    update(state, action) {
      axios.put(
        `http://localhost:4000/users/${action.payload.id}`,
        action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.errorMsg = "Something went wrong!!";
      });
  },
});

export const { add, remove, update } = userListSlice.actions;

export const userListActions = userListSlice.actions;

export default userListSlice;
