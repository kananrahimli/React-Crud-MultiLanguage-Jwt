import Aside from "../assets/styledComponent/Aside";
import Logo from "../assets/images/logo.svg";
import Img from "../assets/styledComponent/Img";
import Row from "../assets/styledComponent/Row";
import { Link } from "../assets/styledComponent/Button";
import { IoStatsChart } from "react-icons/io5";
import { MdAddCard } from "react-icons/md";
import { LuWalletCards } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { toggleSideBar } from "../features/uiSlice";
import { useTranslation } from "react-i18next";


const Sidebar = () => {
  const {t}=useTranslation()
  const { showSideBar } = useSelector((store) => store.ui);
  const dispatch = useDispatch();
  const closeMobileSideBar = () => {
    
    if (window.innerWidth < 992) {
      dispatch(toggleSideBar());
    }
  };
  return (
    <Aside className={`p-3 ${!showSideBar ? "hidden" : ""}`}>
      <IoMdClose
        className="close-sidebar"
        onClick={() => dispatch(toggleSideBar())}
      />
      <Row $gap="50px" className="">
        <div>
          <Img src={Logo} alt="" />
        </div>
        <Row className="" $width="100%">
          <Link
            to="/stats"
            color="--grey-500"
            onClick={() => closeMobileSideBar()}
            fontSize="18px"
            colorHover="black"
          >
            <IoStatsChart className="icon" />
            {t('statistic')}
          </Link>

          <Link
            to="/alljobs"
            color="--grey-500"
            onClick={() => closeMobileSideBar()}
            fontSize="18px"
          >
            <MdAddCard className="icon"></MdAddCard>{t('allJob')}
          </Link>

          <Link
            to="/addjob"
            color="--grey-500"
            onClick={() => closeMobileSideBar()}
            fontSize="18px"
          >
            <LuWalletCards className="icon"></LuWalletCards>{t('addJob')}
          </Link>

          <Link
            to="/profile"
            color="--grey-500"
            onClick={() => closeMobileSideBar()}
            fontSize="18px"
          >
            <CgProfile className="icon"></CgProfile>{t('profile')}
          </Link>
        </Row>
      </Row>
    </Aside>
  );
};

export default Sidebar;
