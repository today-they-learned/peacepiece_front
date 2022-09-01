import { Link } from "react-router-dom";
import { BannerBox, FlexBox, FlexTextBox } from "components/common";
import { ChallengeTitle } from "components/Challenge";
import COLOR from "constants/color";

interface Props {
  children: React.ReactNode;
  title: string;
  tooltip?: string;
  url?: string;
  theme?: string;
  width?: string;
  background?: string;
}

const defaultProps = {
  tooltip: "",
  url: "",
  theme: "default",
  width: "24.5rem",
  background: COLOR.bg.primary,
};

export const ChallengeBanner = (props: Props) => {
  const { children, title, tooltip, url, theme, width, background } = props;
  return (
    <BannerBox theme={theme} width={width}>
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
