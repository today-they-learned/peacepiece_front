import React from "react";
import DesktopNavbar from "components/Navbar/DesktopNavbar";

const DesktopLayout = ({ children }) => {
  return (
    <>
      <DesktopNavbar />
      <div>{children}</div>
    </>
  );
};

export default DesktopLayout;
