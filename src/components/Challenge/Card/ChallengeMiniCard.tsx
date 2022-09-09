import React from "react";
import COLOR from "constants/color";
import FlexTextBox from "components/common/FlexTextBox";
import BannerBox from "components/common/BannerBox";
import ChallengeFigure from "components/Challenge/ChallengeFigure";

interface Props {
  title: string;
  description: string;
}

const ChallengeMiniCard = (props: Props) => {
  const { title, description } = props;
  return (
    <BannerBox
      width="100%"
      height="9.25rem"
      padding="1.2rem 1.5rem 1.2rem 1.5rem"
      borderRadius="1.25rem"
      theme="secondary"
      margin="0"
    >
      <FlexTextBox
        fontSize="1.25rem"
        margin="0.2rem 0 0.5rem 0"
        color={COLOR.font.primary}
      >
        {title}
      </FlexTextBox>

      <ChallengeFigure proverCnt={10} point={100} />
      <FlexTextBox fontSize="1rem" margin="0.4rem 0 0 0">
        {description}
      </FlexTextBox>
    </BannerBox>
  );
};

export default ChallengeMiniCard;
