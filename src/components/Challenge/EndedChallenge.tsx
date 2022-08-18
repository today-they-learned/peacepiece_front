import Card from "components/Card/Card";
import EndedCard from "components/Card/EndedCard";
import ChallengeTitle from "components/common/ChallengeTitle";
import React from "react";

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
  return (
    <Container>
      <ChallengeTitle title="📌 지난 챌린지" toolTip={false} />
      <CardContainer>
        <EndedCard />
        <Card />
        <Card />
        <Card />
        <EndedCard />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <EndedCard />
      </CardContainer>
    </Container>
  );
};

export default EndedChallenge;
