import Img from "../assets/styledComponent/Img";
import Wrapper from "../assets/styledComponent/LandingPage";
import Row from "../assets/styledComponent/Row";
import Logo from "../assets/images/logo.svg";
import { useEffect, useState } from "react";
import { Button } from "../assets/styledComponent/Button";
import InputElement from "../components/Input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useTranslation } from "react-i18next";
const InitialState = {
  name: "",
  email: "",
  password: "",
};
const Register = () => {
  const {t}= useTranslation()
  const navigate = useNavigate();
  const [regsiter, setRegister] = useState(false);
  const [values, setValues] = useState(InitialState);
  const { user, loading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const toggleRegister = () => {
    setValues(InitialState);
    setRegister(!regsiter);
  }

  useEffect(() => {
   
    if(user){
      navigate('/')
    }
  }, [user])

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { email, name, password } = values;
    if (!email || !password || (!name && regsiter)) {
      toast.error(t('fillAllField'));
      return;
    }
    if (regsiter) {
      dispatch(registerUser({ name, email, password })).then((res) => {
        const { user } = res.payload;
        if (user) {
          navigate("/");
        }
      });
      return;
    }
    dispatch(
      loginUser({ email, password })
    ).then((res) => {
      const { user } = res.payload;
      if (user) {
        navigate("/");
      }
    })
  };

  if (regsiter) {
    return (
      <Wrapper className="d-flex justify-content-center align-items-center p-0">
        <Row
          $backGround="white"
          $gap="14px"
          $padding="24px 32px"
          $borderRadius="16px"
          $shadow="--shadow-2"
          $maxWidth="500px"
          $width="90vw"
        >
          <Img src={Logo} $width="200px" $maxWidth="80%"></Img>
          <h3 className="mt-3">{t('register')}</h3>
          <InputElement
            type="text"
            label={t("name")}
            name="name"
            handleInput={handleInput}
            value={values.name}
          ></InputElement>
          <InputElement
            type="email"
            label={t("email")}
            name="email"
            handleInput={handleInput}
            value={values.email}
          ></InputElement>
          <InputElement
            type="password"
            label={t("password")}
            name="password"
            value={values.password}
            handleInput={handleInput}
          ></InputElement>
          <Button
            color="--primary-50"
            borderRadius="8px"
            padding="8px 20px"
            fontSize="16px"
            backgroundColor="--primary-600"
            width="100%"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? `${t('submit')}...` : `${t('submit')}`}
          </Button>
          <span className="d-flex align-items-center">
            {t('haveYouAccount')}
            <Button
              backgroundColor="--transparent"
              color="--primary-600"
              onClick={toggleRegister}
              className="align-self-center"
            >
              {t('login')}
            </Button>
          </span>
        </Row>
      </Wrapper>
    );
  }
  return (
    <Wrapper className="d-flex justify-content-center align-items-center p-0">
      <Row
        $backGround="white"
        $gap="20px"
        $padding="24px 32px"
        $borderRadius="16px"
        $shadow="--shadow-2"
        $maxWidth="500px"
        $width="90vw"
      >
        <Img src={Logo} $width="200px" $maxWidth="80%"></Img>
        <h3 className="mt-3" onClick={toggleRegister}>
          {t('login')}
        </h3>
        <InputElement
          type="email"
          label={t("email")}
          name="email"
          handleInput={handleInput}
          value={values.email}
        ></InputElement>
        <InputElement
          type="password"
          label={t("password")}
          name="password"
          value={values.password}
          handleInput={handleInput}
        ></InputElement>
        <Button
          color="--primary-50"
          borderRadius="8px"
          padding="8px 20px"
          fontSize="16px"
          backgroundColor="--primary-600"
          width="100%"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? `${t('submit')}...` : `${t('submit')}`}
        </Button>
        <span className="d-flex align-items-center">
        {t('notAccount')}
          <Button
            backgroundColor="--transparent"
            color="--primary-600"
            onClick={toggleRegister}
            className="align-self-center"
          >
            {t('register')}
          </Button>
        </span>
      </Row>
    </Wrapper>
  );
};

export default Register;
