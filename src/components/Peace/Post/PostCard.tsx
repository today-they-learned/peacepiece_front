import { BannerBox } from "components/common";
import styled from "styled-components";
import COLOR from "constants/color";
import Post from "./Post";
import CommentInput from "./CommentInput";
import CommentContainer from "./CommentContainer";
import dummyArticle from "./dummyArticle";

const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${COLOR.bg.primary};
  border-radius: 1.5rem;

  padding: 2rem;
  margin: 0;

  @media (max-width: 1000px) {
    padding: 1rem;
    border-radius: 1rem;
  }
`;

const PostCard = () => {
  return (
    <PostCardContainer>
      <Post article={dummyArticle} />
      <CommentInput />
      <CommentContainer />
    </PostCardContainer>
  );
};

export default PostCard;
