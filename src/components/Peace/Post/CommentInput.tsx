import { useTextArea, useUser } from "hooks";
import { FlexBox } from "components/common";
import { Textarea } from "components/Form";
import styled from "styled-components";
import COLOR from "constants/color";
import { useAddComment } from "hooks/queries/article/comment";

const Avatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
  background: ${COLOR.bg.primary};
`;

const SummitBtn = styled.button<{ comment: string }>`
  background-color: ${(props) =>
    props.comment ? COLOR.font.primary : COLOR.font.disabled};
  cursor: ${(props) => props.comment && "pointer"};
  color: white;
  width: 3.2rem;
  height: 2.6rem;
  padding: 0.35rem;
  font-size: 1rem;
  font-family: "Pr-Bold";
  border-radius: 0 1.25rem 1.25rem 0;
  transition: all ease 0.25s;

  @media only screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
`;

interface Props {
  articleId: number;
}

const CommentInput = ({ articleId }: Props) => {
  const [comment, onChangeComment, setComment] = useTextArea("");
  const { user } = useUser();

  const { mutate: addComment } = useAddComment(articleId);

  const handleSubmit = () => {
    if (comment.trim()) {
      addComment({ content: comment.trim() });
      setComment("");
    }
  };

  return (
    user && (
      <FlexBox
        width="100%"
        height="auto"
        background={COLOR.bg.secondary}
        borderRadius="1.25rem"
        padding="1rem 1.5rem"
        position="relative"
        gap="0.5rem"
      >
        <Avatar src={user.avatar} />
        <Textarea
          value={comment}
          onChange={onChangeComment}
          text="글에 대한 의견을 남겨주세요 🌱"
          background={COLOR.bg.nav}
          width="100%"
          padding="0.5rem 0 0.5rem 0.7rem"
          fontSize="1rem"
          mobileFontsize="0.7rem"
          margin="0 0 0 0.5rem"
          borderRadius="1.25rem 0 0 1.25rem"
        />
        <SummitBtn comment={comment.trim()} onClick={handleSubmit}>
          작성
        </SummitBtn>
      </FlexBox>
    )
  );
};

export default CommentInput;
