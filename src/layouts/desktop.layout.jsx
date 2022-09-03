import DesktopNavbar from "components/Navbar/DesktopNavbar";
import DesktopFootbar from "components/Footbar/DesktopFootbar";
import styled from "styled-components";
import MaxWidthLayout from "./maxWidth.layout";

const ChildrenContainer = styled.div`
  margin: 6rem 0 0 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DesktopLayout = ({ children }) => {
  return (
    <>
      <DesktopNavbar />
      <ChildrenContainer>
        <MaxWidthLayout>{children}</MaxWidthLayout>
      </ChildrenContainer>
      <DesktopFootbar />
    </>
  );
};

export default DesktopLayout;
