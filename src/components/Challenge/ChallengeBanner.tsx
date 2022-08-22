import React from "react";
import { Link } from "react-router-dom";
import { BannerBox, FlexBox, FlexTextBox } from "components/common";
import { ChallengeTitle } from "components/Challenge";

interface Props {
  children: React.ReactNode;
  title: string;
  tooltip?: string;
  url?: string;
  theme?: string;
}

const defaultProps = {
  tooltip: "",
  url: "",
  theme: "default",
};

export const ChallengeBanner = (props: Props) => {
  const { children, title, tooltip, url, theme } = props;
  return (
    <BannerBox theme={theme} width="24.5rem">
      <FlexBox
        justifyContent="space-between"
        alignItems="baseline"
        margin="0 0.5rem 1rem 0"
      >
        <ChallengeTitle title={title} toolTipContent={tooltip} />
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