import { FlexBox } from "components/common";
import { ChallengeType } from "types/challenge";
import styled from "styled-components";
import ChallengeCard from "./Card/ChallengeCard";
import EndedChallengeCardWrapper from "./Card/EndedChallengeCardWrapper";

interface Props {
  challenges?: ChallengeType[];
}

const Container = styled(FlexBox)``;

const defaultProps: Props = {
  challenges: [],
};

const EndedChallengeCardList = ({ challenges }: Props) => {
  return (
    <Container
      width="100%"
      height="100%"
      justifyContent="flex-start"
      alignItems="center"
      wrap="wrap"
      margin="2rem 0 0 0"
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
    </Container>
  );
};

EndedChallengeCardList.defaultProps = defaultProps;

export default EndedChallengeCardList;
