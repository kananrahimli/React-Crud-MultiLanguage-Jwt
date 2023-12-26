import { useDispatch, useSelector } from "react-redux";
import { Button } from "../assets/styledComponent/Button";
import Row from "../assets/styledComponent/Row";
import { useState } from "react";
import { emptyJobs, getAllJobs } from "../features/jobs/jobSlice";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const Pagination = ({ values }) => {
  const {t}=useTranslation()
  const [activePag, setActivePag] = useState(0);
  const dispatch = useDispatch();
  const { numOfPages, jobs } = useSelector((store) => store.job);
  const paginationArray = Array.from(
    { length: numOfPages },
    (_, index) => index
  );

  const handleActivePag = (index) => {
    setActivePag(index);
    dispatch(emptyJobs());
    dispatch(getAllJobs({ ...values, page: index + 1 }));
  };

  return (
    <>
      {numOfPages && jobs?
       (
        <Row type="horizontal" className="mt-5 justify-content-end">
          <Row type="horizontal" $jc="start" $gap="12px" className="flex-wrap">
            <Button
              color="--primary-500"
              backgroundColor="--white"
              padding="10px 20px"
              borderRadius="4px"
              fontSize="18px"
              className="mr-3"
            >
              {t('prew')}
            </Button>
            {paginationArray
              ? paginationArray.map((pagination, index) => (
                  <Button
                    key={pagination}
                    color="--primary-500"
                    backgroundColor="--primary-100"
                    bgColorHover="--primary-500"
                    colorHover="--white"
                    padding="10px 20px"
                    borderRadius="4px"
                    fontSize="18px"
                    onClick={() => handleActivePag(index)}
                    className={`${activePag === index ? "activePag" : ""}`}
                  >
                    {pagination + 1}
                  </Button>
                ))
              : ""}

            <Button
              color="--primary-500"
              backgroundColor="--white"
              padding="10px 20px"
              borderRadius="4px"
              fontSize="18px"
              className="ml-3"
            >
              {t('next')}
            </Button>
          </Row>
        </Row>
      ):''
    }
    </>
  );
};

export default Pagination;
