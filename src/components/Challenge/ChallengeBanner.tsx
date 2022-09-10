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
  background?: string;
  padding?: string;
  margin?: string;
  maxWidthTablet?: string;
  widthTablet?: string;
  maxWidthMobile?: string;
  widthMobile?: string;
}

const defaultProps = {
  tooltip: "",
  url: "",
  theme: "default",
  titleColor: "white",
  width: "24.5rem",
  background: COLOR.bg.primary,
  padding: "1.5rem",
  margin: "",
  maxWidthTablet: "0",
  widthTablet: "0",
  maxWidthMobile: "0",
  widthMobile: "0",
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
    background,
    padding,
    margin,
    maxWidthTablet,
    widthTablet,
    maxWidthMobile,
    widthMobile,
  } = props;
  return (
    <BannerBox
      theme={theme}
      width={width}
      padding={padding}
      margin={margin}
      maxWidthTablet={maxWidthTablet}
      widthTablet={widthTablet}
      maxWidthMobile={maxWidthMobile}
      widthMobile={widthMobile}
    >
      <FlexBox
        justifyContent="space-between"
        alignItems="baseline"
        margin="0 0.5rem 1rem 0"
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
            <FlexTextBox fontSize="0.95rem" fontFamily="Pr-Regular">
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
