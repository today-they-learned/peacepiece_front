import { useMediaQuery } from "react-responsive";

export const Desktop = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

export const Tablet = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? children : null;
};

export const Mobile = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

// export default { Desktop, Tablet, Mobile };
