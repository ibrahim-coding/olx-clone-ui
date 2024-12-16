import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
const ProtectedLayout = () => {
  let user = JSON.parse(localStorage.getItem("auth"));

  return (

    <Navbar>
      <Outlet />
    </Navbar>

  );
};

export default ProtectedLayout;
