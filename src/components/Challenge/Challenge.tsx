import Card from "components/Card/Card";
import EndedCard from "components/Card/EndedCard";
import React from "react";

import styled, { css } from "styled-components";

const Container = styled.div`
  width: 73.56rem;
  margin: 1rem auto;
`;

const Title = styled.div`
  margin-bottom: 1.5rem;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Challenge = () => {
  return (
    <Container>
      <Title>챌린지</Title>
      <CardContainer>
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
        <Card />
        <Card />
        <Card />
        <Card />
        <EndedCard />
      </CardContainer>
    </Container>
  );
};

export default Challenge;
