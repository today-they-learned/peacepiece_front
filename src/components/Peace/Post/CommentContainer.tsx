import { useState } from "react";
import { FlexBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import dummyComments from "./dummyCommemts";
import Comment from "./Comment";

const Button = styled.button`
  font-family: "Pr-SemiBold";
  font-size: 10px;
  margin-bottom: 0.4rem;
  color: ${COLOR.font.secondary};
  cursor: pointer;
`;

const insertCmt = (cmtMore: boolean, clickedBtn: () => void) => {
  const newArr = [];
  let len = 2;
  if (dummyComments.count < 2) {
    len = dummyComments.count;
  }
  for (let i = 0; i < len; i += 1) {
    newArr.push(<Comment comment={dummyComments.results[i]} />);
  }
  if (dummyComments.count >= 3) {
    newArr.push(<Button onClick={clickedBtn}>댓글 더보기</Button>);
    if (cmtMore) {
      newArr.pop();
      for (let i = 2; i < dummyComments.count; i += 1) {
        newArr.push(<Comment comment={dummyComments.results[i]} />);
      }
    }
  }

  return newArr;
};

const CommentContainer = () => {
  const [cmtMore, setCmtMore] = useState<boolean>(false);
  const clickedBtn = () => {
    setCmtMore((prev) => !prev);
  };
  return (
    <FlexBox
      width="100%"
      height="auto"
      background={COLOR.bg.secondary}
      borderRadius="1.25rem"
      padding="1rem 1rem 0 1rem"
      margin="0"
      position="relative"
      column
    >
      <FlexBox column>{insertCmt(cmtMore, clickedBtn)}</FlexBox>
    </FlexBox>
  );
};

export default CommentContainer;
