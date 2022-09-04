import { useMediaQuery } from "react-responsive";
import DesktopLayout from "./desktop.layout";
import MobileLayout from "./mobile.layout";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop && <DesktopLayout>{children}</DesktopLayout>;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile && <MobileLayout>{children}</MobileLayout>;
};

const ResponsiveLayout = ({ children }) => {
  return (
    <>
      <Desktop>{children}</Desktop>
      <Mobile>{children} </Mobile>
    </>
  );
};

export default ResponsiveLayout;
