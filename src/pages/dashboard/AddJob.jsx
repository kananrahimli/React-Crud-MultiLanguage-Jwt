import { useEffect, useState } from "react";
import Wrapper from "../../assets/styledComponent/LandingPage";
import PageContainer from "../../assets/styledComponent/PageContainer";
import InputElement from "../../components/Input";
import SelectBox from "../../components/SelectBox";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../assets/styledComponent/Button";
import Row from "../../assets/styledComponent/Row";
import { createJob, editJob, emptyJobs, setJob } from "../../features/jobs/jobSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const initialState = {
  position: "",
  company: "",
  status: "pending",
  jobType: "full-time",
  jobLocation: "",
};
const AddJob = () => {
  const {t}=useTranslation()
  const navigate = useNavigate();
  const { status, types, allJobloading, job } = useSelector(
    (store) => store.job
  );
  const [values, setValues] = useState({
    ...initialState,
    company: job ? job.company : "",
    position: job ? job.position : "",
    status: job ? job.status : "",
    jobType: job ? job.jobType : "",
    jobLocation: job ? job.jobLocation : "",
    jobId:job? job._id : "",
  });
  const dispatch = useDispatch();
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
 
  }, [])
  

  const submit = () => {
  
    if (job) {
      dispatch(editJob(values)).then((res) => {
      
       if(!res.error){
        dispatch(emptyJobs())
        navigate("/alljobs");
       }
      }).then(()=>{
        dispatch(setJob(null))
      })
      return
    }
    dispatch(createJob(values)).then((res) => {
      if(!res.error){
        dispatch(emptyJobs())
        navigate("/alljobs");
       }
    });
  };
  const clear = () => {};

  return (
    <Wrapper $height="auto">
      <PageContainer>
        <h2>{!job? `${t('addJob')}` : `${t('edit')}`}</h2>
        <Row
          type="horizontal"
          $gap="18px"
          className="row w-100 align-items-center"
        >
          <div className="col-lg-4">
            <InputElement
              label={`${t('position')}`}
              type={"text"}
              name={"position"}
              handleInput={handleInput}
              value={values.position}
            ></InputElement>
          </div>
          <div className="col-lg-4">
            <InputElement
               label={`${t('company')}`}
              type={"text"}
              name={"company"}
              handleInput={handleInput}
              value={values.company}
            ></InputElement>
          </div>
          <div className="col-lg-4">
            <InputElement
               label={`${t('location')}`}
              type={"text"}
              name={"jobLocation"}
              handleInput={handleInput}
              value={values.jobLocation}
            ></InputElement>
          </div>
          <div className="col-lg-4">
            <SelectBox
               label={`${t('status')}`}
              value={values.status}
              handleInput={handleInput}
              name={"status"}
              options={status}
            ></SelectBox>
          </div>
          <div className="col-lg-4">
            <SelectBox
               label={`${t('position')}`}
              value={values.jobType}
              handleInput={handleInput}
              name={"jobType"}
              options={types}
            ></SelectBox>
          </div>
          <div className="col-lg-2 mt-auto">
            <Button
              className=""
              backgroundColor="--primary-500"
              padding="9px 18px"
              color="--white"
              fontSize="18px"
              borderRadius="4px"
              width="100%"
              onClick={() => submit()}
            >
              {job
                ? allJobloading
                  ? t('update') +'...'
                  : t('update')
                : allJobloading
                ? t('submit') +'...'
                : t('submit')}
            </Button>
          </div>
          <div className="col-lg-2 mt-auto ">
            <Button
              className=""
              backgroundColor="--red-light"
              padding="9px 18px"
              color="--red-dark"
              fontSize="18px"
              borderRadius="4px"
              width="100%"
              onClick={() => clear()}
            >
              {t('clear')}
            </Button>
          </div>
        </Row>
      </PageContainer>
    </Wrapper>
  );
};

export default AddJob;
