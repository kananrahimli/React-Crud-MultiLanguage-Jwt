import Error from "./pages/Error";
import Landing from "./pages/Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./layout/Layout";
import Stats from "./pages/dashboard/Stats";
import Alljobs from "./pages/dashboard/Alljobs";
import AddJob from "./pages/dashboard/AddJob";
import Profile from "./pages/dashboard/Profile";

import Backdrop from "./components/backdrop";
import ProtectedRoute from "./layout/ProtectedRoute";

import './utils/i18n'

export default function App() {

  
  return (
    <Router>
      <ToastContainer position="top-center" />
      <Backdrop></Backdrop>
      <Routes>
  
        <Route path="/" element={<ProtectedRoute ><Layout></Layout></ProtectedRoute>}>
          <Route index element={<Navigate to="/stats" />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/alljobs" element={<Alljobs />} />
          <Route path="/addjob" element={<AddJob />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
