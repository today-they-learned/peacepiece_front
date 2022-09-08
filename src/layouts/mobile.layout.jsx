import MobileNavbar from "components/Navbar/MobileNavbar";
import MobileFooter from "components/Footer/MobileFooter";
import MaxWidthLayout from "./maxWidth.layout";

const MobileLayout = ({ children }) => {
  return (
    <>
      <MobileNavbar />
      <MaxWidthLayout>{children}</MaxWidthLayout>
      <MobileFooter />
    </>
  );
};

export default MobileLayout;
