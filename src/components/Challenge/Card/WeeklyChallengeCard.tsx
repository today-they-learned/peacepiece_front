import { FlexBox, FlexTextBox } from "components/common";
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
    <FlexBox column width="21.3rem" height="9.25rem" borderRadius="1.25rem">
      <FlexTextBox>{title}</FlexTextBox>
      <ChallengeFigure proverCnt={proverCnt} point={point} />
      <FlexTextBox>{description}</FlexTextBox>
    </FlexBox>
  );
};

export default WeeklyChallengeCard;
