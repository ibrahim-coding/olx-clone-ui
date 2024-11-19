import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  let user = JSON.parse(localStorage.getItem("auth"));

  console.log(user);

  return <Outlet />;
};

export default ProtectedLayout;
