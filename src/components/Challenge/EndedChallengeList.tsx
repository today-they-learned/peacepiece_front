import { FlexBox, FlexTextBox } from "components/common";
import { Divider } from "semantic-ui-react";
import { ChallengeFigure } from "components/Challenge";
import COLOR from "constants/color";

interface Props {
  challenges: Array<{
    id: number;
    title: string;
    proverCnt: number;
    point: number;
  }>;
}

const EndedChallengeList = (props: Props) => {
  const { challenges } = props;

  return (
    <FlexBox column background={COLOR.bg.primary}>
      {challenges.slice(2).map((challenge) => {
        return (
          <>
            <Divider style={{ width: "21rem", margin: "0.6rem 0 " }} />
            <FlexBox
              column
              key={challenge.id}
              padding="0 0.5rem"
              background={COLOR.bg.primary}
            >
              <FlexTextBox fontSize="0.95rem">{challenge.title}</FlexTextBox>
              <ChallengeFigure
                proverCnt={challenge.proverCnt}
                point={challenge.point}
                background={COLOR.bg.primary}
              />
            </FlexBox>
          </>
        );
      })}
      <Divider style={{ width: "21rem", margin: "0.5rem 0 0.5rem -0.5rem" }} />
    </FlexBox>
  );
};

export default EndedChallengeList;
