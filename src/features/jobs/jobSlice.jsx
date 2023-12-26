import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createJobThunk,
  getAllJobThnuk,
  editJobThunk,
  deleteJobThunk,
} from "./jobThunk";
import { toast } from "react-toastify";
import { t } from "i18next";
const initialState = {
  types: ["all", "full-time", "part-time", "remote", "internship"],
  status: ["all", "interview", "declined", "pending"],
  sort: ["latest", "oldest", "a-z", "z-a"],
  jobs: null,
  job: null,
  allJobloading: false,
  editJob: false,
  numOfPages:null,
  totalJobs:null
};

export const getAllJobs = createAsyncThunk(
  "job/getAllJobs",
  async ({ search, searchStatus, searchType, sort ,page}, thunkAPI) => {
    return getAllJobThnuk(
      `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}${
        search ? "&&search=" + search : ""
      }`,
      thunkAPI
    );
  }
);
export const createJob = createAsyncThunk(
  "job/createJob",
  async (job, thunkAPI) => {
    return createJobThunk(job, thunkAPI);
  }
);
export const editJob = createAsyncThunk(
  "job/editJob",
  async (job, thunkAPI) => {
    return editJobThunk(job, thunkAPI);
  }
);

export const deleteJob = createAsyncThunk(
  "job/delete",
  async (job, thunkAPI) => {
    thunkAPI.dispatch(removeJob(job))
    return deleteJobThunk(job, thunkAPI);
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    toggleEditJob: (state) => {
      state.editJob = !state.editJob;
    },
    setJob: (state, { payload }) => {
      state.job = payload;
    },
    removeJob:(state,{payload})=>{
      // console.log(payload);
      state.jobs=state.jobs.filter(job=>job._id!==payload._id)
    },
    emptyJobs:(state)=>{
      state.jobs=null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.allJobloading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        const { jobs ,numOfPages,totalJobs} = payload.data;
        state.allJobloading = false;
        state.jobs = jobs;
        state.numOfPages=numOfPages
        state.totalJobs=totalJobs
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.allJobloading = false;
        toast.error(payload);
      })
      .addCase(createJob.pending, (state) => {
        state.allJobloading = true;
      })
      .addCase(createJob.fulfilled, (state) => {
        state.allJobloading = false;
        toast.success(t('addedNewJob'));
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.allJobloading = false;
        toast.error(payload);
      })
      .addCase(editJob.pending, (state) => {
        state.allJobloading = true;
      })
      .addCase(editJob.fulfilled, (state) => {
        state.allJobloading = false;
        toast.success(t('updatedJob'));
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.allJobloading = false;
        toast.error(payload);
      })
      .addCase(deleteJob.pending, (state) => {
        state.allJobloading = true;
      })
      .addCase(deleteJob.fulfilled, (state) => {
        state.allJobloading = false;
        state.totalJobs=state.totalJobs-1
        toast.success(t('jobRemoved'));
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        state.allJobloading = false;
        toast.error(payload);
      });
  },
});
export const { allJobloading } = jobSlice.reducer;
export const { setJob ,removeJob,emptyJobs,toggleEditJob} = jobSlice.actions;
export default jobSlice.reducer;
// https://jobify-prod.herokuapp.com/api/v1/toolkit/jobs?status=all&jobType=all&sort=latest&page=1
