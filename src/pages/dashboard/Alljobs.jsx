import React from "react";
import JobFilter from "../../components/JobFilter";

import Wrapper from "../../assets/styledComponent/LandingPage";


// import {loading} from '../../features/jobs/jobSlice'
// eslint-disable-next-line react/display-name
const Alljobs = React.memo(() => {
  
  return (
    <>
      <Wrapper  className="overflow">
        <JobFilter></JobFilter>
        
      </Wrapper>
    </>
  );
});

export default Alljobs;
