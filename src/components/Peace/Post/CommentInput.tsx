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
`;

const SummitBtn = styled.button`
  background-color: ${COLOR.font.primary};
  color: white;
  width: 3.2rem;
  margin: 0.2rem 0 0 0;
  padding: 0.35rem;
  font-size: 1rem;
  font-family: "Pr-Bold";
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  cursor: pointer;
`;

interface Props {
  articleId: number;
}

const CommentInput = ({ articleId }: Props) => {
  const [comment, onChangeComment] = useTextArea("");
  const { user } = useUser();

  const { mutate: addComment } = useAddComment(articleId);

  const handleSubmit = () => {
    addComment({ content: comment });
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
      >
        <Avatar src={`${process.env.PUBLIC_URL}/${user.avatar}`} />
        <Textarea
          value={comment}
          onChange={onChangeComment}
          text="글에 대한 의견을 남겨주세요 🌱"
          background={COLOR.bg.nav}
          width="100%"
          padding="0.5rem 1rem"
          fontSize="1rem"
          margin="0 0.3rem 0 0.8rem"
        />
        <SummitBtn onClick={handleSubmit}>작성</SummitBtn>
      </FlexBox>
    )
  );
};

export default CommentInput;
