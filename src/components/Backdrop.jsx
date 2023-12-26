import BackDropStyled from "../assets/styledComponent/BackDropStyle"
import { useDispatch,useSelector } from 'react-redux';
import { toggleSideBar } from "../features/uiSlice"


const Backdrop = () => {
    const dispatch=useDispatch()
    const {showSideBar}=useSelector((store)=>store.ui)
    const showBackdrop=()=>{
        dispatch(toggleSideBar())
    }

  return (
    <BackDropStyled className={`${!showSideBar?'hide':''}`} onClick={showBackdrop}></BackDropStyled>
  )
}

export default Backdrop