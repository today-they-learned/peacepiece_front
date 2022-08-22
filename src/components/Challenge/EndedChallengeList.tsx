import React from "react";
import { FlexBox, FlexTextBox } from "components/common";
import { Divider } from "semantic-ui-react";
import { ChallengeFigure } from "components/Challenge";

interface Props {
  challenges: Array<{
    id: number;
    title: string;
    person: number;
    point: number;
  }>;
}

const EndedChallengeList = (props: Props) => {
  const { challenges } = props;

  return (
    <FlexBox column>
      {challenges.slice(2).map((challenge) => {
        return (
          <>
            <Divider style={{ width: "21rem", margin: "0.6rem 0 " }} />
            <FlexBox column key={challenge.id} padding="0 0.5rem">
              <FlexTextBox fontSize="0.95rem">{challenge.title}</FlexTextBox>
              <ChallengeFigure
                person={challenge.person}
                point={challenge.point}
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
