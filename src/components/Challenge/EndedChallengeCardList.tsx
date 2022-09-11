import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const ChallengeCardListWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0;
  gap: 2rem;
`;

const EndedChallengeCardList = ({ children }: Props) => {
  return <ChallengeCardListWrapper>{children}</ChallengeCardListWrapper>;
};

export default EndedChallengeCardList;
