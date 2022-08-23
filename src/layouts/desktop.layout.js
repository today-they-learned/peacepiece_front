
import DesktopNavbar from "components/Navbar/DesktopNavbar";
import DesktopFootbar from "components/Footbar/DesktopFootbar";

import styled from "styled-components";

const ChildrenContainer = styled.div`
  margin-top: 6rem;
`;

const DesktopLayout = ({ children }) => {
  return (
    <>
      <DesktopNavbar />
      <ChildrenContainer>{children}</ChildrenContainer>
      <DesktopFootbar />
    </>
  );
};

export default DesktopLayout;
