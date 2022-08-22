import React from "react";
import styled from "styled-components";
import Tooltip from "components/Tooltip/Tooltip";

interface Props {
  title: string;
  toolTipContent?: string;
}

const defaultProps = {
  toolTipContent: "",
};

const Container = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;

const Title = styled.div`
  font-size: 1.56rem;
  font-family: "Pr-Bold";
`;

const ChallengeTitle = (props: Props) => {
  const { title, toolTipContent } = props;

  return (
    <Container>
      <Title>{title}</Title>
      {toolTipContent && <Tooltip text={toolTipContent} />}
    </Container>
  );
};
ChallengeTitle.defaultProps = defaultProps;

export default ChallengeTitle;
