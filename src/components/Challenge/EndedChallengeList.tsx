import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FlexBox, FlexTextBox } from "components/common";
import { Divider } from "semantic-ui-react";
import { ChallengeFigure } from "components/Challenge";
import COLOR from "constants/color";
import { ChallengeType } from "types";

interface Props {
  challenges: ChallengeType[];
}

const EndedChallengeList = (props: Props) => {
  const { challenges } = props;

  return (
    <FlexBox column background={COLOR.bg.primary}>
      {challenges?.map((challenge) => {
        return (
          <Fragment key={`ended_Challenge_${challenge.id}`}>
            <Divider style={{ width: "21rem", margin: "0.6rem 0 " }} />
            <Link to={`/challenge/${challenge.id}`}>
              <FlexBox
                column
                key={challenge.id}
                padding="0 0.5rem"
                background={COLOR.bg.primary}
              >
                <FlexTextBox fontSize="0.95rem">{challenge.title}</FlexTextBox>
                <ChallengeFigure
                  proverCnt={challenge.prover_cnt}
                  point={challenge.point}
                  background={COLOR.bg.primary}
                />
              </FlexBox>
            </Link>
          </Fragment>
        );
      })}
      <Divider style={{ width: "21rem", margin: "0.5rem 0 0.5rem -0.5rem" }} />
    </FlexBox>
  );
};

export default EndedChallengeList;
