// eslint-disable-next-line react/prop-types
const JobInfo = ({icon,text}) => {
  return (
    <div className="job-info">
      <span className="icon">
       {icon}
      </span>
      <span>{text}</span>
    </div>
  );
};

export default JobInfo;
