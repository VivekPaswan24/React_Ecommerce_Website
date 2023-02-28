import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import MainNaviGation from "../components/Header/MainNaviGation";

const RootLayout = () => {
  return <>
    <MainNaviGation/>
    <Outlet/>
    <Footer/>
  </>
};

export default RootLayout;
