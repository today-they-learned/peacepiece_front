import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import COLOR from "constants/color";
import { ChallengeFigure, DidItIcon } from "components/Challenge";
import { ChallengeType } from "types";
import { FlexBox } from "components/common";

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
  border-radius: 1.5rem;
  background-color: ${COLOR.bg.secondary};
  position: relative;
  margin: ${(props) => props.margin};
  cursor: pointer;

  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 10.25rem;
    display: flex;
  }
`;

const Thumbnail = styled.img<ThumbnailImageProps>`
  height: 11rem;
  border-radius: 1.5rem 1.5rem 0 0;
  margin-bottom: 1rem;
  object-fit: cover;

  ${({ isProved }) => isProved && "filter: brightness(50%);"};

  @media only screen and (max-width: 767px) {
    width: 8.5rem;
    height: 100%;
    border-radius: 1.5rem 0 0 1.5rem;
  }
`;

const ContentBox = styled.div`
  margin-left: 1rem;

  @media only screen and (max-width: 767px) {
    width: 100%;
    margin: 0;
    padding: 0.8rem;
  }
`;

const Title = styled.div`
  font-family: "Pr-SemiBold";
  font-size: 1rem;
  color: ${COLOR.font.primary};
  margin-bottom: 0.5rem;
`;

const HashTagBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const HashTag = styled.div`
  font-family: "Pr-Medium";
  font-size: 0.8rem;
  max-width: 5rem;
  color: ${COLOR.white};
  margin-right: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChallengeCard = (props: Props) => {
  const { challenge, margin } = props;
  const navigate = useNavigate();

  return (
    <Container
      margin={margin}
      key={challenge.id}
      onClick={() => navigate(`/challenge/${challenge.id}`)}
    >
      <Thumbnail
        src={challenge.thumbnail.file}
        isProved={challenge.is_proved}
      />
      {challenge.is_proved && (
        <DidItIcon isAbsolute top="1rem" right="1rem" mobileLeft="1.5rem" />
      )}
      <ContentBox>
        <FlexBox column height="100%" justifyContent="space-between">
          <div style={{ marginBottom: "5px" }}>
            <Title>{challenge.title}</Title>
            <ChallengeFigure
              proverCnt={challenge.prover_cnt}
              point={challenge.point}
            />
          </div>
          <HashTagBox>
            {challenge.categories.map((category) => (
              <HashTag key={`challenge-category-${category.id}`}>
                #{category.title}
              </HashTag>
            ))}
          </HashTagBox>
        </FlexBox>
      </ContentBox>
    </Container>
  );
};
ChallengeCard.defaultProps = defaultProps;

export default ChallengeCard;
