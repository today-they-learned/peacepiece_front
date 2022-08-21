import React from "react";
import styled from "styled-components";
import COLOR from "constants/color";

interface Props {
  person: number;
  point: number;
}

const Figure = styled.div`
  display: flex;
  margin-right: 1.2rem;
`;

const Personal = styled.div`
  display: flex;
  margin-right: 1rem;
`;

const Person = styled.img`
  width: 1.1rem;
  height: 1rem;
  margin: 0.1rem 0.2rem 0 0;
`;

const Number = styled.span`
  font-size: 0.75rem;
  font-family: "Pr-Medium";
  color: ${COLOR.font.secondary};
`;

const Point = styled.span`
  font-size: 0.875rem;
  font-family: "Pr-Medium";
  color: ${COLOR.font.secondary};
`;

const ChallengeFigure = (props: Props) => {
  const { person, point } = props;
  return (
    <Figure>
      <Personal>
        <Person src={`${process.env.PUBLIC_URL}/images/person.png`} />
        <Number>{person}명</Number>
      </Personal>
      <Point>PP {point}</Point>
    </Figure>
  );
};

export default ChallengeFigure;
