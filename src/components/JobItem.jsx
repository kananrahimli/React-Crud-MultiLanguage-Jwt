import { Button } from "../assets/styledComponent/Button";
import JobCard from "../assets/styledComponent/JobCard";
import Row from "../assets/styledComponent/Row";
import { FaLocationArrow } from "react-icons/fa6";
import { RiSuitcaseLine } from "react-icons/ri";
import { CgCalendarDates } from "react-icons/cg";
import JobInfo from "./JobInfo";
import JobStatus from "./JobStatus";
import moment from 'moment';
import { useDispatch } from "react-redux";
import {  setJob ,deleteJob} from "../features/jobs/jobSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const JobItem = ({jobName,company,jobDate,jobStatus,jobLocation,jobType,job}) => {
  const {t}=useTranslation()
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const updateJob=()=>{
      // dispatch(toggleEditJob())
      navigate('/addJob')
      dispatch(setJob(job))
    }

    const removeJob=()=>{
      dispatch(setJob(job))
      dispatch(deleteJob(job))
    }
  return (
    <JobCard>
      <Row
        type="horizontal"
        className="job-header justify-content-start "
        $colGap="24px"
        $padding="12px 24px"
      >
        <div className="job-first-letter">{company[0]}</div>
        <Row $gap="4px" className="align-items-start">
          <h4 className="job-name">{jobName}</h4>
          <h5 className="job-company">{company}</h5>
        </Row>
      </Row>

      <div className="job-body ">
        <div className="row">
          <div className="col-md-6 ">
            <Row $gap="12px" className="align-items-start">
              <JobInfo icon={<FaLocationArrow/>} text={jobLocation}></JobInfo>
              <JobInfo icon={<RiSuitcaseLine/>} text={t(jobType)}></JobInfo>

              <Row type="horizontal" className="job-action" $colGap="12px">
                <Button
                  color="--green-dark"
                  backgroundColor="--green-light"
                  padding="4px 24px"
                  borderRadius="4px"
                  onClick={updateJob}
                >
                  {t('edit')}
                </Button>
                <Button
                  color="--red-dark"
                  backgroundColor="--red-light"
                  padding="4px 24px"
                  borderRadius="4px"
                  onClick={removeJob}
                >
                    {t('delete')}
                </Button>
              </Row>
            </Row>
          </div>
          <div className="col-md-6 mt-lg-0 mt-4">
            <Row className="align-items-start" $gap='12px'>
              <Row type="horizontal">
              <JobInfo icon={<CgCalendarDates/>} text={moment(jobDate).format('MMMM Do,YYYY')}></JobInfo>
              </Row>
              <JobStatus status={jobStatus} ></JobStatus>
            </Row>
          </div>
        </div>
      </div>
    </JobCard>
  );
};

export default JobItem;
