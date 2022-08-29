import MobileNavbar from "components/Navbar/MobileNavbar";
import MobileFootbar from "components/Footbar/MobileFootbar";

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
