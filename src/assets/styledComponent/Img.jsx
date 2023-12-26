import { styled, css } from "styled-components";

const Img = styled.img`
  ${(props) =>
    css`
    width:${props.$width};
    max-width:${props.$maxWidth};
    `}
  ${(props) =>
    props.full == "true" &&
    css`
      width: 100%;
      height: 100%;
      object-fit: cover;
    `}

  ${(props) =>
    props.custom == "true" &&
    css`
      width: 90vw;
      max-width: 600px;
    `}
`;

export default Img;
