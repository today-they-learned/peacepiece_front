import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import ChallengeFigure from "../ChallengeFigure";

interface Props {
  title: string;
  description: string;
  proverCnt: number;
  point: number;
}

const WeeklyChallengeCard = (props: Props) => {
  const { title, description, proverCnt, point } = props;
  return (
    <FlexBox
      column
      width="21.3rem"
      height="9.25rem"
      borderRadius="1.25rem"
      background={COLOR.bg.secondary}
      padding="1.2rem 1.5rem"
    >
      <FlexTextBox
        fontSize="1.25rem"
        fontFamily="Pr-SemiBold"
        color={COLOR.font.primary}
        margin="0 0 0.5rem 0"
      >
        {title}
      </FlexTextBox>
      <ChallengeFigure proverCnt={proverCnt} point={point} />
      <FlexTextBox margin="0.5rem 0 0 0">{description}</FlexTextBox>
    </FlexBox>
  );
};

export default WeeklyChallengeCard;
