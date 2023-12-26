import {styled,css} from 'styled-components'

const Row =styled.div`
    display: flex;
    ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: ${props.$jc?props.$jc:'space-between'};
      align-items: center;
      row-gap:${props?.$gap};
      column-gap:${props?.$colGap};
      padding: ${props?.$padding};
      

      @media screen and (max-width:992px){
        flex-wrap: wrap;
      }
    `}
    ${(props) =>
    props.type === "vertical" &&
    css`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props?.$backGround};
    padding: ${props?.$padding};
    border-radius: ${props?.$borderRadius};
    box-shadow: var(${props?.$shadow});
    max-width: ${props?.$maxWidth};
    width: ${props?.$width};
    gap:${props?.$gap};
    `}


    
   
`
Row.defaultProps={
    type:"vertical"
}

export default Row;