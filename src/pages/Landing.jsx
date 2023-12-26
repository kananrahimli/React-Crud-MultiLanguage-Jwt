import Wrapper from "../assets/styledComponent/LandingPage";
import Logo from "../assets/images/logo.svg";
import LandigImg from "../assets/images/main.svg";
import Row from "../assets/styledComponent/Row";
import { Link } from "../assets/styledComponent/Button";
import Img from "../assets/styledComponent/Img";
import CenterDiv from "../assets/styledComponent/CenterDiv";
import { useTranslation, Trans } from "react-i18next";
import Language from "../components/Language";
export default function Landing() {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <Row type="horizontal">
          <div className="logo">
            <Img src={Logo} alt="" />
          </div>
          <Language></Language>
        </Row>

        <CenterDiv className="mt-5 mt-md-0">
          <Row type="horizontal">
            <Row $gap="30px">
              <h2 className="align-self-baseline">
                <p>
                  {t('job')} {t('app')} <span className="text-primary"> {t('welcome')} </span>
                </p>
              </h2>

              <Trans i18nKey="landingText">
                <p>
                  Crucifix narwhal street art asymmetrical, humblebrag tote bag
                  pop-up fixie raclette taxidermy craft beer. Brunch bitters
                  synth, VHS crucifix heirloom meggings bicycle rights.
                </p>
              </Trans>

              <Link
                to="/register"
                color="--white"
                colorHover="--white"
                borderRadius="10px"
                padding="12px 20px"
                fontSize="20px"
                backgroundColor="--primary-600"
              >
                {t("login")}/{t('register')}
              </Link>
            </Row>
            <Row>
              <Img src={LandigImg} alt="" className="landing-image" />
            </Row>
          </Row>
        </CenterDiv>
      </Wrapper>
    </>
  );
}
