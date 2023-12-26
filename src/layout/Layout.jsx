import LayoutGrid from "../assets/styledComponent/Layout"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import {Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Layout = () => {
  const {showSideBar}=useSelector((store)=>store.ui)
  return (
    <LayoutGrid className={`${!showSideBar?'hideSidebar':''}`}>
        <Sidebar></Sidebar>
        <div>
         <Navbar></Navbar>
         <Outlet></Outlet>
        </div>
    </LayoutGrid>
  )
}

export default Layout