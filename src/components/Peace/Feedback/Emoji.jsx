import styled from "styled-components";
import COLOR from "constants/color";
import { useUser } from "hooks";
import {
  useAddArticleFeedback,
  useDeleteArticleFeedback,
} from "hooks/queries/article";

const EmojiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.user ? "pointer" : "default")};
  height: 100%;
  max-height: 30px;
  font-size: 14px;
  padding: 0.2rem 0.6rem;
  border-radius: 15px;
  font-family: ${(props) => (props.isFeedbacked ? "Pr-Bold" : "Pr-Regular")};
  color: ${(props) =>
    props.isFeedbacked ? COLOR.font.darkDefault : COLOR.white};
  background: ${(props) =>
    props.isFeedbacked ? COLOR.white : COLOR.btn.active};
`;

const Emoji = ({ articleId, emoji, children, isFeedbacked }) => {
  const { user } = useUser();

  const { mutate: addFeedback } = useAddArticleFeedback(articleId);
  const { mutate: deleteFeedback } = useDeleteArticleFeedback(articleId);

  const handleClick = () => {
    if (!user) return;
    if (isFeedbacked) {
      deleteFeedback(emoji);
    } else {
      addFeedback(emoji);
    }
  };

  return (
    <EmojiContainer
      user={user}
      isFeedbacked={isFeedbacked}
      onClick={handleClick}
    >
      {emoji}
      {children}
    </EmojiContainer>
  );
};

export default Emoji;
