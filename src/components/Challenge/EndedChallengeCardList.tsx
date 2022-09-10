import { FlexBox } from "components/common";
import { Desktop, Mobile, Tablet } from "hooks/mediaQuery";
import { ChallengeType } from "types";
import ChallengeCard from "./Card/ChallengeCard";
import EndedChallengeCardWrapper from "./Card/EndedChallengeCardWrapper";

interface Props {
  challenges?: ChallengeType[];
}

const defaultProps: Props = {
  challenges: [],
};

const EndedChallengeCardList = ({ challenges }: Props) => {
  return (
    <>
      <Desktop>
        <FlexBox
          width="100%"
          height="100%"
          justifyContent="flex-start"
          alignItems="center"
          wrap="wrap"
          padding="2rem 0"
          margin="0"
          gap="2rem"
        >
          {challenges.map((challenge) => (
            <EndedChallengeCardWrapper
              key={`ended-challenge-${challenge.id}`}
              gap="2rem"
            >
              <ChallengeCard challenge={challenge} />
            </EndedChallengeCardWrapper>
          ))}
        </FlexBox>
      </Desktop>
      <Tablet>
        <FlexBox
          width="100%"
          height="100%"
          justifyContent="flex-start"
          alignItems="center"
          wrap="wrap"
          padding="2rem 0"
          margin="0"
          gap="2rem"
        >
          {challenges.map((challenge) => (
            <EndedChallengeCardWrapper
              key={`ended-challenge-${challenge.id}`}
              gap="2rem"
            >
              <ChallengeCard challenge={challenge} />
            </EndedChallengeCardWrapper>
          ))}
        </FlexBox>
      </Tablet>
      <Mobile>
        <FlexBox
          column
          width="100%"
          height="100%"
          justifyContent="flex-start"
          alignItems="center"
          wrap="wrap"
          padding="2rem 0"
          margin="0"
          gap="2rem"
        >
          {challenges.map((challenge) => (
            <ChallengeCard
              key={`ended-challenge-${challenge.id}`}
              challenge={challenge}
            />
          ))}
        </FlexBox>
      </Mobile>
    </>
  );
};

EndedChallengeCardList.defaultProps = defaultProps;

export default EndedChallengeCardList;
