import styled from "styled-components";
import { ArticleType } from "types";
import PostCard from "./PostCard";

const PostCardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

interface Props {
  articles: ArticleType[];
}

const PostCardList = ({ articles }: Props) => {
  return (
    <PostCardListWrapper>
      {articles.map((article) => {
        return <PostCard key={`PostCard_${article.id}`} article={article} />;
      })}
    </PostCardListWrapper>
  );
};

export default PostCardList;
