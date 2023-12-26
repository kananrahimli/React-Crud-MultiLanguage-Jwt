import {  useState } from "react";
import Wrapper from "../../assets/styledComponent/LandingPage";
import PageContainer from "../../assets/styledComponent/PageContainer";
import InputElement from "../../components/Input";
import { useSelector ,useDispatch} from "react-redux";
import { Button } from "../../assets/styledComponent/Button";
import {toast} from 'react-toastify';
import { updateUser } from "../../features/user/userSlice";
import Row from "../../assets/styledComponent/Row";

import { useTranslation } from "react-i18next";

const Profile = () => {
  const { user,loading } = useSelector((store) => store.user);
  const {t}=useTranslation()
  const dispatch=useDispatch()
  const [profileInfo, setProfileInfo] = useState({
    name: user ? user.name : "",
    lastName: user ? user.lastName : "",
    email: user ? user.email : "",
    location: user ? user.location : "",
  });
  const handleInput = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };



  const submit=()=>{
    const {name,lastName,location,email} =profileInfo
    if(name && lastName && location && email){
      //Validation ugurludusa isini gor 
      dispatch(updateUser({name,lastName,location,email}))
      return
    } else{
      toast.warning(t('fillAllField'))
    }
  }

  return (
    <Wrapper $height="auto">
      <PageContainer className="profile-wrapper">
       
          <h2>{t('profile')}</h2>
          <Row type='horizontal' $jc='baseline' $gap='12px' className="row  w-100 algin-items-center">
            <div className="col-md-4">
              <InputElement
                type="text"
                label={t('name')}
                name="name"
                handleInput={handleInput}
                value={profileInfo.name}
              ></InputElement>
            </div>
            <div className="col-md-4">
              <InputElement
                type="text"
                label={t('lastName')}
                name="lastName"
                handleInput={handleInput}
                value={profileInfo.lastName}
              ></InputElement>
            </div>
            <div className="col-md-4">
              <InputElement
                type="email"
                label={t('email')}
                name="email"
                handleInput={handleInput}
                value={profileInfo.email}
              ></InputElement>
            </div>
            <div className="col-md-4">
              <InputElement
                type="text"
                label={t('location')}
                name="location"
                handleInput={handleInput}
                value={profileInfo.location}
              ></InputElement>
            </div>
            <div className="col-md-4 mt-auto">
            <Button
                className=""
                backgroundColor="--primary-500"
                padding="8px 18px"
                color="--white"
                fontSize="18px"
                borderRadius="4px"
                width='100%'
                onClick={() => submit()}
              >
                {loading?`${t('save')}...`:`${t('save')}`}
              </Button>
            </div>
          </Row>
       
      </PageContainer>
    </Wrapper>
  );
};

export default Profile;
