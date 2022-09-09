import styled from "styled-components";
import PostCard from "./PostCard";

const PostCardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PostCardList = () => {
  return (
    <PostCardListWrapper>
      <PostCard />
      <PostCard />
    </PostCardListWrapper>
  );
};

export default PostCardList;
