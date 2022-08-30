import styled from "styled-components";
import Tooltip from "components/Tooltip/Tooltip";

interface Props {
  title: string;
  toolTipContent?: string;
  margin?: string;
}

const defaultProps = {
  toolTipContent: "",
  margin: "0.22rem 0 0 0",
};

const Container = styled.div`
  display: flex;
`;

const ChallengeTitle = (props: Props) => {
  const { title, toolTipContent, margin } = props;

  const Title = styled.div`
    margin: ${margin};
    font-size: 1.56rem;
    font-family: "Pr-Bold";
  `;

  return (
    <Container>
      <Title>{title}</Title>
      {toolTipContent && <Tooltip text={toolTipContent} />}
    </Container>
  );
};
ChallengeTitle.defaultProps = defaultProps;

export default ChallengeTitle;
