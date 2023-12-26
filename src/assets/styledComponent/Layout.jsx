import {styled} from 'styled-components'

const LayoutGrid=styled.div`
   @media screen and (min-width: 992px){
    display: grid;
    grid-template-columns: 250px 1fr;
    height: 100vh;
    transition: all .3s;

    &.hideSidebar{
      grid-template-columns: 0px 2fr;
    }
   }
    
`

export default LayoutGrid