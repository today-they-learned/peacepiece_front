import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import styled from "styled-components";
import CommentInterface from "types/comment";

interface Props {
  comment: CommentInterface;
}

const Avatar = styled.img<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
`;

const EmojiBtn = styled.button<{ color: string; backgroundColor: string }>`
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  font-size: 8px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  margin-right: 0.5rem;
  cursor: pointer;
`;

const Comment = ({ comment }: Props) => {
  return (
    <FlexBox margin="0 0 1rem 0" gap="1rem">
      <Avatar
        src={`${process.env.PUBLIC_URL}/${comment.writer.avatar}`}
        size="2rem"
      />
      <FlexBox column gap="0.5rem">
        <FlexBox
          padding="0.3rem 0.7rem"
          margin="0"
          borderRadius="0.6rem"
          background={COLOR.bg.nav}
        >
          <FlexTextBox fontSize="13px" fontFamily="Pr-Medium">
            {comment.content}
          </FlexTextBox>
        </FlexBox>
        <FlexBox margin="0">
          <EmojiBtn backgroundColor="white" color="black">
            👍 1
          </EmojiBtn>
          {/* <Button>답글 달기</Button> */}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default Comment;
