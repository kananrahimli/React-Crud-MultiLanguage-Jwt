import React, { useEffect, useState } from "react";

import PageContainer from "../assets/styledComponent/PageContainer";
import SelectBox from "../components/SelectBox";
import InputElement from "../components/Input";
import Row from "../assets/styledComponent/Row";
import { Button } from "../assets/styledComponent/Button";
import { useSelector, useDispatch } from "react-redux";
import { emptyJobs, getAllJobs } from "../features/jobs/jobSlice";
import Joblist from "./Joblist";
import Pagination from "./Pagination";
import { useTranslation } from "react-i18next";

const initialState = {
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  search: "",
  page: 1,
};

// eslint-disable-next-line react/display-name
const JobFilter = React.memo(() => {
  const {t}=useTranslation()
  const [mounted, setMounted] = useState(false);
  const [values, setValues] = useState(initialState);
  const { types, status, sort, jobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    dispatch(emptyJobs());
  };

  useEffect(() => {
    dispatch(getAllJobs({ ...values }));
    return ()=>{
      dispatch(emptyJobs())
    }
  }, [values]);

  const clearFilters = () => {
    setValues({ ...initialState });
    dispatch(emptyJobs());
  };
  return (
    <>
      <PageContainer>
        <h2>{t("search")}</h2>
        <Row
          type="horizontal"
          $jc="baseline"
          $gap="12px"
          className="row w-100 "
        >
          <div className="col-md-4">
            <InputElement
              handleInput={handleInput}
              name="search"
              label={t("search")}
              value={values.search}
              type="text"
            ></InputElement>
          </div>
          <div className="col-md-4">
            <SelectBox
              handleInput={handleInput}
              name="searchStatus"
              label={t("status")}
              value={values.searchStatus}
              options={status}
            ></SelectBox>
          </div>
          <div className="col-md-4">
            <SelectBox
              handleInput={handleInput}
              name="searchType"
              label={t("type")}
              value={values.searchType}
              options={types}
            ></SelectBox>
          </div>
          <div className="col-md-4">
            <SelectBox
              handleInput={handleInput}
              name="sort"
              label={t("sort")}
              value={values.sort}
              options={sort}
            ></SelectBox>
          </div>
          <div className="col-md-4 mt-auto">
            <Button
              className=""
              backgroundColor="--red-light"
              padding="8px 18px"
              color="--red-dark"
              fontSize="18px"
              borderRadius="4px"
              width="100%"
              onClick={() => clearFilters()}
            >
              {/* {loading?'Saving...':'Save changes'} */}
              {t("clear")}
            </Button>
          </div>
        </Row>
      </PageContainer>
      <Joblist></Joblist>
      <Pagination values={values}></Pagination>
    </>
  );
});

export default JobFilter;
