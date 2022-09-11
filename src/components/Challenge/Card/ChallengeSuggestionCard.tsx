import COLOR from "constants/color";
import styled from "styled-components";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { ChallengeSuggestionType } from "types";
import {
  useAddSuggestionFeedback,
  useDeleteSuggestionFeedback,
} from "hooks/queries/challenge/suggestion";

interface Props {
  suggestion: ChallengeSuggestionType;
  gap?: string;
  main?: boolean;
}

const defaultProps = {
  gap: "1rem",
  main: false,
};

const Container = styled.div<{ gap: string }>`
  height: auto;
  border-radius: 1rem;
  background-color: ${COLOR.bg.secondary};
  padding: 0.7rem 1.5rem 0.7rem 1.5rem;
  margin: 0 0 1rem 0;

  flex: 1 1 ${(props) => `calc((100% - ${props.gap} * 2) / 3)`};
  max-width: ${(props) => `calc((100% - ${props.gap} * 2) / 3)`};

  @media (max-width: 1023px) {
    flex: 1 1 ${(props) => `calc((100% - ${props.gap} * 1) / 2)`};
    max-width: ${(props) => `calc((100% - ${props.gap} * 1) / 2)`};
  }
  @media (max-width: 767px) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const User = styled.div`
  font-size: 1rem;
  font-family: "Pr-SemiBold";
  color: ${COLOR.font.secondary};
  margin-bottom: 0.5rem;
`;

const Content = styled.div`
  height: 5rem;
  font-size: 1rem;
  font-family: "Pr-SemiBold";
  color: ${COLOR.white};
  margin-bottom: 0.8rem;
`;

const LikeContainer = styled.div`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LikeNumber = styled.span`
  font-size: 1rem;
  font-family: "Pr-Regular";
  color: ${COLOR.white};
  margin-left: 0.5rem;
`;

const ChallengeSuggestionCard = ({ suggestion, gap, main }: Props) => {
  const { mutate: addFeedback } = useAddSuggestionFeedback(suggestion.id, main);
  const { mutate: deleteFeedback } = useDeleteSuggestionFeedback(
    suggestion.id,
    main
  );

  return (
    <Container gap={gap}>
      <User>{suggestion.suggester.username}</User>
      <Content>{suggestion.content}</Content>
      <LikeContainer>
        {suggestion.is_feedbacked ? (
          <AiFillLike
            cursor="pointer"
            color={COLOR.font.primary}
            onClick={() => deleteFeedback()}
            size="20"
          />
        ) : (
          <AiOutlineLike
            cursor="pointer"
            color={COLOR.font.primary}
            size="20"
            onClick={() => addFeedback()}
          />
        )}
        <LikeNumber>{suggestion.feedback_count}</LikeNumber>
      </LikeContainer>
    </Container>
  );
};
ChallengeSuggestionCard.defaultProps = defaultProps;

export default ChallengeSuggestionCard;
