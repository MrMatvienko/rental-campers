import { Outlet } from "react-router-dom";
import Header from "../componets/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
