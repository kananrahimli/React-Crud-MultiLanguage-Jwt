import {styled} from 'styled-components'

const BackDropStyled=styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.4);
    width: 100%;
    height: 100%;
    z-index: 5;
    display: none;
    @media screen and (max-width:992px){
        display: block;
        &.hide{
            display: none !important;
        }
    }
`

export default BackDropStyled