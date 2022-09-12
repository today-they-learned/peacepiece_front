import { Link } from "react-router-dom";
import { BannerBox, FlexBox, FlexTextBox } from "components/common";
import { ChallengeTitle } from "components/Challenge";
import COLOR from "constants/color";
import { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
  title: string;
  titleColor?: string;
  tooltip?: string | ReactNode;
  url?: string;
  theme?: string;
  width?: string;
  height?: string;
  background?: string;
  margin?: string;
  padding?: string;
  widthTablet?: string;
  widthMobile?: string;
}

const defaultProps = {
  tooltip: "",
  url: "",
  theme: "default",
  titleColor: "white",
  width: "24.5rem",
  height: "auto",
  background: COLOR.bg.primary,
  margin: "0",
  padding: "1.5rem",
  widthTablet: "100%",
  widthMobile: "100%",
};

export const ChallengeBanner = (props: Props) => {
  const {
    children,
    title,
    titleColor,
    tooltip,
    url,
    theme,
    width,
    height,
    background,
    margin,
    padding,
    widthTablet,
    widthMobile,
  } = props;
  return (
    <BannerBox
      theme={theme}
      width={width}
      height={height}
      margin={margin}
      padding={padding}
      widthTablet={widthTablet}
      widthMobile={widthMobile}
    >
      <FlexBox
        justifyContent="space-between"
        alignItems="flex-start"
        background={background}
      >
        <ChallengeTitle
          title={title}
          toolTipContent={tooltip}
          background={background}
          color={titleColor}
        />
        {url && (
          <Link to={url}>
            <FlexTextBox
              margin="0 0 0 4px"
              width="66px"
              fontSize="0.95rem"
              fontFamily="Pr-Regular"
            >
              전체보기 {">"}
            </FlexTextBox>
          </Link>
        )}
      </FlexBox>
      {children}
    </BannerBox>
  );
};
ChallengeBanner.defaultProps = defaultProps;

export default ChallengeBanner;
