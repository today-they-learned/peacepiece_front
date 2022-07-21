import React from "react";
import Navbar from "components/Navbar/Navbar";

const MobileLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default MobileLayout;
