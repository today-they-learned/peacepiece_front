import DesktopNavbar from "components/Navbar/DesktopNavbar";
import DesktopFootbar from "components/Footbar/DesktopFootbar";
import styled from "styled-components";

const ChildrenContainer = styled.div`
  margin: 6rem 0 0 0;
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
