import NotFound from "../assets/images/not-found.svg";
import { Link } from "../assets/styledComponent/Button";
import Img from "../assets/styledComponent/Img";
import Wrapper from "../assets/styledComponent/LandingPage";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Row from "../assets/styledComponent/Row";

const Error = () => {
  return (
    <Wrapper className="d-flex justify-content-center align-items-center">
      <Row className="text-center">
        <Img src={NotFound} custom='true'/>
        <h1 className="my-4">404 Not found</h1>
        <Link
          to="/"
          color="--black"
          borderRadius="10px"
          fontSize="20px"
          backgroundColor="transparent"
         className='mx-auto'
        >
          <FaLongArrowAltLeft />
          <span className="ml-2">Go back</span>
        </Link>
      </Row>
    </Wrapper>
  );
};

export default Error;
