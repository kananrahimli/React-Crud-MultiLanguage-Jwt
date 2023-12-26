import {styled} from 'styled-components'
 
const CenterDiv = styled.div`
  @media screen and (min-width:992px){
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: calc(100% - 16rem);
  }
`

export default CenterDiv