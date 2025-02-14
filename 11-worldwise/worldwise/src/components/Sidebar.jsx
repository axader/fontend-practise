import AppNav from "./AppNav";
import style from "./Sidebar.module.css";
import Logo from "./Logo";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />

      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default Sidebar;
