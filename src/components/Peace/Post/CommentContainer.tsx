import { FlexBox, FlexTextBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import dummyComments from "./dummyCommemts";

interface Props {
  backgroundColor?: string;
  color?: string;
}

const Avatar = styled.img<{ size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
`;

const EmojiBtn = styled.button<Props>`
  padding: 0.2rem 0.4rem;
  border-radius: 10px;
  font-size: 8px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  margin-right: 0.5rem;
  cursor: pointer;
`;

const Button = styled.button`
  font-family: "Pr-SemiBold";
  font-size: 10px;
  margin-top: 0.2rem;
  color: ${COLOR.font.secondary};
  cursor: pointer;
`;

const insertCmt = () => {
  const newArr = [];
  for (let i = 0; i < dummyComments.count; i += 1) {
    newArr.push(
      <FlexBox margin="0 0 1rem 0">
        <Avatar
          src={`${process.env.PUBLIC_URL}/${dummyComments.results[i].writer.avatar}`}
          size="2rem"
        />
        <FlexBox column>
          <FlexBox
            padding="0.3rem 0.7rem"
            margin="0 0 0.4rem 1rem"
            borderRadius="0.6rem"
            background={COLOR.bg.nav}
          >
            <FlexTextBox fontSize="13px" fontFamily="Pr-Medium">
              {dummyComments.results[i].content}
            </FlexTextBox>
          </FlexBox>
          <FlexBox margin="0 0 0 1.5rem">
            <EmojiBtn backgroundColor="white" color="black">
              👍 1
            </EmojiBtn>
            <Button>답글 달기</Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    );
  }
  return newArr;
};

const CommentContainer = () => {
  return (
    <FlexBox
      width="48rem"
      height="auto"
      background={COLOR.bg.secondary}
      borderRadius="1.25rem"
      padding="1rem"
      margin="1rem 0 0 0"
      position="relative"
      column
    >
      <FlexBox column>{insertCmt()}</FlexBox>
    </FlexBox>
  );
};

export default CommentContainer;
