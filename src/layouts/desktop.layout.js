import React from "react";
import DesktopNavbar from "components/Navbar/DesktopNavbar";

import styled from "styled-components";

const ChildrenContainer = styled.div`
  margin-top: 6rem;
`;

const DesktopLayout = ({ children }) => {
  return (
    <>
      <DesktopNavbar />
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  );
};

export default DesktopLayout;
