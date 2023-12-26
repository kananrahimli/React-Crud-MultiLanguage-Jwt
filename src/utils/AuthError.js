import { t } from "i18next";
import { logout } from "../features/user/userSlice";

export const checkForUnauthorizedResponse = (err,thunkAPI) => {
  if (err.response.status === 401 && err.response.data.msg !== 'Invalid Credentials') {
    thunkAPI.dispatch(logout());
    return thunkAPI.rejectWithValue(`${t('unAuthError')}`);
  }
  return thunkAPI.rejectWithValue(t(err.response.data.msg));
};
