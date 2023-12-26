import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import {
  clearLocalStorage,
  getUserFromLocalStorage,
  setUserToLocalStorage,
} from "../../utils/localStorage";
import { loginUserThunk, registerUserThunk, updateUserThunk } from "./userThunk";
import { t } from "i18next";

const initialState = {
  user: getUserFromLocalStorage(),
  loading: false,
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk('/auth/register',user,thunkAPI)
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk('/auth/login',user,thunkAPI)
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user, thunkAPI) => {
    return updateUserThunk('auth/updateUser',user,thunkAPI)
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      clearLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        setUserToLocalStorage(payload.user);
        toast.success(t('createdAccount') +' '+ payload.user.name);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.loading = false;
        state.user = user;
        setUserToLocalStorage(user);
        toast.success(t('loggedUser') +' '+ user.name);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.loading = false;
        state.user = user;
        setUserToLocalStorage(user);
        toast.success(t('updatedUser'));
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.loading = false;
        toast.error(payload);
      });
  },
});
export const { logout } = userSlice.actions;
export const {loading} =userSlice.reducer
export default userSlice.reducer;
