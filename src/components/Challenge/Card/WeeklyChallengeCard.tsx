import { Link } from "react-router-dom";
import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import { ChallengeType } from "types";
import ChallengeFigure from "../ChallengeFigure";

interface Props {
  challenge: ChallengeType;
}

const WeeklyChallengeCard = ({ challenge }: Props) => {
  return (
    <Link to={`/challenge/${challenge.id}`}>
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
          {challenge.title}
        </FlexTextBox>
        <ChallengeFigure
          proverCnt={challenge.prover_cnt}
          point={challenge.point}
        />
        <FlexTextBox margin="0.5rem 0 0 0">{challenge.description}</FlexTextBox>
      </FlexBox>
    </Link>
  );
};

export default WeeklyChallengeCard;
