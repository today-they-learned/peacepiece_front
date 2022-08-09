import React from "react";
import DesktopNavbar from "components/Navbar/DesktopNavbar";
import DesktopFootbar from "components/Footbar/DesktopFootbar";

const DesktopLayout = ({ children }) => {
  return (
    <>
      <DesktopNavbar />
      <div>{children}</div>
      <DesktopFootbar />
    </>
  );
};

export default DesktopLayout;
