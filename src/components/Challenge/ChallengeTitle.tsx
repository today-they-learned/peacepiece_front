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
<<<<<<< HEAD:src/components/common/ChallengeTitle.tsx
      {/* {toolTipContent && (
        // <HoverTooltip top="-8.5rem" left="9rem">
        //   {toolTipContent}
        // </HoverTooltip>
      )} */}
=======
      {toolTipContent && <Tooltip text={toolTipContent} />}
>>>>>>> main:src/components/Challenge/ChallengeTitle.tsx
    </Container>
  );
};
ChallengeTitle.defaultProps = defaultProps;

export default ChallengeTitle;
