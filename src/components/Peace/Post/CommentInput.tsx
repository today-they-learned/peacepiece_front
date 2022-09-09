import { useTextArea } from "hooks";
import { FlexBox } from "components/common";
import { Textarea } from "components/Form";
import styled from "styled-components";
import COLOR from "constants/color";
import dummyData from "./dummyArticle";

const defaultProps = {
  backgroundColor: "white",
  color: "black",
  size: "3.2rem",
};

const Avatar = styled.img<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
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

const CommentInput = () => {
  const [comment, onChnageComment] = useTextArea("");
  return (
    <FlexBox
      width="100%"
      height="auto"
      background={COLOR.bg.secondary}
      borderRadius="1.25rem"
      padding="1rem"
      position="relative"
    >
      <Avatar
        src={`${process.env.PUBLIC_URL}/${dummyData.writer.avatar}`}
        size="2rem"
      />
      <Textarea
        value={comment}
        onChange={onChnageComment}
        text="글에 대한 의견을 남겨주세요 🌱"
        background={COLOR.bg.nav}
        width="100%"
        padding="0.5rem 1rem"
        fontSize="1rem"
        margin="0 0.3rem 0 0.8rem"
      />
      <SummitBtn>작성</SummitBtn>
    </FlexBox>
  );
};
CommentInput.defaultProps = defaultProps;

export default CommentInput;
