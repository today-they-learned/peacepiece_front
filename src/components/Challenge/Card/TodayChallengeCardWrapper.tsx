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

  /* NOTE: 화면이 줄어들었을 때, 줄어든 개수를 보여줘야 할지 정해야 함. */
  /* @media (max-width: 700px) {
    flex: 1 1 ${(props) => `calc((100% - ${props.gap} * 1) / 2)`};
    max-width: ${(props) => `calc((100% - ${props.gap} * 1) / 2)`};
  }

  @media (max-width: 400px) {
    flex: 1 1 100%;
    max-width: 100%;
  }*/
`;

const TodayChallengeCardWrapper = ({ children, gap }: WrapperProps) => {
  return <Wrapper gap={gap}>{children}</Wrapper>;
};

TodayChallengeCardWrapper.defaultProps = defaultProps;

export default TodayChallengeCardWrapper;
