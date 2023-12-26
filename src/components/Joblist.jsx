import JobItem from "./JobItem";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import { useTranslation } from "react-i18next";

const Joblist = () => {
  const {t}=useTranslation()
  const { jobs ,totalJobs} = useSelector((store) => store.job);
  const { allJobloading } = useSelector((store) => store.job);
  return (
    <>
      {jobs && (
        <h3 className="mt-4">
          {jobs == 1
            ? `${jobs.length} ${t('job') } ${t('found')} `
            : jobs.length >=1
            ? `${totalJobs} ${t('job') } ${t('found')} `
            : `${t('jobNotFound')}`}
        </h3>
      )}
      <div
        className={`row position-relative mt-4  ${allJobloading ? "py-5" : ""}`}
      >
        {allJobloading ? (
          <Loading></Loading>
        ) : jobs ? (
          jobs.map((job) => (
            <div className="col-lg-6 mb-4" key={job._id}>
              <JobItem
                jobName={job.position}
                jobStatus={job.status}
                jobDate={job.createdAt}
                jobLocation={job.jobLocation}
                jobType={job.jobType}
                company={job.company}
                job={job}
              ></JobItem>
            </div>
          ))
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Joblist;
