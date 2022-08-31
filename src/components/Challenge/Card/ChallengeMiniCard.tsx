import React from "react";
import COLOR from "constants/color";
import FlexTextBox from "components/common/FlexTextBox";
import BannerBox from "components/common/BannerBox";
import ChallengeFigure from "components/Challenge/ChallengeFigure";

interface Props {
  title: string;
  content: string;
}

const ChallengeMiniCard = (props: Props) => {
  const { title, content } = props;
  return (
    <BannerBox
      width="21.4rem"
      height="9.25rem"
      padding="1.2rem 1.5rem 1.2rem 1.5rem"
      borderRadius="1.25rem"
      theme="secondary"
    >
      <FlexTextBox
        fontSize="1.25rem"
        margin="0.2rem 0 0.5rem 0"
        color={COLOR.font.primary}
      >
        {title}
      </FlexTextBox>

      <ChallengeFigure person={10} point={100} />
      <FlexTextBox fontSize="1rem" margin="0.4rem 0 0 0">
        {content}
      </FlexTextBox>
    </BannerBox>
  );
};

export default ChallengeMiniCard;
