import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface WrapperProps {
  children: ReactNode;
  gap?: string;
  all?: boolean;
}

const defaultProps = {
  gap: "0rem",
  all: false,
};

const Wrapper = styled.div<{ gap: string; all: boolean }>`
  height: auto;

  ${(props) =>
    props.all
      ? css`
          flex: 1 1 ${`calc((100% - ${props.gap} * 2) / 3)`};
          max-width: ${`calc((100% - ${props.gap} * 2) / 3)`};

          @media (max-width: 1023px) {
            flex: 1 1 ${`calc((100% - ${props.gap} * 1) / 2)`};
            max-width: ${`calc((100% - ${props.gap} * 1) / 2)`};
          }
          @media (max-width: 767px) {
            flex: 1 1 100%;
            max-width: 100%;
          }
        `
      : css`
          flex: 1 1 ${`calc((100% - ${props.gap} * 2) / 2)`};
          max-width: ${`calc((100% - ${props.gap} * 2) / 2)`};

          @media (max-width: 1023px) {
            flex: 1 1 ${`calc((100% - ${props.gap} * 1) / 2)`};
            max-width: ${`calc((100% - ${props.gap} * 1) / 2)`};
          }
          @media (max-width: 767px) {
            flex: 1 1 100%;
            max-width: 100%;
          }
        `}
`;

const ChallengeSuggestionGatherWrapper = ({
  children,
  gap,
  all,
}: WrapperProps) => {
  return (
    <Wrapper gap={gap} all={all}>
      {children}
    </Wrapper>
  );
};

ChallengeSuggestionGatherWrapper.defaultProps = defaultProps;

export default ChallengeSuggestionGatherWrapper;
