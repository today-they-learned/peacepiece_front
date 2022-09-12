import { Link } from "react-router-dom";
import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import { ChallengeType } from "types";
import styled from "styled-components";
import ChallengeFigure from "../ChallengeFigure";

interface Props {
  challenge: ChallengeType;
}

const Description = styled.div`
  width: 100%;
  margin: 0.5rem 0 0 0;
  height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: ${COLOR.white};
  font-family: "Pr-SemiBold";
`;

const WeeklyChallengeCard = ({ challenge }: Props) => {
  return (
    <div style={{ flex: "1 1 0" }}>
      <Link to={`/challenge/${challenge.id}`}>
        <FlexBox
          column
          width="100%"
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
          <Description>{challenge.description}</Description>
        </FlexBox>
      </Link>
    </div>
  );
};

export default WeeklyChallengeCard;
