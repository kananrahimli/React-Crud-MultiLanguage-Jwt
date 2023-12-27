import { styled } from "styled-components";
import Row from "./Row";
import { TbDeviceImacCancel } from "react-icons/tb";
import { MdPendingActions } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { useTranslation } from "react-i18next";
const StatCard = styled.div`
  background-color: white;
  padding: 16px 24px;
  border-radius: 10px;
  height: 100%;
  h5 {
    font-size: 24px;
    font-weight: 300;
  }
  .count {
    font-size: 40px;
  }

  .icon{
    padding: 0 16px;
  }
  &.pending {
    border-bottom: 8px solid var(--yellow-light);

    .count {
      color: var(--yellow-dark);
      .icon {
        background-color: var(--yellow-light);
      }
    }
  }
  &.declined {
    border-bottom: 8px solid var(--red-light);

    .count {
      color: var(--red-dark);
      .icon {
        background-color: var(--red-light);
      }
    }
  }
  &.interview {
    border-bottom: 8px solid var(--green-light);

    .count {
      color: var(--green-dark);
      .icon {
        background-color: var(--green-light);
      }
    }
  }
`;

// eslint-disable-next-line react/prop-types
const StatsCardItem = ({ status, count }) => {
  const {t}=useTranslation()
  return (
    <div className="col-lg-4 col-md-6">
      <StatCard className={`${status} `}>
        <Row $gap="20px" className="align-items-start justify-content-between h-100">
          <Row type="horizontal" className={`w-100 count`}>
            <span className="">{count}</span>
            <div className="icon">
              {status === "pending" ? (
                <MdPendingActions></MdPendingActions> // Replace 'PendingIcon' with the actual component or element for the pending status
              ) : status === "approved" ? (
                <BiSolidOffer /> // Replace 'ApprovedIcon' with the actual component or element for the approved status
              ) : (
                <TbDeviceImacCancel></TbDeviceImacCancel> // Replace 'OtherStatusIcon' with the actual component or element for other statuses
              )}
            </div>
          </Row>
          <h5>{`${t(status + 'Applications')}`}</h5>
        </Row>
      </StatCard>
    </div>
  );
};

export default StatsCardItem;
