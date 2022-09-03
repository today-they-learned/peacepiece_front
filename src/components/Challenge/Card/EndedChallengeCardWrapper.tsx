import { ReactNode } from "react";
import styled from "styled-components";

interface WrapperProps {
  children: ReactNode;
  gap?: string;
}

const defaultProps = {
  gap: "0rem",
};

const Wrapper = styled.div<{ gap: string }>`
  flex: 1 1 ${(props) => `calc((100% - ${props.gap} * 2) / 3)`};
  max-width: ${(props) => `calc((100% - ${props.gap} * 2) / 3)`};

  @media (min-width: 1000px) {
    flex: 1 1 ${(props) => `calc((100% - ${props.gap} * 3) / 4)`};
    max-width: ${(props) => `calc((100% - ${props.gap} * 3) / 4)`};
  }

  @media (max-width: 700px) {
    flex: 1 1 ${(props) => `calc((100% - ${props.gap} * 1) / 2)`};
    max-width: ${(props) => `calc((100% - ${props.gap} * 1) / 2)`};
  }

  @media (max-width: 400px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const EndedChallengeCardWrapper = ({ children, gap }: WrapperProps) => {
  return <Wrapper gap={gap}>{children}</Wrapper>;
};

EndedChallengeCardWrapper.defaultProps = defaultProps;

export default EndedChallengeCardWrapper;
