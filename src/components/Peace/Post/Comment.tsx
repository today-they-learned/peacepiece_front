import { FlexBox, FlexTextBox } from "components/common";
import COLOR from "constants/color";
import { useFromDate } from "hooks";
import styled from "styled-components";
import CommentInterface from "types/comment";

interface Props {
  comment: CommentInterface;
}

const Avatar = styled.img<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  object-fit: cover;
  background: ${COLOR.bg.primary};
`;

// const EmojiBtn = styled.button<{ isFeedbacked: boolean }>`
//   padding: 0.15rem 0.4rem;
//   border-radius: 10px;
//   font-size: 8px;
//   margin-right: 0.5rem;
//   cursor: pointer;
//   font-family: ${(props) => (props.isFeedbacked ? "Pr-Bold" : "Pr-Regular")};
//   color: ${(props) =>
//     props.isFeedbacked ? COLOR.font.darkDefault : COLOR.white};
//   background: ${(props) =>
//     props.isFeedbacked ? COLOR.white : COLOR.btn.active};
// `;

const Comment = ({ comment }: Props) => {
  return (
    <FlexBox margin="0 0 1rem 0" gap="1rem">
      <Avatar src={comment.writer.avatar} size="2rem" />
      <FlexBox column gap="0.4rem" alignItems="flex-end">
        <FlexBox
          padding="0.3rem 0.7rem"
          width="100%"
          margin="0"
          borderRadius="0.6rem"
          background={COLOR.bg.nav}
        >
          <FlexTextBox fontSize="13px" fontFamily="Pr-Medium">
            {comment.content}
          </FlexTextBox>
        </FlexBox>

        {/* 주석된 이모티콘 / 답글은 우선순위 하위 기획 */}
        <FlexBox margin="0" alignItems="baseline">
          {/* <EmojiBtn isFeedbacked>👍 1</EmojiBtn> */}
          <FlexTextBox
            color={COLOR.font.secondary}
            fontSize="11px"
            fontFamily="Pr-Light"
          >
            {useFromDate(comment.created_at)}
          </FlexTextBox>
          {/* <Button>답글 달기</Button> */}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default Comment;
