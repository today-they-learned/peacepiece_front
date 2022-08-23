import ChallengeCard from "components/Challenge/Card/ChallengeCard";
import EndedChallengeCard from "components/Challenge/Card/EndedChallengeCard";
import { ChallengeTitle } from "components/Challenge";
import styled from "styled-components";

const Container = styled.div`
  width: 73.56rem;
  margin: 1rem auto;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const EndedChallenge = () => {
  const defaultMargin = "0 0 2.8rem 0";
  return (
    <Container>
      <ChallengeTitle title="📌 지난 챌린지" />
      <CardContainer>
        <EndedChallengeCard margin={defaultMargin} />
        <ChallengeCard margin={defaultMargin} />
        <ChallengeCard margin={defaultMargin} />
        <ChallengeCard margin={defaultMargin} />
        <EndedChallengeCard margin={defaultMargin} />
        <ChallengeCard margin={defaultMargin} />
        <ChallengeCard margin={defaultMargin} />
        <ChallengeCard margin={defaultMargin} />
        <ChallengeCard margin={defaultMargin} />
        <ChallengeCard margin={defaultMargin} />
        <ChallengeCard margin={defaultMargin} />
        <EndedChallengeCard margin={defaultMargin} />
      </CardContainer>
    </Container>
  );
};

export default EndedChallenge;
