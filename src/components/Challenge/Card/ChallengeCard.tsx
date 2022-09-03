import styled from "styled-components";
import COLOR from "constants/color";
import { ChallengeFigure, DidItIcon } from "components/Challenge";
import { ChallengeType } from "types/challenge";

interface Props {
  challenge: ChallengeType;
  margin?: string;
  isProved?: boolean;
}

interface ThumbnailImageProps {
  src: string;
  isProved?: boolean;
}

const defaultProps = {
  margin: "0",
  isProved: false,
};

const Container = styled.div<{ margin: string }>`
  width: 100%;
  height: 20rem;
  border-radius: 2rem;
  background-color: ${COLOR.bg.secondary};
  position: relative;
  margin: ${(props) => props.margin};
`;

const Thumbnail = styled.img<ThumbnailImageProps>`
  height: 12rem;
  border-radius: 2rem 2rem 0 0;
  margin-bottom: 1rem;

  ${({ isProved }) => isProved && "filter: brightness(50%);"};
`;

const ContentBox = styled.div`
  margin-left: 1rem;
`;

const Title = styled.div`
  font-family: "Pr-SemiBold";
  font-size: 1rem;
  color: ${COLOR.font.primary};
  margin-bottom: 0.5rem;
`;

const ChallengeInfo = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const HashTagBox = styled.div`
  display: flex;
`;

const HashTag = styled.div`
  font-family: "Pr-Medium";
  font-size: 0.75rem;
  color: ${COLOR.white};
  margin-right: 0.5rem;
`;

const ChallengeCard = (props: Props) => {
  const { challenge, margin } = props;
  return (
    <Container margin={margin} key={challenge.id}>
      <Thumbnail
        src={`${process.env.PUBLIC_URL}${challenge.thumbnail}`}
        isProved={challenge.isProved}
      />
      {challenge.isProved && <DidItIcon isAbsolute top="1rem" right="1rem" />}
      <ContentBox>
        <Title>{challenge.title}</Title>
        <ChallengeInfo>
          <ChallengeFigure person={challenge.person} point={challenge.point} />
        </ChallengeInfo>
        <HashTagBox>
          {challenge.tags.map((tag, index) => (
            <HashTag key={index}>#{tag}</HashTag>
          ))}
        </HashTagBox>
      </ContentBox>
    </Container>
  );
};
ChallengeCard.defaultProps = defaultProps;

export default ChallengeCard;
