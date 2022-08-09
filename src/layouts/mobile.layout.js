import MobileNavbar from "components/Navbar/MobileNavbar";
import MobileFootbar from "components/Footbar/MobileFootbar";
import React from "react";

const MobileLayout = ({ children }) => {
  return (
    <>
      <MobileNavbar />
      <div>{children}</div>
      <MobileFootbar />
    </>
  );
};

export default MobileLayout;
