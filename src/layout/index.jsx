import { Outlet } from "react-router-dom";
import { BannerPicture } from "../common/Banner";
import { Navbar } from "../common/Navbar";

const Layout = () => {
  return (
    <div>
      <p>This is Layout</p>
      <BannerPicture />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
