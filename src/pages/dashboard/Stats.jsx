import { useEffect } from "react";
import { getAllStats } from "../../features/jobs/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import Row from "../../assets/styledComponent/Row";
import Wrapper from "../../assets/styledComponent/LandingPage";
import StatsCardItem from "../../assets/styledComponent/StatsCardItem";
import Loading from "../../components/Loading";
import Charts from "../../components/Charts";

const Stats = () => {
  const dispatch = useDispatch();
  const {  allStats,allJobloading } = useSelector((store) => store.job);

  useEffect(() => {
    dispatch(getAllStats());
  }, []);

  return (
    <>
      {allJobloading ? (
        <Loading></Loading>
      ) : (
        <Wrapper className="overflow">
          
          <Row type="horizontal" $gap="12px" className="row align-items-stretch">
            {allStats && allStats.map((status, index) => {
              return (
                <StatsCardItem
                  key={index}
                  status={status.status}
                  count={status.count}
                ></StatsCardItem>
              );
            })}
          </Row>
<br /><br /><br />
          <Charts></Charts>
        </Wrapper>
      )}
    </>
  );
};

export default Stats;
