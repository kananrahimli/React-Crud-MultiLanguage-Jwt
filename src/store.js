import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/user/userSlice'
import uiSlice from "./features/uiSlice";
import jobSlcie from "./features/jobs/jobSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    ui:uiSlice,
    job:jobSlcie,
   
  },
});

export default store;
