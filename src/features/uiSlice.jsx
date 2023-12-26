import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showSideBar:window.innerWidth<992?false:true
};


const uiSlice = createSlice({
    name: "ui",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.showSideBar = !state.showSideBar;

    },
  },
})
export const {toggleSideBar}=uiSlice.actions
export const sideBarStatus = (state) => state.ui.showSideBar;
export default uiSlice.reducer
