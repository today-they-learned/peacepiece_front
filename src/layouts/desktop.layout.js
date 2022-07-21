import React from "react";
import Navbar from "components/Navbar/Navbar";

const DesktopLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default DesktopLayout;
