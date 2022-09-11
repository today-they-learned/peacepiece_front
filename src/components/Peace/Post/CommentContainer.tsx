import { useEffect, useState } from "react";
import { FlexBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import { CommentType } from "types";
import Comment from "./Comment";

const Button = styled.button`
  font-family: "Pr-SemiBold";
  font-size: 10px;
  margin-bottom: 0.4rem;
  color: ${COLOR.font.secondary};
  cursor: pointer;
`;

interface Props {
  comments: CommentType[];
}

const CommentContainer = ({ comments }: Props) => {
  const VISIBLE_CNT = 3;
  const [commentsCnt, setCommentsCnt] = useState(
    Math.min(VISIBLE_CNT, comments?.length)
  );
  useEffect(() => {
    setCommentsCnt(Math.min(VISIBLE_CNT, comments?.length));
  }, [comments?.length]);

  return (
    !!comments?.length && (
      <FlexBox
        width="100%"
        height="auto"
        background={COLOR.bg.secondary}
        borderRadius="1.25rem"
        padding="1rem 1.5rem 0.5rem 1.5rem"
        margin="0"
        position="relative"
        column
      >
        <FlexBox column>
          {comments?.slice(0, commentsCnt).map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
          {commentsCnt !== comments?.length && (
            <Button
              onClick={() =>
                setCommentsCnt(
                  Math.min(commentsCnt + VISIBLE_CNT, comments?.length)
                )
              }
            >
              댓글 더보기
            </Button>
          )}
        </FlexBox>
      </FlexBox>
    )
  );
};

export default CommentContainer;
