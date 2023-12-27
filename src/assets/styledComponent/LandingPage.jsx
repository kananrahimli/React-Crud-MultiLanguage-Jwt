import {styled,css} from 'styled-components'

const Wrapper=styled.main`
    
    overflow: hidden;
    padding: 40px 4rem;
    ${(props)=>css`
        background-color: var(${props.$bgColor});
        height: ${props.$height?props.$height:'100vh'};
    `}
    @media screen and (max-width:992px) {
        padding: 40px 2rem;

        }

    img.landing-image{

        
          @media screen and (max-width:992px) {
            display:none;
          }
        
    }

    &.overflow{
        overflow-y:auto;
        max-height:calc(100vh - 115px);
    }
`

export default Wrapper;