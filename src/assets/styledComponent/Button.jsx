import { styled, css } from "styled-components";
import { NavLink } from "react-router-dom";
const Button = styled.button`
  ${(props) => css`
    background-color: var(${props.backgroundColor});
    padding: ${props?.padding};
    color: var(${props.color});
    border-radius: ${props?.borderRadius};
    font-size: ${props?.fontSize};
    width: ${props?.width};
    align-self: baseline;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${props?.gap};
    position: relative;
    transition: all .3s;
    &:hover {
      color: var(${props?.colorHover});
      background-color: var(${props.bgColorHover});
    }

    &.activePag {
      color: var(${props?.colorHover});
      background-color: var(${props.bgColorHover});
    }

    ${(props)=>props.$absolute=='true'?css`
    
      position: absolute;
      width: 100%;
      left: ${props.$left};
      top: ${props.$top};
      bottom: ${props.$bottom};

      right: ${props.$right};


    `:''}
  `}
 
`;
const Link = styled(NavLink)`
  ${(props) => css`
    background-color: var(${props.backgroundColor});
    padding: ${props?.padding};
    color: var(${props.color});
    border-radius: ${props?.borderRadius};
    font-size: ${props?.fontSize};
    width: ${props?.width};
    align-self: baseline;
    border: none;
    outline: none;
    transition: .3s;
    &:hover {
      text-decoration: none;
      color: var(${props?.colorHover});
    }
  `}
`;

export { Button, Link };
