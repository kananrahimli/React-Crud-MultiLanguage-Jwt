import { checkForUnauthorizedResponse } from "../../utils/AuthError";
import $axios from "../../utils/axios";

export const getAllJobThnuk = (url, thunkAPI) => {
  return $axios
    .get(url)
    .then((res) => {
      return {
        data: res.data,
        headers: {
          "content-length": res.headers["content-length"],
          "content-type": res.headers["content-type"],
        },
      };
    })
    .catch((err) => {
      return checkForUnauthorizedResponse(err, thunkAPI);
    });
};

export const createJobThunk = (job, thunkAPI) => {
  return $axios
    .post("/jobs", job)
    .then((res) => res.data)
    .catch((err) => {
      return checkForUnauthorizedResponse(err,thunkAPI)
    });
};
export const editJobThunk = (job, thunkAPI) => {
  console.log(job);
  return $axios
    .patch("/jobs/" + job.jobId, job)
    .then((res) => res.data)
    .catch((err) => {
      return checkForUnauthorizedResponse(err,thunkAPI)
    });
};

export const deleteJobThunk = (job, thunkAPI) => {
  return $axios
    .delete("/jobs/" + job._id)
    .then((res) => res.data)
    .catch((err) => {
      return checkForUnauthorizedResponse(err,thunkAPI)
    });
};
