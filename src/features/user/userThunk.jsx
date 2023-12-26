import { checkForUnauthorizedResponse } from "../../utils/AuthError";
import $axios from "../../utils/axios";


export const registerUserThunk = (url, user, thunkAPI) => {
  return $axios
    .post(url, user)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return checkForUnauthorizedResponse(err,thunkAPI)
    });
};

export const loginUserThunk = (url, user, thunkAPI) => {
  return $axios
    .post(url, user)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
     return checkForUnauthorizedResponse(err,thunkAPI)
    });
};

export const updateUserThunk=(url,user,thunkAPI)=>{
    return $axios
      .patch(url, user)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
       return checkForUnauthorizedResponse(err,thunkAPI)
      });
}
