import MobileNavbar from "components/Navbar/MobileNavbar";
import React from "react";

const MobileLayout = ({ children }) => {
  return (
    <>
      <MobileNavbar />
      <div>{children}</div>
    </>
  );
};

export default MobileLayout;
