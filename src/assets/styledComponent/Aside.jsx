import { styled } from "styled-components";

const Aside = styled.aside`
  border-right: 1px solid #eaeaea;
  background-color: var(--white) !important;
  transition: all .3s;
  &.hidden{
   margin-left: -250px;
  }
  @media screen and (max-width: 992px) {
    height: 100vh;
    border: 1px solid #eaeaea;
    box-shadow: var(--shadow-2);
    position: fixed;
    height: 90vh;
    width: 90vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    transition: all .3s;
    &.hidden{
    margin-left: 0px;
    opacity  :0 ;
    transform: scale(0);
    }

    
  }

  a {
    transition: 0.3s;
    cursor: pointer;
    width: 100%;
    display: block;
    padding: 16px 0px 16px 36px;
    display: flex;
    align-items: center;
    gap: 10px;
    &:hover ,&:active,&.active{
      background-color: var(--grey-100);
      padding-left: 48px;
      color: #000;

      .icon {
        color: var(--primary-500);
      }
    }
    
    
    .icon {
      color: var(--grey-400);
      font-size: 20px;
      transition: 0.3s;
    }
  }
  
  .close-sidebar{
    display: none;
    @media screen and (max-width:992px) {
      display: block;
      position: absolute;
      left: 20px;
      top: 20px;
      font-size: 40px;
      cursor: pointer;
      color: var(--grey-400);
    }
  }

`;
export default Aside;
