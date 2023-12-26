import { Button } from "../assets/styledComponent/Button";
import Nav from "../assets/styledComponent/Nav";
import { IoPersonCircleSharp } from "react-icons/io5";
import { toggleSideBar } from "../features/uiSlice";
import { TfiMenuAlt } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import Language from "./Language";
import Row from "../assets/styledComponent/Row";

import { useTranslation } from "react-i18next";
useTranslation
const Navbar = () => {
  const {t}=useTranslation()
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSideBar = () => {
    dispatch(toggleSideBar());
  };
  return (
    <Nav>
      <TfiMenuAlt className="menubar" onClick={handleSideBar} />
      <h2>{t('dashboard')}</h2>
      <Row type='horizontal' $colGap='12px'>
        <Language></Language>
        <Button
          className="align-self-center position-relative"
          backgroundColor="--primary-500"
          padding="6px 18px"
          color="--white"
          fontSize="18px"
          borderRadius="4px"
          gap="8px"
          onClick={() => setShowLogout(!showLogout)}
        >
          <IoPersonCircleSharp />
          {user ? user.name : ""}
          <Button
            className={`${showLogout ? "d-block" : "d-none"}`}
            backgroundColor="--primary-300"
            padding="12px 18px"
            color="--white"
            fontSize="18px"
            borderRadius="4px"
            $absolute="true"
            $left="0"
            $bottom="-50px"
            onClick={() => {
              dispatch(logout()), navigate("/landing");
            }}
          >
            {t('logout')}
          </Button>
        </Button>
      </Row>
    </Nav>
  );
};

export default Navbar;
