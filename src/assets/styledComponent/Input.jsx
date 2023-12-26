import {styled,css} from 'styled-components'

const Input =styled.input`
    ${(props)=>css`
        width: ${props?.$width};
        padding: ${props?.$padding};
        border-radius: ${props?.$borderRadius};
        border: ${props?.$border};
        margin: ${props.$margin};
        background-color: ${props.background};
       
    `}
`



const Select=styled.select`
     ${(props)=>css`
        width: ${props?.$width};
        padding: ${props?.$padding};
        border-radius: ${props?.$borderRadius};
        border: ${props?.$border};
        margin: ${props.$margin};
        background-color: ${props.background};
       
    `}
`
export {Input,Select} 
