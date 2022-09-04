import MobileNavbar from "components/Navbar/MobileNavbar";
import MobileFooter from "components/Footer/MobileFooter";

const MobileLayout = ({ children }) => {
  return (
    <>
      <MobileNavbar />
      <div>{children}</div>
      <MobileFooter />
    </>
  );
};

export default MobileLayout;
