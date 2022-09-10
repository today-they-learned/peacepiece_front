import styled from "styled-components";
import COLOR from "constants/color";
import { ChallengeFigure, DidItIcon } from "components/Challenge";
import { ChallengeType } from "types";

interface Props {
  challenge: ChallengeType;
  margin?: string;
  is_proved?: boolean;
}

interface ThumbnailImageProps {
  src: string;
  isProved?: boolean;
}

const defaultProps = {
  margin: "0",
  is_proved: false,
};

const Container = styled.div<{ margin: string }>`
  width: 100%;
  height: 20rem;
  border-radius: 2rem;
  background-color: ${COLOR.bg.secondary};
  position: relative;
  margin: ${(props) => props.margin};

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 10.25rem;
    display: flex;
  }
`;

const Thumbnail = styled.img<ThumbnailImageProps>`
  height: 12rem;
  border-radius: 2rem 2rem 0 0;
  margin-bottom: 1rem;

  ${({ isProved }) => isProved && "filter: brightness(50%);"};

  @media only screen and (max-width: 767px) {
    width: 11rem;
    height: 100%;
  }
`;

const ContentBox = styled.div`
  margin-left: 1rem;

  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
    padding: 1rem;
  }
`;

const Title = styled.div`
  font-family: "Pr-SemiBold";
  font-size: 1rem;
  color: ${COLOR.font.primary};
  margin-bottom: 0.5rem;
`;

const HashTagBox = styled.div`
  display: flex;

  @media only screen and (max-width: 767px) {
    margin-top: 3rem;
  }
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
        src={challenge.thumbnail.file}
        isProved={challenge.is_proved}
      />
      {challenge.is_proved && (
        <DidItIcon isAbsolute top="1rem" right="1rem" mobileLeft="1.5rem" />
      )}
      <ContentBox>
        <Title>{challenge.title}</Title>
        <ChallengeFigure
          proverCnt={challenge.prover_cnt}
          point={challenge.point}
        />
        <HashTagBox>
          {challenge.categories.map((category) => (
            <HashTag key={`challenge-category-${category.id}`}>
              #{category.title}
            </HashTag>
          ))}
        </HashTagBox>
      </ContentBox>
    </Container>
  );
};
ChallengeCard.defaultProps = defaultProps;

export default ChallengeCard;
